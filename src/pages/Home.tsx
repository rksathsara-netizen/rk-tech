import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Star, Zap, ShieldCheck, Home as HomeIcon, Clock,
  Cpu, Monitor, Laptop, Gamepad2, Network, Cctv, HardDriveDownload, Wrench, Download,
  Sparkles, Search, ChevronRight, Quote, MapPin, Phone, Mail,
} from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { ProductImage } from '@/components/ProductImage';
import { ParticleField } from '@/components/ParticleField';
import { Magnetic } from '@/components/Magnetic';
import { useCounter } from '@/hooks/useCounter';
import { useReveal } from '@/hooks/useReveal';
import { business, services, products, reviews, brands, whyChooseUs, offers } from '@/data/site';

const iconMap: Record<string, typeof Cpu> = {
  Laptop, Monitor, Gamepad2, Network, Cctv, HardDriveDownload, Wrench, Cpu,
  Download, ShieldCheck, MonitorSmartphone: Monitor, CircuitBoard: Cpu, Printer: Wrench,
};

const floatIcons = [Cpu, Monitor, Laptop, Gamepad2, Network, HardDriveDownload, ShieldCheck, Wrench];

const heroWords = ['Repair.'];

export default function Home() {
  useReveal();
  const [typed, setTyped] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    const current = heroWords[wordIdx];
    if (!deleting && charIdx < current.length) {
      const t = setTimeout(() => setTyped(current.slice(0, charIdx + 1)), 100);
      return () => clearTimeout(t);
    }
    if (!deleting && charIdx === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx > 0) {
      const t = setTimeout(() => {
        setTyped(current.slice(0, charIdx - 1));
        setCharIdx(charIdx - 1);
      }, 50);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((wordIdx + 1) % heroWords.length);
    }
  }, [charIdx, deleting, wordIdx]);

  useEffect(() => {
    setCharIdx(typed.length);
  }, [typed]);

  return (
    <div className="overflow-hidden">
      <Hero typed={typed} />
      <BrandsMarquee />
      <WhyChoose />
      <FeaturedServices />
      <FeaturedProducts />
      <StatsSection />
      <HomeVisit />
      <ReviewsSection />
      <OffersSection />
      <CTASection />
      <MapSection />
      <NewsletterSection />
    </div>
  );
}

