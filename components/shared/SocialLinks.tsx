import { PERSONAL_INFO } from '@/lib/constants';

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-5 ${className || ''}`}>
      {PERSONAL_INFO.contact.social.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-text-secondary hover:text-accent transition-colors"
        >
          {social.name.toLowerCase()}
          <span aria-hidden="true"> ↗</span>
        </a>
      ))}
    </div>
  );
}
