// Central mail sender for all website forms.
//
// Why this file exists:
// GoDaddy (cPanel / Deluxe hosting) blocks OUTBOUND SMTP to third-party mail
// servers. A direct connect to smtp.gmail.com:587 from the server dies with
// "connect EACCES 142.251.x.x:587" - the firewall refuses the socket, so
// nodemailer never even reaches Google. Because of that this module can send
// in two ways and picks whatever the environment allows:
//
//   1. HTTP API (Resend / Brevo) over port 443 - never blocked by any host.
//      Set RESEND_API_KEY   (+ MAIL_FROM on a verified domain), or
//      Set BREVO_API_KEY    (+ MAIL_FROM on a verified sender).
//   2. SMTP via nodemailer - used when no API key is present. It tries the
//      configured host/port first, then falls back through the other common
//      port/secure combinations, including GoDaddy's internal relay
//      (relay-hosting.secureserver.net:25) which is the only SMTP endpoint
//      that is reachable from inside GoDaddy shared hosting.
//
// Every attempt is logged, and the final error lists what was tried so the
// hosting panel logs tell you exactly which hop failed.

import nodemailer from 'nodemailer';

const MAIL_TO = process.env.MAIL_TO || 'sales@panamatravel.co.uk';

// The visible sender. It MUST be on a domain you control, otherwise Gmail /
// Outlook will spam-bin or reject it (DMARC). Never send "from" a gmail.com
// address through someone else's server.
const MAIL_FROM = process.env.MAIL_FROM || 'noreply@panamatravel.co.uk';
const MAIL_FROM_NAME = process.env.MAIL_FROM_NAME || 'Panama Travel';

const toBool = (v, fallback = false) => {
  if (v === undefined || v === null || v === '') return fallback;
  return String(v).toLowerCase() === 'true' || v === '1';
};

// ---------------------------------------------------------------------------
// 1. HTTP API senders (port 443 - works on GoDaddy)
// ---------------------------------------------------------------------------

async function sendWithResend({ to, subject, html, replyTo }) {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: `${MAIL_FROM_NAME} <${MAIL_FROM}>`,
      to: Array.isArray(to) ? to : [to],
      subject,
      html,
      ...(replyTo ? { reply_to: replyTo } : {}),
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Resend API ${res.status}: ${data?.message || JSON.stringify(data)}`);
  }
  return { transport: 'resend', id: data?.id };
}

async function sendWithBrevo({ to, subject, html, replyTo }) {
  const res = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': process.env.BREVO_API_KEY,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    body: JSON.stringify({
      sender: { email: MAIL_FROM, name: MAIL_FROM_NAME },
      to: (Array.isArray(to) ? to : [to]).map((email) => ({ email })),
      subject,
      htmlContent: html,
      ...(replyTo ? { replyTo: { email: replyTo } } : {}),
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Brevo API ${res.status}: ${data?.message || JSON.stringify(data)}`);
  }
  return { transport: 'brevo', id: data?.messageId };
}

// ---------------------------------------------------------------------------
// 2. SMTP sender with port fallback
// ---------------------------------------------------------------------------

// Build the ordered list of SMTP endpoints to try.
function smtpCandidates() {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  const candidates = [];

  if (host) {
    if (port) {
      // Explicit config wins - try it exactly as configured first.
      candidates.push({ host, port, secure: toBool(process.env.SMTP_SECURE, port === 465) });
    }
    // Then the other usual ports on the same host.
    for (const p of [465, 587, 25]) {
      if (p !== port) candidates.push({ host, port: p, secure: p === 465 });
    }
  }

  // GoDaddy's local relay. It only accepts mail from inside their network and
  // needs no auth, which is why it is the one endpoint that survives the
  // outbound firewall on shared hosting.
  candidates.push({ host: 'relay-hosting.secureserver.net', port: 25, secure: false, noAuth: true });

  return candidates.map((c) => ({
    ...c,
    auth: c.noAuth || !user || !pass ? undefined : { user, pass },
  }));
}

async function sendWithSmtp({ to, subject, html, replyTo }) {
  const attempts = [];

  for (const candidate of smtpCandidates()) {
    const { noAuth, ...options } = candidate;
    try {
      const transporter = nodemailer.createTransport({
        ...options,
        connectionTimeout: 10000,
        greetingTimeout: 8000,
        socketTimeout: 20000,
        tls: { rejectUnauthorized: false },
      });

      const info = await transporter.sendMail({
        from: `"${MAIL_FROM_NAME}" <${MAIL_FROM}>`,
        to,
        subject,
        html,
        ...(replyTo ? { replyTo } : {}),
      });

      return { transport: `smtp ${options.host}:${options.port}`, id: info?.messageId };
    } catch (err) {
      const reason = `${options.host}:${options.port} -> ${err?.code || ''} ${err?.message || err}`;
      attempts.push(reason);
      console.error('[mailer] SMTP attempt failed:', reason);
    }
  }

  const error = new Error(`All SMTP attempts failed. Tried: ${attempts.join(' | ')}`);
  error.attempts = attempts;
  throw error;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Send a website email. Throws with a descriptive message if every transport
 * fails, so the API route can surface it.
 */
export async function sendMail({ to = MAIL_TO, subject, html, replyTo }) {
  if (process.env.RESEND_API_KEY) {
    try {
      return await sendWithResend({ to, subject, html, replyTo });
    } catch (err) {
      console.error('[mailer] Resend failed, falling back:', err.message);
    }
  }

  if (process.env.BREVO_API_KEY) {
    try {
      return await sendWithBrevo({ to, subject, html, replyTo });
    } catch (err) {
      console.error('[mailer] Brevo failed, falling back:', err.message);
    }
  }

  return sendWithSmtp({ to, subject, html, replyTo });
}

export { MAIL_TO, MAIL_FROM };
