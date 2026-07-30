import { type SiteLanguage } from "@/lib/language";

export type EventTagType = "recap" | "photos" | "video-photos";

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  tag: string;
  tagType: EventTagType;
  link: string;
}

export const eventTimeline: TimelineEvent[] = [
  {
    id: "ptm-term2",
    date: "12 Jul 2026",
    title: "Parent-Teacher Meeting — Term 2",
    description:
      "All grades, Model Town & Wazirabad Road campuses. Individual report card review.",
    tag: "Catchup with Teachers",
    tagType: "recap",
    link: "https://wa.me/923001234567",
  },
  {
    id: "science-fair",
    date: "28 Jun 2026",
    title: "Inter-School Science Fair",
    description:
      "Grade 8–10 projects; three of our exhibits placed in the district top ten.",
    tag: "See Pictures",
    tagType: "photos",
    link: "/images/gallery/science-fair.jpeg",
  },
  {
    id: "sports-gala",
    date: "14 May 2026",
    title: "Sports Gala 2026",
    description:
      "Annual inter-house athletics day, Model Town Ground — full family attendance.",
    tag: "See Pictures",
    tagType: "photos",
    link: "/images/gallery/sports-gala.jpeg",
  },
  {
    id: "annual-function",
    date: "02 Mar 2026",
    title: "Annual Function & Prize Distribution",
    description:
      "Matric & O-Level toppers recognised on stage, followed by student performances.",
    tag: "See Pictures",
    tagType: "photos",
    link: "/images/gallery/prize-distribution.jpeg",
  },
];

export interface UpcomingEvent {
  title: string;
  date: string;
  start: string;
  end: string;
  location: string;
  audience: string;
}

export const upcomingEvent: UpcomingEvent = {
  title: "Next up: Independence Day Assembly",
  date: "14 August 2026",
  start: "20260814T090000",
  end: "20260814T120000",
  location: "Model Town Ground",
  audience: "Open to all parents",
};

export function getEventTimeline(language: SiteLanguage): TimelineEvent[] {
  if (language !== "UR") return eventTimeline;

  return [
    {
      id: "ptm-term2",
      date: "12 جولائی 2026",
      title: "والدین-اساتذہ میٹنگ — مدت 2",
      description:
        "تمام جماعتیں، ماڈل ٹاؤن اور وزیرآباد روڈ کیمپس۔ انفرادی رپورٹ کارڈ کا جائزہ۔",
      tag: "اساتذہ سے بات کریں",
      tagType: "recap",
      link: "https://wa.me/923001234567",
    },
    {
      id: "science-fair",
      date: "28 جون 2026",
      title: "بین المدارس سائنس فیئر",
      description:
        "جماعت 8-10 کے منصوبے؛ ہمارے تین نمائشوں نے ضلع کے ٹاپ ٹین میں جگہ بنائی۔",
      tag: "تصاویر دیکھیں",
      tagType: "photos",
      link: "/images/gallery/science-fair.jpeg",
    },
    {
      id: "sports-gala",
      date: "14 مئی 2026",
      title: "اسپورٹس گالا 2026",
      description:
        "سالانہ بین ہاؤس ایتھلیٹکس ڈے، ماڈل ٹاؤن گراؤنڈ — پورے خاندان کی شرکت۔",
      tag: "تصاویر دیکھیں",
      tagType: "photos",
      link: "/images/gallery/sports-gala.jpeg",
    },
    {
      id: "annual-function",
      date: "02 مارچ 2026",
      title: "سالانہ تقریب اور انعام کی تقسیم",
      description:
        "میٹرک اور او-لیول کے ٹاپرز کو اسٹیج پر اعزاز دیا گیا، اس کے بعد طلبہ کی پرفارمنس۔",
      tag: "ویڈیو دیکھیں",
      tagType: "video-photos",
      link: "/images/gallery/prize-distribution.mp4",
    },
  ];
}

export function getUpcomingEvent(language: SiteLanguage): UpcomingEvent {
  if (language !== "UR") return upcomingEvent;

  return {
    title: "اگلا پروگرام: یوم آزادی تقریب",
    date: "14 اگست 2026",
    start: "20260814T090000",
    end: "20260814T120000",
    location: "ماڈل ٹاؤن گراؤنڈ",
    audience: "تمام والدین کے لیے کھلا",
  };
}