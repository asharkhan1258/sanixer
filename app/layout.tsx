
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.Sanixer.com"),
  title: "Software Development Company in the USA | innovaSsnx",
  description: "Sanixer is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
  keywords: [
    "Sanixer",
    "software development company",
    "software development services",
  ],
  openGraph: {
    type: "website",
    url: "https://www.Sanixer.com",
    title: "Software Development Company in the USA | Sanixer",
    description: "Sanixer is a leading software development company specialized in custom software development services. Schedule a Call & build with experts.",
    images: [{ url: "https://www.Sanixer.com/logo.png", width: 1200, height: 630, alt: "Sanixer Logo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-32X32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
