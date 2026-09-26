import type { StructureResolver } from 'sanity/structure'

const SINGLETONS = [
  'siteSettings',
  'homePage',
  'aboutPage',
  'contactPage',
  'careersPage',
  'qhsePage',
  'websitePage',
]

const singleton = (S: any, title: string, schemaType: string, documentId: string) =>
  S.listItem().title(title).child(
    S.document().schemaType(schemaType).documentId(documentId).title(title),
  )

const websitePageItem = (S: any, title: string, pageKey: string) =>
  singleton(S, title, 'websitePage', `websitePage-${pageKey}`)

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
              singleton(S, 'Careers Page', 'careersPage', 'careersPage'),
              singleton(S, 'QHSE Page', 'qhsePage', 'qhsePage'),
              S.divider(),
              websitePageItem(S, 'Services Overview', 'services'),
              websitePageItem(S, 'Well Services', 'well-services'),
              websitePageItem(S, 'Drilling & Workover', 'drilling-workover'),
              websitePageItem(S, 'Drilling Fluids', 'drilling-fluids'),
              websitePageItem(S, 'Coiled Tubing', 'coiled-tubing'),
              websitePageItem(S, 'Stimulation & Fracturing', 'stimulation-fracturing'),
              websitePageItem(S, 'Zonal Isolation & Cementing', 'zonal-isolation-cementing'),
              websitePageItem(S, 'Slickline Services', 'slickline-services'),
              websitePageItem(S, 'Slickline (legacy route)', 'slickline'),
              websitePageItem(S, 'Well Testing', 'well-testing'),
              websitePageItem(S, 'Wellhead & Xmas Tree', 'wellhead-xmas-tree'),
              websitePageItem(S, 'Construction', 'construction'),
              websitePageItem(S, 'Trading & Supply', 'trading'),
              websitePageItem(S, 'Policies', 'policies'),
              websitePageItem(S, 'Our Team', 'our-team'),
            ])
        ),

      // 3. SERVICES & SOLUTIONS
      S.documentTypeListItem('service').title('🛠️ Services & Solutions'),

      S.divider(),

      S.listItem()
        .title('Vacancies')
        .child(
          S.documentTypeList('job')
            .title('Vacancies — use + to add a new vacancy')
            .defaultOrdering([
              { field: 'isOpen', direction: 'desc' },
              { field: 'postedDate', direction: 'desc' },
            ])
            .initialValueTemplates([
              S.initialValueTemplateItem('job'),
            ]),
        ),
      S.documentTypeListItem('jobApplication').title('Job Applications'),

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
          listItem.getId() !== 'service' &&
          listItem.getId() !== 'job' &&
          listItem.getId() !== 'jobApplication' &&
          listItem.getId() !== 'websitePage'
      ),
    ])
