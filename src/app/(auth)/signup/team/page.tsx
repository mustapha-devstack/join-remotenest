"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  User,
  Link as LinkIcon,
  Send,
  ArrowLeft,
  ArrowRight,
  FileText,
} from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function TeamSignupPage() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [cv, setCv] = useState<File | null>(null);
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolio: "",
    message: "",
  });

  // ✅ Proper typing for input, textarea, and select change events
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ File input event typing
  const handleCvUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCv(e.target.files[0]);
    }
  };

  const validateStep = () => {
    if (step === 2) {
      if (!formData.fullName.trim()) return "Full name is required.";
      if (!formData.email.trim()) return "Email address is required.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) return "Invalid email format.";
      if (!cv) return "Please upload your CV (PDF or DOC).";
    }
    if (step === 3 && (!formData.message.trim() || !formData.portfolio.trim()))
      return "Please provide both your portfolio/LinkedIn and message.";
    return "";
  };

  const nextStep = () => {
    const err = validateStep();
    if (err) return setError(err);
    setError("");
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setError("");
    setStep((prev) => Math.max(prev - 1, 1));
  };

  // ✅ Typed error handling without `any`
  const handleSubmit = async () => {
    const err = validateStep();
    if (err) return setError(err);

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const form = new FormData();
      form.append("fullName", formData.fullName);
      form.append("email", formData.email);
      form.append("phone", formData.phone);
      form.append("portfolio", formData.portfolio);
      form.append("message", formData.message);
      if (cv) form.append("cv", cv);

      const res = await axios.post("/api/signup/team", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.status === 201) {
        sessionStorage.setItem("justSignedUp", "true");
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => router.push("/thank-you"), 1500);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(error);
        setError(error.response?.data?.error || "Something went wrong!");
      } else {
        console.error(error);
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-[#F9FAFB] min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* Backgrounds */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#00C896]/20 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-[#9EF0D0]/40 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-[#9EF0D0]/40"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-[#00C896]">
          Team Member Signup
        </h1>

        {/* Step Indicators */}
        <div className="flex justify-center mb-8 space-x-3">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-3 h-3 rounded-full ${
                num === step ? "bg-[#00C896]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Step 1 */}
        {step === 1 && (
          <motion.div
            key="s1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center space-y-6"
          >
            <p className="text-gray-700">
              Let’s create your profile as a team member on Remotenest.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={nextStep}
              className="w-full bg-[#00C896] text-white py-3 rounded-xl font-semibold hover:bg-[#009F6B]"
            >
              Start Registration
            </motion.button>
          </motion.div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <motion.div
            key="s2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-[#00C896]" size={20} />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3.5 text-[#00C896]" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3.5 text-[#00C896]" size={20} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
              />
            </div>

            <div className="relative flex flex-col items-center justify-center p-5 border-2 border-dashed border-[#00C896]/50 rounded-xl cursor-pointer hover:bg-[#00C896]/5 transition">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleCvUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
              <FileText className="text-[#00C896]" size={28} />
              <p className="text-sm text-gray-600 mt-2">
                {cv ? cv.name : "Upload Your CV (PDF/DOC) *"}
              </p>
            </div>
          </motion.div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <motion.div
            key="s3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div className="relative">
              <LinkIcon className="absolute left-3 top-3.5 text-[#00C896]" size={20} />
              <input
                type="url"
                name="portfolio"
                placeholder="Portfolio or LinkedIn URL *"
                value={formData.portfolio}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
              />
            </div>

            <textarea
              name="message"
              placeholder="Tell us briefly about yourself and your skills *"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
            />
            <label className="flex items-center gap-2 text-sm text-gray-700">
              By signing up you agree to the{" "}
              <Link
                href="/terms-and-conditions"
                className="text-[#00C896] underline hover:text-[#00a67c] transition-colors duration-200"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy-policy"
                className="text-[#00C896] underline hover:text-[#00a67c] transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              .
            </label>
          </motion.div>
        )}

        {/* Feedback */}
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
        {success && <p className="text-green-600 text-center mt-3">{success}</p>}

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="flex items-center gap-2 text-[#00C896] font-medium"
              disabled={loading}
            >
              <ArrowLeft size={18} /> Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={nextStep}
              className="ml-auto flex items-center gap-2 bg-[#00C896] text-white py-2 px-5 rounded-xl hover:bg-[#009F6B]"
            >
              Next <ArrowRight size={18} />
            </button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.03 }}
              onClick={handleSubmit}
              disabled={loading}
              className="ml-auto flex items-center gap-2 bg-[#00C896] text-white py-2 px-5 rounded-xl hover:bg-[#009F6B]"
            >
              {loading ? "Submitting..." : (<><Send size={18} /> Submit</>)}
            </motion.button>
          )}
        </div>
      </motion.div>
    </section>
  );
}
