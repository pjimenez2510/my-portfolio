import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { PERSONAL_INFO } from '@/lib/constants';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string; company?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'bad_request' }, { status: 400 });
  }

  const { name, email, message, company } = body;

  // honeypot: los humanos no ven este campo — si viene lleno es un bot.
  // Respondemos 200 para no darle pistas.
  if (company) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: 'message_too_long' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // sin configurar — el frontend cae al fallback de mailto
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    // sin dominio verificado, Resend solo permite este remitente
    from: 'Portafolio <onboarding@resend.dev>',
    to: [PERSONAL_INFO.contact.email],
    replyTo: email,
    subject: `[pjimenez.dev] Mensaje de ${name.trim()}`,
    text: `${message.trim()}\n\n— ${name.trim()}\n${email.trim()}`,
  });

  if (error) {
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
}
