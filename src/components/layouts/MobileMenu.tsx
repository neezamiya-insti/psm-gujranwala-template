"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { navLinks, contactInfo } from "@/data/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/40 lg:hidden"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-sm flex-col bg-[#0f2b2e] text-white lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <span className="text-sm font-bold uppercase tracking-wide">
                Menu
              </span>
              <button onClick={onClose} aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="border-b border-white/10 py-4 text-lg font-medium text-white/90 transition-colors hover:text-[#e15a2e]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="space-y-3 border-t border-white/10 px-6 py-6">
             <a 
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>
              <a
                href="/admissions"
                onClick={onClose}
                className="mt-2 block rounded-full bg-[#e15a2e] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Apply Online
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}