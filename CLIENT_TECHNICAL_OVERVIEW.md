# ALMATAR Website — Technical Overview and Project Handover

Prepared for the client on 26 September 2026.

## 1. Project summary

The ALMATAR website is a custom, bilingual corporate website for presenting the company's oilfield services, project capabilities, QHSE information, policies, vacancies, and contact channels. It is not based on WordPress or a purchased website theme. The public interface was built as a custom React application, while editable business content is managed through a separate Sanity content management system (CMS).

The system consists of three connected services:

1. The public website, developed with Next.js and hosted on Vercel.
2. The private content-management studio, built with Sanity Studio and hosted by Sanity.
3. Transactional email delivery, handled by Resend for quotation requests and job applications.

## 2. Live deployment

### Public website

- Production address: <https://www.almatar-oil.com>
- Root-domain behavior: <https://almatar-oil.com> redirects to the `www` address.
- Hosting platform: Vercel.
- Deployment type: Next.js production deployment with Vercel's global delivery network, HTTPS, caching, and server-side API support.
- Framework detection: the repository includes `vercel.json` configured for Next.js.

The live hosting provider was verified from the production response headers and DNS configuration. The domain's `www` record points to Vercel DNS infrastructure, and the production server identifies itself as Vercel.

### Content management studio

- Studio address: <https://almatar.sanity.studio>
- Platform: Sanity Studio.
- Access: restricted to authorized Sanity users; editors must sign in.
- Dataset: the live website reads from the Sanity `production` dataset.

The Studio is deployed separately from the website. This separation allows content editors to manage the website without entering the source code and allows Studio updates to be managed independently.

### Source control and deployment connection

The project is maintained as a Git repository. This local checkout does not contain a configured Git remote or the hidden Vercel project metadata, so the exact Git hosting organization, Vercel team/account owner, and automatic deployment branch cannot be verified from the repository alone. These ownership details should be recorded separately in the client's account register.

## 3. Technology stack

| Area | Technology | Purpose |
| --- | --- | --- |
| Web framework | Next.js 14.2 | Application routing, production builds, SEO rendering, and server API routes |
| User interface | React 18.3 | Interactive pages, reusable components, forms, carousels, navigation, and language switching |
| Routing model | Next.js App Router | File-based pages and server endpoints under `src/app` |
| Content management | Sanity v4 Studio | Editing pages, services, vacancies, contact details, QHSE content, and site settings |
| Sanity integration | `next-sanity` and GROQ | Reading structured CMS data and receiving published-content updates |
| Rich content | Portable Text | Rendering structured editorial content where required |
| Image delivery | Local WebP/PNG/JPEG assets and Sanity CDN | Responsive visual content and CMS-managed images |
| Image processing | Sharp | Build-time and development image processing |
| Email service | Resend API | Sending quotation requests and career applications |
| Styling | Custom CSS | Bespoke responsive design, animations, component styling, and Arabic RTL layouts |
| Fonts | Google Fonts | Outfit, Inter, and Cairo typography |
| Hosting | Vercel | Public website, HTTPS, CDN delivery, and Next.js server functions |
| CMS hosting | Sanity | Hosted content data, image CDN, authenticated Studio, and content APIs |
| Package management | npm | Dependency installation and project scripts |
| Version control | Git | Source history and release management |

The currently installed main application versions are Next.js 14.2.35, React 18.3.1, `next-sanity` 9.12.3, Portable Text React 3.2.4, Sanity Image URL 2.1.1, and Sharp 0.35.4. The separate Studio uses Sanity 4.x and TypeScript for its configuration and schemas.

## 4. Website architecture

The browser loads the Next.js application from Vercel. Reusable React components create the navigation, footer, page sections, service presentations, modals, forms, and visual interactions. Content that needs to be editable is requested from the Next.js `/api/sanity` server route and then read from the Sanity production dataset. This proxy keeps private read credentials on the server. The application can also listen for published Sanity changes so an open page can receive updated content.

The CMS integration includes fallback behavior. If Sanity is temporarily unavailable, key areas can retain built-in default copy and local media instead of making the entire website unusable. Sanity-hosted images are delivered through Sanity's image CDN, while the repository also contains optimized local media for service pages and fallback content.

Visitor forms follow a separate server-side path:

- A quotation request is validated by a Next.js API route, sent to the company through Resend, and optionally recorded in Sanity when a write credential is configured.
- A job application is validated by a Next.js API route. The résumé is limited to 5 MB, attached to the notification email, and application metadata can be recorded in Sanity. The résumé itself is not stored in Sanity by the current implementation.

Private API keys are server environment variables and are not intended to be delivered to the visitor's browser.

## 5. Main website capabilities

The application includes the home page plus dedicated routes for:

- Company profile and team information.
- Services and detailed technical service pages.
- Well services, drilling fluids, drilling and workover, coiled tubing, slickline, well testing, stimulation and fracturing, wellhead/Xmas tree work, and zonal isolation/cementing.
- Construction, logistics, and trading capabilities.
- QHSE and company policy presentation.
- Careers, live vacancy listings, individual vacancy pages, and résumé applications.
- Contact information and technical quotation requests.

The interface supports English and Arabic. The selected language is retained in the visitor's browser, and the document automatically changes between left-to-right and right-to-left layout. The design includes responsive breakpoints for desktop, tablet, and mobile layouts, along with reusable navigation, banners, cards, image viewers, and animated sections.

