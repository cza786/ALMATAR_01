import { defineArrayMember, defineField, defineType } from 'sanity'

const bilingual = (name: string, title: string, type: 'string' | 'text' = 'string') => [
  defineField({ name: `${name}En`, title: `${title} (English)`, type, ...(type === 'text' ? { rows: 4 } : {}) }),
  defineField({ name: `${name}Ar`, title: `${title} (Arabic)`, type, ...(type === 'text' ? { rows: 4 } : {}) }),
]

export const serviceType = defineType({
  name: 'service',
  title: 'Service & Solution',
  type: 'document',
  fields: [
    defineField({
      name: 'titleEn',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleAr',
      title: 'Title (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'titleEn',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'Well Services', value: 'well-services' },
          { title: 'Drilling Fluids', value: 'drilling-fluids' },
          { title: 'QHSE', value: 'qhse' },
          { title: 'Trading & Supply', value: 'trading' },
          { title: 'Construction & Civil', value: 'construction' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'shortDescriptionEn',
      title: 'Short Summary (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'shortDescriptionAr',
      title: 'Short Summary (Arabic)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'fullDescriptionEn',
      title: 'Full Technical Description (English)',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'fullDescriptionAr',
      title: 'Full Technical Description (Arabic)',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'features',
      title: 'Key Capabilities & Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'featureEn', title: 'Feature (English)', type: 'string' }),
            defineField({ name: 'featureAr', title: 'Feature (Arabic)', type: 'string' }),
          ],
          preview: {
            select: {
              title: 'featureEn',
              subtitle: 'featureAr',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'pageContent',
      title: 'Complete Service Page Content',
      type: 'object',
      fields: [
        defineField({ name: 'routeKey', title: 'Website route key', type: 'string', readOnly: true }),
        defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
        ...bilingual('heroEyebrow', 'Hero eyebrow'),
        ...bilingual('heroTitle', 'Hero title'),
        ...bilingual('heroDescription', 'Hero description', 'text'),
        defineField({ name: 'introImage', title: 'Intro image', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'introImageAltEn', title: 'Intro image alt text (English)', type: 'string' }),
        defineField({ name: 'introImageAltAr', title: 'Intro image alt text (Arabic)', type: 'string' }),
        ...bilingual('introEyebrow', 'Intro eyebrow'),
        ...bilingual('introTitle', 'Intro title'),
        ...bilingual('introDescription', 'Intro description', 'text'),
        defineField({
          name: 'sections',
          title: 'Page sections',
          type: 'array',
          of: [defineArrayMember({
            type: 'object',
            fields: [
              defineField({ name: 'sectionKey', title: 'Section key', type: 'string' }),
              ...bilingual('eyebrow', 'Eyebrow'),
              ...bilingual('title', 'Section title'),
              ...bilingual('description', 'Section description', 'text'),
              defineField({ name: 'image', title: 'Section image', type: 'image', options: { hotspot: true } }),
              defineField({ name: 'imageAltEn', title: 'Image alt text (English)', type: 'string' }),
              defineField({ name: 'imageAltAr', title: 'Image alt text (Arabic)', type: 'string' }),
              defineField({ name: 'bulletsEn', title: 'Bullets (English)', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
              defineField({ name: 'bulletsAr', title: 'Bullets (Arabic)', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
              defineField({ name: 'cards', title: 'Cards', type: 'array', of: [defineArrayMember({ type: 'object', fields: [
                ...bilingual('title', 'Card title'),
                ...bilingual('description', 'Card description', 'text'),
                defineField({ name: 'image', title: 'Card image', type: 'image', options: { hotspot: true } }),
                defineField({ name: 'link', title: 'Card link', type: 'string' }),
              ] })] }),
              defineField({ name: 'ctaLabelEn', title: 'CTA label (English)', type: 'string' }),
              defineField({ name: 'ctaLabelAr', title: 'CTA label (Arabic)', type: 'string' }),
              defineField({ name: 'ctaLink', title: 'CTA link', type: 'string' }),
            ],
          })],
        }),
        defineField({
          name: 'stats',
          title: 'Page statistics',
          type: 'array',
          of: [defineArrayMember({ type: 'object', fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            ...bilingual('label', 'Label'),
          ] })],
        }),
        ...bilingual('ctaTitle', 'Bottom CTA title'),
        ...bilingual('ctaDescription', 'Bottom CTA description', 'text'),
        ...bilingual('ctaButton', 'Bottom CTA button'),
        defineField({ name: 'ctaLink', title: 'Bottom CTA link', type: 'string' }),
        defineField({ name: 'ctaImage', title: 'Bottom CTA image', type: 'image', options: { hotspot: true } }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'category',
      media: 'image',
    },
  },
})
