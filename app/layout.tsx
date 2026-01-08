import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollProgress from "../components/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://mae-va.vercel.app";

export const metadata: Metadata = {
  title: "Mae Busano | Expert Virtual Assistant & Social Media Manager",
  description:
    "Reliable Virtual Assistant specializing in administrative support, social media management, and content creation. Helping businesses scale with efficiency.",
  openGraph: {
    title: "Mae Busano | Expert Virtual Assistant & Social Media Manager",
    description:
      "Reliable Virtual Assistant specializing in administrative support, social media management, and content creation. Helping businesses scale with efficiency.",
    url: SITE_URL,
    siteName: "Mae Busano Portfolio",
    images: ["/og-image.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mae Busano | Expert Virtual Assistant & Social Media Manager",
    description:
      "Reliable Virtual Assistant specializing in administrative support, social media management, and content creation. Helping businesses scale with efficiency.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const metadataBase = new URL("https://mae-va.vercel.app");

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mae Busano",
  jobTitle: "Virtual Assistant",
  description:
    "Detail-oriented and reliable professional with strong experience in administrative support, data organization, and report preparation.",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.svg`,
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
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Mae provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Administrative support, email and calendar management, data entry and spreadsheets, social media management, and content creation.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Mae?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the contact form on this site or email mae.busano@email.com to discuss availability and rates.",
      },
    },
    {
      "@type": "Question",
      name: "Does Mae work remotely or on-site?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mae is available for remote work (full-time or part-time) and can discuss on-site arrangements case-by-case.",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollProgress />
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </body>
    </html>
  );
}
