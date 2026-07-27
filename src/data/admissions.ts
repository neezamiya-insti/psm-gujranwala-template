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