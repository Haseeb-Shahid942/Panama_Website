// Next.js API Route: /api/send-mail
// App Router: app/api/send-mail/route.js
// Pages Router: pages/api/send-mail.js

import { sendMail, MAIL_TO } from '@/utils/mailer';

// This route must always run on the server at request time.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const formatDateUTC = (iso) => {
  if (!iso) return '-';
  const d = new Date(iso);
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d);
};

// ============================================
// App Router (app/api/send-mail/route.js)
// ============================================
export async function POST(request) {
  try {
    const {
      from,
      to,
      departure,
      return: returnDate,
      passenger,
      tripType,
      classType,
      direct,
      selectedButton,
      name,
      phone,
      gmail,
    } = await request.json();

    const htmlMessage = `
      <div style="max-width: 600px; font-family: Arial, sans-serif; border-radius: 30px 30px 0 0; overflow: hidden;">
        <div style="background: #FFA500; padding: 32px 0 20px 0; text-align: center; border-radius: 30px 30px 0 0;">
          <span style="color: #fff; font-size: 2.5em; font-weight: bold; letter-spacing: 2px;">
            Panama Travel Ltd
          </span>
        </div>
        <div style="padding: 24px 32px; background: #fff;">
          <p>You received a new inquiry:</p>
          <p>
            <b>Name:</b> ${name}<br>
            <b>Email:</b> <a href="mailto:${gmail}">${gmail}</a><br>
            <b>Phone:</b> ${phone}<br>
            <b>Trip Type:</b> ${tripType}<br>
            <b>From:</b> ${from}<br>
            <b>To:</b> ${to}<br>
            <b>Departure:</b> ${formatDateUTC(departure)}<br>
            <b>Return:</b> ${formatDateUTC(returnDate)}<br>
            <b>Passengers:</b> Adults - ${passenger?.adults || 0}, Youth - ${passenger?.youth || 0} Children - ${passenger?.children || 0}, Infants - ${passenger?.infants || 0}<br>
            <b>Class:</b> ${classType}<br>
            <br>
            Direct Flight Only: ${direct ? "Yes" : "No"}<br>
            Inquiry For: ${selectedButton}
          </p>
        </div>
      </div>
    `;

    const result = await sendMail({
      to: MAIL_TO,
      replyTo: gmail || undefined,
      subject: `New Inquiry by ${gmail || name || 'website visitor'}`,
      html: htmlMessage,
    });
    console.log('[contact] sent via', result.transport);

    return Response.json({ success: true, message: 'Email sent to Panama Travel successfully!' });
  } catch (error) {
    console.error('Email sending error:', error);
    return Response.json(
      { success: false, message: 'Failed to send email', error: error.message },
      { status: 500 }
    );
  }
}
