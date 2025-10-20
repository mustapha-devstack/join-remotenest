"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F9FAFB] to-[#9EF0D0]/10 overflow-hidden">
      {/* Floating Background Glow */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-[#00C896]/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-[#9EF0D0]/20 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#009F6B] mb-4">
          Meet the <span className="text-[#00C896]">Visionary</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Remotenest was founded by <span className="font-semibold text-[#00C896]">Mustapha Kasim</span>, 
          driven by the vision to connect global talent and opportunity through technology.
        </p>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl overflow-hidden border border-[#00C896]/30 hover:border-[#00C896]/60 transition-all duration-300"
      >
        {/* Profile Header */}
        <div className="relative h-48 bg-gradient-to-r from-[#00C896] to-[#009F6B] flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg absolute -bottom-16"
          >
            <Image
              src="/images/avatar.webp" // Add your photo here in /public/images
              alt="Mustapha Kasim"
              width={128}
              height={128}
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Info */}
        <div className="pt-20 pb-10 px-6 text-center">
          <h3 className="text-2xl font-bold text-[#009F6B]">Mustapha Kasim</h3>
          <p className="text-gray-500 mb-3">Founder • Developer • Visionary</p>
          <p className="text-gray-600 text-sm mb-6">
            Building the future of remote work through innovation, inclusion, and intelligent design.
          </p>

          {/* Links */}
          <div className="flex justify-center gap-6">
            <Link
              href="https://mustapha-portfolio-six.vercel.app/"
              target="_blank"
              className="text-[#00C896] hover:text-[#009F6B] transition"
            >
              <Globe size={26} />
            </Link>
            <Link
              href="https://github.com/mustapha-devstack/"
              target="_blank"
              className="text-[#00C896] hover:text-[#009F6B] transition"
            >
              <Github size={26} />
            </Link>
            <Link
              href="https://x.com/mustaphaDevFS"
              target="_blank"
              className="text-[#00C896] hover:text-[#009F6B] transition"
            >
              <Twitter size={26} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
