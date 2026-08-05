import { useState } from 'react';
import { Search, CheckCircle2, AlertCircle, Wrench } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const mockStatuses: Record<string, { status: string; stage: number; device: string; date: string }> = {
  'RK-2401': { status: 'Repair in Progress', stage: 2, device: 'ASUS ROG Strix G16', date: '2024-12-20' },
  'RK-2402': { status: 'Awaiting Parts', stage: 1, device: 'Dell XPS 15', date: '2024-12-22' },
  'RK-2403': { status: 'Ready for Pickup', stage: 4, device: 'HP Desktop PC', date: '2024-12-18' },
  'RK-2404': { status: 'Completed', stage: 4, device: 'Lenovo Legion 5', date: '2024-12-15' },
};

const stages = ['Received', 'Diagnosed', 'Repair in Progress', 'Ready for Pickup'];

export default function RepairStatus() {
  useReveal();
  const [ticket, setTicket] = useState('');
  const [result, setResult] = useState<typeof mockStatuses[string] | null | undefined>(undefined);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const code = ticket.trim().toUpperCase();
    setResult(mockStatuses[code] || null);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Repair Status"
          title={<>Track Your <span className="gradient-text">Repair</span></>}
          subtitle="Enter your repair ticket number to check the status of your device."
        />

        <div className="reveal mt-12 glass-card p-8">
          <form onSubmit={handleSearch} className="flex gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                value={ticket}
                onChange={(e) => setTicket(e.target.value)}
                placeholder="e.g. RK-2401"
                className="w-full glass rounded-full pl-12 pr-4 py-3.5 text-sm outline-none focus:border-neon-blue/50 transition-colors font-mono uppercase"
              />
            </div>
            <button type="submit" className="btn-primary !py-3.5">
              <Search className="w-4 h-4" /> Check
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-3">Try: RK-2401, RK-2402, RK-2403, or RK-2404</p>
        </div>

        {result !== undefined && (
          <div className="reveal mt-6 glass-card p-8">
            {result ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <div>
                    <div className="font-display text-lg font-bold">{result.device}</div>
                    <div className="text-sm text-slate-400">Ticket: {ticket.toUpperCase()} &middot; Received {result.date}</div>
                  </div>
                </div>
                <div className="mb-2 text-sm font-semibold text-neon-blue">{result.status}</div>
                <div className="flex gap-2">
                  {stages.map((stage, i) => (
                    <div key={stage} className="flex-1">
                      <div className={`h-2 rounded-full ${i <= result.stage ? 'bg-gradient-to-r from-primary-500 to-neon-blue' : 'bg-white/5'}`} />
                      <div className={`text-xs mt-2 text-center ${i <= result.stage ? 'text-neon-blue' : 'text-slate-600'}`}>{stage}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3 text-center py-4">
                <AlertCircle className="w-6 h-6 text-amber-500" />
                <div>
                  <div className="font-semibold">Ticket not found</div>
                  <div className="text-sm text-slate-400">Please check your ticket number and try again.</div>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="reveal mt-8 glass-card p-6 flex items-start gap-4">
          <Wrench className="w-5 h-5 text-neon-blue mt-0.5 shrink-0" />
          <p className="text-sm text-slate-400">
            Lost your ticket number? Call us or message us on WhatsApp with your name and phone number, and we'll look it up for you.
          </p>
        </div>
      </div>
    </div>
  );
}
