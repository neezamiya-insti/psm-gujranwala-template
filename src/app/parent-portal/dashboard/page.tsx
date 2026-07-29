import DashboardHeader from "@/components/parent-portal/DashboardHeader";
import AttendanceProgress from "@/components/parent-portal/AttendanceProgress";
import QuickActions from "@/components/parent-portal/QuickActions";
import RecentNotices from "@/components/parent-portal/RecentNotices";
import { getPreferredLanguage } from "@/lib/language.server";

export default async function ParentDashboardPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <DashboardHeader lang={lang} />
      <AttendanceProgress lang={lang} />
      <QuickActions lang={lang} />
      <RecentNotices lang={lang} />
    </>
  );
}