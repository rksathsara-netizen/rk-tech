import { useReveal } from '@/hooks/useReveal';

export default function Terms() {
  useReveal();
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="reveal">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue">Legal</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Terms &amp; Conditions</h1>
          <p className="mt-4 text-slate-400">Last updated: January 2025</p>
        </div>

        <div className="reveal mt-12 glass-card p-8 sm:p-10 space-y-8 text-slate-300 leading-relaxed">
          <Section title="1. Acceptance of Terms">
            By accessing and using the RK Tech Solutions website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
          </Section>
          <Section title="2. Services">
            RK Tech Solutions provides computer repair, sales, and related tech services. We reserve the right to refuse service if a device is beyond repair or if the requested service falls outside our expertise.
          </Section>
          <Section title="3. Repair Terms">
            All repairs are subject to a free diagnostic assessment. We will provide a quote before commencing any work. Your approval is required before repairs begin. If you decline the quote after diagnosis, no repair fee is charged. Parts used are genuine and covered by manufacturer warranty.
          </Section>
          <Section title="4. Warranty">
            Repairs are backed by a 30-day service warranty covering the specific issue addressed. Parts carry their respective manufacturer warranties (typically 1–5 years). Warranty does not cover accidental damage, liquid damage, or issues unrelated to the original repair.
          </Section>
          <Section title="5. Data Privacy">
            We take reasonable precautions to protect your data during repairs. However, we strongly recommend backing up your data before bringing in your device. RK Tech Solutions is not liable for data loss during repair procedures.
          </Section>
          <Section title="6. Unclaimed Devices">
            Devices not picked up within 30 days of repair completion may be subject to a storage fee of Rs. 100 per day. Devices unclaimed for 90 days may be disposed of or sold to recover repair costs.
          </Section>
          <Section title="7. Pricing">
            All prices are in Sri Lankan Rupees (LKR) and are subject to change without notice. Quotes provided are valid for 7 days. A 50% deposit may be required for custom builds and large orders.
          </Section>
          <Section title="8. Returns and Refunds">
            Products may be returned within 7 days of purchase if unused and in original packaging. Refunds are issued to the original payment method. Custom-built PCs are non-refundable but covered by warranty.
          </Section>
          <Section title="9. Limitation of Liability">
            RK Tech Solutions is not liable for indirect, incidental, or consequential damages arising from our services. Our total liability is limited to the amount paid for the specific service or product.
          </Section>
          <Section title="10. Contact">
            For questions about these Terms, contact us at info@rktechsolutions.lk or +94 77 123 4567.
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-xl font-bold mb-3 text-slate-100">{title}</h2>
      <p className="text-sm leading-relaxed">{children}</p>
    </div>
  );
}
