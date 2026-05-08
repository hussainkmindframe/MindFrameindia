/**
 * SEO Head Component
 * Comprehensive SEO meta tags implementation using react-helmet-async
 * Handles title, meta descriptions, canonical URLs, OG tags, Twitter cards, and structured data
 */

import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEOHead = ({
  title,
  description,
  path = '/',
  image,
  author,
  keywords,
  type = 'website',
  article,
  structuredData,
}) => {
  const baseURL = import.meta.env.VITE_BASE_URL || 'https://mindframeindia.com';
  const canonicalURL = `${baseURL}${path}`;
  const defaultImage = `${baseURL}/og-image.png`;
  const ogImage = image || defaultImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title} | Mindframe India</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalURL} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalURL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Mindframe India" />

      {/* Article Specific Meta Tags */}
      {type === 'article' && article && (
        <>
          <meta property="article:published_time" content={article.publishedDate} />
          {article.modifiedDate && (
            <meta property="article:modified_time" content={article.modifiedDate} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.section && (
            <meta property="article:section" content={article.section} />
          )}
          {article.tags && article.tags.length > 0 && (
            article.tags.map((tag) => (
              <meta key={tag} property="article:tag" content={tag} />
            ))
          )}
        </>
      )}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalURL} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@mindframeindia" />
      <meta name="twitter:site" content="@mindframeindia" />

      {/* Author and Organization */}
      {author && <meta name="author" content={author} />}
      <meta name="organization" content="Mindframe India" />

      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />

      {/* Structured Data / Schema.org JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Mindframe India',
          url: baseURL,
          logo: `${baseURL}/logo.png`,
          description:
            'Leading digital marketing, advertising, and creative agency in India',
          sameAs: [
            'https://www.facebook.com/mindframeindia',
            'https://twitter.com/mindframeindia',
            'https://www.linkedin.com/company/mindframe-india',
            'https://www.instagram.com/mindframeindia',
          ],
        })}
      </script>

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

SEOHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string,
  image: PropTypes.string,
  author: PropTypes.string,
  keywords: PropTypes.string,
  type: PropTypes.string,
  article: PropTypes.shape({
    publishedDate: PropTypes.string,
    modifiedDate: PropTypes.string,
    author: PropTypes.string,
    section: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  structuredData: PropTypes.object,
};

export default SEOHead;
