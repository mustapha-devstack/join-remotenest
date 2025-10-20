"use client";

import { motion } from "framer-motion";
import { CheckCircle, Twitter, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function ThankYouPage() {

  return (
    <section className="relative bg-[#F9FAFB] min-h-screen flex flex-col items-center justify-center px-6 py-16 overflow-hidden">
      {/* Floating Accent Backgrounds */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#00C896]/20 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-[#9EF0D0]/40 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-[#9EF0D0]/40 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#00C896]/10"
        >
          <CheckCircle className="w-8 h-8 text-[#00C896]" />
        </motion.div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-gray-600 mb-6">
          Your submission has been received successfully. We’ll get back to you soon.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00C896] text-white font-semibold hover:bg-[#009F6B] transition"
        >
          Back to Home
        </Link>

        {/* --- Follow Us Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-8"
        >
          <p className="text-gray-700 font-medium mb-3">Follow us on</p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="https://x.com/remote_nest"
              target="_blank"
              className="p-3 rounded-full bg-[#00C896]/10 text-[#00C896] hover:bg-[#00C896] hover:text-white transition"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/global.remotenest?igsh=MXNxa3ZtMXBvY2NjZw=="
              target="_blank"
              className="p-3 rounded-full bg-[#00C896]/10 text-[#00C896] hover:bg-[#00C896] hover:text-white transition"
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61582512719588&mibextid=ZbWKwL"
              target="_blank"
              className="p-3 rounded-full bg-[#00C896]/10 text-[#00C896] hover:bg-[#00C896] hover:text-white transition"
            >
              <Facebook size={20} />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
