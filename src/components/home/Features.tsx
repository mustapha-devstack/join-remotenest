"use client";

import { motion } from "framer-motion";
import { Briefcase, Users, Rocket, Sparkles } from "lucide-react";
import { useState } from "react";

const features = [
  {
    id: 1,
    icon: <Briefcase className="w-8 h-8 text-[#00C896]" />,
    title: "Smart Job Matching",
    description:
      "AI-powered job matching ensures the right candidates meet the right employers quickly and effectively.",
  },
  {
    id: 2,
    icon: <Users className="w-8 h-8 text-[#00C896]" />,
    title: "Collaborative Hiring",
    description:
      "Empower your team to review and shortlist candidates seamlessly within a shared workspace.",
  },
  {
    id: 3,
    icon: <Rocket className="w-8 h-8 text-[#00C896]" />,
    title: "Launch Your Career Early",
    description:
      "Join Remotenest’s early team or find your first remote opportunity in an ambitious startup environment.",
  },
  {
    id: 4,
    icon: <Sparkles className="w-8 h-8 text-[#00C896]" />,
    title: "Future-Ready Platform",
    description:
      "We’re building with innovation in mind — scalable, fast, and powered by AI to shape the future of work.",
  },
];

export default function FeaturesSection() {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Why <span className="text-[#00C896]">Remotenest?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 mb-16 max-w-2xl mx-auto"
        >
          Discover a platform built to connect ambitious individuals and teams
          redefining the future of remote work.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const isActive = activeId === feature.id;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() =>
                  setActiveId(isActive ? null : feature.id)
                } // toggle for mobile
                onMouseEnter={() => setActiveId(feature.id)}
                onMouseLeave={() => setActiveId(null)}
                className="bg-white rounded-2xl shadow-md p-8 cursor-pointer transition-all hover:shadow-lg relative"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>

                {/* Expandable detail */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isActive ? "auto" : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-2"
                >
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
