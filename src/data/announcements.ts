import { LucideIcon, Bus, Trophy, TrendingUp } from "lucide-react";

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