"use client";

import { motion } from "framer-motion";
import { Globe2, Users2, Target } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F9FAFB] to-[#E6F8F2] overflow-hidden">
      {/* Decorative floating gradient blobs */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#00C896] opacity-20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#9EF0D0] opacity-30 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-8"
        >
          About <span className="text-[#00C896]">Remotenest</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg"
        >
          Remotenest is a platform designed to connect ambitious individuals and 
          visionary companies — empowering collaboration, innovation, and growth 
          without geographical boundaries.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Globe2 className="w-8 h-8 text-[#00C896]" />,
              title: "Global Opportunities",
              desc: "We’re redefining access to global remote work opportunities — for everyone, everywhere.",
            },
            {
              icon: <Users2 className="w-8 h-8 text-[#00C896]" />,
              title: "People First",
              desc: "We value talent and collaboration over location, enabling diverse teams to thrive together.",
            },
            {
              icon: <Target className="w-8 h-8 text-[#00C896]" />,
              title: "Purpose Driven",
              desc: "Our mission is to help people find meaningful work and companies find purpose-driven talent.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md p-8 text-center transition-all"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
