import type { Metadata } from "next";
import "./globals.css";
import {
  ADDRESS,
  BUSINESS_NAME,
  DESCRIPTION,
  OPENING_HOURS_SPEC,
  PHONE_HREF,
  SITE_URL,
  SOCIAL,
  TAGLINE,
} from "@/lib/business";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_NAME} - ${TAGLINE}`,
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "nail salon",
    "nail bar",
    "manicure",
    "pedicure",
    "gel nails",
    "nail art",
    `nail salon ${ADDRESS.city}`,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: `${BUSINESS_NAME} - ${TAGLINE}`,
    description: DESCRIPTION,
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_NAME} - ${TAGLINE}`,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// LocalBusiness structured data so search engines can surface hours,
// address, and contact info directly (e.g. in the Google Knowledge Panel).
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NailSalon",
  name: BUSINESS_NAME,
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: PHONE_HREF.replace("tel:", ""),
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${ADDRESS.street}, ${ADDRESS.unit}`,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.region,
    postalCode: ADDRESS.postalCode,
    addressCountry: ADDRESS.country,
  },
  sameAs: [SOCIAL.facebook, SOCIAL.instagram],
  openingHoursSpecification: OPENING_HOURS_SPEC,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Google-hosted font link requested deliberately over next/font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Manrope:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background font-body-md antialiased selection:bg-primary-container selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
