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

const SITE_URL = "https://maebusano.com";

export const metadata: Metadata = {
  title: "Mae Busano | Virtual Assistant Portfolio",
  description:
    "Professional Virtual Assistant specializing in administrative support, data management, and remote office assistance.",
  openGraph: {
    title: "Mae Busano | Virtual Assistant Portfolio",
    description:
      "Professional Virtual Assistant specializing in administrative support, data management, and remote office assistance.",
    url: SITE_URL,
    siteName: "Mae Busano Portfolio",
    images: ["/og-image.svg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mae Busano | Virtual Assistant Portfolio",
    description:
      "Professional Virtual Assistant specializing in administrative support, data management, and remote office assistance.",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const metadataBase = new URL("https://maebusano.com");

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
      </body>
    </html>
  );
}
