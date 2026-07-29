import { type SiteLanguage } from "@/lib/language";

export interface CurriculumStage {
  id: string;
  ageRange: string;
  name: string;
  board: string;
  description: string;
}

export const curriculumStages: CurriculumStage[] = [
  {
    id: "montessori",
    ageRange: "Ages 3–5",
    name: "Montessori & Pre-Primary",
    board: "Punjab Curriculum",
    description: "Play-based early years at the Model Town campus only.",
  },
  {
    id: "primary",
    ageRange: "Grades 1–5",
    name: "Primary School",
    board: "Punjab Curriculum",
    description:
      "Bilingual English–Urdu foundation in literacy & numeracy.",
  },
  {
    id: "middle",
    ageRange: "Grades 6–8",
    name: "Middle School",
    board: "Punjab Curriculum",
    description: "Subject specialisation begins across sciences & languages.",
  },
  {
    id: "matric",
    ageRange: "Grades 9–10",
    name: "Matric / Secondary",
    board: "BISE Gujranwala",
    description:
      "Our most-marketed segment — board result rankings drive local reputation.",
  },
  {
    id: "intermediate",
    ageRange: "Ages 16–18",
    name: "Intermediate / O-A Level",
    board: "Cambridge · BISE",
    description:
      "University-placement focused; results content matters most here.",
  },
];

export interface BoardAffiliation {
  id: string;
  initials: string;
  name: string;
  tag: string;
  description: string;
  featured?: boolean;
}

export const boardAffiliations: BoardAffiliation[] = [
  {
    id: "bise",
    initials: "BG",
    name: "BISE Gujranwala",
    tag: "Matric & Secondary",
    description:
      "Our home examination authority, covering the wider Gujranwala Division. Registration number and annual affiliation renewal are published on request.",
    featured: true,
  },
  {
    id: "federal",
    initials: "FB",
    name: "Federal Board",
    tag: "Select Secondary Streams",
    description:
      "Available for families transferring in from federal-board institutions, or planning a future move outside Punjab.",
  },
  {
    id: "cambridge",
    initials: "CB",
    name: "Cambridge (O/A-Level)",
    tag: "Intermediate / College Track",
    description:
      "Offered at the Model Town campus for the Intermediate segment, with university-placement counselling included.",
  },
];

export interface ResultRecord {
  session: string;
  matricResult: string;
  oaLevelResult: string;
  board: string;
  pdfUrl: string;
}

export const resultsArchive: ResultRecord[] = [
  {
    session: "2026",
    matricResult: "96%",
    oaLevelResult: "91%",
    board: "BISE Gujranwala · Cambridge",
    pdfUrl: "/documents/results/2026.pdf",
  },
  {
    session: "2025",
    matricResult: "94%",
    oaLevelResult: "89%",
    board: "BISE Gujranwala · Cambridge",
    pdfUrl: "/documents/results/2025.pdf",
  },
  {
    session: "2024",
    matricResult: "92%",
    oaLevelResult: "87%",
    board: "BISE Gujranwala · Cambridge",
    pdfUrl: "/documents/results/2024.pdf",
  },
  {
    session: "2023",
    matricResult: "90%",
    oaLevelResult: "85%",
    board: "BISE Gujranwala · Cambridge",
    pdfUrl: "/documents/results/2023.pdf",
  },
];

export const districtRanking = {
  label: "Board Result Achievement",
  description: "Celebrating student achievements with a strong foundation for outstanding academic outcomes.",
  rank: "Rank #3",
  scope: "BISE Gujranwala",
};

