import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Gamepad2, Zap, ShieldCheck, Star, Check } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductImage } from '@/components/ProductImage';
import { useReveal } from '@/hooks/useReveal';
import { products, business } from '@/data/site';

const tiers = [
  {
    name: 'Starter',
    price: 'Rs. 150,000',
    target: '1080p Gaming',
    cpu: 'Ryzen 5 7600',
    gpu: 'RTX 4060 8GB',
    ram: '16GB DDR5',
    storage: '1TB NVMe SSD',
    features: ['60+ FPS at 1080p Ultra', 'RGB lighting', 'Cable management', 'Stress tested', '1-year warranty'],
    color: 'from-primary-500/20 to-neon-blue/20',
  },
  {
    name: 'Performance',
    price: 'Rs. 295,000',
    target: '1440p Gaming',
    cpu: 'Ryzen 7 7800X3D',
    gpu: 'RTX 4070 Super 12GB',
    ram: '32GB DDR5',
    storage: '2TB NVMe SSD',
    features: ['100+ FPS at 1440p High', 'Liquid cooling', 'Premium RGB', 'Benchmarked', '2-year warranty'],
    color: 'from-amber-500/20 to-orange-500/20',
    popular: true,
  },
  {
    name: '4K Beast',
    price: 'Rs. 850,000',
    target: '4K Ultra Gaming',
    cpu: 'Ryzen 9 7950X3D',
    gpu: 'RTX 4090 24GB',
    ram: '64GB DDR5',
    storage: '4TB NVMe SSD',
    features: ['60+ FPS at 4K Ultra', 'Custom liquid loop', 'Premium case & RGB', 'Overclocked & tuned', '3-year warranty'],
    color: 'from-purple-500/20 to-pink-500/20',
  },
];

export default function GamingPCs() {
  useReveal();
  const gamingPCs = products.filter((p) => p.category === 'Gaming PCs');

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal glass-card p-10 sm:p-16 relative overflow-hidden noise-overlay">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="relative text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Gamepad2 className="w-4 h-4 text-neon-blue" />
              <span className="text-xs sm:text-sm text-slate-300">Custom Gaming PC Builds</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Build Your <span className="gradient-text">Dream</span> <br />
              <span className="gradient-text-warm">Gaming PC</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Tell us your budget and favorite games — we'll build the perfect gaming rig. Every build is cable-managed, stress-tested, and benchmarked before delivery.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary text-base !py-4 !px-8">
                Get a Custom Quote <ArrowRight className="w-5 h-5" />
              </Link>
              <a href={business.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base !py-4 !px-8">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Build tiers */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Build Tiers"
            title={<>Choose Your <span className="gradient-text">Performance Level</span></>}
            subtitle="Three tiers to match any budget. Every build is fully customizable — these are just starting points."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <div
                key={t.name}
                className={`reveal reveal-delay-${i + 1} glass-card p-8 relative overflow-hidden hover:-translate-y-1 transition-all duration-500 ${
                  t.popular ? 'border-neon-blue/40 shadow-glow' : ''
                }`}
              >
                {t.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-500 to-neon-blue text-ink-950 text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    MOST POPULAR
                  </div>
                )}
                <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${t.color} blur-2xl`} />
                <div className="relative">
                  <h3 className="font-display text-2xl font-bold mb-1">{t.name}</h3>
                  <p className="text-sm text-slate-400 mb-4">{t.target}</p>
                  <div className="font-mono text-3xl font-bold gradient-text mb-6">{t.price}</div>
                  <div className="space-y-3 mb-6 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-2 text-sm"><Cpu className="w-4 h-4 text-neon-blue" /> {t.cpu}</div>
                    <div className="flex items-center gap-2 text-sm"><Zap className="w-4 h-4 text-neon-blue" /> {t.gpu}</div>
                    <div className="flex items-center gap-2 text-sm"><ShieldCheck className="w-4 h-4 text-neon-blue" /> {t.ram}</div>
                    <div className="flex items-center gap-2 text-sm"><Cpu className="w-4 h-4 text-neon-blue" /> {t.storage}</div>
                  </div>
                  <ul className="space-y-2.5 mb-6">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-neon-blue shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`w-full ${t.popular ? 'btn-primary' : 'btn-ghost'} flex justify-center`}>
                    Build This PC
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-built gaming PCs */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Pre-Built Systems"
            title={<>Ready-to-Ship <span className="gradient-text">Gaming PCs</span></>}
            subtitle="Don't want to wait? These pre-built systems are in stock and ready to go."
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gamingPCs.map((p, i) => (
              <div key={p.id} className={`reveal reveal-delay-${i + 1} group glass-card overflow-hidden hover:border-neon-blue/30 transition-all hover:-translate-y-1`}>
                <div className="grid sm:grid-cols-2 gap-0">
                  <div className="relative aspect-square sm:aspect-auto">
                    <ProductImage name={p.name} image={p.image} className="w-full h-full object-cover" />
                    {p.badge === 'Used' && <span className="absolute top-3 left-3 badge bg-red-500/90 text-white">Used</span>}
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className={`w-3.5 h-3.5 ${j < p.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} />
                      ))}
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2">{p.name}</h3>
                    <p className="text-xs text-slate-400 mb-3">{p.description}</p>
                    <div className="space-y-1.5 mb-4">
                      {p.specs.map((s) => (
                        <div key={s} className="text-xs text-slate-300 flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-neon-blue" /> {s}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        {p.oldPrice && <span className="text-xs text-slate-500 line-through mr-2">Rs. {p.oldPrice.toLocaleString()}</span>}
                        <span className="font-mono font-bold text-xl text-neon-blue">Rs. {p.price.toLocaleString()}</span>
                      </div>
                    </div>
                    <a
                      href={`${business.social.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${p.name}. Is it available?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full mt-4 text-sm"
                    >
                      Inquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Process"
            title={<>How It <span className="gradient-text">Works</span></>}
          />
          <div className="mt-14 grid sm:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consult', desc: 'Tell us your budget, games, and preferences.' },
              { step: '02', title: 'Design', desc: 'We create a custom parts list optimized for your needs.' },
              { step: '03', title: 'Build', desc: 'We assemble, cable-manage, and stress-test your PC.' },
              { step: '04', title: 'Deliver', desc: 'Pick up in-store or get it delivered, ready to game.' },
            ].map((s, i) => (
              <div key={s.step} className={`reveal reveal-delay-${i + 1} text-center`}>
                <div className="font-display text-5xl font-bold gradient-text mb-3">{s.step}</div>
                <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
