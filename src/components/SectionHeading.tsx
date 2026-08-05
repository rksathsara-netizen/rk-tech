import { type ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div className={cn('reveal max-w-3xl', center && 'mx-auto text-center', className)}>
      {eyebrow && (
        <div className={cn('flex items-center gap-2 mb-4', center && 'justify-center')}>
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-neon-blue" />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue">{eyebrow}</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-neon-blue" />
        </div>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed text-balance">{subtitle}</p>
      )}
    </div>
  );
}
