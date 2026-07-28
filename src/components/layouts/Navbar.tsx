"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/common/Container";
import MobileMenu from "@/components/layouts/MobileMenu";
import { navLinks, contactInfo } from "@/data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "UR">("EN");

  return (
    <header className="top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-white py-2 text-[#0f2b2e] lg:block">
        <Container className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 text-[#0f2b2e] transition-colors hover:text-orange-500"
            >
              <Phone className="h-3 w-3" />
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 text-[#0f2b2e] transition-colors hover:text-orange-500"
            >
              <Mail className="h-3 w-3" />
              {contactInfo.email}
            </a>
            <span className="flex items-center gap-1.5 text-[#0f2b2e] *:transition-colors hover:text-orange-500">
              <MapPin className="h-3 w-3" />
              {contactInfo.location}
            </span>
          </div>

          <div className="flex items-center overflow-hidden rounded-full border border-[#0f2b2e]">
            <button
              onClick={() => setLang("EN")}
              className={`px-3 py-1 font-semibold transition-colors ${
                lang === "EN"
                  ? "bg-[#0f2b2e] text-white"
                  : "text-[#0f2b2e] hover:text-orange-500"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("UR")}
              className={`px-3 py-1 font-semibold transition-colors ${
                lang === "UR"
                  ? "bg-[#0f2b2e] text-white"
                  : "text-[#0f2b2e] hover:text-orange-500"
              }`}
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            >
              اردو
            </button>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <div className="border-b border-gray-100 bg-[#0f2b2e]">
        <Container className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white text-sm font-extrabold text-white">
              GS
            </div>
            <div className="leading-tight">
              <p className="text-[15px] font-bold text-white sm:text-base">
                Gujranwala Grammar School
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/85 transition-colors hover:text-orange-500"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/admissions"
              className="hidden rounded-full bg-[#e15a2e] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-orange-500 active:scale-[0.98] lg:inline-block"
            >
              Apply Online
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span className="h-0.5 w-6 bg-white lg:bg-[#0f2b2e]" />
              <span className="h-0.5 w-6 bg-white lg:bg-[#0f2b2e]" />
              <span className="h-0.5 w-6 bg-white lg:bg-[#0f2b2e]" />
            </button>
          </div>
        </Container>
      </div>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        lang={lang}
        setLang={setLang}
      />
    </header>
  );
}