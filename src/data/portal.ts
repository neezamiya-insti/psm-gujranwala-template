import { type SiteLanguage } from "@/lib/language";

export interface PortalStat {
  id: string;
  value: string;
  label: string;
}

export interface PortalNotice {
  id: string;
  message: string;
  timestamp: string;
}

export const previewStudent = {
  name: "Eishah Iqbal",
  grade: "Grade 6, Model Town",
};

export const portalStats: PortalStat[] = [
  { id: "attendance", value: "96%", label: "Attendance this term" },
  { id: "grade", value: "A", label: "Latest test grade" },
  { id: "notices", value: "3", label: "Pending notices" },
];

export const portalNotices: PortalNotice[] = [
  {
    id: "attendance-mark",
    message: "Marked present — arrived 7:52 AM",
    timestamp: "Today",
  },
  {
    id: "science-result",
    message: "Science test result uploaded: 88/100",
    timestamp: "2 days ago",
  },
  {
    id: "ptm-scheduled",
    message: "Parent-teacher meeting scheduled, Sat 10 AM",
    timestamp: "4 days ago",
  },
];

export type NotificationChannel = "whatsapp" | "sms" | "both";

export interface ChannelOption {
  id: NotificationChannel;
  label: string;
}

export const channelOptions: ChannelOption[] = [
  { id: "whatsapp", label: "WhatsApp" },
  { id: "sms", label: "SMS" },
];

export interface DashboardChild {
  id: string;
  name: string;
  grade: string;
  campus: string;
  parent: string;
}

export const dashboardChildren: DashboardChild[] = [
  { id: "eishah", name: "Eishah Iqbal", grade: "Grade 6", campus: "Model Town", parent: "Mr. & Mrs. Iqbal" },
];

export interface MonthlyAttendance {
  month: string;
  percent: number;
}

export const monthlyAttendance: MonthlyAttendance[] = [
  { month: "Feb", percent: 92 },
  { month: "Mar", percent: 88 },
  { month: "Apr", percent: 95 },
  { month: "May", percent: 90 },
  { month: "Jun", percent: 85 },
  { month: "Jul", percent: 96 },
];

export interface SubjectGrade {
  id: string;
  subject: string;
  grade: string;
  score: string;
}

export const subjectGrades: SubjectGrade[] = [
  { id: "science", subject: "Science", grade: "A", score: "88/100" },
  { id: "maths", subject: "Mathematics", grade: "A-", score: "84/100" },
  { id: "english", subject: "English", grade: "A", score: "90/100" },
  { id: "urdu", subject: "Urdu", grade: "B+", score: "79/100" },
];

export interface QuickAction {
  id: string;
  label: string;
  icon: "download" | "message" | "creditCard" | "calendar";
  href: string;
}

export const quickActions: QuickAction[] = [
  { id: "report-card", label: "Download Report Card", icon: "download", href: "#" },
  { id: "message-teacher", label: "Message Class Teacher", icon: "message", href: "https://wa.me/923001234567" },
  { id: "pay-fee", label: "Pay Term Fee", icon: "creditCard", href: "https://www.faysalbank.com/" },
  { id: "book-meeting", label: "Book Parent-Teacher Slot", icon: "calendar", href: "https://calendar.google.com/calendar/u/0/r/eventedit" },
];

export const feeStatus = {
  label: "Term 2 Fee",
  amount: "Rs. 18,500",
  dueDate: "15 Aug 2026",
  status: "due" as const,
};

export function getPreviewStudent(language: SiteLanguage) {
  if (language !== "UR") return previewStudent;

  return {
    name: "عائشہ اقبال",
    grade: "جماعت 6، ماڈل ٹاؤن",
  };
}

export function getPortalStats(language: SiteLanguage): PortalStat[] {
  if (language !== "UR") return portalStats;

  return [
    { id: "attendance", value: "96%", label: "اس مدت میں حاضری" },
    { id: "grade", value: "A", label: "تازہ ترین ٹیسٹ گریڈ" },
    { id: "notices", value: "3", label: "زیر التواء نوٹس" },
  ];
}

export function getPortalNotices(language: SiteLanguage): PortalNotice[] {
  if (language !== "UR") return portalNotices;

  return [
    {
      id: "attendance-mark",
      message: "حاضر نشان زد — 7:52 AM پر آئے",
      timestamp: "آج",
    },
    {
      id: "science-result",
      message: "سائنس ٹیسٹ کا نتیجہ اپ لوڈ: 88/100",
      timestamp: "2 دن پہلے",
    },
    {
      id: "ptm-scheduled",
      message: "والدین-استاد ملاقات طے، ہفتہ 10 AM",
      timestamp: "4 دن پہلے",
    },
  ];
}

export function getDashboardChildren(language: SiteLanguage): DashboardChild[] {
  if (language !== "UR") return dashboardChildren;

  return [
    { id: "eishah", name: "عائشہ اقبال", grade: "جماعت 6", campus: "ماڈل ٹاؤن", parent: "مسٹر اینڈ مسز اقبال" },
  ];
}

export function getSubjectGrades(language: SiteLanguage): SubjectGrade[] {
  if (language !== "UR") return subjectGrades;

  return [
    { id: "science", subject: "سائنس", grade: "A", score: "88/100" },
    { id: "maths", subject: "ریاضی", grade: "A-", score: "84/100" },
    { id: "english", subject: "انگریزی", grade: "A", score: "90/100" },
    { id: "urdu", subject: "اردو", grade: "B+", score: "79/100" },
  ];
}

export function getQuickActions(language: SiteLanguage): QuickAction[] {
  if (language !== "UR") return quickActions;

  return [
    { id: "report-card", label: "رپورٹ کارڈ ڈاؤن لوڈ کریں", icon: "download", href: "#" },
    { id: "message-teacher", label: "کلاس ٹیچر کو پیغام بھیجیں", icon: "message", href: "https://wa.me/923001234567" },
    { id: "pay-fee", label: "مدت کی فیس ادا کریں", icon: "creditCard", href: "https://www.faysalbank.com/" },
    { id: "book-meeting", label: "والدین-استاد سلٹ بک کریں", icon: "calendar", href: "https://calendar.google.com/calendar/u/0/r/eventedit" },
  ];
}

export function getFeeStatus(language: SiteLanguage) {
  if (language !== "UR") return feeStatus;

  return {
    label: "مدت 2 فیس",
    amount: "Rs. 18,500",
    dueDate: "15 اگست 2026",
    status: "due" as const,
  };
}