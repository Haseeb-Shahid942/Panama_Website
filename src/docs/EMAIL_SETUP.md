# Website Email (Contact + Inquiry forms) — Setup & Troubleshooting

## What broke

Live site forms returned:

```json
{ "success": false, "message": "Failed to send email",
  "error": "connect EACCES 142.251.127.109:587 - Local (0.0.0.0:0)" }
```

`142.251.127.109:587` is **smtp.gmail.com**. `EACCES` on *connect* means the
socket was refused by the **server's own firewall**, not by Google — the
request never left GoDaddy. GoDaddy shared/cPanel hosting **blocks outbound
SMTP (25 / 465 / 587) to third-party mail servers**. So Gmail SMTP can never
work there, no matter what credentials are used.

Secondary problem: mail was being sent `from: galpha964@gmail.com` through a
non-Google server. Even if the connection worked, Gmail/Outlook would reject or
spam-bin it (DMARC failure). The sender must be on a domain we own.

## How it is fixed

All mail now goes through `src/utils/mailer.js`, used by both
`src/app/api/mail/contact/route.js` and `src/app/api/mail/inquiry/route.js`.

It picks the first transport that works:

1. **Resend HTTP API** — if `RESEND_API_KEY` is set. Uses HTTPS port 443, which
   no host blocks. **This is the recommended option on GoDaddy.**
2. **Brevo HTTP API** — if `BREVO_API_KEY` is set. Same idea.
3. **SMTP fallback** — tries `SMTP_HOST` on the configured port, then 465, 587
   and 25, and finally GoDaddy's internal relay
   `relay-hosting.secureserver.net:25` (no auth, only works from inside
   GoDaddy). Every failed hop is logged with its host, port and error code.

## Environment variables

Set these in the hosting panel (cPanel → Setup Node.js App → Environment
Variables, or `.env` at the app root), then **restart the Node app**.

### Recommended: Resend

| Variable | Value |
| --- | --- |
| `RESEND_API_KEY` | `re_...` from resend.com |
| `MAIL_FROM` | `noreply@panamatravel.co.uk` (domain verified in Resend) |
| `MAIL_FROM_NAME` | `Panama Travel` |
| `MAIL_TO` | `sales@panamatravel.co.uk` |

Resend requires verifying `panamatravel.co.uk` by adding the DNS records it
gives you (SPF/DKIM) in GoDaddy DNS. Until the domain is verified you can only
send from `onboarding@resend.dev`.

### Alternative: Brevo

Same as above but `BREVO_API_KEY` instead, with the sender address verified in
Brevo.

### SMTP only (if you insist on a mail server)

Use the mailbox provider that actually hosts `sales@panamatravel.co.uk`:

- GoDaddy Professional Email → `SMTP_HOST=smtpout.secureserver.net`, `SMTP_PORT=465`, `SMTP_SECURE=true`
- Microsoft 365 → `SMTP_HOST=smtp.office365.com`, `SMTP_PORT=587`

plus `SMTP_USER` / `SMTP_PASS` for that mailbox. Note these may *still* be
blocked outbound on shared hosting — that is exactly why option 1 exists.

**Never set `SMTP_HOST=smtp.gmail.com` on GoDaddy.** It is firewalled.

## Verifying after deploy

```bash
curl -i -X POST https://www.panamatravel.co.uk/api/mail/inquiry \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"you@example.com","phone":"0121","description":"test"}'
```

- `{"success":true,...}` → sent. The app log line `[inquiry] sent via resend`
  tells you which transport was used.
- `{"success":false,...}` → the `error` field now lists every endpoint tried and
  why each failed.
