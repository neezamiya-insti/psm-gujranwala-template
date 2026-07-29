import { type SiteLanguage } from "@/lib/language";

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

const quickStatsByLanguage: Record<SiteLanguage, StatItem[]> = {
  EN: [
    { id: "students", value: "1,850+", label: "Students across 3 campuses" },
    { id: "result", value: "96%", label: "Matric & O/A-Level result rate" },
    { id: "faculty", value: "74", label: "Qualified faculty members" },
    { id: "years", value: "28yr", label: "Serving Gujranwala since 1998" },
  ],
  UR: [
    { id: "students", value: "1,850+", label: "3 کیمپسز میں طلبہ" },
    { id: "result", value: "96%", label: "میٹرک اور او/اے لیول نتیجہ شرح" },
    { id: "faculty", value: "74", label: "اہل اساتذہ" },
    { id: "years", value: "28yr", label: "1998 سے گوجرانوالہ کی خدمت" },
  ],
};

export function getQuickStats(language: SiteLanguage): StatItem[] {
  return quickStatsByLanguage[language];
}