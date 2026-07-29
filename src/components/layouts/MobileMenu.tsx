"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { getNavLinks } from "@/data/navigation";
import { type SiteLanguage } from "@/lib/language";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  lang: SiteLanguage;
  setLang: (lang: SiteLanguage) => void;
}

export default function MobileMenu({
  open,
  onClose,
  lang,
  setLang,
}: MobileMenuProps) {
  const navLinks = getNavLinks(lang);
  const menuLabel = lang === "UR" ? "مینو" : "Menu";
  const languageLabel = lang === "UR" ? "زبان" : "Language";
  const applyLabel = lang === "UR" ? "آن لائن درخواست" : "Apply Online";

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
                {menuLabel}
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

            <div className="space-y-4 border-t border-white/10 px-6 py-6">

              {/* Language Switcher */}
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/60">
                  {languageLabel}
                </p>

                <div className="flex w-fit overflow-hidden rounded-full border border-white/30">
                  <button
                    onClick={() => setLang("EN")}
                    className={`px-4 py-1.5 text-sm font-semibold transition-colors ${
                      lang === "EN"
                        ? "bg-white text-[#0f2b2e]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    EN
                  </button>

                  <button
                    onClick={() => setLang("UR")}
                    className={`px-4 py-1.5 text-sm font-semibold transition-colors ${
                      lang === "UR"
                        ? "bg-white text-[#0f2b2e]"
                        : "text-white hover:bg-white/10"
                    }`}
                    style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
                  >
                    اردو
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}