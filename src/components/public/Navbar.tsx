"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight, Briefcase, User, Users } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/images/Logo-Symbol.png" alt="Remotenest Logo" width={36} height={36} />
          <span className="text-lg font-semibold text-[#00C896]">
            Remotenest
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 relative">
          <Link href="/about" className="text-gray-700 hover:text-[#009F6B] transition-colors">
            About
          </Link>

          <Link href="/contact" className="text-gray-700 hover:text-[#009F6B] transition-colors">
            Contact
          </Link>

          {/* Signup Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-[#009F6B] transition-colors"
            >
              Signup <ChevronDown size={16} className="mt-0.5" />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 right-0 bg-white shadow-lg rounded-lg py-3 w-48 border border-gray-100"
                >
                  <Link
                    href="/signup/talent"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F9FAFB] hover:text-[#009F6B]"
                  >
                    <User size={16} className="text-[#9EF0D0]" /> Talent
                  </Link>
                  <Link
                    href="/signup/employer"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F9FAFB] hover:text-[#009F6B]"
                  >
                    <Briefcase size={16} className="text-[#9EF0D0]" /> Employer
                  </Link>
                  <Link
                    href="/signup/team"
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-[#F9FAFB] hover:text-[#009F6B]"
                  >
                    <Users size={16} className="text-[#9EF0D0]" /> Team
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <Link
            href="/signup/team"
            className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-[#00C896] hover:bg-[#009F6B] transition-all duration-300 shadow-md"
          >
            Join Early <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#00C896] hover:text-[#009F6B] transition-colors"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md"
          >
            <div className="flex flex-col items-center space-y-4 py-6">
              <Link href="/about" className="text-gray-700 hover:text-[#009F6B]" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[#009F6B]" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              {/* Mobile Dropdown */}
              <div className="w-full text-center">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex justify-center items-center w-full text-gray-700 hover:text-[#009F6B] gap-1"
                >
                  Signup <ChevronDown size={16} />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col mt-2 space-y-2"
                    >
                      <Link href="/signup/talent" className="text-gray-700 hover:text-[#009F6B]" onClick={() => setIsOpen(false)}>
                        Jobseeker
                      </Link>
                      <Link href="/signup/employer" className="text-gray-700 hover:text-[#009F6B]" onClick={() => setIsOpen(false)}>
                        Employer
                      </Link>
                      <Link href="/signup/team" className="text-gray-700 hover:text-[#009F6B]" onClick={() => setIsOpen(false)}>
                        Team
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/signup/team"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-white bg-[#00C896] hover:bg-[#009F6B] transition-all duration-300 shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Join Early <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
