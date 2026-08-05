import { useEffect, useState } from 'react';

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 400);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-ink-950 transition-opacity duration-500 ${
        done ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-neon-blue animate-pulse-glow flex items-center justify-center">
          <span className="font-display font-bold text-3xl text-ink-950">RK</span>
        </div>
        <div className="absolute inset-0 rounded-2xl border-2 border-neon-blue/40 animate-spin-slow" />
      </div>
      <div className="font-display text-sm tracking-[0.3em] text-slate-400 mb-4">RK TECH SOLUTIONS</div>
      <div className="w-48 h-1 bg-ink-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary-500 to-neon-blue transition-all duration-150"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <div className="mt-3 font-mono text-xs text-slate-500">{Math.min(Math.floor(progress), 100)}%</div>
    </div>
  );
}
