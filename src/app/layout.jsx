import './globals.css';
import SiteShell from '../components/SiteShell';
import { SanityLive } from '@/sanity/lib/live';
import { serverClient } from '@/sanity/lib/serverClient';
import { SITE_SETTINGS_QUERY } from '@/sanity/lib/queries';
import { getImageUrl } from '@/sanity/lib/image';

export default async function RootLayout({ children }) {
  let settings = null;
  try { settings = await serverClient.fetch(SITE_SETTINGS_QUERY); } catch { /* Keep static defaults when Sanity is unavailable during build. */ }
  const siteTitle = settings?.title || 'ALMATAR | Integrated Oilfield & Projects Management';
  const siteDescription = settings?.descriptionEn || 'ALMATAR Integrated Oilfield & Projects Management provides specialized oilfield and infrastructure services in Syria.';
  const logoUrl = getImageUrl(settings?.logo, '/opengraph-image.webp?v=9');
  return (
    <html lang="en">
      <head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={siteDescription} />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=9" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=9" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=9" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png?v=9" />
        <link rel="icon" type="image/png" sizes="144x144" href="/favicon-144x144.png?v=9" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png?v=9" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png?v=9" />
        <link rel="shortcut icon" href="/favicon.ico?v=9" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=9" />
        <meta name="theme-color" content="#090d16" />
        <link rel="canonical" href="https://www.almatar-oil.com" />
        <meta property="og:url" content="https://www.almatar-oil.com" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content={logoUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": siteTitle,
              "url": "https://www.almatar-oil.com",
              "logo": "https://www.almatar-oil.com/images/almatar_logo_transparent.webp",
              "image": "https://www.almatar-oil.com/opengraph-image.webp",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": settings?.contactEmail || "info@almatar-oil.com"
              }
            })
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Cairo:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
        <SanityLive />
      </body>
    </html>
  );
}
