import type { Metadata, Viewport } from "next";
import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const hindSiliguri = Hind_Siliguri({
  subsets: ["latin", "bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0756A8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Computer & IT Training Institute`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Talukdar IT",
    "Computer Training Centre",
    "IT Training",
    "Office Application Course",
    "Graphic Design Training",
    "Web Design Course",
    "Freelancing Course",
    "Computer Lab",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hindSiliguri.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex flex-col min-h-full bg-[#F8FAFC] text-[#172033] font-sans">
        {/* Skip to Main Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0756A8] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Global Layout Structure */}
        <TopBar />
        <Navbar />

        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
