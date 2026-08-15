import { defineField, defineType } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Identifier',
      type: 'string',
      initialValue: 'About Us Page',
      readOnly: true,
    }),
    defineField({
      name: 'bannerImage',
      title: 'Header Banner Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'eyebrowEn',
      title: 'Eyebrow (English)',
      type: 'string',
    }),
    defineField({
      name: 'eyebrowAr',
      title: 'Eyebrow (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'pageTitleEn',
      title: 'Page Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'pageTitleAr',
      title: 'Page Title (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'visionTitleEn',
      title: 'Vision Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'visionTitleAr',
      title: 'Vision Title (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'visionDescEn',
      title: 'Vision Description (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'visionDescAr',
      title: 'Vision Description (Arabic)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'missionTitleEn',
      title: 'Mission Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'missionTitleAr',
      title: 'Mission Title (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'missionDescEn',
      title: 'Mission Description (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'missionDescAr',
      title: 'Mission Description (Arabic)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'operationsImage',
      title: 'Field Operations Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'syriaTitleEn',
      title: 'Syria Strategic Value Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'syriaTitleAr',
      title: 'Syria Strategic Value Title (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'syriaDescEn',
      title: 'Syria Strategic Value Description (English)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'syriaDescAr',
      title: 'Syria Strategic Value Description (Arabic)',
      type: 'text',
      rows: 4,
    }),
  ],
})
