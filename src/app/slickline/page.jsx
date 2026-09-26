export const metadata = {
  title: 'Slickline Services | ALMATAR Petroleum Services',
  description: 'Reliable downhole solutions for well measurement, mechanical intervention, pressure & temperature surveys, plug setting, and reservoir monitoring.',
};

import CmsRoute from '@/components/CmsRoute';
import SlicklineServicesPage from '@/components/SlicklineServicesPage';

export default function SlicklinePage() {
  return <CmsRoute serviceKey="slickline-services" fallback={<SlicklineServicesPage />} />;
}
