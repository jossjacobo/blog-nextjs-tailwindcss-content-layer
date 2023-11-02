import { cx } from "@/src/utils";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/src/components/header";
import Footer from "../components/footer";
import siteMetadata from "../utils/site-meta-data";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});
const manrope = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

const url = new URL(siteMetadata.siteUrl);
const { title, description, socialBanner } = siteMetadata;
export const metadata = {
  metadataBase: url,
  title: {
    template: `%s | ${title}`,
    default: title,
  },
  description,
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    images: [socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title,
    images: [socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Script>
          {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }`}
        </Script>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
