import { PERSONAL_INFO, SYSTEM } from '@/lib/constants';
import { SocialLinks } from '../shared/SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[11px] text-text-muted">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <span>© {currentYear} {PERSONAL_INFO.name.toLowerCase()}</span>
            <span className="hidden sm:inline">region: {SYSTEM.region}</span>
            <span className="hidden lg:inline">next.js 16 · tailwind 4</span>
          </div>

          <div className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <span className="status-dot" aria-hidden="true" />
              operational
            </span>
            <SocialLinks />
          </div>
        </div>

        <p className="mt-4 font-mono text-[10px] text-text-muted/60">
          diseñado y construido a mano — sin plantillas.
        </p>
      </div>
    </footer>
  );
}
