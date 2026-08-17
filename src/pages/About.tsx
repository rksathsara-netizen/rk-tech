import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Target,
  Eye,
  Heart,
  Award,
  Users,
  Zap,
  ShieldCheck,
  GraduationCap,
  Network,
  MonitorCog,
  BadgeCheck,
} from 'lucide-react';

import { SectionHeading } from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { useCounter } from '@/hooks/useCounter';
import { business } from '@/data/site';

export default function About() {
  useReveal();

  const r1 = useCounter(6);
  const r2 = useCounter(15);
  const r3 = useCounter(98);

  return (
    <div className="pt-32 pb-20">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal glass-card p-8 sm:p-12 lg:p-16 relative overflow-hidden noise-overlay">

          {/* Background glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-neon-blue/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-primary-500/10 blur-3xl" />

          <div className="relative max-w-4xl">

            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-neon-blue">
              About RK Tech Solutions
            </span>

            <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Sri Lanka's Trusted{' '}
              <span className="gradient-text">Tech Repair</span> Partner
            </h1>

            <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed max-w-3xl">
              With over 6 years of hands-on experience, RK Tech Solutions
              provides reliable computer repairs, laptop servicing, hardware
              upgrades, networking solutions, and professional IT services.
              We are committed to delivering quality workmanship, honest
              service, and dependable technical support you can trust.
            </p>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                '6+ Years Experience',
                'Professional IT Knowledge',
                'Honest & Reliable Service',
                'Customer-Focused Support',
              ].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                >
                  <BadgeCheck className="w-4 h-4 text-neon-blue" />
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          QUALIFICATIONS
      ========================================================= */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <SectionHeading
            eyebrow="Qualifications"
            title={
              <>
                Professional{' '}
                <span className="gradient-text">Expertise</span>
              </>
            }
            subtitle="Academic and technical qualifications supporting our computer repair, networking, cybersecurity and IT services."
          />

          <div className="mt-14 grid md:grid-cols-2 gap-6">

            {/* BSc */}
            <div className="reveal glass-card p-7 sm:p-8 relative overflow-hidden border-neon-blue/20">

              <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-neon-blue/10 blur-3xl" />

              <div className="relative flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-7 h-7 text-neon-blue" />
                </div>

                <div>
                  <span className="inline-flex items-center rounded-full bg-neon-blue/10 border border-neon-blue/20 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-neon-blue">
                    Degree
                  </span>

                  <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
                    BSc (Hons) Computer Networks &amp; Security
                  </h3>

                  <div className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-neon-blue">
                    <Award className="w-4 h-4" />
                    Second Class Upper Division
                  </div>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    Academic expertise in computer networks, cybersecurity,
                    network infrastructure, systems and information technology.
                  </p>
                </div>

              </div>
            </div>


            {/* Network Diploma */}
            <div className="reveal reveal-delay-1 glass-card p-7 sm:p-8">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center shrink-0">
                  <Network className="w-7 h-7 text-neon-blue" />
                </div>

                <div>
                  <span className="inline-flex items-center rounded-full bg-primary-500/10 border border-primary-500/20 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-slate-300">
                    Diploma
                  </span>

                  <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
                    Diploma in Network Administration with Security
                  </h3>

                  <p className="mt-3 text-sm text-slate-400">
                    Vocational Training Centre (VTC),
                  </p>

                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    Professional training in network administration,
                    infrastructure and network security.
                  </p>
                </div>

              </div>
            </div>


            {/* Hardware Diploma */}
            <div className="reveal reveal-delay-2 glass-card p-7 sm:p-8">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center shrink-0">
                  <MonitorCog className="w-7 h-7 text-neon-blue" />
                </div>

                <div>
                  <span className="inline-flex items-center rounded-full bg-primary-500/10 border border-primary-500/20 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-slate-300">
                    Diploma
                  </span>

                  <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
                    Diploma in Computer Hardware with Networks
                  </h3>

                  <p className="mt-3 text-sm text-slate-400">
                    Vocational Training Centre (VTC),
                  </p>

                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    Practical knowledge in computer hardware, troubleshooting,
                    maintenance and networking.
                  </p>
                </div>

              </div>
            </div>


            {/* Cyber Security */}
            <div className="reveal reveal-delay-3 glass-card p-7 sm:p-8">

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7 text-neon-blue" />
                </div>

                <div>
                  <span className="inline-flex items-center rounded-full bg-primary-500/10 border border-primary-500/20 px-3 py-1 text-[11px] font-semibold tracking-widest uppercase text-slate-300">
                    Certification
                  </span>

                  <h3 className="mt-3 font-display text-lg sm:text-xl font-bold text-slate-100 leading-snug">
                    Certificate in Cyber Security Networking
                  </h3>

                  <p className="mt-3 text-sm text-slate-400">
                    Next Gen Campus
                  </p>

                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    Additional training focused on cybersecurity and secure
                    networking concepts.
                  </p>
                </div>

              </div>
            </div>

          </div>


          {/* Additional Certifications */}
          <div className="mt-8 reveal glass-card p-7 sm:p-8">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-neon-blue" />
              </div>

              <div className="w-full">

                <h3 className="font-display text-lg font-bold text-slate-100">
                  Additional Certifications
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Additional technical and creative qualifications.
                </p>

                <div className="mt-5 grid sm:grid-cols-2 gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    <p className="text-sm font-medium text-slate-200">
                      Certificate in Computer Application
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Lanka Information Technological Studies
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                    <p className="text-sm font-medium text-slate-200">
                      Certificate in Graphic Design
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Lanka Information Technological Studies
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

            <div className="reveal glass-card p-7 text-center">
              <div className="flex items-center justify-center">
                <span
                  ref={r1}
                  className="font-display text-4xl sm:text-5xl font-bold gradient-text"
                >
                  0
                </span>

                <span className="font-display text-4xl sm:text-5xl font-bold gradient-text">
                  +
                </span>
              </div>

              <div className="mt-2 text-sm text-slate-400">
                Years of Experience
              </div>
            </div>


            <div className="reveal reveal-delay-1 glass-card p-7 text-center">
              <div className="flex items-center justify-center">

                <span
                  ref={r2}
                  className="font-display text-4xl sm:text-5xl font-bold gradient-text"
                >
                  0
                </span>

                <span className="font-display text-4xl sm:text-5xl font-bold gradient-text">
                  +
                </span>

              </div>

              <div className="mt-2 text-sm text-slate-400">
                Brands &amp; Technologies
              </div>
            </div>


            <div className="reveal reveal-delay-2 glass-card p-7 text-center">

              <div className="flex items-center justify-center">

                <span
                  ref={r3}
                  className="font-display text-4xl sm:text-5xl font-bold gradient-text"
                >
                  0
                </span>

                <span className="font-display text-4xl sm:text-5xl font-bold gradient-text">
                  %
                </span>

              </div>

              <div className="mt-2 text-sm text-slate-400">
                Customer Satisfaction
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          MISSION / VISION / VALUES
      ========================================================= */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To make professional tech repair, products and IT solutions accessible to everyone in Sri Lanka — with honesty, quality and fair pricing.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To become one of the most trusted technology service providers in the region, known for expertise, integrity and exceptional customer care.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Honesty over upselling. Quality over shortcuts. People over profit. Every customer and every device deserves our best.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${i + 1} glass-card p-8`}
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-neon-blue" />
                </div>

                <h3 className="font-display text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          WHY CHOOSE US
      ========================================================= */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <SectionHeading
            eyebrow="What Sets Us Apart"
            title={
              <>
                The RK Tech{' '}
                <span className="gradient-text">Difference</span>
              </>
            }
            subtitle="Professional knowledge, practical experience and customer-first service."
          />

          <div className="mt-14 grid sm:grid-cols-2 gap-6">

            {[
              {
                icon: Award,
                title: 'Qualified Technical Knowledge',
                desc: 'Our academic and professional qualifications cover computer networks, cybersecurity, hardware and IT systems.',
              },
              {
                icon: ShieldCheck,
                title: 'Reliable & Honest Service',
                desc: 'We believe in transparent advice, practical solutions and honest recommendations without unnecessary upselling.',
              },
              {
                icon: Zap,
                title: 'Practical Repair Experience',
                desc: 'Years of hands-on experience allow us to diagnose hardware, software and networking problems efficiently.',
              },
              {
                icon: Users,
                title: 'Customer First',
                desc: 'We focus on building long-term relationships through quality workmanship, clear communication and dependable support.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 2) + 1} glass-card p-7 flex gap-5`}
              >

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-neon-blue" />
                </div>

                <div>

                  <h3 className="font-display text-lg font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          <div className="reveal glass-card p-10 sm:p-14 text-center relative overflow-hidden">

            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-neon-blue/15 blur-3xl" />

            <div className="relative">

              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue">
                Let's Work Together
              </span>

              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold mb-4">
                Need Reliable Tech Support?
              </h2>

              <p className="text-slate-400 mb-7 max-w-2xl mx-auto leading-relaxed">
                Whether you need a computer repair, network solution,
                hardware upgrade or professional IT support, we're here to help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

                <Link to="/contact" className="btn-primary">
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${business.phoneRaw}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-slate-200 hover:bg-white/5 transition-colors"
                >
                  Call Us
                </a>

              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}