import { defineArrayMember, defineField, defineType } from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title / Identifier',
      type: 'string',
      initialValue: 'Home Page',
      readOnly: true,
    }),
    defineField({
      name: 'heroSlides',
      title: 'Hero Carousel Slides',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Hero Slide',
          fields: [
            defineField({
              name: 'badgeEn',
              title: 'Badge (English)',
              type: 'string',
            }),
            defineField({
              name: 'badgeAr',
              title: 'Badge (Arabic)',
              type: 'string',
            }),
            defineField({
              name: 'titleEn',
              title: 'Title (English)',
              type: 'string',
            }),
            defineField({
              name: 'titleAr',
              title: 'Title (Arabic)',
              type: 'string',
            }),
            defineField({
              name: 'subtitleEn',
              title: 'Subtitle (English)',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'subtitleAr',
              title: 'Subtitle (Arabic)',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'image',
              title: 'Slide Background Image',
              type: 'image',
              options: { hotspot: true },
            }),
            defineField({
              name: 'link',
              title: 'Target Link URL',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'titleEn',
              subtitle: 'badgeEn',
              media: 'image',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'introEyebrowEn',
      title: 'Intro Eyebrow (English)',
      type: 'string',
    }),
    defineField({
      name: 'introEyebrowAr',
      title: 'Intro Eyebrow (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'introTitleEn',
      title: 'Intro Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'introTitleAr',
      title: 'Intro Title (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'introDescEn',
      title: 'Intro Description (English)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'introDescAr',
      title: 'Intro Description (Arabic)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'introImage',
      title: 'Intro Operational Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'stats',
      title: 'Performance Statistics Bar',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Target Number', type: 'number' }),
            defineField({ name: 'prefix', title: 'Prefix (e.g. +)', type: 'string' }),
            defineField({ name: 'suffix', title: 'Suffix (e.g. %, +)', type: 'string' }),
            defineField({ name: 'labelEn', title: 'Label (English)', type: 'string' }),
            defineField({ name: 'labelAr', title: 'Label (Arabic)', type: 'string' }),
          ],
          preview: {
            select: {
              title: 'labelEn',
              val: 'value',
              suf: 'suffix',
            },
            prepare({ title, val, suf }) {
              return {
                title: `${val || 0}${suf || ''} - ${title || 'Statistic'}`,
              }
            },
          },
        }),
      ],
    }),
  ],
})
