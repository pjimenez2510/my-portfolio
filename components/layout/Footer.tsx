import { PERSONAL_INFO } from '@/lib/constants';
import { SocialLinks } from '../shared/SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-12">
      <div className="section-container py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="font-display text-lg font-bold text-text tracking-tight mb-1">
              pj<span className="text-accent">.</span>
            </p>
            <p className="text-xs text-text-muted font-mono">
              &copy; {currentYear} {PERSONAL_INFO.name}
            </p>
          </div>

          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
