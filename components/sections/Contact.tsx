'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { SocialLinks } from '../shared/SocialLinks';
import { PERSONAL_INFO } from '@/lib/constants';
import { isValidEmail } from '@/lib/utils';
import type { ContactFormData } from '@/lib/types';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Requerido';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Requerido';
    if (!formData.message.trim()) newErrors.message = 'Requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputBase = 'w-full px-0 py-3 bg-transparent border-b border-border text-text placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors text-sm';

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="accent-line" />
          <span className="font-mono text-xs text-accent tracking-widest uppercase">Contacto</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left - Big text + info */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text leading-tight mb-8">
              Hablemos<span className="text-accent">.</span>
            </h2>

            <p className="text-text-secondary mb-10 leading-relaxed">
              ¿Tienes un proyecto o una idea? Me encantaría escucharte.
            </p>

            {/* Contact details */}
            <div className="space-y-5 mb-8">
              <a href={`mailto:${PERSONAL_INFO.contact.email}`} className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors group">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm">{PERSONAL_INFO.contact.email}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href={`tel:${PERSONAL_INFO.contact.phone}`} className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors group">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm">{PERSONAL_INFO.contact.phone}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-text-secondary">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-sm">{PERSONAL_INFO.contact.location}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-border">
              <SocialLinks />
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">
                    Nombre
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputBase} placeholder="Tu nombre" />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputBase} placeholder="tu@email.com" />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">
                  Asunto
                </label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className={inputBase} placeholder="¿En qué puedo ayudarte?" />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted mb-2">
                  Mensaje
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`${inputBase} resize-none`} placeholder="Cuéntame sobre tu proyecto..." />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-accent text-[#0C0C0C] rounded-none font-display font-semibold text-sm tracking-wide hover:bg-accent-hover transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-sm text-accent font-mono">Mensaje enviado. Te responderé pronto.</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-sm text-red-400 font-mono">Error al enviar. Intenta de nuevo.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
