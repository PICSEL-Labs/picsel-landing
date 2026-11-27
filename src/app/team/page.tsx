import type { Metadata } from 'next';

import { pageMetadata } from '@/shared/constants/seo';
import Team from '@/views/Team';

export const metadata: Metadata = pageMetadata('/team');

export default Team;
