import { type SiteLanguage } from "@/lib/language";

export interface AlumniProfile {
  id: string;
  initials: string;
  name: string;
  classOf: string;
  role: string;
  quote: string;
}

export const alumniProfiles: AlumniProfile[] = [
  {
      id: "hassan",
      initials: "HS",
      name: "Hassan S., Class of 2011",
      role: "Director, Steel Utensil Exports",
      quote: "Now runs export operations on Wazirabad Road, and sends both his children to our Model Town campus.",
      classOf: ""
  },
  {
      id: "ayesha",
      initials: "AR",
      name: "Ayesha R., Class of 2014",
      role: "Partner, Sporting Goods House",
      quote: "Credits the school's English-medium program for opening direct client conversations abroad.",
      classOf: ""
  },
  {
      id: "tariq",
      initials: "MT",
      name: "M. Tariq, Class of 2009",
      role: "Fan Manufacturing, Plant Head",
      quote: "Recruits our vocational-track graduates each year for floor supervisor roles.",
      classOf: ""
  },
];

export interface IndustryPartner {
  id: string;
  initials: string;
  name: string;
  logo: string;
  tags: string[];
  description: string;
}
export const industryPartners: IndustryPartner[] = [
  {
    id: "wazirabad-fan",
    initials: "FM",
    name: "Wazirabad Fan Works",
    logo: "/images/partners/w-fan.jpg",
    tags: ["Internship", "Placement"],
    description:
      "Manufacturing floor internships for vocational-track students.",
  },
  {
    id: "model-town-steel",
    initials: "SU",
    name: "Model Town Steel Utensils",
    logo: "/images/partners/model-town-steel.jpg",
    tags: ["Placement"],
    description:
      "Annual recruitment drive for supervisory and QC roles.",
  },
  {
    id: "sialkot-sporting",
    initials: "SG",
    name: "Sialkot Bypass Sporting Goods Co.",
    logo: "/images/partners/sialkot-sporting.jpg",
    tags: ["Internship"],
    description:
      "Summer internships in export documentation & QC.",
  },
  {
    id: "chamber-commerce",
    initials: "CC",
    name: "Gujranwala Chamber of Commerce",
    logo: "/images/partners/chamber-commerce.jpg",
    tags: ["Sponsorship", "Mentorship"],
    description:
      "Guest lectures and trade-body co-branded certification.",
  },
];

export interface SecondaryStat {
  id: string;
  value: string;
  label: string;
}

export const careerHighlight = {
  title: "Proven Track Record of Placement",
  description:
    "With over 28 years of experience, we have helped students build successful careers through 220+ internship placements, 14 industry partnerships, and an 87% placement rate. Our strong industry network and career-focused approach ensure students gain the skills, exposure, and opportunities needed to succeed.",
  ctaLabel: "Talk to Admissions",
  ctaHref: "/admissions",
  featuredValue: "87%",
  featuredLabel: "Placed or Enrolled Within 6 Months",
};

export const secondaryStats: SecondaryStat[] = [
  { id: "partners", value: "14+", label: "Active Industry Partners" },
  { id: "internships", value: "220+", label: "Internships Since 2018" },
  { id: "tracks", value: "6+", label: "Vocational Short-Course Tracks" },
  { id: "years", value: "28yr", label: "Serving Since 1998" },
];

export const partnerCTA = {
  title: "Recruiting from GGS & Vocational Wing?",
  description:
    "Register as an industry partner to post internships, sponsor a short course, or join our campus recruitment day.",
  buttonLabel: "Become a Partner",
};

export function getAlumniProfiles(language: SiteLanguage): AlumniProfile[] {
  if (language !== "UR") return alumniProfiles;

  return [
    {
      id: "hassan",
      initials: "HS",
      name: "حسن ایس، کلاس 2011",
      role: "ڈائریکٹر، اسٹیل برتن برآمدات",
      quote: "وزیرآباد روڈ پر برآمدی کاروبار چلاتے ہیں، اور اپنے دونوں بچوں کو ہمارے ماڈل ٹاؤن کیمپس بھیجتے ہیں۔",
      classOf: "",
    },
    {
      id: "ayesha",
      initials: "AR",
      name: "عائشہ آر، کلاس 2014",
      role: "پارٹنر، اسپورٹنگ گڈز ہاؤس",
      quote: "اسکول کے انگریزی میڈیم پروگرام کو بیرون ملک کلائنٹ سے براہ راست بات چیت کھولنے کا کریڈٹ دیتی ہیں۔",
      classOf: "",
    },
    {
      id: "tariq",
      initials: "MT",
      name: "ایم طارق، کلاس 2009",
      role: "پنکھا مینوفیکچرنگ، پلانٹ ہیڈ",
      quote: "ہر سال فلور سپروائزر کے عہدوں کے لیے ہمارے پیشہ ورانہ ٹریک کے گریجویٹس بھرتی کرتے ہیں۔",
      classOf: "",
    },
  ];
}

