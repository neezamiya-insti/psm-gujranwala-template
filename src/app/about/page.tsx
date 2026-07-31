import PageBanner from "@/components/layouts/PageBanner";
import PrincipalMessage from "@/components/about/PrincipalMessage";
import MissionVision from "@/components/about/MissionVision";
import CampusFacilities from "@/components/about/CampusFacilities";
import Faculty from "@/components/about/Faculty";
import { getPreferredLanguage } from "@/lib/language.server";
import CTASection from "@/components/home/CTASection";

export default async function AboutPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <PageBanner
  eyebrow={lang === "UR" ? "ادارہ جاتی پروفائل" : "Institutional Profile"}
  title={
    lang === "UR"
      ? "گوجرانوالہ گرامر اسکول کے بارے میں"
      : "About Gujranwala Grammar School"
  }
  description={
    lang === "UR"
      ? "ہماری تاریخ، اقدار، تعلیمی فلسفہ اور وہ وژن دریافت کریں جو طلبہ کو تعلیمی کامیابی، کردار سازی اور زندگی بھر سیکھنے کے لیے بااختیار بناتا ہے۔"
      : "Discover our history, values, educational philosophy, and the vision that empowers students to achieve academic excellence, build strong character, and embrace lifelong learning."
  }
/>
      <PrincipalMessage lang={lang} />
      <MissionVision lang={lang} />
      <CampusFacilities lang={lang} />
      <Faculty lang={lang} />
      <CTASection lang={lang} />
    </>
  );
}