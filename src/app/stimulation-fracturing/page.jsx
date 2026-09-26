import StimulationPage from '@/components/LocalizedStimulationPage';
import CmsRoute from '@/components/CmsRoute';

export default function StimulationFracturingPage() {
  return <CmsRoute pageKey="stimulation-fracturing" fallback={<StimulationPage />} />;
}
