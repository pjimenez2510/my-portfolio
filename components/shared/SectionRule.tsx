/**
 * Cabecera de sección estilo HUD:
 * 02 EXPERIENCIA ───────────────────── TRACE/DEPLOYS
 */
export function SectionRule({
  index,
  title,
  code,
}: {
  index: string;
  title: string;
  code: string;
}) {
  return (
    <div className="flex items-baseline gap-4 mb-12 lg:mb-16">
      <span className="font-mono text-xs text-accent" aria-hidden="true">
        {index}
      </span>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-text">
        {title}
      </h2>
      <div className="flex-1 border-t border-border self-center" aria-hidden="true" />
      <span className="label-mono hidden sm:block" aria-hidden="true">
        {code}
      </span>
    </div>
  );
}
