import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { business, services } from '@/data/site';

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/5 noise-overlay">
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center gap-3">
  <img
    src="/logo.svg"
    alt="RK Tech Solutions"
    className="h-16.5 w-auto"
  />
</div>
              <div>
                <div className="font-display font-bold text-lg leading-none">RK Tech Solutions</div>
                <div className="text-[10px] tracking-[0.2em] text-slate-500 uppercase mt-1">Computer Shop & Repair</div>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mb-5">
              Your trusted technology partner in Piliyandala. From laptop repairs to custom gaming PC builds, CCTV installation, and data recovery — we handle it all with expertise and care.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: business.social.facebook, label: 'Facebook' },
                { icon: Instagram, href: business.social.instagram, label: 'Instagram' },
                { icon: Youtube, href: business.social.youtube, label: 'YouTube' },
                { icon: MessageCircle, href: business.social.whatsapp, label: 'WhatsApp' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-neon-blue/50 hover:text-neon-blue transition-all hover:-translate-y-0.5"
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">Services</h4>
            <ul className="space-y-2.5">
              {services.slice(0, 7).map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-sm text-slate-400 hover:text-neon-blue transition-colors flex items-center gap-1 group"
                  >
                    {s.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Products', to: '/products' },
                { label: 'Gaming PCs', to: '/gaming-pcs' },
                { label: 'FAQ', to: '/faq' },
                { label: 'Contact', to: '/contact' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 hover:text-neon-blue transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-slate-200">Get In Touch</h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-neon-blue mt-0.5 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-neon-blue shrink-0" />
                <a href={`tel:${business.phoneRaw}`} className="hover:text-neon-blue transition-colors">{business.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neon-blue shrink-0" />
                <a href={`mailto:${business.email}`} className="hover:text-neon-blue transition-colors">{business.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-neon-blue mt-0.5 shrink-0" />
                <span>{business.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} RK Tech Solutions. All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-slate-500">
            <Link to="/privacy-policy" className="hover:text-neon-blue transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-neon-blue transition-colors">Terms &amp; Conditions</Link>
            <Link to="/faq" className="hover:text-neon-blue transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
