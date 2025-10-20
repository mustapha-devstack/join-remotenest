import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

export const metadata: Metadata = {
  title: "Remotenest — Premium Landing",
  description:
    "Remotenest is a modern AI-powered platform connecting students and employers. Built with Next.js, Tailwind CSS, and shadcn/ui.",
  icons: {
    icon: "/images/logo.png", // Favicon or site icon
  },
  openGraph: {
    title: "Remotenest — Premium Landing",
    description:
      "Join Remotenest and connect with top talents and organizations worldwide.",
    url: "https://join-remotenest.vercel.app/", // change when deployed
    siteName: "Remotenest",
    images: [
      {
        url: "/images/logo.png", // optional OG image
        width: 1200,
        height: 630,
        alt: "Remotenest Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Remotenest — Premium Landing",
    description:
      "An AI-powered remote job platform designed for students and teams.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
