import WellheadXmasTreePage from '@/components/WellheadXmasTreePage';
import CmsRoute from '@/components/CmsRoute';

export default function Page() {
  return <CmsRoute pageKey="wellhead-xmas-tree" fallback={<WellheadXmasTreePage />} />;
}
