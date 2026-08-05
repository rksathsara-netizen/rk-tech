import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { services } from '@/data/site';

const iconMap: Record<string, string> = {
  'Laptop': '💻', 'Monitor': '🖥️', 'Gamepad2': '🎮', 'Network': '🌐',
  'Cctv': '📹', 'HardDriveDownload': '💾', 'Wrench': '🔧', 'Cpu': '⚡',
  'Download': '⬇️', 'ShieldCheck': '🛡️', 'Printer': '🖨️', 'CircuitBoard': '🔌',
};

export default function Services() {
  useReveal();
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Expert Tech Services, <span className="gradient-text">Done Right</span></>}
          subtitle="From cracked screens to enterprise networks — we repair, build, and install everything tech. Free diagnostics on every service."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Link
              key={s.id}
              to={`/services/${s.slug}`}
              className={`reveal reveal-delay-${(i % 3) + 1} group glass-card p-7 hover:border-neon-blue/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                    {iconMap[s.icon] || '🔧'}
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.name}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">{s.tagline}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <div>
                    <span className="text-xs text-slate-500">From </span>
                    <span className="font-mono text-sm font-semibold text-neon-blue">{s.startingPrice}</span>
                  </div>
                  <span className="text-xs text-slate-500">{s.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal mt-16 glass-card p-10 text-center relative overflow-hidden">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl" />
          <div className="relative">
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">Not Sure What You Need?</h3>
            <p className="text-slate-400 max-w-lg mx-auto mb-6">Call us or drop by our shop — we'll diagnose your issue for free and give you an honest quote.</p>
            <Link to="/contact" className="btn-primary">
              Get a Free Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
