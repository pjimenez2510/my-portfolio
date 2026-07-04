import { PERSONAL_INFO, SYSTEM, TICKER_ITEMS } from '@/lib/constants';
import { SocialLinks } from '../shared/SocialLinks';
import { Uptime } from '../shared/Uptime';

/** Secuencia de arranque — decorativa, oculta a lectores de pantalla */
const BOOT_LINES = [
  { t: '0.012s', msg: `init ${SYSTEM.host} ${SYSTEM.version}`, ok: true },
  { t: '0.087s', msg: 'runtime: jvm · dotnet · node', ok: true },
  { t: '0.164s', msg: 'mount: experiencia(6) · servicios(6)', ok: true },
  { t: '0.201s', msg: 'status: accepting_connections', ok: false },
];

/** Delays de la animación de boot, en ms */
const D = (i: number) => ({ animationDelay: `${i}ms` });

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-dvh flex flex-col justify-center relative overflow-hidden pt-24 pb-20"
    >
      {/* Glow ámbar superior */}
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-15%] w-[52rem] h-[32rem] pointer-events-none opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse at center, #ffb224, transparent 65%)' }}
      />

      {/* Línea de escaneo */}
      <div className="scanline" aria-hidden="true" />

      <div className="section-container relative z-10 w-full">
        {/* Boot log */}
        <div
          className="font-mono text-[11px] sm:text-xs leading-relaxed mb-10 text-text-muted"
          aria-hidden="true"
        >
          {BOOT_LINES.map((line, i) => (
            <p key={i} className="animate-boot" style={D(i * 130)}>
              <span className="opacity-60">[ {line.t} ]</span> {line.msg}{' '}
              {line.ok ? (
                <span className="text-ok">ok</span>
              ) : (
                <span className="text-ok">● listo</span>
              )}
            </p>
          ))}
        </div>

        {/* Nombre — sin tilde en el display: Martian Mono la coloca
            demasiado alto en mayúsculas. El sr-only lleva el nombre correcto. */}
        <h1 className="font-display font-bold uppercase leading-[0.98] tracking-tight text-text text-[clamp(2.7rem,9vw,6.5rem)] mb-8">
          <span className="sr-only">Patricio Jiménez</span>
          <span aria-hidden="true">
            <span className="block animate-boot" style={D(560)}>
              Patricio
            </span>
            <span className="block text-outline animate-boot" style={D(700)}>
              Jimenez
            </span>
          </span>
        </h1>

        {/* Metadata del proceso */}
        <div
          className="flex flex-wrap gap-x-6 gap-y-1.5 font-mono text-xs sm:text-sm text-text-secondary mb-10 animate-boot"
          style={D(840)}
        >
          <span>
            <span className="text-accent">role:</span> full_stack_developer
          </span>
          <span>
            <span className="text-accent">region:</span> ambato-ec · utc-5
          </span>
          <span className="hidden sm:inline">
            <span className="text-accent">arch:</span> clean-architecture
          </span>
        </div>

        {/* Readouts — solo datos reales */}
        <div
          className="grid sm:grid-cols-3 border-y border-border divide-y sm:divide-y-0 sm:divide-x divide-border mb-10 max-w-2xl animate-boot"
          style={D(960)}
        >
          <div className="py-4 sm:px-5 sm:first:pl-0">
            <p className="label-mono mb-1.5">sistemas_en_prod</p>
            <p className="font-display text-2xl font-bold text-text">06</p>
          </div>
          <div className="py-4 sm:px-5">
            <p className="label-mono mb-1.5">usuarios_servidos</p>
            <p className="font-display text-2xl font-bold text-text">20K+</p>
          </div>
          <div className="py-4 sm:px-5">
            <p className="label-mono mb-1.5">uptime_profesional</p>
            <p className="font-mono text-lg sm:text-xl text-accent tabular-nums pt-1">
              <Uptime />
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 animate-boot" style={D(1080)}>
          <a
            href="#projects"
            className="px-6 py-3.5 bg-accent text-[#0a0c0e] font-mono text-xs font-semibold tracking-wider uppercase hover:bg-accent-hover transition-colors"
          >
            ver servicios ↓
          </a>
          <a
            href={PERSONAL_INFO.resumeUrl}
            className="px-6 py-3.5 border border-border-strong text-text font-mono text-xs tracking-wider uppercase hover:border-accent hover:text-accent transition-colors"
          >
            get /cv.pdf
          </a>
          <SocialLinks className="ml-1" />
        </div>
      </div>

      {/* Coordenadas — detalle HUD */}
      <span
        className="absolute bottom-16 left-5 sm:left-10 font-mono text-[10px] tracking-[0.25em] text-text-muted/60 hidden sm:block"
        aria-hidden="true"
      >
        01.24°S · 78.61°W
      </span>

      {/* Cinta de métricas */}
      <div
        className="absolute bottom-0 inset-x-0 border-t border-border ticker bg-bg/60"
        aria-hidden="true"
      >
        <div className="ticker-track py-3">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {TICKER_ITEMS.map((item) => (
                <span
                  key={item}
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-text-muted whitespace-nowrap px-5"
                >
                  {item}
                  <span className="text-accent/50 pl-10">▪</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
