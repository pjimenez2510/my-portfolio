'use client';

import { useEffect, useState } from 'react';
import { SYSTEM } from '@/lib/constants';

/**
 * Contador de uptime en vivo desde el primer deploy profesional.
 * Renderiza un placeholder hasta montar para evitar hydration mismatch.
 */
export function Uptime({ className }: { className?: string }) {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    // primer tick diferido para no llamar setState síncrono en el effect
    const t0 = setTimeout(tick, 0);
    const id = setInterval(tick, 1000);
    return () => {
      clearTimeout(t0);
      clearInterval(id);
    };
  }, []);

  if (now === null) {
    return (
      <span className={className} aria-hidden="true">
        ···
      </span>
    );
  }

  const boot = new Date(SYSTEM.bootTime).getTime();
  let s = Math.max(0, Math.floor((now - boot) / 1000));
  const d = Math.floor(s / 86400);
  s -= d * 86400;
  const h = Math.floor(s / 3600);
  s -= h * 3600;
  const m = Math.floor(s / 60);
  s -= m * 60;
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <span className={className}>
      {d}d {pad(h)}:{pad(m)}:{pad(s)}
    </span>
  );
}
