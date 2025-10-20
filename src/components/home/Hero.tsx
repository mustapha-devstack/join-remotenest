"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F9FAFB] py-24 px-6 flex items-center justify-center min-h-[90vh]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hreo-bg.avif')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9FAFB]/30 via-white/60 to-white" />

      {/* Floating Shapes */}
      <motion.div
        className="absolute top-16 left-20 w-32 h-32 bg-[#00C896]/20 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-20 right-28 w-40 h-40 bg-[#9EF0D0]/25 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 bg-white/80 backdrop-blur-md border border-[#00C896]/10 shadow-2xl rounded-3xl max-w-3xl w-full text-center p-10"
      >
        {/* Content */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Find your perfect{" "}
          <span className="text-[#00C896]">remote match</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-600 mb-10"
        >
          Powered by AI — connecting jobseekers, employers, and innovators for the
          future of remote work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/signup/talent"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#00C896] text-white font-semibold hover:bg-[#009F6B] transition-all duration-300 shadow-md"
          >
            <Briefcase size={20} />
            I’m a Talent
          </Link>

          <Link
            href="/signup/employer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[#00C896] text-[#00C896] font-semibold hover:bg-[#00C896] hover:text-white transition-all duration-300"
          >
            <Users size={20} />
            I’m an Employer
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
