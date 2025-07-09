import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_HomeComponents/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kazi Omer - Full-Stack Developer",
  description: "Full-Stack Developer skilled in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and AWS. Building fast, scalable web applications.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Web Development"],
  authors: [{ name: "Kazi Omer" }],
  creator: "Kazi Omer",
  openGraph: {
    title: "Kazi Omer - Full-Stack Developer",
    description: "Full-Stack Developer skilled in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, and AWS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
