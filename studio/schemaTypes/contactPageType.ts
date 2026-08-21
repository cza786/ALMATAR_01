import { defineArrayMember, defineField, defineType } from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Identifier',
      type: 'string',
      initialValue: 'Contact Page',
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
      name: 'descEn',
      title: 'Description (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descAr',
      title: 'Description (Arabic)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'quoteTitleEn',
      title: 'Quote Form Title (English)',
      type: 'string',
    }),
    defineField({
      name: 'quoteTitleAr',
      title: 'Quote Form Title (Arabic)',
      type: 'string',
    }),
    defineField({
      name: 'quoteDescEn',
      title: 'Quote Form Description (English)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'quoteDescAr',
      title: 'Quote Form Description (Arabic)',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'whatsappNumber',
      title: 'WhatsApp Direct Number',
      type: 'string',
    }),
    defineField({
      name: 'phoneNumbers',
      title: 'Office Phone Numbers',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({
      name: 'emailAddresses',
      title: 'Inquiry Email Addresses',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
})