/* ============ HERO ============ */
function Hero({ typed }: { typed: string }) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  if (isMobile) return;

  const onScroll = () => {
    if (!heroRef.current) return;

    const y = window.scrollY;

    heroRef.current.style.transform = `translateY(${y * 0.3}px)`;
    heroRef.current.style.opacity = `${Math.max(1 - y / 700, 0)}`;
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Video background fallback: animated gradient + particles */}
      <div ref={heroRef} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
        <div className="absolute top-0 left-1/4 w-[50vw] h-[50vw] rounded-full bg-primary-600/25 blur-[140px] animate-aurora" />
        <div className="absolute bottom-0 right-1/4 w-[40vw] h-[40vw] rounded-full bg-neon-blue/20 blur-[120px] animate-aurora-2" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <ParticleField density={70} />
      </div>

      {/* Floating tech icons */}
      {floatIcons.map((Icon, i) => (
        <div
          key={i}
          className="absolute hidden md:block text-neon-blue/20 animate-float"
          style={{
            top: `${[15, 25, 60, 70, 20, 75, 40, 85][i]}%`,
            left: `${[8, 88, 12, 90, 50, 15, 85, 45][i]}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          <Icon className="w-8 h-8 lg:w-12 lg:h-12" strokeWidth={1} />
        </div>
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
        <div className="reveal inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-sm sm:text-base font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent tracking-wide">
  Home & Office Visits Available in Colombo
</span>
        </div>

        <h1 className="reveal reveal-delay-1 font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
  We{" "}
  <span className="hidden sm:inline gradient-text">
    {typed || 'Repair.'}
    <span className="typing-cursor" />
  </span>

  <span className="inline sm:hidden gradient-text">
    Repair.
  </span>

  <br />

  <span className="bg-gradient-to-r from-cyan-400 via-blue-600 to-purple-600 bg-clip-text text-transparent">
    RK Tech Solutions
  </span>
</h1>

        <p className="reveal reveal-delay-2 mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed text-balance">
          Sri Lanka's trusted computer shop and repair center. Laptops, desktops, gaming PCs, CCTV, networking, data recovery — all under one roof in Piliyandala.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Magnetic>
            <Link to="/contact" className="btn-primary text-base !py-4 !px-8">
              Book a Repair <ArrowRight className="w-5 h-5" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="/products" className="btn-ghost text-base !py-4 !px-8">
              Browse Products
            </Link>
          </Magnetic>
        </div>

        {/* Quick stats */}
        <div className="reveal reveal-delay-4 mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
          {[
            { value: '95%', label: 'Devices Repaired' },
            { value: '6+', label: 'Years Experience' },
            { value: '4.9★', label: 'Customer Rating' },
          ].map((s) => (
            <div key={s.label} className="glass rounded-2xl py-4 px-3">
              <div className="font-display text-2xl sm:text-3xl font-bold gradient-text">{s.value}</div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-neon-blue animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ============ BRANDS MARQUEE ============ */
function BrandsMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <div className="text-center mb-6">
        <p className="text-xs tracking-[0.3em] uppercase text-slate-500">Authorized Dealer &amp; Service Partner</p>
      </div>
      <div className="relative flex overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <span key={i} className="font-display text-xl sm:text-2xl font-bold text-slate-600 hover:text-neon-blue transition-colors">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ WHY CHOOSE US ============ */
function WhyChoose() {
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>Built on <span className="gradient-text">Trust</span>, Driven by <span className="gradient-text">Results</span></>}
          subtitle="We don't just fix computers — we build relationships. Here's what makes RK Tech the preferred choice in Piliyandala."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, i) => {
            const Icon = iconMap[item.icon] || Zap;
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group glass-card p-7 hover:border-neon-blue/30 transition-all duration-500 hover:-translate-y-1`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center mb-5 group-hover:from-primary-500/30 group-hover:to-neon-blue/30 transition-all">
                  <Icon className="w-7 h-7 text-neon-blue" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ FEATURED SERVICES ============ */
function FeaturedServices() {
  const featured = services.slice(0, 6);
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Everything Tech, <span className="gradient-text">Under One Roof</span></>}
          subtitle="From a cracked laptop screen to a full office network installation — we've got you covered."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((s, i) => {
            const Icon = iconMap[s.icon] || Wrench;
            return (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className={`reveal reveal-delay-${(i % 3) + 1} group glass-card p-7 hover:border-neon-blue/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-neon-blue/5 group-hover:bg-neon-blue/10 transition-colors blur-2xl" />
                <div className="relative">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-neon-blue" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-neon-blue group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{s.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">{s.tagline}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs text-slate-500">From</span>
                    <span className="font-mono text-sm font-semibold text-neon-blue">{s.startingPrice}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="reveal text-center mt-10">
          <Link to="/services" className="btn-ghost">
            View All Services <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ============ FEATURED PRODUCTS ============ */
function FeaturedProducts() {
  const featured = products.slice(0, 4);
  return (
    <section className="section-pad relative">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Featured Products"
          title={<>Premium Tech, <span className="gradient-text">Honest Prices</span></>}
          subtitle="Hand-picked products from the world's leading brands, all with genuine warranty."
        />
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i} />
          ))}
        </div>
        <div className="reveal text-center mt-10">
          <Link to="/products" className="btn-ghost">
            View All Products <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ProductCard({ product, delay = 0 }: { product: typeof products[0]; delay?: number }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`reveal reveal-delay-${(delay % 4) + 1} group glass-card overflow-hidden hover:border-neon-blue/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-luxury`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <ProductImage name={product.name} image={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge === 'new' && <span className="badge bg-green-500/90 text-white">NEW</span>}
          {product.badge === 'Used' && <span className="badge bg-red-500/90 text-white">Used</span>}
          {product.badge === 'warranty' && <span className="badge bg-primary-500/90 text-white"><ShieldCheck className="w-3 h-3" /> {product.warranty}</span>}
        </div>
        {/* Quick view */}
        <div className={`absolute inset-0 bg-ink-950/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0'}`}>
          <Link to="/products" className="btn-ghost !py-2.5 !px-5 text-sm">
            Quick View
          </Link>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3.5 h-3.5 ${i < product.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} />
          ))}
        </div>
        <h3 className="font-display font-semibold text-base mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-xs text-slate-400 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-end justify-between">
          <div>
            {product.oldPrice && <span className="text-xs text-slate-500 line-through mr-2">Rs. {product.oldPrice.toLocaleString()}</span>}
            <span className="font-mono font-bold text-lg text-neon-blue">Rs. {product.price.toLocaleString()}</span>
          </div>
          <a
            href={`${business.social.whatsapp}?text=${encodeURIComponent(`Hi, I'm interested in the ${product.name} (Rs. ${product.price.toLocaleString()}). Is it available?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-[#25D366]/10 hover:bg-[#25D366] flex items-center justify-center transition-colors group/wa"
            aria-label="WhatsApp inquiry"
          >
            <svg className="w-4.5 h-4.5 text-[#25D366] group-hover/wa:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============ STATS ============ */
function StatsSection() {
  const r1 = useCounter(95);
  const r2 = useCounter(6);
  const r3 = useCounter(99);
  const r4 = useCounter(98);
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card p-10 sm:p-14 relative overflow-hidden noise-overlay">
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-neon-blue/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { ref: r1, suffix: '%', label: 'Devices Repaired' },
              { ref: r2, suffix: '+', label: 'Years of Experience' },
              { ref: r3, suffix: '%', label: 'Happy Customers' },
              { ref: r4, suffix: '%', label: 'Satisfaction Rate' },
            ].map((s) => (
              <div key={s.label}>
                <span ref={s.ref} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">0</span>
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">{s.suffix}</span>
                <div className="mt-2 text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ HOME VISIT ============ */
function HomeVisit() {
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card overflow-hidden grid lg:grid-cols-2 gap-0">
          <div className="p-10 sm:p-14 flex flex-col justify-center">
            <div className="reveal flex items-center gap-2 mb-4">
              <HomeIcon className="w-5 h-5 text-neon-blue" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue">We Come To You</span>
            </div>
            <h2 className="reveal reveal-delay-1 font-display text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Can't bring your device to us? <span className="gradient-text">We'll come to you.</span>
            </h2>
            <p className="reveal reveal-delay-2 text-slate-400 leading-relaxed mb-6">
              We offer on-site service for networking installations, CCTV setup, desktop repairs, and printer issues across Colombo and nearby areas. Just pick up the phone and we'll be at your door.
            </p>
            <div className="reveal reveal-delay-3 flex flex-wrap gap-3">
              <a href={`tel:${business.phoneRaw}`} className="btn-primary">
                <Phone className="w-4 h-4" /> {business.phone}
              </a>
              <Link to="/contact" className="btn-ghost">
                Book a Visit
              </Link>
            </div>
          </div>
          <div className="relative min-h-[300px] lg:min-h-full bg-gradient-to-br from-primary-900/40 to-ink-900 flex items-center justify-center p-10">
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="relative text-center">
              <div className="w-24 h-24 rounded-full bg-neon-blue/10 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <HomeIcon className="w-12 h-12 text-neon-blue" />
              </div>
              <div className="font-display text-2xl font-bold">On-Site Service</div>
              <div className="text-sm text-slate-400 mt-1">Colombo &amp; suburbs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ REVIEWS ============ */
function ReviewsSection() {
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Customer Reviews"
          title={<>Loved by <span className="gradient-text">Thousands</span> of Customers</>}
          subtitle="Real reviews from real people in Piliyandala and across Sri Lanka."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, 6).map((r, i) => (
            <div key={r.id} className={`reveal reveal-delay-${(i % 3) + 1} glass-card p-7 hover:border-neon-blue/20 transition-colors`}>
              <Quote className="w-8 h-8 text-neon-blue/30 mb-4" />
              <p className="text-sm text-slate-300 leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className={`w-4 h-4 ${j < r.rating ? 'fill-yellow-400 text-yellow-400' : 'text-slate-600'}`} />
                ))}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-neon-blue flex items-center justify-center font-display font-bold text-sm text-ink-950">
                  {r.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-slate-500">{r.service}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ OFFERS ============ */
function OffersSection() {
  const offerIcons: Record<string, typeof Sparkles> = { Sparkles, Search, Gamepad2 };
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Latest Offers"
          title={<>Save Big with <span className="gradient-text-warm">Exclusive Deals</span></>}
          subtitle="Limited-time offers on products and services. Grab them before they're gone."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((o, i) => {
            const Icon = offerIcons[o.icon] || Sparkles;
            return (
              <div key={o.id} className={`reveal reveal-delay-${i + 1} group glass-card p-7 hover:border-amber-400/30 transition-all hover:-translate-y-1 relative overflow-hidden`}>
                <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-amber-400/10 blur-2xl group-hover:bg-amber-400/20 transition-colors" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-1">{o.title}</h3>
                  <p className="text-sm text-slate-400 mb-4">{o.desc}</p>
                  <div className="flex items-center justify-between">
                    <code className="font-mono text-sm bg-amber-400/10 text-amber-400 px-3 py-1 rounded-lg">{o.code}</code>
                    <span className="text-xs text-slate-500">{o.expiry}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============ CTA ============ */
function CTASection() {
  return (
    <section className="section-pad relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="reveal glass-card p-10 sm:p-16 text-center relative overflow-hidden noise-overlay">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-neon-blue/15 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-balance">
              Ready to Get Your <span className="gradient-text">Tech Fixed?</span>
            </h2>
            <p className="mt-4 text-slate-400 max-w-xl mx-auto">
              Bring your device in or book a home visit today. Free diagnostics, honest pricing, and same-day service on most repairs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Magnetic>
                <Link to="/contact" className="btn-primary text-base !py-4 !px-8">
                  Book a Repair <ArrowRight className="w-5 h-5" />
                </Link>
              </Magnetic>
              <Magnetic>
                <a href={`tel:${business.phoneRaw}`} className="btn-ghost text-base !py-4 !px-8">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ MAP ============ */
function MapSection() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
        <SectionHeading
          eyebrow="Visit Us"
          title={<>Find Us in <span className="gradient-text">Piliyandala</span></>}
          subtitle="Conveniently located on Colombo Road. Free parking available."
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="glass-card overflow-hidden grid lg:grid-cols-3 gap-0">
          <div className="lg:col-span-2 h-[400px] relative">
            <iframe
              title="RK Tech Solutions Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31686.5!2d79.92!3d6.80!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDgnMDYuNCJOIDc5wrA1NSc0MS43IkU!5e0!3m2!1sen!2slk!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="p-8 flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-neon-blue mt-1 shrink-0" />
              <div>
                <div className="font-semibold text-sm mb-1">Address</div>
                <div className="text-sm text-slate-400">{business.address}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-neon-blue mt-1 shrink-0" />
              <div>
                <div className="font-semibold text-sm mb-1">Phone</div>
                <a href={`tel:${business.phoneRaw}`} className="text-sm text-slate-400 hover:text-neon-blue transition-colors">{business.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-neon-blue mt-1 shrink-0" />
              <div>
                <div className="font-semibold text-sm mb-1">Email</div>
                <a href={`mailto:${business.email}`} className="text-sm text-slate-400 hover:text-neon-blue transition-colors">{business.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-neon-blue mt-1 shrink-0" />
              <div>
                <div className="font-semibold text-sm mb-1">Hours</div>
                <div className="text-sm text-slate-400">{business.hours}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ NEWSLETTER ============ */
function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="section-pad">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="reveal">
          <h3 className="font-display text-2xl sm:text-3xl font-bold mb-3">Stay in the Loop</h3>
          <p className="text-slate-400 mb-6">Get exclusive offers, tech tips, and product alerts delivered to your inbox.</p>
          {submitted ? (
            <div className="glass-card p-6 text-neon-blue font-semibold">
              Thanks for subscribing! Check your inbox for a confirmation.
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 glass rounded-full px-5 py-3.5 text-sm outline-none focus:border-neon-blue/50 transition-colors"
              />
              <button type="submit" className="btn-primary !py-3.5">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
