"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="bg-[#F9FAFB] py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        {/* Icon Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center bg-[#00C896]/10 rounded-full w-16 h-16 mb-6"
        >
          <MessageSquare className="w-8 h-8 text-[#00C896]" />
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Let’s <span className="text-[#00C896]">Connect</span> & Build Something Great
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 mb-8">
          Have a question, suggestion, or partnership idea? We’d love to hear from you.
          Reach out to the Remotenest team anytime.
        </p>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="mailto:global.remotenest@gmail.com"
            className="flex items-center gap-2 bg-[#00C896] text-white px-6 py-3 rounded-full font-medium hover:bg-[#009F6B] transition"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
