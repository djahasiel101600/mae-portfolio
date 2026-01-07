import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  author?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
}

const DEFAULT_SEO = {
  title: "Mae Busano | Virtual Assistant Portfolio",
  description:
    "Professional Virtual Assistant specializing in administrative support, data management, and remote office assistance. Committed to delivering organized, accurate, and efficient remote support.",
  keywords:
    "virtual assistant, administrative support, data management, remote work, data entry, executive assistant, email management, calendar management, Philippines, remote office assistant",
  author: "Mae Busano",
  image: "/og-image.svg",
  url: "https://maebusano.com",
  type: "website" as const,
};

export function SEO({
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  keywords = DEFAULT_SEO.keywords,
  author = DEFAULT_SEO.author,
  image = DEFAULT_SEO.image,
  url = DEFAULT_SEO.url,
  type = DEFAULT_SEO.type,
}: SEOProps) {
  const fullImageUrl = image.startsWith("http") ? image : `${url}${image}`;

  // Schema.org structured data for Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mae Busano",
    jobTitle: "Virtual Assistant",
    description:
      "Detail-oriented and reliable professional with strong experience in administrative support, data organization, and report preparation.",
    url: url,
    image: fullImageUrl,
    email: "wmaebusano@email.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Philippines",
    },
    knowsAbout: [
      "Administrative Support",
      "Data Entry",
      "Data Management",
      "Email Management",
      "Calendar Management",
      "Report Preparation",
      "Microsoft Office",
      "Google Workspace",
      "Remote Work",
    ],
    sameAs: [],
  };

  // Schema.org structured data for Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Mae Busano Portfolio",
    description: description,
    url: url,
    author: {
      "@type": "Person",
      name: "Mae Busano",
    },
  };

  // Schema.org structured data for Professional Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Mae Busano - Virtual Assistant Services",
    description:
      "Professional virtual assistant services including administrative support, data management, and remote office assistance.",
    provider: {
      "@type": "Person",
      name: "Mae Busano",
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    serviceType: [
      "Virtual Assistant",
      "Administrative Support",
      "Data Entry",
      "Data Management",
    ],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="rating" content="general" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={`${author} - Virtual Assistant`} />
      <meta property="og:site_name" content="Mae Busano Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta
        name="twitter:image:alt"
        content={`${author} - Virtual Assistant`}
      />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#7c3aed" />
      <meta name="msapplication-TileColor" content="#7c3aed" />

      {/* Schema.org JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
}

export default SEO;
