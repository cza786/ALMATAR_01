import { defineArrayMember, defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings & Footer',
  type: 'document',
  groups: [
    { name: 'footer', title: '🦶 Footer Content' },
    { name: 'contact', title: '📞 Contact & Address' },
    { name: 'brand', title: '🏢 Brand & Logo' },
    { name: 'social', title: '🌐 Social Links' },
  ],
  fields: [
    // BRAND GROUP
    defineField({
      name: 'title',
      title: 'Company / Site Title',
      type: 'string',
      group: 'brand',
      initialValue: 'ALMATAR Energy & Oilfield Services',
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      group: 'brand',
      options: { hotspot: true },
      description: 'Used in header, footer, and brand placements across the site',
    }),

    // FOOTER GROUP
    defineField({
      name: 'descriptionEn',
      title: 'Footer Company Description (English)',
      type: 'text',
      group: 'footer',
      rows: 3,
      description: 'The about text shown below the logo in the website footer',
    }),
    defineField({
      name: 'descriptionAr',
      title: 'Footer Company Description (Arabic)',
      type: 'text',
      group: 'footer',
      rows: 3,
      description: 'نص نبذة عن الشركة الظاهر أسفل الشعار في فوتر الموقع',
    }),
    defineField({
      name: 'copyrightEn',
      title: 'Footer Copyright Text (English)',
      type: 'string',
      group: 'footer',
      initialValue: 'All rights reserved.',
    }),
    defineField({
      name: 'copyrightAr',
      title: 'Footer Copyright Text (Arabic)',
      type: 'string',
      group: 'footer',
      initialValue: 'جميع الحقوق محفوظة.',
    }),

    // CONTACT & ADDRESS GROUP
    defineField({
      name: 'contactPhone',
      title: 'Mobile / WhatsApp Number (Footer & Contact)',
      type: 'string',
      group: 'contact',
      initialValue: '+963 93 982 2415',
    }),
    defineField({
      name: 'secondaryPhone',
      title: 'Telephone / Landline Number (Footer & Contact)',
      type: 'string',
      group: 'contact',
      initialValue: '+963 52 426 915',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email Address',
      type: 'string',
      group: 'contact',
      initialValue: 'info@almatar-oil.com',
    }),
    defineField({
      name: 'addressEn',
      title: 'Headquarters Address (English)',
      type: 'string',
      group: 'contact',
      initialValue: 'Damascus, Syrian Arab Republic',
    }),
    defineField({
      name: 'addressAr',
      title: 'Headquarters Address (Arabic)',
      type: 'string',
      group: 'contact',
      initialValue: 'دمشق، الجمهورية العربية السورية',
    }),

    // SOCIAL LINKS GROUP
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      group: 'social',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'platform', title: 'Platform Name (e.g. LinkedIn, Twitter, Facebook)', type: 'string' }),
            defineField({ name: 'url', title: 'URL', type: 'url' }),
          ],
        }),
      ],
    }),
  ],
})
