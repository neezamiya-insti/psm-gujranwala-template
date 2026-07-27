import CareersHero from "@/components/careers/CareersHero";
import CareerStatsHighlight from "@/components/careers/CareerStatsHighlight";
import IndustryTieUps from "@/components/careers/IndustryTieUps";
import AlumniShowcase from "@/components/careers/AlumniShowcase";
import PartnerCTA from "@/components/careers/PartnerCTA";

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <CareerStatsHighlight />
      <IndustryTieUps />
      <AlumniShowcase />
      <PartnerCTA />
    </>
  );
}