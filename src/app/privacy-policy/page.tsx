"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <section className="relative bg-[#F9FAFB] min-h-screen flex flex-col items-center justify-start px-6 py-16 overflow-hidden">
      {/* Floating Accent Backgrounds */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#00C896]/20 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-[#9EF0D0]/40 rounded-full blur-3xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-3xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl p-10 border border-[#9EF0D0]/40"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full bg-[#00C896]/10"
          >
            <ShieldCheck className="w-7 h-7 text-[#00C896]" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Privacy <span className="text-[#00C896]">Policy</span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            This Privacy Policy explains how <strong>Remotenest</strong> collects, uses, and protects
            your personal information when you interact with our platform, products, and services.
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="font-semibold mb-2 text-gray-900">1. Information We Collect</h2>
            <p>
              We collect personal information you provide directly when creating an account,
              completing your profile, applying for opportunities, or communicating with us.
              This may include your name, email address, phone number, professional details,
              and any files (e.g., resumes or company logos) you upload.
            </p>
            <p className="mt-2">
              We may also collect technical and usage information automatically, such as IP address,
              browser type, device information, and activity logs, to improve security and user experience.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">2. How We Use Your Information</h2>
            <p>
              We use your data to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Provide, personalize, and maintain our services.</li>
              <li>Facilitate connections between talents, teams, and employers.</li>
              <li>Send important updates, notifications, and promotional communications.</li>
              <li>Enhance security and prevent fraudulent activities.</li>
              <li>Analyze usage to improve features and user experience.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">3. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal data. We may share information only in the following cases:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>With trusted service providers (e.g., hosting, analytics, or communication tools) under strict confidentiality agreements.</li>
              <li>When legally required to comply with applicable laws, regulations, or government requests.</li>
              <li>In connection with a business transfer, such as a merger or acquisition, where user data remains protected.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">4. Data Retention</h2>
            <p>
              We retain your information for as long as necessary to provide our services, comply with
              legal obligations, resolve disputes, and enforce our agreements. You may request deletion
              of your data at any time by contacting our support team.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">5. Security Measures</h2>
            <p>
              We implement advanced security measures, including encryption, access controls, and
              continuous monitoring, to protect your personal data from unauthorized access, loss,
              or misuse. However, no online system is completely secure, and we cannot guarantee
              absolute protection.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">6. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar technologies to remember preferences, analyze traffic,
              and improve the platform experience. You can control cookie settings through your
              browser, though disabling cookies may affect functionality.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">7. Your Rights</h2>
            <p>
              Depending on your region (e.g., GDPR or CCPA jurisdictions), you may have rights to:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Access, correct, or delete your personal data.</li>
              <li>Request restriction or objection to certain processing activities.</li>
              <li>Withdraw consent for marketing communications.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p className="mt-2">
              To exercise your rights, contact us at{" "}
              <span className="text-[#00C896] font-medium">global.remotenest@gmail.com</span>.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">8. International Data Transfers</h2>
            <p>
              Your data may be transferred and processed outside your country of residence. We ensure
              appropriate safeguards (such as Standard Contractual Clauses) are in place to protect
              your privacy and comply with applicable laws.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">9. Changes to This Policy</h2>
            <p>
              We may periodically update this Privacy Policy to reflect operational, legal, or regulatory changes.
              Updated versions will be posted on this page with the revised “Last Updated” date.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">10. Contact Us</h2>
            <p>
              For questions, concerns, or data requests, please contact our Data Protection Officer at{" "}
              <span className="text-[#00C896] font-medium">global.remotenest@gmail.com</span>.
            </p>
            <p className="mt-2 text-gray-500 italic">
              Last Updated: October 19, 2025
            </p>
          </section>
        </div>
      </motion.div>
    </section>
  );
}
