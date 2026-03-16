import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diginet SG | Advanced Cyber Security Services",
  description: "Next-Generation Cybersecurity & Threat Defense. Protect your organization with our managed IT and security solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-brand-dark text-foreground min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}

