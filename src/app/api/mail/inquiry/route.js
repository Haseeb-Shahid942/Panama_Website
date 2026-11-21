// Next.js API Route: /api/inquiry
// App Router: app/api/inquiry/route.js
// Pages Router: pages/api/inquiry.js

import nodemailer from 'nodemailer';

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 45000
});

// ============================================
// App Router (app/api/inquiry/route.js)
// ============================================
export async function POST(request) {
  try {
    const {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      description,
    } = await request.json();

    if (!name || !email) {
      return Response.json(
        { success: false, message: "Name and Email are required." },
        { status: 400 }
      );
    }

    const guestsNum = Number(guests || 1);

    const htmlMessage = `
      <div style="max-width: 640px; font-family: Arial, sans-serif;">
        <div style="background:#1f73b7; color:#fff; padding:20px 24px; border-radius:12px 12px 0 0;">
          <h2 style="margin:0;">New Inquiry</h2>
        </div>
        <div style="border:1px solid #eee; border-top:none; padding:20px 24px; border-radius:0 0 12px 12px;">
          <p style="margin:0 0 12px 0;">You received a new inquiry from your website.</p>
          <table cellpadding="6" style="width:100%; border-collapse:collapse;">
            <tr><td><b>Name</b></td><td>${name}</td></tr>
            <tr><td><b>Email</b></td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td><b>Phone</b></td><td>${phone || "-"}</td></tr>
            <tr><td><b>Check In</b></td><td>${checkIn || "-"}</td></tr>
            <tr><td><b>Check Out</b></td><td>${checkOut || "-"}</td></tr>
            <tr><td><b>Guests</b></td><td>${Number.isFinite(guestsNum) ? guestsNum : "-"}</td></tr>
            <tr><td><b>Description</b></td><td>${(description || "-").toString().slice(0, 2000)}</td></tr>
          </table>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Panama Travel Inquiry" <galpha964@gmail.com>`,
      to: `sales@panamatravel.co.uk`,
      replyTo: email,
      subject: `New Inquiry Received from ${email}`,
      html: htmlMessage,
    });

    return Response.json({ success: true, message: "Inquiry email sent successfully." });
  } catch (error) {
    console.error("Inquiry email error:", error);
    return Response.json(
      { success: false, message: "Failed to send inquiry email.", error: error?.message },
      { status: 500 }
    );
  }
}

// ============================================
// Pages Router (pages/api/inquiry.js)
// ============================================
// Uncomment below if using Pages Router:
/*
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      description,
    } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, message: "Name and Email are required." });
    }

    const guestsNum = Number(guests || 1);

    const htmlMessage = `
      <div style="max-width: 640px; font-family: Arial, sans-serif;">
        <div style="background:#1f73b7; color:#fff; padding:20px 24px; border-radius:12px 12px 0 0;">
          <h2 style="margin:0;">New Inquiry</h2>
        </div>
        <div style="border:1px solid #eee; border-top:none; padding:20px 24px; border-radius:0 0 12px 12px;">
          <p style="margin:0 0 12px 0;">You received a new inquiry from your website.</p>
          <table cellpadding="6" style="width:100%; border-collapse:collapse;">
            <tr><td><b>Name</b></td><td>${name}</td></tr>
            <tr><td><b>Email</b></td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td><b>Phone</b></td><td>${phone || "-"}</td></tr>
            <tr><td><b>Check In</b></td><td>${checkIn || "-"}</td></tr>
            <tr><td><b>Check Out</b></td><td>${checkOut || "-"}</td></tr>
            <tr><td><b>Guests</b></td><td>${Number.isFinite(guestsNum) ? guestsNum : "-"}</td></tr>
            <tr><td><b>Description</b></td><td>${(description || "-").toString().slice(0, 2000)}</td></tr>
          </table>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Website Inquiries" <galpha964@gmail.com>`,
      to: `sales@panamatravel.co.uk`,
      replyTo: email,
      subject: `New Inquiry Received from ${email}`,
      html: htmlMessage,
    });

    return res.status(200).json({ success: true, message: "Inquiry email sent successfully." });
  } catch (error) {
    console.error("Inquiry email error:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Failed to send inquiry email.", 
      error: error?.message 
    });
  }
}
*/
