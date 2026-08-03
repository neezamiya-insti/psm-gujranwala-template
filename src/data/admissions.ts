import { type SiteLanguage } from "@/lib/language";

export interface AdmissionStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

const admissionStepsByLanguage: Record<SiteLanguage, AdmissionStep[]> = {
  EN: [
    {
      id: "apply",
      number: "01",
      title: "Apply Online",
      description:
        "Browse academics & facilities, then submit the form — English or Urdu.",
    },
    {
      id: "upload",
      number: "02",
      title: "Upload Documents",
      description:
        "B-form, leaving certificate & photograph, straight from your phone camera.",
    },
    {
      id: "pay",
      number: "03",
      title: "Pay Admission Fee",
      description:
        "Secure digital payment for the processing fee, no campus visit needed.",
    },
    {
      id: "track",
      number: "04",
      title: "Track Status",
      description:
        'Live tracker — instead of wondering if the form arrived.',
    },
    {
      id: "confirm",
      number: "05",
      title: "Get Confirmed",
      description:
        "Receive confirmation the moment the admissions office approves it.",
    },
    {
      id: "updates",
      number: "06",
      title: "WhatsApp Updates",
      description:
        "Attendance & progress alerts move to WhatsApp from day one.",
    },
  ],
  UR: [
    {
      id: "apply",
      number: "01",
      title: "آن لائن درخواست",
      description:
        "تعلیم اور سہولیات دیکھیں، پھر فارم جمع کریں — انگریزی یا اردو میں۔",
    },
    {
      id: "upload",
      number: "02",
      title: "دستاویزات اپ لوڈ کریں",
      description:
        "بی فارم، چھوڑنے کا سرٹیفکیٹ اور تصویر، سیدھا موبائل کیمرے سے۔",
    },
    {
      id: "pay",
      number: "03",
      title: "داخلہ فیس ادا کریں",
      description:
        "پروسیسنگ فیس کی محفوظ ڈیجیٹل ادائیگی، کیمپس آنے کی ضرورت نہیں۔",
    },
    {
      id: "track",
      number: "04",
      title: "درخواست ٹریک کریں",
      description:
        'لائیو ٹریکر — تاکہ فارم پہنچا یا نہیں، یہ سوچنا نہ پڑے۔',
    },
    {
      id: "confirm",
      number: "05",
      title: "تصدیق حاصل کریں",
      description:
        "جیسے ہی داخلہ دفتر منظور کرے، آپ کو تصدیق مل جائے گی۔",
    },
    {
      id: "updates",
      number: "06",
      title: "واٹس ایپ اپ ڈیٹس",
      description:
        "حاضری اور پیش رفت کی اطلاعات پہلے دن سے واٹس ایپ پر ملیں گی۔",
    },
  ],
};

export function getAdmissionSteps(language: SiteLanguage): AdmissionStep[] {
  return admissionStepsByLanguage[language];
}

export interface TrackerStep {
  id: string;
  stepNumber: string;
  status: "done" | "in-review" | "pending";
  title: string;
  detail: string;
}

export const applicationTracker = {
  applicantName: "Eishah Iqbal",
  grade: "Grade 6",
  refNumber: "GSA-ADM-2026-00847",
  percentComplete: 68,
  steps: [
    {
      id: "submitted",
      stepNumber: "Step 01",
      status: "done" as const,
      title: "Form Submitted",
      detail: "Received 12 July 2026",
    },
    {
      id: "uploaded",
      stepNumber: "Step 02",
      status: "done" as const,
      title: "Documents Uploaded",
      detail: "B-form & certificate verified",
    },
    {
      id: "review",
      stepNumber: "Step 03",
      status: "in-review" as const,
      title: "Admissions Review",
      detail: "Assigned to Admissions In-Charge",
    },
    {
      id: "confirmation",
      stepNumber: "Step 04",
      status: "pending" as const,
      title: "Fee & Confirmation",
      detail: "Unlocks after approval",
    },
  ],
};

