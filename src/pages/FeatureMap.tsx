import FeatureBanner from '@/widgets/features/FeatureBanner';
import PhotoboothExplore from '@/widgets/features/PhotoboothExplore';
import Footer from '@/widgets/layout/Footer';

// Figma: 주요 기능_1. 통합 지도 — Desktop 3609:59222 / Tablet 4687:14159 / Mobile 4687:14248
export default function FeatureMap() {
  return (
    <main>
      <FeatureBanner />
      <PhotoboothExplore />
      <Footer />
    </main>
  );
}
