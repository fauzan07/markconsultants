import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const attempts = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function limited(ip) {
  const now = Date.now();
  const recent = (attempts.get(ip) || []).filter((timestamp) => now - timestamp < WINDOW_MS);
  recent.push(now);
  attempts.set(ip, recent);
  return recent.length > MAX_ATTEMPTS;
}

function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function isValidPhone(phone) { return /^[6-9]\d{9}$/.test(String(phone).replace(/\s+/g, '')); }
function escapeHtml(value = '') { return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char])); }

export async function POST(request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return NextResponse.json({ message: 'Too many enquiries from this address. Please try again in a few minutes.' }, { status: 429 });

  let payload;
  try { payload = await request.json(); } catch { return NextResponse.json({ message: 'Please send a valid enquiry.' }, { status: 400 }); }

  if (payload.website) return NextResponse.json({ message: 'Thanks — your enquiry is on its way to our team.' });
  const { fullName, company, email, phone, service, message, consent } = payload;
  if (!fullName || !email || !phone || !service || !message || !consent) return NextResponse.json({ message: 'Please complete all required fields and consent to contact.' }, { status: 400 });
  if (!isValidEmail(email)) return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
  if (!isValidPhone(phone)) return NextResponse.json({ message: 'Please enter a valid 10-digit Indian phone number.' }, { status: 400 });

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.MAIL_TO || 'mk@markconsultants.in';
  const cc = process.env.MAIL_CC || 'Sales@markconsultants.in';
  if (!host || !user || !pass) return NextResponse.json({ message: 'The enquiry form is ready, but email delivery is not configured yet. Please call 9930525424 or email mk@markconsultants.in.' }, { status: 503 });

  const transporter = nodemailer.createTransport({ host, port, secure: port === 465, auth: { user, pass } });
  const safeName = escapeHtml(fullName);
  const safeCompany = escapeHtml(company || 'Not provided');
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />');

  try {
    await transporter.sendMail({
      from: `Mark Consultants website <${user}>`, to, cc, replyTo: email,
      subject: `New website enquiry — ${service}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:620px;color:#1B2430"><div style="padding:22px;background:#0B1F3A;color:#fff"><strong style="font-size:20px">Mark Consultants</strong><div style="margin-top:7px;color:#AFC6EA">New website enquiry</div></div><div style="padding:26px;border:1px solid #DCE6F1"><h2 style="margin-top:0;color:#0B1F3A">${safeService}</h2><p><strong>Name:</strong> ${safeName}<br /><strong>Company:</strong> ${safeCompany}<br /><strong>Email:</strong> ${safeEmail}<br /><strong>Phone:</strong> ${safePhone}</p><div style="padding:16px;background:#F5F8FC;border-left:3px solid #00C2A8"><strong>Message</strong><p>${safeMessage}</p></div></div></div>`,
    });
    await transporter.sendMail({
      from: `Mark Consultants <${user}>`, to: email, subject: 'We received your enquiry | Mark Consultants',
      html: `<div style="font-family:Arial,sans-serif;max-width:620px;color:#1B2430"><h2 style="color:#0B1F3A">Thanks for reaching out, ${safeName}.</h2><p>We have received your enquiry about <strong>${safeService}</strong>. A member of the Mark Consultants team will review it and get back to you shortly.</p><p>For urgent queries, call <a href="tel:+919930525424">9930525424</a>.</p><p>Trusted Advice. Smart Technology. Secure Business Growth.</p></div>`,
    });
    return NextResponse.json({ message: 'Thanks — your enquiry is on its way to our team.' });
  } catch (error) {
    console.error('Contact form delivery failed:', error);
    return NextResponse.json({ message: 'We could not send your enquiry right now. Please try again or call 9930525424.' }, { status: 502 });
  }
}
