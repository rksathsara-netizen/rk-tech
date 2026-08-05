import { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertCircle, Calendar } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { useReveal } from '@/hooks/useReveal';

const mockWarranties: Record<string, { product: string; warranty: string; expiry: string; valid: boolean }> = {
  'RK-W-001': { product: 'ASUS ROG Strix G16', warranty: '2-Year Warranty', expiry: '2026-12-15', valid: true },
  'RK-W-002': { product: 'Custom Gaming PC Build', warranty: '3-Year Warranty', expiry: '2027-01-10', valid: true },
  'RK-W-003': { product: 'Samsung 990 Pro 2TB SSD', warranty: '5-Year Warranty', expiry: '2029-11-20', valid: true },
  'RK-W-004': { product: 'HP 24" FHD Monitor', warranty: '3-Year Warranty', expiry: '2024-08-01', valid: false },
};

export default function WarrantyChecker() {
  useReveal();
  const [code, setCode] = useState('');
  const [result, setResult] = useState<typeof mockWarranties[string] | null | undefined>(undefined);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setResult(mockWarranties[code.trim().toUpperCase()] || null);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionHeading
          eyebrow="Warranty Checker"
          title={<>Check Your <span className="gradient-text">Warranty</span></>}
          subtitle="Enter your warranty code to verify coverage status and expiration date."
        />

        <div className="reveal mt-12 glass-card p-8">
          <form onSubmit={handleCheck} className="flex gap-3">
            <div className="relative flex-1">
              <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="e.g. RK-W-001"
                className="w-full glass rounded-full pl-12 pr-4 py-3.5 text-sm outline-none focus:border-neon-blue/50 transition-colors font-mono uppercase"
              />
            </div>
            <button type="submit" className="btn-primary !py-3.5">
              Verify
            </button>
          </form>
          <p className="text-xs text-slate-500 mt-3">Try: RK-W-001, RK-W-002, RK-W-003, or RK-W-004</p>
        </div>

        {result !== undefined && (
          <div className="reveal mt-6 glass-card p-8">
            {result ? (
              <>
                <div className="flex items-center gap-3 mb-6">
                  {result.valid ? (
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  ) : (
                    <AlertCircle className="w-8 h-8 text-red-500" />
                  )}
                  <div>
                    <div className="font-display text-lg font-bold">{result.product}</div>
                    <div className={`text-sm font-semibold ${result.valid ? 'text-green-500' : 'text-red-500'}`}>
                      {result.valid ? 'Warranty Active' : 'Warranty Expired'}
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Coverage</div>
                    <div className="text-sm font-semibold">{result.warranty}</div>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <div className="text-xs text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1"><Calendar className="w-3 h-3" /> Expires</div>
                    <div className="text-sm font-semibold">{result.expiry}</div>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3 py-4">
                <AlertCircle className="w-6 h-6 text-amber-500" />
                <div>
                  <div className="font-semibold">Warranty code not found</div>
                  <div className="text-sm text-slate-400">Please check your code and try again.</div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
