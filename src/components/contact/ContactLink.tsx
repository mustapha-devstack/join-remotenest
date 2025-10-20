"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function ContactLinksSection() {
  const links = [
    {
      icon: <Mail className="w-6 h-6 text-[#00C896]" />,
      title: "Email Us",
      detail: "global.remotenest@gmail.com",
      href: "mailto:global.remotenest@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#00C896]" />,
      title: "Visit Us",
      detail: "Kaduna, Nigeria",
      href: "https://www.google.com/maps/place/Kaduna,+Nigeria",
    },
  ];

  const socials = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/profile.php?id=61582512719588&mibextid=ZbWKwL",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/remote_nest",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/global.remotenest?igsh=MXNxa3ZtMXBvY2NjZw==",
    },
  ];

  return (
    <section className="bg-[#F9FAFB] py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Let’s <span className="text-[#00C896]">Connect</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Whether you’re looking to collaborate, get support, or just say hello — we’d love to hear from you.
        </p>

        {/* Contact Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="mb-4 p-4 bg-[#9EF0D0]/40 rounded-full"
                >
                  {link.icon}
                </motion.div>
                <h3 className="font-semibold text-lg text-gray-900">{link.title}</h3>
                <p className="text-gray-600 mt-2">{link.detail}</p>
                <Link
                  href={link.href}
                  target="_blank"
                  className="mt-4 inline-block text-[#00C896] hover:text-[#009F6B] font-medium transition"
                >
                  Reach Out →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center gap-6"
        >
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-[#00C896] hover:text-white transition"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
