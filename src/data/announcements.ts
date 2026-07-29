import { type SiteLanguage } from "@/lib/language";
import { type LucideIcon, Bus, Trophy, TrendingUp } from "lucide-react";

export interface TickerAnnouncement {
  id: string;
  icon: LucideIcon;
  text: string;
}

export const tickerAnnouncements: TickerAnnouncement[] = [
  {
    id: "admissions",
    icon: Bus,
    text: "Admissions for Session 2026-27 now open, Ghakkhar & Kamoke feeder buses added",
  },
  {
    id: "sports",
    icon: Trophy,
    text: "Sports Gala – 14 August, Model Town Ground",
  },
  {
    id: "result",
    icon: TrendingUp,
    text: "Matric result 2026 announced – 96% pass rate",
  },
];

const tickerAnnouncementsByLanguage: Record<SiteLanguage, TickerAnnouncement[]> = {
  EN: tickerAnnouncements,
  UR: [
    {
      id: "admissions",
      icon: Bus,
      text: "سیشن 2026-27 کے داخلے کھل گئے، گھکھڑ اور کامونکی سے فیڈر بسیں شامل",
    },
    {
      id: "sports",
      icon: Trophy,
      text: "اسپورٹس گالا – 14 اگست، ماڈل ٹاؤن گراؤنڈ",
    },
    {
      id: "result",
      icon: TrendingUp,
      text: "میٹرک نتیجہ 2026 کا اعلان – 96% پاس کی شرح",
    },
  ],
};

export function getTickerAnnouncements(language: SiteLanguage): TickerAnnouncement[] {
  return tickerAnnouncementsByLanguage[language];
}