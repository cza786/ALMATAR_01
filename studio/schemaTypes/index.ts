import { siteSettingsType } from './siteSettingsType'
import { serviceType } from './serviceType'
import { homePageType } from './homePageType'
import { aboutPageType } from './aboutPageType'
import { careersPageType } from './careersPageType'
import { contactPageType } from './contactPageType'
import { contactSubmissionType } from './contactSubmissionType'
import { jobType } from './jobType'
import { applicationType } from './applicationType'

export const schemaTypes = [
  // Singleton / Page Types
  siteSettingsType,
  homePageType,
  aboutPageType,
  careersPageType,
  contactPageType,

  // Collection Types
  serviceType,
  jobType,
  applicationType,
  contactSubmissionType,
]
