import ArchiveSection from '@/widgets/home/ArchiveSection';
import CtaSection from '@/widgets/home/CtaSection';
import FaqSection from '@/widgets/home/FaqSection';
import HeroSection from '@/widgets/home/HeroSection';
import IntroSection from '@/widgets/home/IntroSection';
import MapSection from '@/widgets/home/MapSection';
import PainSection from '@/widgets/home/PainSection';
import UploadSection from '@/widgets/home/UploadSection';
import WishSection from '@/widgets/home/WishSection';
import Footer from '@/widgets/layout/Footer';

// Figma: 홈/Desktop 4278:41417
export default function Home() {
  return (
    <main>
      <HeroSection />
      <PainSection />
      <WishSection />
      <IntroSection />
      <MapSection />
      <ArchiveSection />
      <UploadSection />
      <FaqSection />
      <CtaSection />
      <Footer isDark />
    </main>
  );
}
