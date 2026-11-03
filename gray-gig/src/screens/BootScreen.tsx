import { useEffect, useRef } from 'react';
import { goTo } from '../systems/fsm';

export function BootScreen() {
  const fired = useRef(false);
  useEffect(() => {
    if (fired.current) return;
    fired.current = true;
    const t = setTimeout(() => goTo('home'), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white">
      <div className="text-4xl font-bold tracking-widest animate-pulse">GRAY GIG</div>
      <div className="mt-2 text-xs text-neutral-500">v0.1.0 — prototype</div>
    </div>
  );
}