import WellInterventionPage from '@/components/WellInterventionPage';
import CmsRoute from '@/components/CmsRoute';

export default function WellServicesPage() {
  return <CmsRoute pageKey="well-services" fallback={<WellInterventionPage />} />;
}
