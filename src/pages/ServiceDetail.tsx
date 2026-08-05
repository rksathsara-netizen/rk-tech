import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check, Clock, Phone, ShieldCheck, ChevronRight, Wrench } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { services, business } from '@/data/site';

const iconMap: Record<string, string> = {
  'Laptop': '💻', 'Monitor': '🖥️', 'Gamepad2': '🎮', 'Network': '🌐',
  'Cctv': '📹', 'HardDriveDownload': '💾', 'Wrench': '🔧', 'Cpu': '⚡',
  'Download': '⬇️', 'ShieldCheck': '🛡️', 'Printer': '🖨️', 'CircuitBoard': '🔌',
};

export default function ServiceDetail() {
  useReveal();
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.id !== service.id).slice(0, 4);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <nav className="reveal flex items-center gap-2 text-sm text-slate-500 mb-8">
          <Link to="/" className="hover:text-neon-blue transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link to="/services" className="hover:text-neon-blue transition-colors">Services</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-slate-300">{service.name}</span>
        </nav>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="reveal flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center text-4xl">
                {iconMap[service.icon] || '🔧'}
              </div>
              <div>
                <h1 className="font-display text-3xl sm:text-4xl font-bold">{service.name}</h1>
                <p className="text-slate-400 mt-1">{service.tagline}</p>
              </div>
            </div>

            <div className="reveal reveal-delay-1 glass-card p-8 mb-8">
              <p className="text-slate-300 leading-relaxed text-lg">{service.description}</p>
            </div>

            <div className="reveal reveal-delay-2">
              <h2 className="font-display text-2xl font-bold mb-6">What's Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.features.map((f, i) => (
                  <div key={f} className={`reveal reveal-delay-${(i % 4) + 1} flex items-center gap-3 glass rounded-xl p-4`}>
                    <div className="w-8 h-8 rounded-lg bg-neon-blue/10 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-neon-blue" />
                    </div>
                    <span className="text-sm text-slate-300">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="reveal glass-card p-7 sticky top-28">
              <h3 className="font-display text-lg font-bold mb-5">Service Details</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-sm text-slate-400 flex items-center gap-2"><Wrench className="w-4 h-4 text-neon-blue" /> Starting Price</span>
                  <span className="font-mono font-bold text-neon-blue">{service.startingPrice}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-sm text-slate-400 flex items-center gap-2"><Clock className="w-4 h-4 text-neon-blue" /> Duration</span>
                  <span className="text-sm text-slate-200">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-white/5">
                  <span className="text-sm text-slate-400 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-neon-blue" /> Warranty</span>
                  <span className="text-sm text-slate-200">Included</span>
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full mb-3">
                Book This Service <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={`tel:${business.phoneRaw}`} className="btn-ghost w-full">
                <Phone className="w-4 h-4" /> Call for Quote
              </a>
              <p className="text-xs text-slate-500 text-center mt-4">Free diagnostics. No hidden fees.</p>
            </div>
          </div>
        </div>

        {/* Other services */}
        <div className="mt-20">
          <SectionHeading eyebrow="Explore More" title={<>Other <span className="gradient-text">Services</span></>} center={false} />
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((s, i) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className={`reveal reveal-delay-${i + 1} glass-card p-5 hover:border-neon-blue/30 transition-all hover:-translate-y-1 group`}
              >
                <div className="text-3xl mb-3">{iconMap[s.icon] || '🔧'}</div>
                <h4 className="font-display font-semibold text-sm mb-1">{s.name}</h4>
                <p className="text-xs text-slate-500 line-clamp-2">{s.tagline}</p>
                <div className="mt-3 text-xs text-neon-blue font-mono">{s.startingPrice}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
