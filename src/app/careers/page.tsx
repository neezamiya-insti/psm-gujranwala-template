import CareersHero from "@/components/careers/CareersHero";
import CareerStatsHighlight from "@/components/careers/CareerStatsHighlight";
import IndustryTieUps from "@/components/careers/IndustryTieUps";
import AlumniShowcase from "@/components/careers/AlumniShowcase";
import PartnerCTA from "@/components/careers/PartnerCTA";
import { getPreferredLanguage } from "@/lib/language.server";

export default async function CareersPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <CareersHero lang={lang} />
      <CareerStatsHighlight lang={lang} />
      <IndustryTieUps lang={lang} />
      <AlumniShowcase lang={lang} />
      <PartnerCTA lang={lang} />
    </>
  );
}