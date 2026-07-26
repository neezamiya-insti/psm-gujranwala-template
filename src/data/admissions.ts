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