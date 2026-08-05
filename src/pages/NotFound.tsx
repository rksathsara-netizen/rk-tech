import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] rounded-full bg-primary-600/15 blur-[120px] animate-aurora" />
        <div className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] rounded-full bg-neon-blue/10 blur-[100px] animate-aurora-2" />
      </div>

      <div className="text-center relative">
        <div className="relative inline-block mb-8">
          <span className="font-display text-[10rem] sm:text-[14rem] font-bold gradient-text leading-none">404</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-24 h-24 sm:w-32 sm:h-32 text-neon-blue/10" />
          </div>
        </div>

        <h1 className="font-display text-2xl sm:text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-slate-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary">
            <Home className="w-4 h-4" /> Back to Home
          </Link>
          <button onClick={() => window.history.back()} className="btn-ghost">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
