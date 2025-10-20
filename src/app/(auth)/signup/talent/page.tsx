"use client";

import Link from "next/link";
import { useState, ChangeEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, User, Briefcase, Send, ArrowLeft, ArrowRight } from "lucide-react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  bio: string;
}

export default function TalentSignupPage() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    jobTitle: "",
    bio: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await axios.post("/api/signup/talent", formData);
      if (res.status === 201) {
        sessionStorage.setItem("justSignedUp", "true");
        setSuccess("Signup successful! Redirecting...");
        setTimeout(() => router.push("/thank-you"), 1500);
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        setError(err.response?.data?.error || "Something went wrong.");
      } else {
        setError("Unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative bg-[#F9FAFB] min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* Background accents */}
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
        <h1 className="text-3xl font-bold text-center mb-6 text-[#00C896]">Talent Signup</h1>

        {/* Step Indicators */}
        <div className="flex justify-center mb-8 space-x-3">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-3 h-3 rounded-full ${num === step ? "bg-[#00C896]" : "bg-gray-300"}`}
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
            className="space-y-5"
          >
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-[#00C896]" size={20} />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
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
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
              />
            </div>
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
              <Phone className="absolute left-3 top-3.5 text-[#00C896]" size={20} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#00C896]"
              />
            </div>
            <div className="relative">
              <Briefcase className="absolute left-3 top-3.5 text-[#00C896]" size={20} />
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title / Skill (e.g. Frontend Developer)"
                value={formData.jobTitle}
                onChange={handleChange}
                required
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
              name="bio"
              placeholder="Brief Bio or Portfolio Link"
              rows={4}
              value={formData.bio}
              onChange={handleChange}
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
              disabled={loading}
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
