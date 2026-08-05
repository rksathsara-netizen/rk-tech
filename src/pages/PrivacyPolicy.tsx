import { useReveal } from '@/hooks/useReveal';

export default function PrivacyPolicy() {
  useReveal();
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="reveal">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-neon-blue">Legal</span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-slate-400">Last updated: January 2025</p>
        </div>

        <div className="reveal mt-12 glass-card p-8 sm:p-10 space-y-8 text-slate-300 leading-relaxed">
          <Section title="1. Introduction">
            RK Tech Solutions ("we", "our", "us") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website or services.
          </Section>
          <Section title="2. Information We Collect">
            We collect information you provide directly to us, including your name, phone number, email address, and device details when you book a repair, request a quote, or contact us. We also collect technical information such as your IP address and browser type for security and analytics purposes.
          </Section>
          <Section title="3. How We Use Your Information">
            Your information is used to process repair requests, communicate about your devices, provide quotes, send service updates, and improve our website and services. We never sell your personal information to third parties.
          </Section>
          <Section title="4. Data Security">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All data is stored securely and access is restricted to authorized personnel only.
          </Section>
          <Section title="5. Cookies">
            Our website uses cookies to enhance your browsing experience, remember preferences, and analyze traffic. You can disable cookies in your browser settings, though some features may not function properly.
          </Section>
          <Section title="6. Third-Party Services">
            We may use third-party services such as Google Maps for location display and WhatsApp for communication. These services have their own privacy policies governing how they handle your data.
          </Section>
          <Section title="7. Your Rights">
            You have the right to access, correct, or delete your personal information held by us. To exercise these rights, please contact us using the details provided on our Contact page.
          </Section>
          <Section title="8. Changes to This Policy">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </Section>
          <Section title="9. Contact Us">
            If you have questions about this privacy policy or our data practices, please contact us at info@rktechsolutions.lk or call +94 77 123 4567.
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
