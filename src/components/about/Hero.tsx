"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F9FAFB] to-[#9EF0D0]/30 py-24">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Icon */}
        <motion.div
          className="mx-auto mb-6 w-16 h-16 flex items-center justify-center bg-[#00C896]/10 rounded-full"
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <Users className="text-[#00C896]" size={32} />
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#009F6B] mb-4">
          About <span className="text-[#00C896]">Remotenest</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          We’re redefining how students and professionals connect with remote
          opportunities — powered by AI, passion, and community.
        </p>

        {/* CTA */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Button
            className="bg-[#00C896] hover:bg-[#009F6B] text-white font-semibold px-6 py-3 rounded-2xl"
          >
            Join Our Mission <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>

      {/* Decorative Background Motion */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 bg-[#00C896]/20 rounded-full blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
