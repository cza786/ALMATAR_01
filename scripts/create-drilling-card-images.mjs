import path from 'node:path';
import sharp from 'sharp';

const outputDir = path.resolve('public/images/policies-photo/services/drilling_workover');
const images = {
  'card-directional-drilling.webp': 'public/images/service_directional_drilling.webp',
  'card-casing-running.webp': 'public/images/hero_drilling_rig.webp',
  'card-cementing-support.webp': 'public/images/policies-photo/services/almatar_zonal_isolation_photos/03_barrier_integrity_wellbore_visual.webp',
  'card-workover-operations.webp': 'public/images/policies-photo/services/almatar_total_field_all_photos/03_rig_and_site_mobilization-hd.webp',
  'card-rig-support.webp': 'public/images/policies-photo/services/drilling_workover/well-intervention-hero-clear.webp',
  'card-wellbore-optimization.webp': 'public/images/policies-photo/services/drilling_workover/field-operations-clear.webp',
};

for (const [name, source] of Object.entries(images)) {
  await sharp(path.resolve(source))
    .resize({ width: 1200, height: 1765, fit: 'cover', position: 'attention' })
    .webp({ quality: 86, effort: 6, smartSubsample: true })
    .toFile(path.join(outputDir, name));
  console.log(`Created ${name}`);
}
