import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Award, Users, Zap, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { useCounter } from '@/hooks/useCounter';
import { business } from '@/data/site';

export default function About() {
  useReveal();
  const r1 = useCounter(6);
  const r2 = useCounter(95);
  const r3 = useCounter(15);
  const r4 = useCounter(98);

  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal glass-card p-10 sm:p-16 relative overflow-hidden noise-overlay">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-neon-blue/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue">About Us</span>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
              Sri Lanka's Trusted <span className="gradient-text">Tech Repair</span> Partner
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Founded in 2016 in the heart of Piliyandala, RK Tech Solutions started as a small repair bench with a big mission: to provide honest, expert, and affordable tech services to our community. Today, we've grown into a full-service computer shop and repair center trusted by thousands across Sri Lanka.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ref: r1, suffix: '+', label: 'Years in Business' },
              { ref: r2, suffix: '%', label: 'Devices Repaired' },
              { ref: r3, suffix: '+', label: 'Brands Serviced' },
              { ref: r4, suffix: '%', label: 'Customer Satisfaction' },
            ].map((s) => (
              <div key={s.label} className="reveal glass-card p-7 text-center">
                <span ref={s.ref} className="font-display text-4xl sm:text-5xl font-bold gradient-text">0</span>
                <span className="font-display text-4xl sm:text-5xl font-bold gradient-text">{s.suffix}</span>
                <div className="mt-2 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To make professional tech repair and products accessible to everyone in Sri Lanka — with honesty, speed, and fair pricing.' },
              { icon: Eye, title: 'Our Vision', desc: 'To be the most trusted computer service center in the region, known for expertise, integrity, and exceptional customer care.' },
              { icon: Heart, title: 'Our Values', desc: 'Honesty over upselling. Quality over speed. People over profit. We treat every device as if it were our own.' },
            ].map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${i + 1} glass-card p-8`}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-neon-blue" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeading
            eyebrow="What Sets Us Apart"
            title={<>The RK Tech <span className="gradient-text">Difference</span></>}
            subtitle="We're not just another repair shop. Here's what makes us different."
          />
          <div className="mt-14 grid sm:grid-cols-2 gap-6">
            {[
              { icon: Award, title: 'Certified Expertise', desc: 'Our technicians hold certifications from CompTIA, Microsoft, and major hardware vendors including Apple, Dell, and HP.' },
              { icon: ShieldCheck, title: 'Genuine Parts Only', desc: 'We never use counterfeit or low-quality parts. Every replacement is genuine and comes with manufacturer warranty.' },
              { icon: Zap, title: 'Fast Turnaround', desc: 'Most repairs completed same-day. We know you need your device back — and we work hard to make that happen.' },
              { icon: Users, title: 'Community First', desc: 'We\'ve served the Piliyandala community for 8+ years. Our reputation is built on word-of-mouth referrals.' },
            ].map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${(i % 2) + 1} glass-card p-7 flex gap-5`}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-neon-blue" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="reveal glass-card p-10 sm:p-14 text-center relative overflow-hidden">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-neon-blue/15 blur-3xl" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold mb-4">Come Visit Our Shop</h2>
              <p className="text-slate-400 mb-6">{business.address}</p>
              <Link to="/contact" className="btn-primary">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