## 6. Content management

Authorized staff can use the Sanity Studio to manage structured content without modifying code. The current content models cover:

- Global site settings and branding.
- Home page content and hero slides.
- About and careers pages.
- Contact information and quotation-page content.
- Services and reusable service-page sections/cards.
- General website pages and reusable sections/cards.
- QHSE content and safety protocols.
- Vacancies.
- Job-application records.
- Contact-submission records.

The content model contains English and Arabic fields where localized content is required. Changes should be reviewed in the Studio, published, and then checked on the public website. Publishing changes the content; code changes or new page structures still require a developer and a new website deployment.

## 7. Search visibility and sharing

The project includes the principal technical foundations for search and social sharing:

- Page title and description metadata.
- A canonical production URL.
- Open Graph and Twitter sharing metadata.
- Organization structured data in JSON-LD format.
- `robots.txt` and an XML sitemap.
- Multiple favicon and application-icon sizes.
- Semantic page headings and image alternative text in many key components.

Search ranking itself is not guaranteed by the technology. It also depends on content quality, search-engine indexing, performance, backlinks, and ongoing optimization. No analytics or tag-management integration is present in the inspected source, so traffic measurement would require a separately approved integration if it is not being injected through the hosting account.

## 8. Design and development process

The implementation represented in this repository follows these practical stages:

1. **Information architecture:** Company content was divided into corporate, service, QHSE, policy, career, and contact areas, then mapped to individual website routes.
2. **Visual system:** A bespoke corporate style was created with reusable colors, typography, navigation, section layouts, service cards, banners, imagery, responsive behavior, and motion effects.
3. **Frontend development:** The designs were implemented as reusable React components within the Next.js App Router structure.
4. **Bilingual implementation:** English and Arabic copy, persistent language selection, RTL direction, and localized CMS fields were added.
5. **CMS modeling:** Sanity schemas were created for editable pages, services, vacancies, settings, and form records. Seed scripts were added to support initial content population.
6. **Business integrations:** Server-side quotation and career-application workflows were connected to Resend and Sanity.
7. **Media preparation:** The project includes scripts for WebP conversion and service-card image creation, plus Next.js/Sanity image configuration.
8. **SEO preparation:** Canonical links, metadata, structured data, social images, sitemap, and crawler instructions were added.
9. **Production release:** The Next.js application was built for production, deployed to Vercel, connected to the custom domain, and linked to the separately deployed Sanity Studio.
10. **Ongoing iteration:** Git history shows continued work on policies, bilingual policy media, and the vacancy workflow after the initial implementation.

## 9. Local development and release process

The documented development runtime is Node.js 24 LTS with npm.

Install the website and Studio dependencies:

```powershell
npm.cmd ci
npm.cmd --prefix studio ci
```

Create `.env.local` from `.env.example`, insert the authorized credentials, and keep `.env.local` outside source control.

Run the website locally:

```powershell
npm.cmd run dev
```

The local website is available at <http://localhost:3000>.

Run the Studio in a second terminal:

```powershell
npm.cmd run studio:dev
```

The local Studio is available at <http://localhost:3333>.

Validate a production website release with:

```powershell
npm.cmd run build
npm.cmd run start
```

Build or deploy the Studio separately with:

```powershell
npm.cmd run studio:build
npm.cmd --prefix studio run deploy
```

Production environment variables must be configured in the Vercel project. These include the public Sanity project settings and private server credentials for Sanity reads/writes and Resend email delivery. Tokens must never be placed in browser code, client documents, screenshots, or public Git history.

## 10. Ownership and ongoing maintenance

For a complete handover, the client should control or have documented administrator access to:

- The `almatar-oil.com` domain registrar and DNS records.
- The Vercel project and its production environment variables.
- The source-code repository and deployment branch.
- The Sanity project, production dataset, user roles, and Studio deployment.
- The Resend account, verified sending domain, API keys, and delivery logs.
- The company inboxes receiving quotation requests and applications.

Routine maintenance should include dependency and security updates, periodic production builds, form-delivery tests, broken-link checks, CMS-user reviews, backups/exports of important content, image-size review, accessibility checks, and updates to the sitemap whenever public routes change.

## 11. Current technical notes

- The project is operationally dependent on Vercel, Sanity, Resend, Google Fonts, and the domain/DNS provider. Account ownership and billing should therefore remain documented.
- The public asset directory contains a substantial media library. Future additions should continue to favor correctly sized WebP/AVIF assets to control page weight.
- The repository currently has build and runtime scripts but no dedicated automated test or lint command. A future maintenance phase should add automated code-quality, accessibility, and end-to-end form checks.
- The sitemap is a static file. It should be updated when routes are added or removed, or replaced with a generated sitemap.
- Secrets should be rotated immediately if they are ever committed, shared in an example file, or exposed outside the authorized hosting dashboards. Replacing a value in the latest file does not remove it from earlier Git history.

## 12. Client-facing conclusion

ALMATAR's website is a custom, modern web application rather than a template-based site. It combines a high-performance Next.js frontend, Vercel production hosting, a secure Sanity editing environment, bilingual English/Arabic delivery, structured service and career content, and server-side enquiry workflows. The architecture separates presentation, content management, and email delivery, which makes the platform easier to maintain and allows authorized staff to update business content without rebuilding the interface for every text or image change.
