import { groq } from 'next-sanity'

// Site Settings
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings" || _id == "siteSettings"][0] {
    title,
    logo,
    descriptionEn,
    descriptionAr,
    copyrightEn,
    copyrightAr,
    contactEmail,
    socialLinks
  }
`

// Home Page
export const HOME_PAGE_QUERY = groq`
  *[_type == "homePage" || _id == "homePage"][0] {
    heroSlides[] {
      badgeEn,
      badgeAr,
      titleEn,
      titleAr,
      subtitleEn,
      subtitleAr,
      image,
      link
    },
    introEyebrowEn,
    introEyebrowAr,
    introTitleEn,
    introTitleAr,
    introDescEn,
    introDescAr,
    introImage,
    stats[] {
      value,
      prefix,
      suffix,
      labelEn,
      labelAr
    }
  }
`

// About Page
export const ABOUT_PAGE_QUERY = groq`
  *[_type == "aboutPage" || _id == "aboutPage"][0] {
    bannerImage,
    eyebrowEn,
    eyebrowAr,
    pageTitleEn,
    pageTitleAr,
    visionTitleEn,
    visionTitleAr,
    visionDescEn,
    visionDescAr,
    missionTitleEn,
    missionTitleAr,
    missionDescEn,
    missionDescAr,
    operationsImage,
    syriaTitleEn,
    syriaTitleAr,
    syriaDescEn,
    syriaDescAr
  }
`

// Careers Page
export const CAREERS_PAGE_QUERY = groq`
  *[_type == "careersPage" || _id == "careersPage"][0] {
    bannerImage,
    eyebrowEn,
    eyebrowAr,
    pageTitleEn,
    pageTitleAr,
    pageDescEn,
    pageDescAr,
    cultureImage,
    "jobs": *[_type == "job" && isOpen == true] | order(order asc, _createdAt desc) {
      _id,
      "slug": slug.current,
      titleEn,
      titleAr,
      departmentEn,
      departmentAr,
      locationEn,
      locationAr,
      employmentType,
      employmentTypeAr,
      descriptionEn,
      descriptionAr,
      requirementsEn,
      requirementsAr,
      isOpen
    }
  }
`

export const JOB_DETAIL_QUERY = groq`
  *[_type == "job" && isOpen == true && (slug.current == $slug || _id == $slug)][0] {
    _id,
    "slug": slug.current,
    titleEn, titleAr,
    departmentEn, departmentAr,
    locationEn, locationAr,
    employmentType, employmentTypeAr,
    descriptionEn, descriptionAr,
    requirementsEn, requirementsAr,
    companyEn, companyAr,
    reportsToEn, reportsToAr,
    sectorEn, sectorAr,
    experienceEn, experienceAr,
    educationEn, educationAr,
    languageEn, languageAr,
    summaryEn, summaryAr,
    responsibilitiesEn, responsibilitiesAr,
    qualificationsEn, qualificationsAr,
    experienceRequirementsEn, experienceRequirementsAr,
    workEnvironmentEn, workEnvironmentAr,
    heroImage,
    applicationEmail
  }
`

// Contact Page
export const CONTACT_PAGE_QUERY = groq`
  *[_type == "contactPage" || _id == "contactPage"][0] {
    bannerImage,
    eyebrowEn,
    eyebrowAr,
    pageTitleEn,
    pageTitleAr,
    descEn,
    descAr,
    quoteTitleEn,
    quoteTitleAr,
    quoteDescEn,
    emailAddresses
  }
`

// Services
export const ALL_SERVICES_QUERY = groq`
  *[_type == "service"] | order(order asc, _createdAt asc) {
    _id,
    titleEn,
    titleAr,
    slug,
    category,
    order,
    shortDescriptionEn,
    shortDescriptionAr,
    fullDescriptionEn,
    fullDescriptionAr,
    image,
    features[] {
      featureEn,
      featureAr
    }
  }
`

export const SERVICES_BY_CATEGORY_QUERY = groq`
  *[_type == "service" && category == $category] | order(order asc, _createdAt asc) {
    _id,
    titleEn,
    titleAr,
    slug,
    category,
    order,
    shortDescriptionEn,
    shortDescriptionAr,
    fullDescriptionEn,
    fullDescriptionAr,
    image,
    features[] {
      featureEn,
      featureAr
    }
  }
`
