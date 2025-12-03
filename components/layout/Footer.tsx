/**
 * Footer Component
 * Site footer with links and copyright
 */

import { PERSONAL_INFO, SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';
import { SocialLinks } from '../shared/SocialLinks';
import React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="glass-strong border-t border-accent/10 dark:border-accent-dark/10 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark mb-4">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-text-secondary dark:text-text-secondary mb-4">
              {PERSONAL_INFO.role}
            </p>
            <SocialLinks iconSize="md" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-text-secondary hover:text-accent dark:hover:text-accent-dark transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark mb-4">
              Contacto
            </h4>
            <ul className="space-y-2 text-text-secondary dark:text-text-secondary">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  {PERSONAL_INFO.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.contact.phone}`}
                  className="hover:text-accent dark:hover:text-accent-dark transition-colors"
                >
                  {PERSONAL_INFO.contact.phone}
                </a>
              </li>
              <li>{PERSONAL_INFO.contact.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent/10 dark:border-accent-dark/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-secondary dark:text-text-secondary text-sm">
            © {currentYear} {PERSONAL_INFO.name}. Todos los derechos reservados.
          </p>
          <p className="text-text-secondary dark:text-text-secondary text-sm">
            v{SITE_CONFIG.version}
          </p>
        </div>
      </div>
    </footer>
  );
}

