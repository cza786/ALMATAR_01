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
    visionImage,
    missionTitleEn,
    missionTitleAr,
    missionDescEn,
    missionDescAr,
    missionImage,
    operationsImage,
    syriaTitleEn,
    syriaTitleAr,
    syriaDescEn,
    syriaDescAr
  }
`

// QHSE Page
export const QHSE_PAGE_QUERY = groq`
  *[_type == "qhsePage" || _id == "qhsePage"][0] {
    ..., heroImage, commitmentImage, qmsImage, ctaImage,
    commitmentCards[]{..., titleEn, titleAr, detailEn, detailAr},
    policyBullets[]{..., titleEn, titleAr},
    objectives[]{..., objectiveEn, objectiveAr, kpiEn, kpiAr, targetEn, targetAr},
    governanceCards[]{..., titleEn, titleAr, detailEn, detailAr},
    protocols[]{..., titleEn, titleAr, image, bulletsEn, bulletsAr},
    tolerancePolicies[]{..., policyEn, policyAr, referenceEn, referenceAr},
    emergencyRows[]{..., scenarioEn, scenarioAr, responseEn, responseAr, referenceEn, referenceAr},
    certifications[]{..., titleEn, titleAr, code, detailEn, detailAr},
    qmsSteps[]{..., titleEn, titleAr},
    auditCards[]{..., titleEn, titleAr, detailEn, detailAr},
    metrics[]{..., titleEn, titleAr, value, icon},
    documents[]{..., policyEn, policyAr, referenceEn, referenceAr, url, file, "fileUrl": file.asset->url}
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
    heroButtonEn,
    heroButtonAr,
    heroSideTextEn,
    heroSideTextAr,
    vacanciesEyebrowEn,
    vacanciesEyebrowAr,
    vacanciesTitleEn,
    vacanciesTitleAr,
    vacanciesDescEn,
    vacanciesDescAr,
    openLabelEn,
    openLabelAr,
    closedLabelEn,
    closedLabelAr,
    viewDetailsEn,
    viewDetailsAr,
    postedLabelEn,
    postedLabelAr,
    emptyMessageEn,
    emptyMessageAr,
    cultureImage,
  "jobs": *[_type == "job"] | order(order asc, _createdAt desc) {
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
      isOpen,
      postedDate
    }
  }
`

export const JOB_DETAIL_QUERY = groq`
  *[_type == "job" && (slug.current == $slug || _id == $slug)][0] {
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
    applicationEmail,
    isOpen,
    postedDate
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
    quoteDescAr,
    emailAddresses,
    headOfficeEn,
    headOfficeAr,
    headOfficeAddressEn,
    headOfficeAddressAr,
    companyOfficeEn,
    companyOfficeAr,
    companyOfficeAddressEn,
    companyOfficeAddressAr,
    whatsappNumber,
    serviceOptionsEn,
    serviceOptionsAr
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
    },
    pageContent {
      routeKey,
      heroImage,
      heroEyebrowEn, heroEyebrowAr,
      heroTitleEn, heroTitleAr,
      heroDescriptionEn, heroDescriptionAr,
      introImage, introImageAltEn, introImageAltAr,
      introEyebrowEn, introEyebrowAr,
      introTitleEn, introTitleAr,
      introDescriptionEn, introDescriptionAr,
      sections[] { ..., cards[] { ... } },
      stats[] { value, labelEn, labelAr },
      ctaTitleEn, ctaTitleAr,
      ctaDescriptionEn, ctaDescriptionAr,
      ctaButtonEn, ctaButtonAr, ctaLink, ctaImage
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

// Generic route-page content used by the Website Pages editor for pages that
// have a dedicated visual layout but still need a central CMS content model.
export const WEBSITE_PAGE_QUERY = groq`
  *[_type == "websitePage" && pageKey == $pageKey][0] {
    pageKey,
    adminTitle,
    pageTitleEn, pageTitleAr,
    pageDescriptionEn, pageDescriptionAr,
    heroImage,
    heroEyebrowEn, heroEyebrowAr,
    heroTitleEn, heroTitleAr,
    heroDescriptionEn, heroDescriptionAr,
    sections[] {
      sectionKey,
      eyebrowEn, eyebrowAr,
      titleEn, titleAr,
      descriptionEn, descriptionAr,
      image,
      imageAltEn, imageAltAr,
      bulletsEn, bulletsAr,
      ctaLabelEn, ctaLabelAr, ctaLink,
      cards[] { icon, titleEn, titleAr, descriptionEn, descriptionAr, image, link }
    },
    stats[] { value, labelEn, labelAr },
    cta {
      titleEn, titleAr,
      descriptionEn, descriptionAr,
      buttonEn, buttonAr, link, image
    },
    documents[] { titleEn, titleAr, descriptionEn, descriptionAr, url, file, "fileUrl": file.asset->url },
    seo { titleEn, titleAr, descriptionEn, descriptionAr, image }
  }
`

export const SERVICE_PAGE_QUERY = groq`
  *[_type == "service" && (pageContent.routeKey == $routeKey || slug.current == $routeKey)][0] {
    titleEn,
    titleAr,
    image,
    pageContent {
      routeKey,
      heroImage,
      heroEyebrowEn, heroEyebrowAr,
      heroTitleEn, heroTitleAr,
      heroDescriptionEn, heroDescriptionAr,
      introImage, introImageAltEn, introImageAltAr,
      introEyebrowEn, introEyebrowAr,
      introTitleEn, introTitleAr,
      introDescriptionEn, introDescriptionAr,
      sections[] { ..., cards[] { ... } },
      stats[] { value, labelEn, labelAr },
      ctaTitleEn, ctaTitleAr,
      ctaDescriptionEn, ctaDescriptionAr,
      ctaButtonEn, ctaButtonAr, ctaLink, ctaImage
    }
  }
`
