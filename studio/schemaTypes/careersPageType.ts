import { defineArrayMember, defineField, defineType } from 'sanity'

export const careersPageType = defineType({
  name: 'careersPage',
  title: 'Careers Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Identifier', type: 'string', initialValue: 'Careers Page', readOnly: true }),

    // --- HERO SECTION ---
    defineField({ name: 'bannerImage', title: 'Careers Header Banner', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'eyebrowEn', title: 'Hero Eyebrow (English)', type: 'string' }),
    defineField({ name: 'eyebrowAr', title: 'Hero Eyebrow (Arabic)', type: 'string' }),
    defineField({ name: 'pageTitleEn', title: 'Hero Page Title (English)', type: 'string' }),
    defineField({ name: 'pageTitleAr', title: 'Hero Page Title (Arabic)', type: 'string' }),
    defineField({ name: 'pageDescEn', title: 'Hero Description (English)', type: 'text', rows: 3 }),
    defineField({ name: 'pageDescAr', title: 'Hero Description (Arabic)', type: 'text', rows: 3 }),
    defineField({ name: 'heroButtonEn', title: 'Hero Button Label (English)', type: 'string' }),
    defineField({ name: 'heroButtonAr', title: 'Hero Button Label (Arabic)', type: 'string' }),
    defineField({ name: 'heroSideTextEn', title: 'Hero Side Message (English)', type: 'text', rows: 4 }),
    defineField({ name: 'heroSideTextAr', title: 'Hero Side Message (Arabic)', type: 'text', rows: 4 }),

    // --- WHY WORK WITH US SECTION ---
    defineField({ name: 'whyWorkEyebrowEn', title: 'Why Work Eyebrow (English)', type: 'string' }),
    defineField({ name: 'whyWorkEyebrowAr', title: 'Why Work Eyebrow (Arabic)', type: 'string' }),
    defineField({ name: 'whyWorkHeadingEn', title: 'Why Work Heading (English)', type: 'string' }),
    defineField({ name: 'whyWorkHeadingAr', title: 'Why Work Heading (Arabic)', type: 'string' }),
    defineField({ name: 'whyWorkLeadEn', title: 'Why Work Lead Paragraph (English)', type: 'text', rows: 3 }),
    defineField({ name: 'whyWorkLeadAr', title: 'Why Work Lead Paragraph (Arabic)', type: 'text', rows: 3 }),
    defineField({ name: 'cultureImage', title: 'Workplace Culture Image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'whyItems',
      title: 'Why Work With Us Points',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'titleEn', title: 'Point Title (English)', type: 'string' }),
            defineField({ name: 'titleAr', title: 'Point Title (Arabic)', type: 'string' }),
            defineField({ name: 'descEn', title: 'Point Description (English)', type: 'text', rows: 2 }),
            defineField({ name: 'descAr', title: 'Point Description (Arabic)', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'titleEn', subtitle: 'descEn' } },
        }),
      ],
    }),

    // --- EMPLOYEE BENEFITS SECTION ---
    defineField({ name: 'benefitsEyebrowEn', title: 'Benefits Eyebrow (English)', type: 'string' }),
    defineField({ name: 'benefitsEyebrowAr', title: 'Benefits Eyebrow (Arabic)', type: 'string' }),
    defineField({
      name: 'benefitsItems',
      title: 'Employee Benefits Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'titleEn', title: 'Benefit Title (English)', type: 'string' }),
            defineField({ name: 'titleAr', title: 'Benefit Title (Arabic)', type: 'string' }),
            defineField({ name: 'descEn', title: 'Benefit Description (English)', type: 'text', rows: 2 }),
            defineField({ name: 'descAr', title: 'Benefit Description (Arabic)', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'titleEn', subtitle: 'descEn' } },
        }),
      ],
    }),

    // --- VACANCIES SECTION LABELS ---
    defineField({ name: 'vacanciesEyebrowEn', title: 'Vacancies Eyebrow (English)', type: 'string' }),
    defineField({ name: 'vacanciesEyebrowAr', title: 'Vacancies Eyebrow (Arabic)', type: 'string' }),
    defineField({ name: 'vacanciesTitleEn', title: 'Vacancies Heading (English)', type: 'string' }),
    defineField({ name: 'vacanciesTitleAr', title: 'Vacancies Heading (Arabic)', type: 'string' }),
    defineField({ name: 'vacanciesDescEn', title: 'Vacancies Description (English)', type: 'text', rows: 3 }),
    defineField({ name: 'vacanciesDescAr', title: 'Vacancies Description (Arabic)', type: 'text', rows: 3 }),
    defineField({ name: 'openLabelEn', title: 'Open Status Label (English)', type: 'string' }),
    defineField({ name: 'openLabelAr', title: 'Open Status Label (Arabic)', type: 'string' }),
    defineField({ name: 'closedLabelEn', title: 'Closed Status Label (English)', type: 'string' }),
    defineField({ name: 'closedLabelAr', title: 'Closed Status Label (Arabic)', type: 'string' }),
    defineField({ name: 'viewDetailsEn', title: 'View Details Label (English)', type: 'string' }),
    defineField({ name: 'viewDetailsAr', title: 'View Details Label (Arabic)', type: 'string' }),
    defineField({ name: 'postedLabelEn', title: 'Posted Date Label (English)', type: 'string' }),
    defineField({ name: 'postedLabelAr', title: 'Posted Date Label (Arabic)', type: 'string' }),
    defineField({ name: 'emptyMessageEn', title: 'No Vacancies Message (English)', type: 'string' }),
    defineField({ name: 'emptyMessageAr', title: 'No Vacancies Message (Arabic)', type: 'string' }),

    // --- CALL TO ACTION SECTION ---
    defineField({ name: 'ctaEyebrowEn', title: 'CTA Eyebrow (English)', type: 'string' }),
    defineField({ name: 'ctaEyebrowAr', title: 'CTA Eyebrow (Arabic)', type: 'string' }),
    defineField({ name: 'ctaHeadingEn', title: 'CTA Heading (English)', type: 'string' }),
    defineField({ name: 'ctaHeadingAr', title: 'CTA Heading (Arabic)', type: 'string' }),
    defineField({ name: 'ctaButtonEn', title: 'CTA Button Label (English)', type: 'string' }),
    defineField({ name: 'ctaButtonAr', title: 'CTA Button Label (Arabic)', type: 'string' }),
  ],
})
