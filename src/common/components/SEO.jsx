import { Helmet } from 'react-helmet-async';

/**
 * SEO Component for managing page meta tags
 * Uses react-helmet-async for proper SSR/prerendering support
 */
export default function SEO({
  title,
  description,
  canonical,
  image = 'https://www.datasirpi.com/og-image.png',
  type = 'website',
  keywords,
  noindex = false,
  structuredData
}) {
  const siteTitle = 'Datasirpi';
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Platform Engineering, Cybersecurity & Salesforce Solutions`;
  const siteUrl = 'https://www.datasirpi.com';
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
