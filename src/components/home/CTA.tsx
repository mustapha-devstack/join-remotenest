"use client";

import { motion } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-r from-[#00C896] via-[#009F6B] to-[#00C896] text-white">
      {/* Floating animated shapes for subtle motion */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.3) 0%, transparent 40%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold mb-6"
        >
          Be Part of the <span className="text-[#9EF0D0]">Future of Remote Work</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-white/90 mb-10 max-w-2xl mx-auto"
        >
          Join Remotenest early — whether you’re an employer looking for global
          talent, a jobseeker seeking flexibility, or a visionary ready to build
          the next big thing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/signup/talent"
            className="inline-flex items-center gap-2 bg-white text-[#00C896] font-semibold px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg transition-all"
          >
            <Send className="w-5 h-5" />
            Join as Talent
          </Link>

          <Link
            href="/signup/employer"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-[#00C896] transition-all"
          >
            <ArrowRight className="w-5 h-5" />
            Join as Employer
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
