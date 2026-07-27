import PageBanner from "@/components/layouts/PageBanner";
import StatusTracker from "@/components/admissions/StatusTracker";

export default function AdmissionsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Admission Automation"
        title="Session 2026–27 Admissions"
        description="Apply online, upload documents from your phone, and track your child's application without a single campus visit."
      />
      <StatusTracker />
    </>
  );
}