const industryPartnersByLanguage: Record<SiteLanguage, IndustryPartner[]> = {
  EN: industryPartners,
  UR: [
    {
      id: "wazirabad-fan",
      initials: "FM",
      name: "وزیرآباد فین ورکس",
      logo: "/images/partners/w-fan.jpg",
      tags: ["انٹرنشپ", "پلیسمنٹ"],
      description: "پیشہ ورانہ ٹریک کے طلبہ کے لیے مینوفیکچرنگ فلور انٹرنشپ۔",
    },
    {
      id: "model-town-steel",
      initials: "SU",
      name: "ماڈل ٹاؤن اسٹیل اتنسیلز",
      logo: "/images/partners/model-town-steel.jpg",
      tags: ["پلیسمنٹ"],
      description: "سپروائزری اور کوالٹی کنٹرول کے عہدوں کے لیے سالانہ بھرتی مہم۔",
    },
    {
      id: "sialkot-sporting",
      initials: "SG",
      name: "سیالکوٹ بائی پاس اسپورٹنگ گڈز کمپنی",
      logo: "/images/partners/sialkot-sporting.jpg",
      tags: ["انٹرنشپ"],
      description: "برآمدی دستاویزات اور کوالٹی کنٹرول میں گرمیوں کی انٹرنشپ۔",
    },
    {
      id: "chamber-commerce",
      initials: "CC",
      name: "گوجرانوالہ چیمبر آف کامرس",
      logo: "/images/partners/chamber-commerce.jpg",
      tags: ["اسپانسرشپ", "مینٹرشپ"],
      description: "مہمان لیکچرز اور تجارتی ادارے کے مشترکہ برانڈڈ سرٹیفیکیشن۔",
    },
  ],
};

export function getIndustryPartners(language: SiteLanguage): IndustryPartner[] {
  return industryPartnersByLanguage[language];
}

export function getCareerHighlight(language: SiteLanguage) {
  if (language !== "UR") return careerHighlight;

  return {
    title: "پلیسمنٹ کا ثابت شدہ ریکارڈ",
    description:
      "28 سال سے زائد تجربے کے ساتھ، ہم نے 220+ انٹرنشپ پلیسمنٹ، 14 صنعتی شراکت داریاں، اور 87% پلیسمنٹ کی شرح کے ذریعے طلبہ کو کامیاب کیریئر بنانے میں مدد کی ہے۔",
    ctaLabel: "داخلہ سے بات کریں",
    ctaHref: "/admissions",
    featuredValue: "87%",
    featuredLabel: "6 ماہ کے اندر پلیس یا داخلہ",
  };
}

export function getSecondaryStats(language: SiteLanguage): SecondaryStat[] {
  if (language !== "UR") return secondaryStats;

  return [
    { id: "partners", value: "14+", label: "فعال صنعتی شراکت دار" },
    { id: "internships", value: "220+", label: "2018 سے انٹرنشپ" },
    { id: "tracks", value: "6+", label: "پیشہ ورانہ مختصر کورسز" },
    { id: "years", value: "28yr", label: "1998 سے گوجرانوالہ کی خدمت" },
  ];
}

export function getPartnerCTA(language: SiteLanguage) {
  if (language !== "UR") return partnerCTA;

  return {
    title: "GGS اور پیشہ ورانہ ونگ سے بھرتی کر رہے ہیں؟",
    description:
      "انٹرنشپ پوسٹ کرنے، مختصر کورس سپانسر کرنے، یا ہمارے کیمپس بھرتی دن میں شامل ہونے کے لیے صنعتی پارٹنر کے طور پر رجسٹر ہوں۔",
    buttonLabel: "پارٹنر بنیں",
  };
}