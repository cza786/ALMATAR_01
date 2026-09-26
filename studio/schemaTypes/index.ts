import { siteSettingsType } from './siteSettingsType'
import { serviceType, servicePageSectionType, servicePageCardType } from './serviceType'
import { homePageType } from './homePageType'
import { aboutPageType } from './aboutPageType'
import { careersPageType } from './careersPageType'
import { contactPageType } from './contactPageType'
import { contactSubmissionType } from './contactSubmissionType'
import { jobType } from './jobType'
import { qhsePageType, qhseSafetyProtocolType } from './qhsePageType'
import { applicationType } from './applicationType'
import { websitePageType, websitePageSectionType, websitePageCardType } from './websitePageType'

export const schemaTypes = [
  // Singleton / Page Types
  siteSettingsType,
  homePageType,
  aboutPageType,
  careersPageType,
  contactPageType,
  websitePageType,
  websitePageSectionType,
  websitePageCardType,

  // Collection Types
  serviceType,
  servicePageSectionType,
  servicePageCardType,
  jobType,
  qhsePageType,
  qhseSafetyProtocolType,
  applicationType,
  contactSubmissionType,
]
