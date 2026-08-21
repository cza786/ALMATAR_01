import type { StructureResolver } from 'sanity/structure'

const SINGLETONS = [
  'siteSettings',
  'homePage',
  'aboutPage',
  'contactPage',
]

export const structure: StructureResolver = (S) =>
  S.list()
    .title('ALMATAR Control Panel')
    .items([
      // 1. INBOX: FORM SUBMISSIONS
      S.listItem()
        .title('📥 Form Submissions & Leads')
        .child(
          S.documentList()
            .title('All Incoming Inquiries & Quotes')
            .filter('_type == "contactSubmission"')
            .defaultOrdering([{ field: 'submittedAt', direction: 'desc' }])
        ),

      S.divider(),

      // 2. WEBSITE PAGES (Singletons)
      S.listItem()
        .title('📄 Website Pages')
        .child(
          S.list()
            .title('Edit Pages')
            .items([
              S.listItem()
                .title('🏠 Home Page')
                .child(
                  S.document()
                    .schemaType('homePage')
                    .documentId('homePage')
                    .title('Home Page')
                ),
              S.listItem()
                .title('🏢 About Us Page')
                .child(
                  S.document()
                    .schemaType('aboutPage')
                    .documentId('aboutPage')
                    .title('About Us Page')
                ),
              S.listItem()
                .title('📞 Contact Page & Locations')
                .child(
                  S.document()
                    .schemaType('contactPage')
                    .documentId('contactPage')
                    .title('Contact Page')
                ),
            ])
        ),

      // 3. SERVICES & SOLUTIONS
      S.documentTypeListItem('service').title('🛠️ Services & Solutions'),

      S.divider(),

      // 4. GLOBAL SETTINGS & FOOTER
      S.listItem()
        .title('⚙️ Global Site Settings & Footer')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Global Site Settings & Footer')
        ),

      S.divider(),

      // 5. Any other remaining collections
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !SINGLETONS.includes(listItem.getId() as string) &&
          listItem.getId() !== 'contactSubmission' &&
          listItem.getId() !== 'service'
      ),
    ])
