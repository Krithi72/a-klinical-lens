import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "A Klinical Lens",
    template: "%s | A Klinical Lens",
  },
  description:
    "Examining healthcare systems, human biology, medical ethics, health policy, and cutting-edge research — through a curious, critical lens.",
  keywords: [
    "medicine",
    "healthcare",
    "biology",
    "medical ethics",
    "health policy",
    "Cambridge medicine",
    "healthcare research",
  ],
  authors: [{ name: "A Klinical Lens" }],
  openGraph: {
    title: "A Klinical Lens",
    description: "Examining medicine through every lens.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
