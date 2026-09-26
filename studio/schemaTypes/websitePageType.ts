import { defineArrayMember, defineField, defineType } from 'sanity'

const bilingual = (name: string, title: string, type: 'string' | 'text' = 'string') => [
  defineField({ name: `${name}En`, title: `${title} (English)`, type, ...(type === 'text' ? { rows: 4 } : {}) }),
  defineField({ name: `${name}Ar`, title: `${title} (Arabic)`, type, ...(type === 'text' ? { rows: 4 } : {}) }),
]

const cardFields = [
  defineField({ name: 'icon', title: 'Icon name (optional)', type: 'string' }),
  ...bilingual('title', 'Card title'),
  ...bilingual('description', 'Card description', 'text'),
  defineField({ name: 'image', title: 'Card image', type: 'image', options: { hotspot: true } }),
  defineField({ name: 'link', title: 'Card link', type: 'string' }),
]

export const websitePageType = defineType({
  name: 'websitePage',
  title: 'Website Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'pageKey',
      title: 'Page / Route',
      type: 'string',
      options: {
        list: [
          { title: 'Services overview', value: 'services' },
          { title: 'Well Services', value: 'well-services' },
          { title: 'Drilling & Workover', value: 'drilling-workover' },
          { title: 'Drilling Fluids', value: 'drilling-fluids' },
          { title: 'Coiled Tubing', value: 'coiled-tubing' },
          { title: 'Stimulation & Fracturing', value: 'stimulation-fracturing' },
          { title: 'Zonal Isolation & Cementing', value: 'zonal-isolation-cementing' },
          { title: 'Slickline Services', value: 'slickline-services' },
          { title: 'Slickline (legacy route)', value: 'slickline' },
          { title: 'Well Testing', value: 'well-testing' },
          { title: 'Wellhead & Xmas Tree', value: 'wellhead-xmas-tree' },
          { title: 'Construction', value: 'construction' },
          { title: 'Trading & Supply', value: 'trading' },
          { title: 'Policies', value: 'policies' },
          { title: 'Our Team', value: 'our-team' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: 'adminTitle', title: 'Admin label', type: 'string', validation: (Rule) => Rule.required() }),
    ...bilingual('pageTitle', 'Page title'),
    ...bilingual('pageDescription', 'Page description', 'text'),
    defineField({ name: 'heroImage', title: 'Hero image', type: 'image', options: { hotspot: true } }),
    ...bilingual('heroEyebrow', 'Hero eyebrow'),
    ...bilingual('heroTitle', 'Hero title'),
    ...bilingual('heroDescription', 'Hero description', 'text'),
    defineField({
      name: 'sections',
      title: 'Page sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Content section',
          fields: [
            defineField({ name: 'sectionKey', title: 'Section key / label', type: 'string' }),
            ...bilingual('eyebrow', 'Eyebrow'),
            ...bilingual('title', 'Section title'),
            ...bilingual('description', 'Section description', 'text'),
            defineField({ name: 'image', title: 'Section image', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'imageAltEn', title: 'Image alt text (English)', type: 'string' }),
            defineField({ name: 'imageAltAr', title: 'Image alt text (Arabic)', type: 'string' }),
            defineField({ name: 'cards', title: 'Cards / capabilities', type: 'array', of: [defineArrayMember({ type: 'object', fields: cardFields })] }),
            defineField({ name: 'bulletsEn', title: 'Bullet points (English)', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
            defineField({ name: 'bulletsAr', title: 'Bullet points (Arabic)', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
            defineField({ name: 'ctaLabelEn', title: 'CTA label (English)', type: 'string' }),
            defineField({ name: 'ctaLabelAr', title: 'CTA label (Arabic)', type: 'string' }),
            defineField({ name: 'ctaLink', title: 'CTA link', type: 'string' }),
          ],
          preview: {
            select: { title: 'titleEn', subtitle: 'sectionKey', media: 'image' },
            prepare({ title, subtitle, media }) {
              return { title: title || subtitle || 'Content section', subtitle, media }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Page statistics',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string' }),
            ...bilingual('label', 'Label'),
          ],
        }),
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Bottom call to action',
      type: 'object',
      fields: [
        ...bilingual('title', 'Title'),
        ...bilingual('description', 'Description', 'text'),
        ...bilingual('button', 'Button'),
        defineField({ name: 'link', title: 'Link', type: 'string' }),
        defineField({ name: 'image', title: 'Background image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({
      name: 'documents',
      title: 'Downloadable documents',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            ...bilingual('title', 'Title'),
            ...bilingual('description', 'Description', 'text'),
            defineField({ name: 'file', title: 'File', type: 'file' }),
            defineField({ name: 'url', title: 'External URL', type: 'url' }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'Search / social metadata',
      type: 'object',
      fields: [
        ...bilingual('title', 'SEO title'),
        ...bilingual('description', 'SEO description', 'text'),
        defineField({ name: 'image', title: 'Social sharing image', type: 'image', options: { hotspot: true } }),
      ],
    }),
    defineField({ name: 'publishedNote', title: 'Publishing note for editors', type: 'text', rows: 3 }),
  ],
  preview: {
    select: { title: 'adminTitle', subtitle: 'pageKey', media: 'heroImage' },
    prepare({ title, subtitle, media }) {
      return { title: title || 'Website page', subtitle: subtitle ? `/${subtitle}` : '', media }
    },
  },
})
