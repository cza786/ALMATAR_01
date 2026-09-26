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
      name: 'emailAddresses',
      title: 'Inquiry Email Addresses',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
    }),
    defineField({ name: 'headOfficeEn', title: 'Head Office Name (English)', type: 'string' }),
    defineField({ name: 'headOfficeAr', title: 'Head Office Name (Arabic)', type: 'string' }),
    defineField({ name: 'headOfficeAddressEn', title: 'Head Office Address (English)', type: 'text', rows: 2 }),
    defineField({ name: 'headOfficeAddressAr', title: 'Head Office Address (Arabic)', type: 'text', rows: 2 }),
    defineField({ name: 'companyOfficeEn', title: 'Company Office Name (English)', type: 'string' }),
    defineField({ name: 'companyOfficeAr', title: 'Company Office Name (Arabic)', type: 'string' }),
    defineField({ name: 'companyOfficeAddressEn', title: 'Company Office Address (English)', type: 'text', rows: 2 }),
    defineField({ name: 'companyOfficeAddressAr', title: 'Company Office Address (Arabic)', type: 'text', rows: 2 }),
    defineField({ name: 'whatsappNumber', title: 'WhatsApp Number', type: 'string' }),
    defineField({ name: 'serviceOptionsEn', title: 'Quotation Service Options (English)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'serviceOptionsAr', title: 'Quotation Service Options (Arabic)', type: 'array', of: [{ type: 'string' }] }),
  ],
})
