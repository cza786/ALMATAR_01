export const metadata = {
  title: 'Slickline Services | ALMATAR Petroleum Services',
  description: 'Reliable downhole solutions for well measurement, mechanical intervention, pressure & temperature surveys, plug setting, and reservoir monitoring.',
};

import SlicklineServicesPage from '@/components/SlicklineServicesPage';
import CmsRoute from '@/components/CmsRoute';

export default function SlicklinePage() {
  return <CmsRoute pageKey="slickline" fallback={<SlicklineServicesPage />} />;
}