const curriculumStagesByLanguage: Record<SiteLanguage, CurriculumStage[]> = {
  EN: curriculumStages,
  UR: [
    {
      id: "montessori",
      ageRange: "عمر 3–5",
      name: "مونٹیسوری اور پری پرائمری",
      board: "پنجاب نصاب",
      description: "صرف ماڈل ٹاؤن کیمپس میں کھیل پر مبنی ابتدائی تعلیم۔",
    },
    {
      id: "primary",
      ageRange: "جماعت 1–5",
      name: "ابتدائی اسکول",
      board: "پنجاب نصاب",
      description: "خواندگی اور حساب میں دو لسانی انگریزی-اردو بنیاد۔",
    },
    {
      id: "middle",
      ageRange: "جماعت 6–8",
      name: "مڈل اسکول",
      board: "پنجاب نصاب",
      description: "سائنس اور زبانوں میں مضمون وار مہارت شروع ہوتی ہے۔",
    },
    {
      id: "matric",
      ageRange: "جماعت 9–10",
      name: "میٹرک / سیکنڈری",
      board: "بی آئی ایس ای گوجرانوالہ",
      description: "ہمارا نمایاں حصہ — نتائج کی درجہ بندی مقامی ساکھ بناتی ہے۔",
    },
    {
      id: "intermediate",
      ageRange: "عمر 16–18",
      name: "انٹرمیڈیٹ / او-اے لیول",
      board: "کیمبرج · بی آئی ایس ای",
      description: "یونیورسٹی پلیسمنٹ پر مرکوز؛ نتائج کی معلومات یہاں سب سے اہم ہیں۔",
    },
  ],
};

export function getCurriculumStages(language: SiteLanguage): CurriculumStage[] {
  return curriculumStagesByLanguage[language];
}

const boardAffiliationsByLanguage: Record<SiteLanguage, BoardAffiliation[]> = {
  EN: boardAffiliations,
  UR: [
    {
      id: "bise",
      initials: "BG",
      name: "بی آئی ایس ای گوجرانوالہ",
      tag: "میٹرک اور سیکنڈری",
      description:
        "ہمارا مرکزی امتحانی ادارہ، جو گوجرانوالہ ڈویژن کے بڑے حصے کو کور کرتا ہے۔ رجسٹریشن نمبر اور سالانہ وابستگی تجدید درخواست پر فراہم کی جاتی ہے۔",
      featured: true,
    },
    {
      id: "federal",
      initials: "FB",
      name: "فیڈرل بورڈ",
      tag: "منتخب سیکنڈری سلسلے",
      description:
        "ان خاندانوں کے لیے دستیاب ہے جو فیڈرل بورڈ اداروں سے منتقل ہو رہے ہوں، یا پنجاب سے باہر مستقبل کی منتقلی کا ارادہ رکھتے ہوں۔",
    },
    {
      id: "cambridge",
      initials: "CB",
      name: "کیمبرج (او/اے لیول)",
      tag: "انٹرمیڈیٹ / کالج ٹریک",
      description:
        "ماڈل ٹاؤن کیمپس میں انٹرمیڈیٹ حصے کے لیے دستیاب، یونیورسٹی پلیسمنٹ رہنمائی کے ساتھ۔",
    },
  ],
};

export function getBoardAffiliations(language: SiteLanguage): BoardAffiliation[] {
  return boardAffiliationsByLanguage[language];
}

const resultsArchiveByLanguage: Record<SiteLanguage, ResultRecord[]> = {
  EN: resultsArchive,
  UR: resultsArchive.map((record) => ({
    ...record,
    board: "بی آئی ایس ای گوجرانوالہ · کیمبرج",
  })),
};

export function getResultsArchive(language: SiteLanguage): ResultRecord[] {
  return resultsArchiveByLanguage[language];
}

export function getDistrictRanking(language: SiteLanguage) {
  return language === "UR"
    ? {
        label: "بورڈ نتیجہ کامیابی",
        description:
          "طلبہ کی کامیابیوں کا جشن ایک مضبوط بنیاد کے ساتھ جو شاندار تعلیمی نتائج لاتی ہے۔",
        rank: "رینک #3",
        scope: "بی آئی ایس ای گوجرانوالہ",
      }
    : districtRanking;
}