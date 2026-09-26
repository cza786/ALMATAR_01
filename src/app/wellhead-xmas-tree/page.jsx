import WellheadXmasTreePage from '@/components/WellheadXmasTreePage';
import CmsRoute from '@/components/CmsRoute';

export default function Page() {
  return <CmsRoute serviceKey="wellhead-xmas-tree" fallback={<WellheadXmasTreePage />} />;
}
