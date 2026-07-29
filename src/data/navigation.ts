import { type SiteLanguage } from "@/lib/language";

export interface NavLink {
  label: string;
  href: string;
}

const navLinkLabels: Record<SiteLanguage, NavLink[]> = {
  EN: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Admissions", href: "/admissions" },
    { label: "Gallery", href: "/gallery-events" },
    { label: "Careers", href: "/careers" },
    { label: "Portal", href: "/parent-portal" },
    { label: "Contact", href: "/contact" },
  ],
  UR: [
    { label: "ہوم", href: "/" },
    { label: "تعارف", href: "/about" },
    { label: "تعلیم", href: "/academics" },
    { label: "داخلہ", href: "/admissions" },
    { label: "گیلری", href: "/gallery-events" },
    { label: "کیریئرز", href: "/careers" },
    { label: "پورٹل", href: "/parent-portal" },
    { label: "رابطہ", href: "/contact" },
  ],
};

export function getNavLinks(language: SiteLanguage): NavLink[] {
  return navLinkLabels[language];
}

export const contactInfo = {
  phone: "+92 55 123 4567",
  email: "admissions@gujranwalagsa.edu.pk",
  location: "Model Town · Wazirabad Road · Rahwali Cantt",
};