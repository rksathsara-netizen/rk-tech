import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle , Phone, ArrowUp, Wrench, ShieldCheck } from 'lucide-react';
import { business } from '@/data/site';

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Quick tools panel */}
      {toolsOpen && (
        <div className="flex flex-col gap-2 mb-1 animate-[float_0.3s_ease]">
          <Link
            to="/repair-status"
            className="glass-card px-4 py-3 shadow-luxury flex items-center gap-3 hover:border-neon-blue/50 transition-colors group"
            onClick={() => setToolsOpen(false)}
          >
            <Wrench className="w-5 h-5 text-neon-blue" />
            <span className="text-sm font-medium">Repair Status</span>
          </Link>
          <Link
            to="/warranty-checker"
            className="glass-card px-4 py-3 shadow-luxury flex items-center gap-3 hover:border-neon-blue/50 transition-colors group"
            onClick={() => setToolsOpen(false)}
          >
            <ShieldCheck className="w-5 h-5 text-neon-blue" />
            <span className="text-sm font-medium">Warranty Check</span>
          </Link>
        </div>
      )}

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`w-11 h-11 rounded-full glass flex items-center justify-center hover:border-neon-blue/50 transition-all duration-300 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Tools toggle
      <button
        onClick={() => setToolsOpen(!toolsOpen)}
        aria-label="Quick tools"
        className="w-11 h-11 rounded-full glass flex items-center justify-center hover:border-neon-blue/50 transition-colors"
      >
        <Wrench className={`w-5 h-5 transition-transform duration-300 ${toolsOpen ? 'rotate-90' : ''}`} />
      </button> */}

      {/* Call */}
      <a
        href={`tel:${business.phoneRaw}`}
        aria-label="Call us"
        className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center shadow-glow-blue hover:scale-110 transition-transform"
      >
        <Phone className="w-5 h-5 text-white" />
      </a>

      {/* WhatsApp */}
      <a
        href={business.social.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform relative"
      >
       <FaWhatsapp className="w-7 h-7 text-white" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      </a>
    </div>
  );
}
