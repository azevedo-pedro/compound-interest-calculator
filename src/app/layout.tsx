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
  title: "Calculadora de Juros Compostos | CIC - Ferramenta Gratuita de Investimentos",
  description: "Calcule o crescimento dos seus investimentos com juros compostos e aportes mensais. Ferramenta gratuita e completa para planejamento financeiro e simulação de investimentos.",
  keywords: "calculadora juros compostos, investimentos, planejamento financeiro, simulação investimento, aportes mensais, rentabilidade, calculadora financeira",
  authors: [{ name: "Pedro Azevedo", url: "https://azevedo.dev" }],
  creator: "Pedro Azevedo",
  publisher: "Pedro Azevedo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cic.azevedo.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: "Calculadora de Juros Compostos | CIC",
    description: "Calcule o crescimento dos seus investimentos com juros compostos e aportes mensais. Ferramenta gratuita e completa para planejamento financeiro.",
    url: 'https://cic.azevedo.dev',
    siteName: 'Calculadora de Juros Compostos',
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: ['en_US'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Calculadora de Juros Compostos | CIC",
    description: "Calcule o crescimento dos seus investimentos com juros compostos e aportes mensais. Ferramenta gratuita!",
    creator: "@pedroazevedo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'finance',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
