import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check, MessageCircle } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';
import { business, services } from '@/data/site';

export default function Contact() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 4000);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact Us"
          title={<>Get in <span className="gradient-text">Touch</span></>}
          subtitle="Have a question or need a quote? Call us, message us on WhatsApp, or fill out the form below."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {/* Contact info cards */}
          <div className="space-y-4">
            {[
              { icon: Phone, label: 'Phone', value: business.phone, href: `tel:${business.phoneRaw}` },
              { icon: Mail, label: 'Email', value: business.email, href: `mailto:${business.email}` },
              { icon: MapPin, label: 'Address', value: business.address },
              { icon: Clock, label: 'Hours', value: business.hours },
            ].map((c, i) => (
              <a
                key={c.label}
                href={c.href || '#'}
                className={`reveal reveal-delay-${i + 1} block glass-card p-5 hover:border-neon-blue/30 transition-colors group`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500/20 to-neon-blue/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <c.icon className="w-5 h-5 text-neon-blue" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{c.label}</div>
                    <div className="text-sm text-slate-200">{c.value}</div>
                  </div>
                </div>
              </a>
            ))}
            <a
              href={business.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal reveal-delay-5 block glass-card p-5 hover:border-[#25D366]/40 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">WhatsApp</div>
                  <div className="text-sm text-slate-200">Chat with us instantly</div>
                </div>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="reveal glass-card p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-slate-400">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">Full Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-neon-blue/50 transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-slate-400 mb-2 block">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-neon-blue/50 transition-colors"
                          placeholder="077 123 4567"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-neon-blue/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">Service Needed</label>
                      <select
                        value={form.service}
                        onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-neon-blue/50 transition-colors cursor-pointer"
                      >
                        <option value="">Select a service...</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.name}>{s.name}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-slate-400 mb-2 block">Message</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full glass rounded-xl px-4 py-3 text-sm outline-none focus:border-neon-blue/50 transition-colors resize-none"
                        placeholder="Describe your issue or question..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full">
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="reveal mt-10 glass-card overflow-hidden h-[400px]">
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
      </div>
    </div>
  );
}
