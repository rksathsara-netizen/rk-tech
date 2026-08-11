import { useEffect, useState } from 'react';

export function Aurora() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[70vw] h-[70vw] rounded-full bg-primary-600/10" />
        <div className="absolute top-1/3 -right-1/4 w-[60vw] h-[60vw] rounded-full bg-accent-500/8" />
        <div className="absolute -bottom-1/4 left-1/3 w-[65vw] h-[65vw] rounded-full bg-neon-blue/6" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-primary-600/20 blur-[80px] animate-aurora" />
      <div className="absolute top-1/3 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-accent-500/15 blur-[70px] animate-aurora-2" />
      <div className="absolute -bottom-1/4 left-1/3 w-[55vw] h-[55vw] rounded-full bg-neon-blue/10 blur-[75px] animate-aurora-3" />
    </div>
  );
}
