import PageBanner from "@/components/layouts/PageBanner";
import PrincipalMessage from "@/components/about/PrincipalMessage";
import MissionVision from "@/components/about/MissionVision";
import CampusFacilities from "@/components/about/CampusFacilities";
import Faculty from "@/components/about/Faculty";
import { getPreferredLanguage } from "@/lib/language.server";

export default async function AboutPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <PageBanner
        eyebrow={lang === "UR" ? "ادارہ جاتی پروفائل" : "Institutional Profile"}
        title={lang === "UR" ? "گوجرانوالہ گرامر اسکول کے بارے میں" : "About Gujranwala Grammar School"}
      />
      <PrincipalMessage lang={lang} />
      <MissionVision lang={lang} />
      <CampusFacilities lang={lang} />
      <Faculty lang={lang} />
    </>
  );
}