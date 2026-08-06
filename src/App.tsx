import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@/hooks/useTheme';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FloatingActions } from '@/components/FloatingActions';
import { CustomCursor } from '@/components/CustomCursor';
import { Loader } from '@/components/Loader';
import { ScrollToTop } from '@/components/ScrollToTop';
import { PageTransition } from '@/components/PageTransition';
import { Aurora } from '@/components/Aurora';
import { useReveal } from '@/hooks/useReveal';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Products = lazy(() => import('@/pages/Products'));
const Services = lazy(() => import('@/pages/Services'));
const ServiceDetail = lazy(() => import('@/pages/ServiceDetail'));
const GamingPCs = lazy(() => import('@/pages/GamingPCs'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Contact = lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const RepairStatus = lazy(() => import('@/pages/RepairStatus'));
const WarrantyChecker = lazy(() => import('@/pages/WarrantyChecker'));

function Shell() {
  useReveal();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CustomCursor />
      <Aurora />
      <Loader />
      <Navbar />
      <PageTransition>
        <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center"><div className="w-10 h-10 rounded-full border-2 border-neon-blue border-t-transparent animate-spin" /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/gaming-pcs" element={<GamingPCs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/repair-status" element={<RepairStatus />} /> */}
            <Route path="/warranty-checker" element={<WarrantyChecker />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Shell />
    </ThemeProvider>
  );
}
