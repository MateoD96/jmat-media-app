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
  keywords: "paid media, meta ads, CRM automation, agencia digital, ROI, JMat Media",
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
      <body className="min-h-full flex flex-col bg-[#1E1E23] text-[#EFE5FE]">
        {children}
      </body>
    </html>
  );
}
