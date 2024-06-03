import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "@mintlify/mdx/dist/styles.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helicone / LLM-Observability for Developers",
  description: "The open-source platform for logging, monitoring, and debugging.",
  icons: "https://www.helicone.ai/static/logo.png",
  openGraph: {
    type: "website",
    siteName: "Helicone.ai",
    title: "Helicone",
    url: "https://www.helicone.ai",
    description: "LLM-Observability for Developers",
    images: "https://www.helicone.ai/static/helicone-og.webp",
    locale: "en_US",
  },
  twitter: {
    title: "Helicone",
    description: "LLM-Observability for Developers",
    card: "summary_large_image",
    images: "https://www.helicone.ai/static/helicone-og.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#f8feff] flex flex-col">
          <NavBar />
          {children}
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
