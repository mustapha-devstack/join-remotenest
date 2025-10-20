"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#F9FAFB] border-t border-[#00C896]/20 text-gray-700 py-14 overflow-hidden">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#9EF0D0]/20 to-transparent opacity-60"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Brand & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-[#00C896]">Remotenest</h2>
          <p className="mt-2 text-gray-500 text-sm">
            Connecting talent with global opportunities — powered by collaboration.
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left mb-10">
          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
            <ul className="space-y-2 text-gray-500">
              <li><Link href="/about" className="hover:text-[#00C896] transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#00C896] transition-colors">Contact</Link></li>
              <li><Link href="/signup/team" className="hover:text-[#00C896] transition-colors">Join Early Team</Link></li>
            </ul>
          </motion.div>

          {/* Platform */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="font-semibold text-gray-800 mb-4">Platform</h4>
            <ul className="space-y-2 text-gray-500">
              <li><Link href="/signup/talent" className="hover:text-[#00C896] transition-colors">For Talent</Link></li>
              <li><Link href="/signup/employer" className="hover:text-[#00C896] transition-colors">For Employers</Link></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-500">
              <li><Link href="/privacy-policy" className="hover:text-[#00C896] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-[#00C896] transition-colors">Terms of Service</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-500">
              <li className="flex justify-center md:justify-start items-center gap-2">
                <Mail className="w-4 h-4 text-[#009F6B]" /> global.remotenest@gmail.com
              </li>
              <li className="flex justify-center md:justify-start items-center gap-2">
                <MapPin className="w-4 h-4 text-[#009F6B]" /> Kaduna, Nigeria
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mb-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {[
            { Icon: Facebook, href: "https://www.facebook.com/profile.php?id=61582512719588&mibextid=ZbWKwL" },
            { Icon: Twitter, href: "https://x.com/remote_nest" },
            { Icon: Instagram, href: "https://www.instagram.com/global.remotenest?igsh=MXNxa3ZtMXBvY2NjZw==" },
          ].map(({ Icon, href }, index) => (
            <Link
              href={href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#00C896] hover:text-[#009F6B] transition-transform hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </Link>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="text-center text-sm text-gray-500 border-t border-[#00C896]/20 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          © {new Date().getFullYear()} <span className="text-[#00C896] font-semibold">Remotenest</span>. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
