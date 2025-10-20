"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function TermsPage() {
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
            <FileText className="w-7 h-7 text-[#00C896]" />
          </motion.div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Terms of <span className="text-[#00C896]">Service</span>
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            Please read these Terms of Service carefully before using{" "}
            <strong>Remotenest</strong>. By accessing or using our platform,
            you agree to be bound by these Terms and our Privacy Policy.
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
          <section>
            <h2 className="font-semibold mb-2 text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By creating an account, accessing, or using Remotenest, you confirm that you are
              at least 18 years old and have the legal capacity to enter into these Terms. If you are
              using our platform on behalf of a company or organization, you represent that you have the
              authority to bind that entity to these Terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">2. User Accounts and Security</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and
              restricting access to your account. You agree to notify us immediately of any unauthorized
              access or security breach. Remotenest is not liable for any loss or damage resulting from
              failure to protect your credentials.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">3. Permitted Use of Services</h2>
            <p>
              You agree to use Remotenest solely for lawful purposes and in compliance with all
              applicable laws. You shall not:
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Use the platform to engage in fraudulent, misleading, or illegal activities.</li>
              <li>Attempt to gain unauthorized access to our systems or data.</li>
              <li>Post, upload, or transmit content that infringes upon the rights of others.</li>
              <li>Interfere with or disrupt the functionality of the platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">4. User Content and Intellectual Property</h2>
            <p>
              You retain ownership of the content, information, or materials you submit to Remotenest.
              By uploading content, you grant Remotenest a non-exclusive, worldwide, royalty-free
              license to use, display, and distribute such content as necessary to operate and improve
              our services.
            </p>
            <p className="mt-2">
              All intellectual property rights related to the platform, including design, code, and
              branding, remain the exclusive property of Remotenest and its licensors.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">5. Payment and Subscription Terms</h2>
            <p>
              Certain features or services may require payment. By purchasing a paid plan, you agree
              to the applicable fees, billing terms, and renewal policies. All payments are non-refundable
              except as required by law or explicitly stated by Remotenest.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">6. Termination and Suspension</h2>
            <p>
              We reserve the right to suspend or terminate your account or access to the platform at
              any time if you violate these Terms, engage in abusive behavior, or act in a way that harms
              our users or brand reputation. Upon termination, your right to use our services will cease
              immediately, but your obligations under these Terms will continue as applicable.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">7. Disclaimers</h2>
            <p>
              Remotenest provides its services “as is” and “as available.” We make no warranties,
              express or implied, regarding the reliability, accuracy, or availability of our platform.
              Your use of the service is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Remotenest and its affiliates shall not be held
              liable for any indirect, incidental, special, consequential, or punitive damages, including
              loss of profits, data, or goodwill, resulting from your use or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Remotenest, its affiliates, officers, and employees
              from any claims, damages, or expenses arising from your violation of these Terms or misuse of
              the platform.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">10. Changes to These Terms</h2>
            <p>
              We may modify or update these Terms from time to time to reflect changes in our practices
              or for legal reasons. Continued use of Remotenest after any updates constitutes your acceptance
              of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">11. Governing Law and Dispute Resolution</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of your country
              of residence, without regard to conflict of law principles. Any disputes shall be resolved
              through binding arbitration or in the courts of competent jurisdiction, as applicable.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-2 text-gray-900">12. Contact Information</h2>
            <p>
              For inquiries or concerns regarding these Terms, please contact us at{" "}
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
