import PageBanner from "@/components/layouts/PageBanner";
import Container from "@/components/common/Container";
import PortalLogin from "@/components/parent-portal/PortalLogin";
import PortalPreview from "@/components/parent-portal/PortalPreview";
import NotificationOptIn from "@/components/parent-portal/NotificationOptIn";

// Pending: AttendanceProgress

export default function ParentPortalPage() {
  return (
    <>
      <PageBanner
        eyebrow="Parent & Student Portal"
        title="Attendance, progress and results — one login."
        description="The Parent-Teacher Management System puts attendance alerts and progress updates behind a single login, and pushes the same updates straight to WhatsApp or SMS."
      />

      <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <PortalLogin />
            <PortalPreview />
          </div>
        </Container>
      </section>
      <NotificationOptIn />
    </>
  );
}