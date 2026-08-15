import { defineArrayMember, defineField, defineType } from 'sanity'

export const careersPageType = defineType({
  name: 'careersPage',
  title: 'Careers Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Identifier',
      type: 'string',
      initialValue: 'Careers Page',
      readOnly: true,
    }),
    defineField({
      name: 'bannerImage',
      title: 'Careers Header Banner',
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
      name: 'pageDescEn',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pageDescAr',
      title: 'Description (Arabic)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'cultureImage',
      title: 'Culture / Team Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'openPositions',
      title: 'Open Job Positions',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Position',
          fields: [
            defineField({ name: 'titleEn', title: 'Job Title (English)', type: 'string' }),
            defineField({ name: 'titleAr', title: 'Job Title (Arabic)', type: 'string' }),
            defineField({ name: 'departmentEn', title: 'Department (English)', type: 'string' }),
            defineField({ name: 'departmentAr', title: 'Department (Arabic)', type: 'string' }),
            defineField({ name: 'locationEn', title: 'Location (English)', type: 'string' }),
            defineField({ name: 'locationAr', title: 'Location (Arabic)', type: 'string' }),
            defineField({ name: 'typeEn', title: 'Employment Type (e.g. Full-time)', type: 'string' }),
            defineField({ name: 'typeAr', title: 'Employment Type (Arabic)', type: 'string' }),
            defineField({ name: 'descriptionEn', title: 'Job Description (English)', type: 'text', rows: 3 }),
            defineField({ name: 'descriptionAr', title: 'Job Description (Arabic)', type: 'text', rows: 3 }),
          ],
          preview: {
            select: {
              title: 'titleEn',
              dept: 'departmentEn',
              loc: 'locationEn',
            },
            prepare({ title, dept, loc }) {
              return {
                title: title || 'Job Opening',
                subtitle: `${dept || 'Department'} • ${loc || 'Location'}`,
              }
            },
          },
        }),
      ],
    }),
  ],
})
