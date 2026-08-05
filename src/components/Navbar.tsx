import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Phone, ChevronDown } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { business, services } from '@/data/site';
import { Magnetic } from './Magnetic';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors hover:text-neon-blue ${
      isActive ? 'text-neon-blue' : 'text-slate-300'
    }`;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <nav
          className={`mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-500 ${
            scrolled ? '' : ''
          }`}
        >
          <div
            className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
              scrolled
                ? 'glass shadow-luxury'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
  <img
    src="/logo.svg"
    alt="RK Tech Solutions"
    className="w-11 h-11 object-contain"
  />

  <div className="hidden sm:block">
    <div className="font-display font-bold text-base leading-none">
      RK Tech
    </div>
    <div className="text-[10px] tracking-[0.2em] text-slate-400 uppercase">
      Solutions
    </div>
  </div>
</Link>
            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              <NavLink to="/" className={navLinkClass} end>Home</NavLink>
              <NavLink to="/about" className={navLinkClass}>About</NavLink>
              <NavLink to="/products" className={navLinkClass}>Products</NavLink>

              {/* Services dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-neon-blue transition-colors">
                  Services <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[640px]">
                    <div className="glass-card p-5 shadow-luxury grid grid-cols-2 gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.id}
                          to={`/services/${s.slug}`}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="w-9 h-9 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-neon-blue font-mono text-xs font-bold">{s.name[0]}</span>
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-200 group-hover:text-neon-blue transition-colors">{s.name}</div>
                            <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{s.tagline}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/gaming-pcs" className={navLinkClass}>Gaming PCs</NavLink>
              <NavLink to="/faq" className={navLinkClass}>FAQ</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={toggle}
                aria-label="Toggle theme"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-neon-blue/50 transition-colors"
              >
                {theme === 'dark' ? <Sun className="w-4.5 h-4.5 text-neon-blue" /> : <Moon className="w-4.5 h-4.5 text-primary-600" />}
              </button>

              <Magnetic strength={0.2}>
                <a
                  href={`tel:${business.phoneRaw}`}
                  className="hidden sm:inline-flex btn-primary !py-2.5 !px-5 text-sm"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </Magnetic>

              <button
                onClick={() => setOpen(!open)}
                aria-label="Menu"
                className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm glass border-l border-white/10 p-6 pt-24 overflow-y-auto transition-transform duration-400 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-1">
            <MobileLink to="/" label="Home" />
            <MobileLink to="/about" label="About" />
            <MobileLink to="/products" label="Products" />

            <div className="pt-4 pb-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">Services</div>
            {services.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className="py-2.5 px-3 rounded-lg text-sm text-slate-300 hover:text-neon-blue hover:bg-white/5 transition-colors"
              >
                {s.name}
              </Link>
            ))}

            <div className="pt-4 pb-2 text-xs font-semibold tracking-widest text-slate-500 uppercase">More</div>
            <MobileLink to="/gaming-pcs" label="Gaming PCs" />
            <MobileLink to="/faq" label="FAQ" />
            <MobileLink to="/contact" label="Contact" />
            <MobileLink to="/privacy-policy" label="Privacy Policy" />
            <MobileLink to="/terms" label="Terms & Conditions" />
          </div>

          <a href={`tel:${business.phoneRaw}`} className="btn-primary w-full mt-6">
            <Phone className="w-4 h-4" /> {business.phone}
          </a>
        </div>
      </div>
    </>
  );
}

function MobileLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `py-3 px-3 rounded-lg text-base font-medium transition-colors ${
          isActive ? 'text-neon-blue bg-neon-blue/10' : 'text-slate-200 hover:bg-white/5'
        }`
      }
    >
      {label}
    </NavLink>
  );
}