export function getApplicationTracker(language: SiteLanguage) {
  if (language !== "UR") {
    return applicationTracker;
  }

  return {
    applicantName: "عائشہ اقبال",
    grade: "جماعت 6",
    refNumber: applicationTracker.refNumber,
    percentComplete: applicationTracker.percentComplete,
    steps: [
      {
        id: "submitted",
        stepNumber: "مرحلہ 01",
        status: "done" as const,
        title: "فارم جمع ہو گیا",
        detail: "12 جولائی 2026 کو موصول ہوا",
      },
      {
        id: "uploaded",
        stepNumber: "مرحلہ 02",
        status: "done" as const,
        title: "دستاویزات اپ لوڈ",
        detail: "بی فارم اور سرٹیفکیٹ کی تصدیق",
      },
      {
        id: "review",
        stepNumber: "مرحلہ 03",
        status: "in-review" as const,
        title: "داخلہ جائزہ",
        detail: "داخلہ انچارج کے پاس",
      },
      {
        id: "confirmation",
        stepNumber: "مرحلہ 04",
        status: "pending" as const,
        title: "فیس اور تصدیق",
        detail: "منظوری کے بعد فعال ہوگی",
      },
    ],
  };
}

export interface FormFieldConfig {
  id: string;
  label: string;
  type: "text" | "date" | "select" | "tel";
  placeholder?: string;
  options?: string[];
}

export const applicationFormFields: FormFieldConfig[] = [
  {
    id: "studentName",
    label: "Student Full Name",
    type: "text",
    placeholder: "e.g. Eishah Iqbal",
  },
  {
    id: "dob",
    label: "Date of Birth",
    type: "date",
    placeholder: "DD / MM / YYYY",
  },
  {
    id: "grade",
    label: "Grade",
    type: "select",
    options: [
        "Montessori",
        "Pre-Primary",
        "Grade 1",
        "Grade 2",
        "Grade 3",
        "Grade 4",
        "Grade 5",
        "Grade 6",
        "Grade 7",
        "Grade 8",
        "Grade 9",
        "Grade 10",
      ],
  },
  {
    id: "campus",
    label: "Preferred Campus",
    type: "select",
    options: ["Model Town (Main)", "Wazirabad Road", "Rahwali Cantt"],
  },
  {
    id: "guardianName",
    label: "Parent / Guardian Name",
    type: "text",
    placeholder: "e.g. Muhammad Fahad",
  },
  {
    id: "whatsapp",
    label: "WhatsApp Number",
    type: "tel",
    placeholder: "+92 3XX XXXXXXX",
  },
  {
    id: "previousSchool",
    label: "Previous School (if any)",
    type: "text",
    placeholder: "School name, city",
  },
  {
    id: "language",
    label: "Preferred Language",
    type: "select",
    options: ["English", "Urdu"],
  },
];

export function getApplicationFormFields(language: SiteLanguage): FormFieldConfig[] {
  if (language !== "UR") {
    return applicationFormFields;
  }

  return [
    {
      id: "studentName",
      label: "طالب علم کا پورا نام",
      type: "text",
      placeholder: "مثال: عائشہ اقبال",
    },
    {
      id: "dob",
      label: "تاریخ پیدائش",
      type: "date",
      placeholder: "DD / MM / YYYY",
    },
    {
      id: "grade",
      label: "جماعت",
      type: "select",
      options: [
        "مونٹیسوری",
        "پری پرائمری",
        "جماعت 1",
        "جماعت 2",
        "جماعت 3",
        "جماعت 4",
        "جماعت 5",
        "جماعت 6",
        "جماعت 7",
        "جماعت 8",
        "جماعت 9",
        "جماعت 10",
      ],
    },
    {
      id: "campus",
      label: "پسندیدہ کیمپس",
      type: "select",
      options: ["ماڈل ٹاؤن (مین)", "وزیرآباد روڈ", "راولی کینٹ"],
    },
    {
      id: "guardianName",
      label: "والدین / سرپرست کا نام",
      type: "text",
      placeholder: "مثال: محمد فہد",
    },
    {
      id: "whatsapp",
      label: "واٹس ایپ نمبر",
      type: "tel",
      placeholder: "+92 3XX XXXXXXX",
    },
    {
      id: "previousSchool",
      label: "پچھلا اسکول (اگر کوئی ہو)",
      type: "text",
      placeholder: "اسکول کا نام، شہر",
    },
    {
      id: "language",
      label: "پسندیدہ زبان",
      type: "select",
      options: ["English", "Urdu"],
    },
  ];
}

