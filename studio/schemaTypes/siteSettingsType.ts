import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Company / Site Title',
      type: 'string',
      initialValue: 'ALMATAR Energy & Oilfield Services',
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Meta Description (English)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'descriptionAr',
      title: 'Meta Description (Arabic)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'contactEmail',
      title: 'Primary Contact Email',
      type: 'string',
      initialValue: 'info@almatar.com',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Primary Contact Phone',
      type: 'string',
      initialValue: '00963 93 982 2415',
    }),
    defineField({
      name: 'secondaryPhone',
      title: 'Secondary Contact Phone',
      type: 'string',
      initialValue: '00963 93 140 7723',
    }),
    defineField({
      name: 'addressEn',
      title: 'Headquarters Address (English)',
      type: 'string',
      initialValue: 'Damascus, Syrian Arab Republic',
    }),
    defineField({
      name: 'addressAr',
      title: 'Headquarters Address (Arabic)',
      type: 'string',
      initialValue: 'دمشق، الجمهورية العربية السورية',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform Name (e.g. LinkedIn, Twitter)', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        }),
      ],
    }),
  ],
})
