"use client";

import { motion } from "framer-motion";
import { UserSearch, Brain, Briefcase, Rocket } from "lucide-react";

export default function HowRemotenestWorks() {
  const steps = [
    {
      icon: UserSearch,
      title: "1. Create Your Profile",
      text: "Sign up as a talent, employer, or team. Set your preferences, skills, or hiring needs in minutes.",
    },
    {
      icon: Brain,
      title: "2. AI Matching",
      text: "Our smart algorithm analyzes your data and connects you to the most relevant remote opportunities or candidates.",
    },
    {
      icon: Briefcase,
      title: "3. Connect & Collaborate",
      text: "Chat, interview, and hire seamlessly within the Remotenest platform — all remote, all secure.",
    },
    {
      icon: Rocket,
      title: "4. Grow Together",
      text: "Build long-term partnerships, upskill through resources, and expand your career or company globally.",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#F9FAFB] to-[#9EF0D0]/20 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#009F6B] mb-4">
          How <span className="text-[#00C896]">Remotenest</span> Works
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover how we simplify remote hiring and collaboration through an intelligent, transparent, and inclusive process.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl p-8 text-center border border-[#00C896]/20 hover:border-[#00C896]/50 transition-all duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-[#00C896]/10 rounded-xl">
                <step.icon className="text-[#00C896]" size={36} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#009F6B] mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Animated Background Glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C896]/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-10 right-10 w-48 h-48 bg-[#9EF0D0]/30 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
}
