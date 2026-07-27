export interface AdmissionStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export const admissionSteps: AdmissionStep[] = [
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
      'Live tracker — "68% complete" — instead of wondering if the form arrived.',
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
      "Attendance & progress alerts move to WhatsApp/SMS from day one.",
  },
];

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

export interface DocumentUploadItem {
  id: string;
  label: string;
}

export const requiredDocuments: DocumentUploadItem[] = [
  { id: "birth-cert", label: "Birth Certificate / B-Form" },
  { id: "leaving-cert", label: "School Leaving Certificate" },
  { id: "photo", label: "Passport-size Photograph" },
];

export interface FeeLineItem {
  id: string;
  label: string;
  amount: string;
}

export const admissionFees: FeeLineItem[] = [
  { id: "processing", label: "Application Processing", amount: "Rs. 2,500" },
  { id: "assessment", label: "Assessment Test Fee", amount: "Rs. 1,000" },
];

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