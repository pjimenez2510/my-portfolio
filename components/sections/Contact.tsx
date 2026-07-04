'use client';

import { useRef, useState } from 'react';
import { PERSONAL_INFO } from '@/lib/constants';
import { isValidEmail } from '@/lib/utils';
import { SectionRule } from '../shared/SectionRule';
import type { ContactFormData } from '@/lib/types';

const INPUT_CLASS =
  'w-full px-3.5 py-3 bg-elevated border border-border font-mono text-sm text-text placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors';

type Status = 'idle' | 'sending' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [respCode, setRespCode] = useState<number | null>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'err: campo requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'err: campo requerido';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'err: email inválido';
    }
    if (!formData.message.trim()) newErrors.message = 'err: campo requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /** Fallback honesto si el servicio de correo no responde */
  const mailtoFallback = () => {
    const subject = encodeURIComponent(`[pjimenez.dev] Mensaje de ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name}\n${formData.email}`
    );
    return `mailto:${PERSONAL_INFO.contact.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setRespCode(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          company: honeypotRef.current?.value ?? '',
        }),
      });
      setRespCode(res.status);
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status !== 'idle' && status !== 'sending') setStatus('idle');
  };

  const endpoints = [
    {
      key: 'email',
      value: PERSONAL_INFO.contact.email,
      href: `mailto:${PERSONAL_INFO.contact.email}`,
    },
    {
      key: 'tel',
      value: PERSONAL_INFO.contact.phone,
      href: `tel:${PERSONAL_INFO.contact.phone.replace(/\s/g, '')}`,
    },
    ...PERSONAL_INFO.contact.social.map((s) => ({
      key: s.name.toLowerCase(),
      value: s.url.replace('https://', ''),
      href: s.url,
    })),
    { key: 'region', value: PERSONAL_INFO.contact.location, href: '' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 border-t border-border">
      <div className="section-container">
        <SectionRule index="05" title="Contacto" code="CONN/OPEN" />

        <p className="font-display text-2xl sm:text-3xl font-bold text-text leading-snug mb-12 max-w-2xl">
          ¿Tienes un sistema que construir?{' '}
          <span className="text-accent">Abre una conexión.</span>
        </p>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Request builder */}
          <div className="lg:col-span-7">
            <div className="border border-border bg-panel">
              <div className="flex items-center gap-3 px-5 py-3 border-b border-border">
                <span className="font-mono text-[10px] font-semibold px-2 py-0.5 bg-accent text-[#0a0c0e]">
                  POST
                </span>
                <span className="font-mono text-xs text-text-secondary">/api/contact</span>
                <span className="label-mono ml-auto hidden sm:block">
                  handler: resend
                </span>
              </div>

              <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-6 space-y-5">
                {/* honeypot — invisible para humanos, irresistible para bots */}
                <input
                  ref={honeypotRef}
                  type="text"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] w-px h-px opacity-0"
                />

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="label-mono block mb-2">
                      --nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                      placeholder="tu nombre"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1.5 font-mono text-[11px] text-err">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="label-mono block mb-2">
                      --email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={INPUT_CLASS}
                      placeholder="tu@email.com"
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1.5 font-mono text-[11px] text-err">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="label-mono block mb-2">
                    --mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`${INPUT_CLASS} resize-none`}
                    placeholder="cuéntame sobre tu sistema…"
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1.5 font-mono text-[11px] text-err">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="px-8 py-3.5 bg-accent text-[#0a0c0e] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-accent-hover transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                >
                  {status === 'sending' ? 'enviando ▸▸▸' : 'enviar request ▸'}
                </button>

                {/* Respuesta del sistema — códigos HTTP reales */}
                {status === 'success' && (
                  <div
                    role="status"
                    className="border border-ok/30 bg-ok/5 px-4 py-3 font-mono text-xs animate-log"
                  >
                    <p className="text-ok mb-1">200 OK</p>
                    <p className="text-text-secondary leading-relaxed">
                      mensaje entregado — respondo en menos de 24h.
                    </p>
                  </div>
                )}
                {status === 'error' && (
                  <div
                    role="alert"
                    className="border border-err/30 bg-err/5 px-4 py-3 font-mono text-xs animate-log"
                  >
                    <p className="text-err mb-1">
                      {respCode ?? 'ERR'} — el servicio de correo no respondió
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      plan B:{' '}
                      <a
                        href={mailtoFallback()}
                        className="text-accent underline underline-offset-2"
                      >
                        abrir tu cliente de correo
                      </a>{' '}
                      con el mensaje ya escrito, o escríbeme directo a{' '}
                      <a
                        href={`mailto:${PERSONAL_INFO.contact.email}`}
                        className="text-accent underline underline-offset-2"
                      >
                        {PERSONAL_INFO.contact.email}
                      </a>
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Endpoints directos */}
          <div className="lg:col-span-5">
            <h3 className="label-mono mb-4">endpoints_directos</h3>
            <ul className="border border-border divide-y divide-border bg-panel font-mono text-xs">
              {endpoints.map((ep) => (
                <li key={ep.key}>
                  {ep.href ? (
                    <a
                      href={ep.href}
                      target={ep.href.startsWith('http') ? '_blank' : undefined}
                      rel={ep.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center justify-between gap-4 px-4 py-3.5 hover:bg-elevated transition-colors group"
                    >
                      <span className="text-text-muted uppercase tracking-wider shrink-0">
                        {ep.key}
                      </span>
                      <span className="text-text-secondary group-hover:text-accent transition-colors truncate">
                        {ep.value} <span aria-hidden="true">↗</span>
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center justify-between gap-4 px-4 py-3.5">
                      <span className="text-text-muted uppercase tracking-wider shrink-0">
                        {ep.key}
                      </span>
                      <span className="text-text-secondary truncate">{ep.value}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-5 space-y-1.5 font-mono text-[11px] text-text-muted">
              <p>
                <span className="text-accent/70" aria-hidden="true">▸</span> tiempo de
                respuesta habitual: &lt; 24h
              </p>
              <p>
                <span className="text-accent/70" aria-hidden="true">▸</span> abierto a:
                full-time · freelance · consultoría
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
