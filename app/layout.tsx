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
  title: "Omar & Alex — Votre equipe IA",
  description: "Services d'intelligence artificielle accessibles pour tous. Missions a la volee, agent dedie, installation sur mesure.",
  openGraph: {
    title: "Omar & Alex — Votre equipe IA",
    description: "L'IA qui travaille pour vous. Pas de jargon, pas de peur, juste des resultats.",
    url: "https://omaretalex.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
