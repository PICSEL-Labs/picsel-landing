import type { Metadata } from 'next';

import { pageMetadata } from '@/shared/constants/seo';
import FeatureMap from '@/views/FeatureMap';

export const metadata: Metadata = pageMetadata('/features/map');

export default FeatureMap;
