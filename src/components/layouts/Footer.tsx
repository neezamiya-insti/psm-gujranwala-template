import Link from "next/link";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Container from "@/components/common/Container";
import { footerCampuses } from "@/data/contact";
import { navLinks, contactInfo } from "@/data/navigation";

export default function Footer() {
  const footerNavLinks = navLinks.filter((l) =>
    ["/about", "/academics", "/admissions", "/gallery-events"].includes(l.href)
  );

  return (
    <footer className="bg-[#0f2b2e] pt-14 text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#e15a2e] text-sm font-extrabold text-white">
                GS
              </div>
              <p className="pt-3.5 text-[15px] font-bold leading-snug">
                Gujranwala Grammar School
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              BISE Gujranwala affiliated &middot; Punjab Curriculum aligned.
            </p>
          </div>

          {/* Campuses */}
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
              Campuses
            </p>
            <ul className="mt-4 space-y-4">
              {footerCampuses.map((campus) => (
                <li key={campus.name}>
                  <p className="text-sm font-semibold text-white">
                    {campus.name}
                  </p>
                  <p className="mt-0.5 text-sm text-white/55">
                    {campus.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigate */}
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
              Navigate
            </p>
            <ul className="mt-4 space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {link.label === "About" ? "About" : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
              Contact
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/9255123456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <MessageCircle className="h-3.5 w-3.5 shrink-0" />
                  WhatsApp 
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 py-4 font-mono text-[11px] uppercase tracking-wide text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; 2026 Gujranwala Grammar School
          </p>
          <p>BISE Gujranwala Reg. No. GSA-1998-0472</p>
        </div>
      </Container>
    </footer>
  );
}