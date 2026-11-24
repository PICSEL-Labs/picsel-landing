import { useEffect } from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router';

import Contact from '@/pages/Contact';
import FeatureMap from '@/pages/FeatureMap';
import FeaturePixelBook from '@/pages/FeaturePixelBook';
import FeatureQr from '@/pages/FeatureQr';
import Home from '@/pages/Home';
import Service from '@/pages/Service';
import Team from '@/pages/Team';
import { PAGE_META } from '@/shared/constants/seo';
import { revealOnScroll } from '@/shared/lib/reveal';
import Navbar from '@/widgets/layout/Navbar';

// The router comes from main.tsx (browser) or entry-server.tsx (build-time prerender).
export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = (PAGE_META[pathname] ?? PAGE_META['/']).title;

    return revealOnScroll();
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route
          path="/features"
          element={<Navigate to="/features/map" replace />}
        />
        <Route path="/features/map" element={<FeatureMap />} />
        <Route path="/features/qr" element={<FeatureQr />} />
        <Route path="/features/pixelbook" element={<FeaturePixelBook />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
