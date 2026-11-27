import type { Metadata } from 'next';

import { pageMetadata } from '@/shared/constants/seo';
import FeatureQr from '@/views/FeatureQr';

export const metadata: Metadata = pageMetadata('/features/qr');

export default FeatureQr;
