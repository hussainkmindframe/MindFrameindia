/**
 * SEO Component
 * Reusable component for managing page-level SEO with Helmet
 * Includes meta tags, Open Graph, Twitter cards, and canonical URLs
 */

import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://mindframeindia.com';
const SITE_NAME = 'Mindframe India';
const TWITTER_HANDLE = '@mindframeindia';

export default function SEO({
  title,
  description,
  path = '/',
  image = `${BASE_URL}/og-image.png`,
  type = 'website',
  keywords = '',
  author = 'Mindframe India',
  robots = 'index, follow',
  structured = null,
  twitterCard = 'summary_large_image',
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonical = `${BASE_URL}${path}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:creator" content={TWITTER_HANDLE} />

      {/* Additional SEO Meta Tags */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#c9a84c" />

      {/* Structured Data (JSON-LD) */}
      {structured && (
        <script type="application/ld+json">
          {JSON.stringify(structured)}
        </script>
      )}

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  robots: PropTypes.string,
  structured: PropTypes.object,
  twitterCard: PropTypes.string,
};

/**
 * Organization Schema - Add once globally
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Mindframe India',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: 'Leading digital marketing and advertising agency in India',
  sameAs: [
    'https://www.facebook.com/mindframeindia',
    'https://www.twitter.com/mindframeindia',
    'https://www.linkedin.com/company/mindframe-india',
    'https://www.instagram.com/mindframeindia',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    email: 'contact@mindframeindia.com',
    telephone: '+91-XXXXXXXXXX',
  },
};

/**
 * Article Schema - Use for blog posts
 */
export const createArticleSchema = (blog) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: blog.title,
  description: blog.excerpt || blog.description,
  image: blog.image,
  datePublished: blog.createdAt,
  dateModified: blog.updatedAt || blog.createdAt,
  author: {
    '@type': 'Person',
    name: blog.author || 'Mindframe India',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Mindframe India',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/logo.png`,
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${BASE_URL}/blog/${blog._id}`,
  },
});

/**
 * Service Schema - Use for service pages
 */
export const createServiceSchema = (service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: 'Mindframe India',
    url: BASE_URL,
  },
  areaServed: 'IN',
  priceRange: '$$',
});

/**
 * Breadcrumb Schema - Use for navigation
 */
export const createBreadcrumbSchema = (breadcrumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.label,
    item: `${BASE_URL}${crumb.url}`,
  })),
});


