import type { Metadata } from 'next';

import { pageMetadata } from '@/shared/constants/seo';
import Home from '@/views/Home';

export const metadata: Metadata = pageMetadata('/');

export default Home;
