import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JMat Media - Agencia de Paid Media",
  description:
    "Agencia especializada en Paid Media, CRM Automation y estrategias de crecimiento digital. Maximizamos tu ROI con Meta Ads, gestión de CRM y automatización.",
  keywords:
    "paid media, meta ads, CRM automation, agencia digital, ROI, JMat Media",
  authors: [{ name: "JMat Media" }],
  openGraph: {
    title: "JMat Media - Agencia de Paid Media",
    description:
      "Paid Media & CRM Automation. Maximizamos tu ROI con estrategias de crecimiento probadas.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "JMat Media - Agencia de Paid Media",
    description: "Paid Media & CRM Automation. Maximizamos tu ROI.",
  },
  icons: {
    icon: [
      { url: "/brand/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/brand/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/brand/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: "/brand/favicon.ico",
  },
  manifest: "/brand/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/brand/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/brand/favicon.svg" />
        <link rel="shortcut icon" href="/brand/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/brand/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="JMat Media" />
        <link rel="manifest" href="/brand/site.webmanifest" />
      </head>

      <body className="min-h-full flex flex-col bg-[#1E1E23] text-[#EFE5FE]">
        {children}
      </body>
    </html>
  );
}
