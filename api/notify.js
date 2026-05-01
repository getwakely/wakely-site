// Vercel Serverless Function
// Sends form submissions (feedback or support tickets) to wakelydev@getwakely.com via Resend.
//
// Requires env var: RESEND_API_KEY  (set in Vercel)
// Domain auth on getwakely.com is already configured in Resend.

const TO = 'wakelydev@getwakely.com'
const FROM = 'Wakely Site <noreply@getwakely.com>'

function escapeHtml(s) {
  if (s == null) return ''
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY not configured')
    return res.status(500).json({ error: 'Email service not configured' })
  }

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
  const { type, name, email, subject, category, message } = body || {}

  if (!type || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields (type, email, message)' })
  }

  if (type !== 'feedback' && type !== 'support') {
    return res.status(400).json({ error: 'Invalid type — must be "feedback" or "support"' })
  }

  // Build email subject + body
  const isSupport = type === 'support'
  const emailSubject = isSupport
    ? `[Support] ${subject || 'New ticket'} — ${category || 'General'}`
    : `[Feedback] New submission${name ? ` from ${name}` : ''}`

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #111;">
      <div style="background: #38bdf8; color: white; padding: 20px 24px; border-radius: 12px 12px 0 0;">
        <h2 style="margin: 0; font-size: 20px;">
          ${isSupport ? 'New Support Ticket' : 'New Feedback'}
        </h2>
      </div>
      <div style="background: #faf9f6; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
        <table style="width: 100%; border-collapse: collapse;">
          ${name ? `<tr><td style="padding: 6px 0; color: #6b7280; width: 100px;">Name:</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(name)}</td></tr>` : ''}
          <tr><td style="padding: 6px 0; color: #6b7280;">Email:</td><td style="padding: 6px 0; font-weight: 600;"><a href="mailto:${escapeHtml(email)}" style="color: #0ea5e9;">${escapeHtml(email)}</a></td></tr>
          ${category ? `<tr><td style="padding: 6px 0; color: #6b7280;">Category:</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(category)}</td></tr>` : ''}
          ${subject ? `<tr><td style="padding: 6px 0; color: #6b7280;">Subject:</td><td style="padding: 6px 0; font-weight: 600;">${escapeHtml(subject)}</td></tr>` : ''}
        </table>
        <div style="margin-top: 20px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #e5e7eb;">
          <div style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px;">Message</div>
          <div style="white-space: pre-wrap; line-height: 1.5;">${escapeHtml(message)}</div>
        </div>
        <p style="margin-top: 20px; color: #9ca3af; font-size: 12px;">
          Reply directly to this email — the sender's email is set as the reply-to.
        </p>
      </div>
    </div>
  `.trim()

  const text = [
    isSupport ? 'New Support Ticket' : 'New Feedback',
    '',
    name ? `Name: ${name}` : null,
    `Email: ${email}`,
    category ? `Category: ${category}` : null,
    subject ? `Subject: ${subject}` : null,
    '',
    'Message:',
    message,
  ].filter(Boolean).join('\n')

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM,
        to: TO,
        reply_to: email,
        subject: emailSubject,
        html,
        text,
      }),
    })

    if (!resp.ok) {
      const errText = await resp.text()
      console.error('Resend API error:', resp.status, errText)
      return res.status(502).json({ error: 'Failed to send email', details: errText })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return res.status(500).json({ error: 'Internal error sending email' })
  }
}
