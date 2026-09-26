import StimulationPage from '@/components/LocalizedStimulationPage';
import CmsRoute from '@/components/CmsRoute';

export default function StimulationFracturingPage() {
  return <CmsRoute serviceKey="stimulation-fracturing" fallback={<StimulationPage />} />;
}
