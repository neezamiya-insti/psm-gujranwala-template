import DashboardHeader from "@/components/parent-portal/DashboardHeader";
import AttendanceProgress from "@/components/parent-portal/AttendanceProgress";
import QuickActions from "@/components/parent-portal/QuickActions";
import RecentNotices from "@/components/parent-portal/RecentNotices";

export default function ParentDashboardPage() {
  return (
    <>
      <DashboardHeader />
      <AttendanceProgress />
      <QuickActions />
      <RecentNotices />
    </>
  );
}