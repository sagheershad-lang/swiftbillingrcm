import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

// ─── Guard: catch missing API key before any request hits Resend ───
if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set — contact form emails will not send.')
}

const resend = new Resend(process.env.RESEND_API_KEY ?? '')

// ─── Simple in-memory rate limiter (resets on cold start) ──────────
const rateMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5        // max requests per window
const RATE_WINDOW = 60_000  // 1 minute in ms

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW })
    return false
  }
  entry.count++
  if (entry.count > RATE_LIMIT) return true
  return false
}

const FROM = 'SwiftBilling RCM <noreply@swiftbillingrcm.com>'
const OWNER_EMAIL = 'info@swiftbillingrcm.com'

/** Strip HTML tags, trim and cap a string field */
function sanitize(val: unknown, maxLength = 2000): string {
  if (typeof val !== 'string') return ''
  return val.replace(/<[^>]*>/g, '').trim().slice(0, maxLength)
}

/** Single-line field: also remove line breaks so it can't alter the email subject */
function sanitizeLine(val: unknown, maxLength: number): string {
  return sanitize(val, maxLength).replace(/[\r\n]+/g, ' ')
}

/** Escape a value before placing it inside email HTML */
function escapeHtml(val: string): string {
  return val
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Send via Resend; returns the error (returned or thrown) or null, so a failure never becomes a raw 500 */
async function sendEmail(payload: Parameters<typeof resend.emails.send>[0]): Promise<unknown> {
  try {
    const { error } = await resend.emails.send(payload)
    return error
  } catch (err) {
    return err
  }
}

/** Validate email format */
function isValidEmail(email: string): boolean {
  return email.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Please try again in a minute.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    const parsed: unknown = await req.json()
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) throw new Error('not an object')
    body = parsed as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot check — bots fill hidden fields, humans don't
  if (sanitize(body.website)) {
    return NextResponse.json({ ok: true }) // silently succeed to not tip off bots
  }

  const name          = sanitizeLine(body.name, 100)
  const email         = sanitizeLine(body.email, 254)
  const phone         = sanitizeLine(body.phone, 30)
  const practice_name = sanitizeLine(body.practice_name, 150)
  const specialty     = sanitizeLine(body.specialty, 100)
  const message       = sanitize(body.message, 2000)

  if (!name || !practice_name || !email || !phone) {
    return NextResponse.json({ error: 'Name, practice name, email and phone are required.' }, { status: 400 })
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY missing — cannot send email')
    return NextResponse.json({ error: 'Email service is not configured. Please contact us directly.' }, { status: 500 })
  }

  // HTML-escaped copies for use inside email bodies
  const safe = {
    name:          escapeHtml(name),
    email:         escapeHtml(email),
    phone:         escapeHtml(phone),
    practice_name: escapeHtml(practice_name),
    specialty:     escapeHtml(specialty),
    message:       escapeHtml(message),
  }

  // 1. Notify owner — critical; fail the request if Resend returns or throws an error
  const ownerError = await sendEmail({
    from: FROM,
    to: OWNER_EMAIL,
    replyTo: email,
    subject: `New Lead: ${name} — ${practice_name || 'SwiftBilling RCM Website'}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:32px;border-radius:12px;">
        <div style="background:#0B3C5D;padding:24px 28px;border-radius:10px 10px 0 0;margin-bottom:0;">
          <h1 style="color:#2EC4B6;margin:0;font-size:22px;">New Lead — SwiftBilling RCM</h1>
        </div>
        <div style="background:#ffffff;padding:28px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;width:140px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:bold;color:#0f172a;">${safe.name}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:bold;color:#0f172a;"><a href="mailto:${safe.email}" style="color:#2EC4B6;">${safe.email}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:bold;color:#0f172a;">${safe.phone || '—'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;">Practice</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:bold;color:#0f172a;">${safe.practice_name || '—'}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;color:#64748b;font-size:13px;">Specialty</td><td style="padding:10px 0;border-bottom:1px solid #f1f5f9;font-weight:bold;color:#0f172a;">${safe.specialty || '—'}</td></tr>
            <tr><td style="padding:10px 0;color:#64748b;font-size:13px;vertical-align:top;">Message</td><td style="padding:10px 0;color:#0f172a;">${safe.message || '—'}</td></tr>
          </table>
          <a href="mailto:${safe.email}" style="display:inline-block;margin-top:24px;background:#2EC4B6;color:#0B3C5D;font-weight:bold;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:15px;">Reply to Lead</a>
        </div>
      </div>
    `,
  })

  if (ownerError) {
    console.error('Owner notification failed:', ownerError)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or contact us directly.' },
      { status: 500 }
    )
  }

  // 2. Auto-reply to the lead — best-effort, never block success
  const replyError = await sendEmail({
    from: FROM,
    to: email,
    replyTo: OWNER_EMAIL, // the email invites a reply; without this it would go to the noreply address
    subject: 'Thank you for contacting SwiftBilling RCM',
    html: `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f8fafc;padding:32px;border-radius:12px;">
        <div style="background:#0B3C5D;padding:24px 28px;border-radius:10px 10px 0 0;">
          <h1 style="color:#2EC4B6;margin:0;font-size:22px;">SwiftBilling RCM</h1>
          <p style="color:rgba(255,255,255,0.6);margin:6px 0 0;font-size:14px;">Revenue Cycle Management</p>
        </div>
        <div style="background:#ffffff;padding:32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 10px 10px;">
          <p style="color:#0f172a;font-size:16px;margin-top:0;">Hi ${safe.name},</p>
          <p style="color:#334155;font-size:15px;line-height:1.7;">Thank you for contacting SwiftBilling RCM.</p>
          <p style="color:#334155;font-size:15px;line-height:1.7;">We've received your message and our team is currently reviewing your request. You can expect a detailed response within <strong>24 hours</strong>, including insights into potential opportunities to improve your revenue cycle.</p>
          <p style="color:#334155;font-size:15px;line-height:1.7;">If your request is urgent, feel free to reply to this email or call us at <a href="tel:+15127377488" style="color:#2EC4B6;">+1 (512) 737-7488</a>.</p>
          <p style="color:#334155;font-size:15px;line-height:1.7;">We look forward to assisting you.</p>
          <hr style="border:none;border-top:1px solid #e2e8f0;margin:28px 0;">
          <p style="color:#0f172a;font-size:15px;margin:0;font-weight:bold;">Best regards,</p>
          <p style="color:#0f172a;font-size:15px;margin:4px 0 0;font-weight:bold;">SwiftBilling RCM Team</p>
          <a href="https://www.swiftbillingrcm.com" style="color:#2EC4B6;font-size:14px;text-decoration:none;">www.swiftbillingrcm.com</a>
        </div>
      </div>
    `,
  })

  if (replyError) {
    // Auto-reply failed — log it but don't expose to user; owner was already notified
    console.error('Auto-reply failed (non-fatal):', replyError)
  }

  return NextResponse.json({ ok: true })
}
