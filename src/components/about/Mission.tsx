"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function AboutMission() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F9FAFB] to-[#9EF0D0]/20 overflow-hidden">
      <motion.div
        className="container mx-auto px-6 md:px-12 text-center md:text-left max-w-5xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Icon */}
        <motion.div
          className="w-16 h-16 flex items-center justify-center bg-[#00C896]/10 rounded-2xl mx-auto md:mx-0 mb-6"
          whileHover={{ rotate: 15, scale: 1.1 }}
        >
          <Target className="text-[#00C896]" size={36} />
        </motion.div>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#009F6B] mb-4">
          Our <span className="text-[#00C896]">Mission</span>
        </h2>

        {/* Mission Text */}
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
          At <span className="text-[#00C896] font-semibold">Remotenest</span>, our mission
          is to bridge the gap between potential and opportunity — empowering
          students, freelancers, and professionals to discover meaningful remote
          work, grow their skills, and earn smarter from anywhere in the world.
        </p>
      </motion.div>

      {/* Floating Glow Animation */}
      <motion.div
        className="absolute top-0 right-0 w-48 h-48 bg-[#00C896]/20 rounded-full blur-3xl"
        animate={{
          y: [0, 25, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
