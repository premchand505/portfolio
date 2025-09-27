import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

import "./globals.css";

/* Load Inter font and map to CSS variable */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Premchand Developer Portfolio",
  description: "Your fitness journey powered by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
