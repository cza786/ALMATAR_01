import WellTestingPage from '@/components/WellTestingPage';
import CmsRoute from '@/components/CmsRoute';

export default function Page() {
  return <CmsRoute pageKey="well-testing" fallback={<WellTestingPage />} />;
}
