import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

export const metadata: Metadata = {
  title: "Remotenest - Premium Landing",
  description: "Modern landing page built with Next.js, Tailwind, and shadcn",
  icons:"/images/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
