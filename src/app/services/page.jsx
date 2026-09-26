import ServicesOverview from '@/components/ServicesOverview';
import CmsRoute from '@/components/CmsRoute';

export const metadata = {
  title: 'Services | ALMATAR Petroleum Services',
  description: 'Explore ALMATAR integrated oilfield, well services, construction, and manpower capabilities.',
};

export default function ServicesPage() {
  return <CmsRoute pageKey="services" fallback={<ServicesOverview standalone />} />;
}
