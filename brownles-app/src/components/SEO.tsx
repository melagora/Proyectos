import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article" | "product";
}

const SITE_NAME = "Brownles Boutique";
const BASE_URL = "https://brownlesboutique.com";
const DEFAULT_IMAGE = `${BASE_URL}/og-default.jpg`;

const SEO = ({
  title,
  description,
  canonical,
  ogImage,
  type = "website",
}: SEOProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = canonical || BASE_URL;
  const image = ogImage || DEFAULT_IMAGE;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: SITE_NAME,
    url: BASE_URL,
    description,
    image,
  };

  return (
    <Helmet>
      {/* Title */}
      <title>{fullTitle}</title>

      {/* Basic Meta */}
      <meta name="description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