export interface DocumentUploadItem {
  id: string;
  label: string;
}

export const requiredDocuments: DocumentUploadItem[] = [
  { id: "birth-cert", label: "Birth Certificate / B-Form" },
  { id: "leaving-cert", label: "School Leaving Certificate" },
  { id: "photo", label: "Passport-size Photograph" },
];

export function getRequiredDocuments(language: SiteLanguage): DocumentUploadItem[] {
  if (language !== "UR") {
    return requiredDocuments;
  }

  return [
    { id: "birth-cert", label: "پیدائش کا سرٹیفکیٹ / بی فارم" },
    { id: "leaving-cert", label: "اسکول چھوڑنے کا سرٹیفکیٹ" },
    { id: "photo", label: "پاسپورٹ سائز تصویر" },
  ];
}

export interface FeeLineItem {
  id: string;
  label: string;
  amount: string;
}

export const admissionFees: FeeLineItem[] = [
  { id: "processing", label: "Application Processing", amount: "Rs. 2,500" },
  { id: "assessment", label: "Assessment Test Fee", amount: "Rs. 1,000" },
];

export function getAdmissionFees(language: SiteLanguage): FeeLineItem[] {
  if (language !== "UR") {
    return admissionFees;
  }

  return [
    { id: "processing", label: "درخواست پروسیسنگ", amount: "Rs. 2,500" },
    { id: "assessment", label: "ٹیسٹ فیس", amount: "Rs. 1,000" },
  ];
}

export const totalFee = "Rs. 3,500";

export interface CalendarEvent {
  id: string;
  date: string;
  title: string;
  description: string;
}

export const admissionCalendar: CalendarEvent[] = [
  {
    id: "open",
    date: "01 Aug 2026",
    title: "Applications Open",
    description: "All grades, all three campuses.",
  },
  {
    id: "assessment",
    date: "20 Aug 2026",
    title: "Assessment Tests",
    description: "Grades 6 and above, on-campus.",
  },
  {
    id: "results",
    date: "05 Sep 2026",
    title: "Results & Offers",
    description: "Sent via WhatsApp & tracker update.",
  },
  {
    id: "deadline",
    date: "15 Sep 2026",
    title: "Fee Deadline",
    description: "Confirms the enrolled seat.",
  },
];

export function getAdmissionCalendar(language: SiteLanguage): CalendarEvent[] {
  if (language !== "UR") {
    return admissionCalendar;
  }

  return [
    {
      id: "open",
      date: "01 اگست 2026",
      title: "درخواستیں کھل گئیں",
      description: "تمام جماعتیں، تینوں کیمپس۔",
    },
    {
      id: "assessment",
      date: "20 اگست 2026",
      title: "ٹیسٹ",
      description: "جماعت 6 اور اس سے اوپر، کیمپس میں۔",
    },
    {
      id: "results",
      date: "05 ستمبر 2026",
      title: "نتائج اور آفرز",
      description: "واٹس ایپ اور ٹریکر اپ ڈیٹ کے ذریعے۔",
    },
    {
      id: "deadline",
      date: "15 ستمبر 2026",
      title: "فیس کی آخری تاریخ",
      description: "داخلہ نشست کی توثیق۔",
    },
  ];
}