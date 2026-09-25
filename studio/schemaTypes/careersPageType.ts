import { defineField, defineType } from 'sanity'

export const careersPageType = defineType({
  name: 'careersPage',
  title: 'Careers Page',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Page Identifier', type: 'string', initialValue: 'Careers Page', readOnly: true }),
    defineField({ name: 'bannerImage', title: 'Careers Header Banner', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'eyebrowEn', title: 'Eyebrow (English)', type: 'string' }),
    defineField({ name: 'eyebrowAr', title: 'Eyebrow (Arabic)', type: 'string' }),
    defineField({ name: 'pageTitleEn', title: 'Page Title (English)', type: 'string' }),
    defineField({ name: 'pageTitleAr', title: 'Page Title (Arabic)', type: 'string' }),
    defineField({ name: 'pageDescEn', title: 'Description (English)', type: 'text', rows: 3 }),
    defineField({ name: 'pageDescAr', title: 'Description (Arabic)', type: 'text', rows: 3 }),
    defineField({ name: 'cultureImage', title: 'Why Work With Us Image', type: 'image', options: { hotspot: true } }),
  ],
})
