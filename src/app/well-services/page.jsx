import WellInterventionPage from '@/components/WellInterventionPage';
import CmsRoute from '@/components/CmsRoute';

export default function WellServicesPage() {
  return <CmsRoute serviceKey="well-services" fallback={<WellInterventionPage />} />;
}
