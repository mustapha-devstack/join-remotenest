"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Timer } from "lucide-react";

export default function CountdownSection() {
  const targetDate = new Date("2026-01-01T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });

      if (distance < 0) clearInterval(timer);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <section className="relative py-24 bg-[#F9FAFB] text-center overflow-hidden">
      {/* Floating glow background */}
      <motion.div
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-[#00C896]/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <div className="flex justify-center items-center gap-3 mb-4">
          <Timer size={30} className="text-[#00C896]" />
          <h2 className="text-3xl font-bold text-gray-900">
            Launching Soon 🚀
          </h2>
        </div>

        <p className="text-gray-600 mb-10">
          Be among the first to experience the future of remote work.
        </p>
      </motion.div>

      {/* Countdown Boxes */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-wrap justify-center gap-6"
      >
        {[
          { label: "Days", value: days },
          { label: "Hours", value: hours },
          { label: "Minutes", value: minutes },
          { label: "Seconds", value: seconds },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="w-28 h-28 bg-white shadow-md border border-[#9EF0D0] rounded-2xl flex flex-col justify-center items-center text-[#009F6B]"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 10 + i, repeat: Infinity }}
          >
            <span className="text-3xl font-bold text-[#00C896]">
              {item.value.toString().padStart(2, "0")}
            </span>
            <span className="text-sm font-semibold text-gray-500">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Subtext CTA */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="relative z-10 mt-12 text-gray-700"
      >
        Stay tuned — exciting things are coming to{" "}
        <span className="text-[#00C896] font-semibold">Remotenest</span>.
      </motion.p>
    </section>
  );
}
