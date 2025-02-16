import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const Bahnschrift = localFont({
  src: "../public/font/Bahnschrift.woff2",
});

export const metadata: Metadata = {
  title: "Perspectives, patterns and pathways | 1st April 2025",
  description: "MRes Academic Conference",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={Bahnschrift.className}>{children}</body>
    </html>
  );
}
