'use client';

/**
 * Contact Section
 * Contact form and information
 */

import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';
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

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'El asunto es requerido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Aquí integrarías con EmailJS o tu servicio de email preferido
      // Por ahora simulamos el envío
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? Hablemos"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard>
              <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg glass">
                    <svg className="w-6 h-6 text-accent dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary dark:text-text-primary-dark mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${PERSONAL_INFO.contact.email}`}
                      className="text-text-secondary hover:text-accent dark:hover:text-accent-dark transition-colors"
                    >
                      {PERSONAL_INFO.contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg glass">
                    <svg className="w-6 h-6 text-accent dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary dark:text-text-primary-dark mb-1">
                      Teléfono
                    </h4>
                    <a
                      href={`tel:${PERSONAL_INFO.contact.phone}`}
                      className="text-text-secondary hover:text-accent dark:hover:text-accent-dark transition-colors"
                    >
                      {PERSONAL_INFO.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg glass">
                    <svg className="w-6 h-6 text-accent dark:text-accent-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary dark:text-text-primary-dark mb-1">
                      Ubicación
                    </h4>
                    <p className="text-text-secondary">
                      {PERSONAL_INFO.contact.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-accent/10 dark:border-accent-dark/10">
                <h4 className="font-semibold text-text-primary dark:text-text-primary-dark mb-4">
                  Redes Sociales
                </h4>
                <SocialLinks iconSize="lg" />
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <GlassCard>
            <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark mb-6">
              Envíame un Mensaje
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg glass border-2 border-accent/20 dark:border-accent-dark/10 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-accent dark:focus:border-accent-dark transition-all"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg glass border-2 border-accent/20 dark:border-accent-dark/10 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-accent dark:focus:border-accent-dark transition-all"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg glass border-2 border-accent/20 dark:border-accent-dark/10 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-accent dark:focus:border-accent-dark transition-all"
                  placeholder="¿En qué puedo ayudarte?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary dark:text-text-primary-dark mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass border-2 border-accent/20 dark:border-accent-dark/10 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent dark:focus:ring-accent-dark focus:border-accent dark:focus:border-accent-dark transition-all resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center">
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center">
                  Hubo un error al enviar el mensaje. Por favor intenta de nuevo.
                </p>
              )}
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

