import { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { faqs, business } from '@/data/site';

export default function FAQ() {
  useReveal();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
          subtitle="Everything you need to know about our services, pricing, and policies."
        />

        <div className="mt-14 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`reveal reveal-delay-${(i % 4) + 1} glass-card overflow-hidden transition-all`}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                aria-expanded={open === i}
              >
                <span className="font-display font-semibold text-base">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-neon-blue shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-400 ${open === i ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-6 pb-6 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="reveal mt-12 glass-card p-8 text-center">
          <h3 className="font-display text-xl font-bold mb-2">Still Have Questions?</h3>
          <p className="text-slate-400 mb-5">We're happy to help. Reach out and we'll get back to you quickly.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${business.phoneRaw}`} className="btn-primary">Call Us</a>
            <a href={business.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
