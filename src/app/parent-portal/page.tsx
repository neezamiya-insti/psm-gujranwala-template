import PageBanner from "@/components/layouts/PageBanner";
import Container from "@/components/common/Container";
import PortalLogin from "@/components/parent-portal/PortalLogin";
import PortalPreview from "@/components/parent-portal/PortalPreview";
import NotificationOptIn from "@/components/parent-portal/NotificationOptIn";
import { getPreferredLanguage } from "@/lib/language.server";
import CTASection from "@/components/home/CTASection";

export default async function ParentPortalPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <PageBanner
        eyebrow={lang === "UR" ? "والدین اور طلبہ پورٹل" : "Parent & Student Portal"}
        title={lang === "UR" ? "حاضری، پیش رفت اور نتائج — ایک لاگ اِن۔" : "Attendance, progress and results — one login."}
        description={
          lang === "UR"
            ? "والدین-اساتذہ مینجمنٹ سسٹم حاضری الرٹس اور پیش رفت اپ ڈیٹس کو ایک لاگ اِن کے پیچھے رکھتا ہے، اور وہی معلومات واٹس ایپ یا ایس ایم ایس پر بھیجتا ہے۔"
            : "The Parent-Teacher Management System puts attendance alerts and progress updates behind a single login, and pushes the same updates straight to WhatsApp or SMS."
        }
      />

      <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <PortalLogin />
            <PortalPreview lang={lang} />
          </div>
        </Container>
      </section>
      <NotificationOptIn lang={lang} />
      <CTASection lang={lang} />
    </>
  );
}