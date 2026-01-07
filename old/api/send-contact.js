import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing name, email, or message' });
  }

  const CLIENT_ID = process.env.GMAIL_CLIENT_ID || process.env.GMAIL_OAUTH_CLIENT_ID;
  const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET || process.env.GMAIL_OAUTH_CLIENT_SECRET;
  const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN || process.env.GMAIL_OAUTH_REFRESH_TOKEN;
  const SENDER_EMAIL = process.env.SENDER_EMAIL || `no-reply@${process.env.DOMAIN || 'example.com'}`;
  const SENDER_NAME = process.env.SENDER_NAME || 'Mae Busano';
  const RECIPIENT = process.env.CONTACT_RECIPIENT || SENDER_EMAIL;

  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    return res.status(500).json({ error: 'Gmail OAuth2 credentials not configured' });
  }

  try {
    const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET);
    oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

    const subject = `Portfolio Contact from ${name}`;
    const body = `${message}\n\nFrom: ${name} <${email}>`;

    const rawMessage = [
      `From: ${SENDER_NAME} <${SENDER_EMAIL}>`,
      `To: ${RECIPIENT}`,
      `Subject: ${subject}`,
      'Content-Type: text/plain; charset="UTF-8"',
      '',
      body,
    ].join('\r\n');

    const encodedMessage = Buffer.from(rawMessage)
      .toString('base64')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });
    await gmail.users.messages.send({ userId: 'me', requestBody: { raw: encodedMessage } });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Gmail send error:', err?.response?.data || err.message || err);
    return res.status(500).json({ error: 'Failed to send email via Gmail', details: err?.response?.data || err.message });
  }
}
