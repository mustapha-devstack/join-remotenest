"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";
import axios from "axios";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await axios.post("/api/contact", formData);
      setStatus(res.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      setStatus(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Get in <span className="text-[#00C896]">Touch</span>
        </h2>
        <p className="text-gray-600 mb-10">
          Fill out the form below and we’ll get back to you as soon as possible.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-6 text-left"
        >
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl p-3 focus-within:ring-2 focus-within:ring-[#00C896] transition">
              <User className="w-5 h-5 text-[#00C896]" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="flex-1 bg-transparent outline-none text-gray-800"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center gap-2 border border-gray-200 rounded-xl p-3 focus-within:ring-2 focus-within:ring-[#00C896] transition">
              <Mail className="w-5 h-5 text-[#00C896]" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
                className="flex-1 bg-transparent outline-none text-gray-800"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <div className="flex items-start gap-2 border border-gray-200 rounded-xl p-3 focus-within:ring-2 focus-within:ring-[#00C896] transition">
              <MessageSquare className="w-5 h-5 mt-1 text-[#00C896]" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows={4}
                required
                className="flex-1 bg-transparent outline-none text-gray-800 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className="flex items-center justify-center gap-2 w-full bg-[#00C896] hover:bg-[#009F6B] text-white font-semibold py-3 rounded-xl shadow-md transition"
          >
            <Send className="w-5 h-5" />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {status && (
            <p className="text-center text-sm text-gray-600 mt-3">{status}</p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
