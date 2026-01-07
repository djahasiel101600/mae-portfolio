import { NextResponse } from 'next/server'
import { google } from 'googleapis'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message } = body || {}

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing name, email, or message' }, { status: 400 })
    }

    const CLIENT_ID = process.env.GMAIL_CLIENT_ID || process.env.GMAIL_OAUTH_CLIENT_ID
    const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET || process.env.GMAIL_OAUTH_CLIENT_SECRET
    const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN || process.env.GMAIL_OAUTH_REFRESH_TOKEN
    const SENDER_EMAIL = process.env.SENDER_EMAIL || `no-reply@${process.env.DOMAIN || 'example.com'}`
    const SENDER_NAME = process.env.SENDER_NAME || 'Mae Busano'
    const RECIPIENT = process.env.CONTACT_RECIPIENT || SENDER_EMAIL

    if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
      return NextResponse.json({ error: 'Gmail OAuth2 credentials not configured' }, { status: 500 })
    }

    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET)
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })

    const subject = `Portfolio Contact from ${name}`
    const bodyText = `${message}\n\nFrom: ${name} <${email}>`

    const rawMessage = [
      `From: ${SENDER_NAME} <${SENDER_EMAIL}>`,
      `To: ${RECIPIENT}`,
      `Subject: ${subject}`,
      'Content-Type: text/plain; charset="UTF-8"',
      '',
      bodyText,
    ].join('\r\n')

    const encodedMessage = Buffer.from(rawMessage)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client })
    await gmail.users.messages.send({ userId: 'me', requestBody: { raw: encodedMessage } })

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error('Gmail send error:', err?.response?.data || err.message || err)
    return NextResponse.json({ error: 'Failed to send email via Gmail', details: err?.response?.data || err.message }, { status: 500 })
  }
}
