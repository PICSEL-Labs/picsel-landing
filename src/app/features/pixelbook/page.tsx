import type { Metadata } from 'next';

import { pageMetadata } from '@/shared/constants/seo';
import FeaturePixelBook from '@/views/FeaturePixelBook';

export const metadata: Metadata = pageMetadata('/features/pixelbook');

export default FeaturePixelBook;
