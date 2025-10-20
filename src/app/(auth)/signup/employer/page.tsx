"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Briefcase,
  Link as LinkIcon,
  Send,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface EmployerFormData {
  companyName: string;
  email: string;
  phone: string;
  companySize: string;
  website: string;
  password: string;
  message: string;
}

export default function EmployerSignupPage() {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();

  const [formData, setFormData] = useState<EmployerFormData>({
    companyName: "",
    email: "",
    phone: "",
    companySize: "",
    website: "",
    password: "",
    message: "",
  });

  // ✅ Type-safe onChange handler
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (): string => {
    if (step === 2) {
      if (!formData.companyName.trim()) return "Company name is required.";
      if (!formData.email.trim()) return "Email address is required.";
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email))
        return "Please enter a valid email address.";
      if (!formData.companySize.trim())
        return "Please select your company size.";
    }
    if (step === 3 && !formData.message.trim())
      return "Please provide a brief job listing or message.";
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

  const handleSubmit = async () => {
    const err = validateStep();
    if (err) return setError(err);

    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post("/api/signup/employer", {
        ...formData,
        password: formData.password || "default123",
      });

      if (res.status === 201) {
        sessionStorage.setItem("justSignedUp", "true");
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => router.push("/thank-you"), 1500);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.error ||
            "An unexpected error occurred. Please try again later."
        );
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-[#F9FAFB] min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* Floating Background Accents */}
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

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-2xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-[#9EF0D0]/40"
      >
        <h1 className="text-3xl font-bold text-center mb-6 text-[#00C896]">
          Employer Signup
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

        {/* STEP 1 */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center space-y-6"
          >
            <p className="text-gray-700 text-center mb-2">
              Welcome to Remotenest! Let’s set up your employer profile.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={nextStep}
              className="w-full bg-[#00C896] text-white py-3 rounded-xl font-semibold hover:bg-[#009F6B] transition"
            >
              Start Registration
            </motion.button>
          </motion.div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <div className="relative">
              <Briefcase className="absolute left-3 top-3.5 text-[#00C896]" size={20} />
              <input
                type="text"
                name="companyName"
                placeholder="Company Name *"
                value={formData.companyName}
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
                placeholder="Email Address *"
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
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
              />
            </div>

            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
            >
              <option value="">Select Company Size *</option>
              <option value="1-10">1-10 employees</option>
              <option value="11-50">11-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-500">201-500 employees</option>
              <option value="501-1000">501-1000 employees</option>
              <option value="1000+">1000+ employees</option>
            </select>

            <div className="relative">
              <LinkIcon className="absolute left-3 top-3.5 text-[#00C896]" size={20} />
              <input
                type="url"
                name="website"
                placeholder="Company Website / LinkedIn"
                value={formData.website}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
              />
            </div>
          </motion.div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-5"
          >
            <textarea
              name="message"
              placeholder="Job Listing / Message *"
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
              whileTap={{ scale: 0.97 }}
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
