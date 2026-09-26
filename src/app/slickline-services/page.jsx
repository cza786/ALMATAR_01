import SlicklineServicesPage from '@/components/SlicklineServicesPage';
import CmsRoute from '@/components/CmsRoute';

export const metadata = {
  title: 'Slickline Services | ALMATAR Petroleum Services',
  description: 'Reliable downhole solutions for well measurement, mechanical intervention, pressure & temperature surveys, plug setting, and reservoir monitoring.',
};

export default function Page() {
  return <CmsRoute pageKey="slickline-services" fallback={<SlicklineServicesPage />} />;
}
