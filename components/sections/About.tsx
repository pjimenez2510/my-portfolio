import { SYSTEM } from '@/lib/constants';
import { SectionRule } from '../shared/SectionRule';

const HOST_INFO: { key: string; value: string; ok?: boolean }[] = [
  { key: 'host', value: 'pjimenez' },
  { key: 'role', value: 'full_stack.developer' },
  { key: 'runtime', value: 'jvm · dotnet · node' },
  { key: 'ui', value: 'angular · react · next' },
  { key: 'data', value: 'oracle · postgres · mysql' },
  { key: 'edu', value: 'ingeniero en software' },
  { key: 'status', value: 'accepting_connections', ok: true },
];

const POLICIES = [
  'los datos primero, el framework después',
  'código aburrido en producción > código brillante en demo',
  'si no está en producción, no cuenta',
];

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 border-t border-border">
      <div className="section-container">
        <SectionRule index="01" title="Perfil" code="SYS/RUNTIME" />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Prosa — la voz humana dentro de la máquina */}
          <div className="lg:col-span-7">
            <p className="font-display text-2xl sm:text-3xl font-bold leading-snug text-text mb-10">
              Construyo los sistemas{' '}
              <span className="text-accent">que no pueden fallar</span> — los que
              mueven dinero, pólizas y datos mientras nadie los mira.
            </p>

            <div className="space-y-5 text-text-secondary leading-relaxed max-w-xl">
              <p>
                Soy desarrollador full stack en Ambato, Ecuador. Los últimos años
                los he pasado dentro de sistemas que tienen que funcionar todos
                los días: venta de seguros con débitos automáticos para más de
                20.000 asegurados, facturación electrónica contra el SRI,
                inventarios y contratación pública.
              </p>
              <p>
                No hago landing pages espectaculares — hago lo que está detrás:
                el motor que cobra la póliza a fin de mes, el pipeline que migra
                diez años de Excel sin perder un registro, la API que el
                frontend da por sentada.
              </p>
              <p>
                Ingeniero en Software, actualmente en{' '}
                <strong className="text-text font-medium">PROCONTY</strong>{' '}
                (FIDEVAL). Clean Architecture no por dogma: porque el que
                mantiene mis sistemas seis meses después suelo ser yo.
              </p>
            </div>
          </div>

          {/* Paneles de sistema */}
          <div className="lg:col-span-5 space-y-6">
            {/* host_info */}
            <div className="border border-border bg-panel">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-border">
                <span className="label-mono">host_info</span>
                <span className="label-mono text-accent">{SYSTEM.region}</span>
              </div>
              <dl className="px-4 py-4 font-mono text-xs space-y-2.5">
                {HOST_INFO.map((row) => (
                  <div key={row.key} className="flex gap-4">
                    <dt className="w-16 shrink-0 text-text-muted uppercase tracking-wider">
                      {row.key}
                    </dt>
                    <dd className={row.ok ? 'text-ok flex items-center gap-2' : 'text-text-secondary'}>
                      {row.ok && <span className="status-dot scale-75" aria-hidden="true" />}
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* policies */}
            <div className="border border-border bg-panel">
              <div className="px-4 py-2.5 border-b border-border">
                <span className="label-mono">policies</span>
              </div>
              <ul className="px-4 py-4 font-mono text-xs space-y-2.5">
                {POLICIES.map((p) => (
                  <li key={p} className="flex gap-2.5 text-text-secondary leading-relaxed">
                    <span className="text-accent shrink-0" aria-hidden="true">
                      ▪
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
