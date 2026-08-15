import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'kiftfbv2',
    dataset: 'production',
  },
  studioHost: 'almatar',
  deployment: {
    autoUpdates: true,
  },
})
