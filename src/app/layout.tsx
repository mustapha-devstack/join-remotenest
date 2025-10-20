import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/public/Navbar";
import Footer from "@/components/public/Footer";

export const metadata: Metadata = {
  title: "Remotenest – AI-Powered Job Matching",
  description:
    "Remotenest is a modern AI-powered platform connecting students and employers. Built with Next.js, Tailwind CSS, and shadcn/ui.",
  icons: {
    icon: "/images/logo.png", // Favicon or site icon
  },
  openGraph: {
    title: "Remotenest – AI-Powered Job Matching",
    description:
      "Discover your ideal remote job with Remotenest. Our AI-driven platform matches students and professionals to opportunities tailored to your skills, interests, and career goals. Start building your future today!",
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
    title: "Remotenest – AI-Powered Job Matching",
    description:
      "Discover your ideal remote job with Remotenest. Our AI-driven platform matches students and professionals to opportunities tailored to your skills, interests, and career goals. Start building your future today!",
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
