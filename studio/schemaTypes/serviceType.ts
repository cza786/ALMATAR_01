import { defineArrayMember, defineField, defineType } from 'sanity'

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
          { title: 'QHSE & Integrity', value: 'qhse' },
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
  ],
  preview: {
    select: {
      title: 'titleEn',
      subtitle: 'category',
      media: 'image',
    },
  },
})
