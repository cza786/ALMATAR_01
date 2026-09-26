import DrillingWorkoverPage from '@/components/LocalizedDrillingWorkoverPage';
import CmsRoute from '@/components/CmsRoute';

export default function Page() {
  return <CmsRoute serviceKey="drilling-workover" fallback={<DrillingWorkoverPage />} />;
}
