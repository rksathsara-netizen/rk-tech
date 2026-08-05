import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

/** Fades content in on route change. */
export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div key={pathname} className="animate-[fadeIn_0.5s_ease]">
      {children}
    </div>
  );
}
