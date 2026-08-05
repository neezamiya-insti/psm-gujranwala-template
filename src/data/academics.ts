import { type SiteLanguage } from "@/lib/language";

export interface CurriculumStage {
  id: string;
  ageRange: string;
  name: string;
  board: string;
  description: string;
  courses: string[];
}

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
  EN: [
    {
      id: "1",
      ageRange: "Age 3-5",
      name: "Early Years",
      board: "Primary",
      description:
        "A foundation-focused stage where children develop confidence, creativity, and early learning habits through engaging activities.",
      courses: [
        "English",
        "Mathematics",
        "Science",
        "Art & Creativity",
        "Computer Basics",
        "Social Skills",
        "Islamic Studies",
        "General Knowledge",
      ],
    },
    {
      id: "2",
      ageRange: "Grade 1-5",
      name: "Primary School",
      board: "Primary",
      description:
        "Students build strong academic foundations with emphasis on conceptual understanding, problem-solving, and character development.",
      courses: [
        "English",
        "Mathematics",
        "General Science",
        "Urdu",
        "Islamic Studies",
        "Computer Science",
        "Social Studies",
        "Art & Craft",
      ],
    },
    {
      id: "3",
      ageRange: "Grade 6-8",
      name: "Middle School",
      board: "Middle",
      description:
        "A structured learning phase that strengthens analytical thinking, subject knowledge, and independent learning skills.",
      courses: [
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Urdu",
        "Computer Science",
        "Pakistan Studies",
        "Islamic Studies",
      ],
    },
    {
      id: "4",
      ageRange: "Grade 9-10",
      name: "Secondary School",
      board: "BISE Gujranwala",
      description:
        "Students prepare for board examinations with focused subject learning, practical understanding, and career guidance.",
      courses: [
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "Urdu",
        "Pakistan Studies",
        "Islamic Studies",
      ],
    },
    {
      id: "5",
      ageRange: "Grade 11-12",
      name: "Higher Secondary",
      board: "BISE / Cambridge",
      description:
        "Advanced academic preparation designed to help students excel in higher education and future professional pathways.",
      courses: [
        "English",
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "Computer Science",
        "Statistics",
        "Pakistan Studies",
        "Islamic Studies",
      ],
    },
  ],

  UR: [
    {
      id: "1",
      ageRange: "عمر 3–5",
      name: "ابتدائی تعلیم",
      board: "پرائمری",
      description:
        "بچوں کی تخلیقی صلاحیتوں، اعتماد، گفتگو اور ابتدائی سیکھنے کی مہارتوں کو سرگرمیوں کے ذریعے بہتر بنایا جاتا ہے۔",
      courses: [
        "انگریزی",
        "ریاضی",
        "سائنس",
        "آرٹ اور تخلیقی سرگرمیاں",
        "کمپیوٹر کی بنیادی معلومات",
        "سماجی مہارتیں",
        "اسلامیات",
        "عمومی معلومات",
      ],
    },
    {
      id: "2",
      ageRange: "جماعت 1–5",
      name: "ابتدائی اسکول",
      board: "پرائمری",
      description:
        "طلبہ کو مضبوط تعلیمی بنیاد فراہم کی جاتی ہے جس میں فہم، مسئلہ حل کرنے اور کردار سازی پر توجہ دی جاتی ہے۔",
      courses: [
        "انگریزی",
        "ریاضی",
        "جنرل سائنس",
        "اردو",
        "اسلامیات",
        "کمپیوٹر سائنس",
        "مطالعہ پاکستان",
        "آرٹ اینڈ کرافٹ",
      ],
    },
    {
      id: "3",
      ageRange: "جماعت 6–8",
      name: "مڈل اسکول",
      board: "مڈل",
      description:
        "یہ مرحلہ طلبہ کی تجزیاتی سوچ، مضمون کی سمجھ اور خود سیکھنے کی صلاحیت کو مضبوط بناتا ہے۔",
      courses: [
        "انگریزی",
        "ریاضی",
        "طبیعیات",
        "کیمسٹری",
        "حیاتیات",
        "اردو",
        "کمپیوٹر سائنس",
        "مطالعہ پاکستان",
        "اسلامیات",
      ],
    },
    {
      id: "4",
      ageRange: "جماعت 9–10",
      name: "میٹرک / سیکنڈری",
      board: "BISE گوجرانوالہ",
      description:
        "بورڈ امتحانات کی تیاری کے لیے جامع تعلیمی رہنمائی اور مضامین کی گہری سمجھ فراہم کی جاتی ہے۔",
      courses: [
        "انگریزی",
        "ریاضی",
        "طبیعیات",
        "کیمسٹری",
        "حیاتیات",
        "کمپیوٹر سائنس",
        "اردو",
        "مطالعہ پاکستان",
        "اسلامیات",
      ],
    },
    {
      id: "5",
      ageRange: "جماعت 11–12",
      name: "ہائر سیکنڈری",
      board: "BISE / کیمبرج",
      description:
        "اعلیٰ تعلیم اور مستقبل کے پیشہ ورانہ راستوں کے لیے جدید تعلیمی تیاری فراہم کی جاتی ہے۔",
      courses: [
        "انگریزی",
        "ریاضی",
        "طبیعیات",
        "کیمسٹری",
        "حیاتیات",
        "کمپیوٹر سائنس",
        "شماریات",
        "مطالعہ پاکستان",
        "اسلامیات",
      ],
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