import type { Metadata } from 'next';

import { pageMetadata } from '@/shared/constants/seo';
import Service from '@/views/Service';

export const metadata: Metadata = pageMetadata('/service');

export default Service;
