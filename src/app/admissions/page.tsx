import PageBanner from "@/components/layouts/PageBanner";
import StatusTracker from "@/components/admissions/StatusTracker";
import ApplicationSteps from "@/components/admissions/ApplicationSteps";
import AdmissionCalendar from "@/components/admissions/AdmissionCalendar";
import { getPreferredLanguage } from "@/lib/language.server";

export default async function AdmissionsPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <PageBanner
        eyebrow={lang === "UR" ? "داخلہ خودکار نظام" : "Admission Automation"}
        title={lang === "UR" ? "سیشن 2026–27 داخلے" : "Session 2026–27 Admissions"}
        description={
          lang === "UR"
            ? "آن لائن درخواست دیں، فون سے دستاویزات اپ لوڈ کریں، اور بغیر کیمپس آئے درخواست ٹریک کریں۔"
            : "Apply online, upload documents from your phone, and track your child's application without a single campus visit."
        }
      />
      <ApplicationSteps lang={lang} />
      <StatusTracker lang={lang} />
      <AdmissionCalendar lang={lang} />
    </>
  );
}