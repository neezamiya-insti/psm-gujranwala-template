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