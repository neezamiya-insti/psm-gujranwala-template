import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import MarqueeTicker from "@/components/common/MarqueeTicker";
import QuickStats from "@/components/home/QuickStats";
import CampusProfile from "@/components/home/CampusProfile";
import CurriculumPreview from "@/components/home/CurriculumPreview";
import AdmissionProcess from "@/components/home/AdmissionProcess";
import AlumniShowcase from "@/components/careers/AlumniShowcase";
import CTASection from "@/components/home/CTASection";
import { getPreferredLanguage } from "@/lib/language.server";

export default async function HomePage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <Hero lang={lang} />
      <TrustStrip />
      <MarqueeTicker lang={lang} />
      <QuickStats />
      <CampusProfile />
      <CurriculumPreview lang={lang} />
      <AdmissionProcess />
      <AlumniShowcase lang={lang} />
      <CTASection lang={lang} />
    </>
  );
}