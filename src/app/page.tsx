import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import MarqueeTicker from "@/components/common/MarqueeTicker";
import QuickStats from "@/components/home/QuickStats";
import CampusProfile from "@/components/home/CampusProfile";
import CurriculumPreview from "@/components/home/CurriculumPreview";
import AdmissionProcess from "@/components/home/AdmissionProcess";
import AlumniShowcase from "@/components/careers/AlumniShowcase";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <MarqueeTicker />
      <QuickStats />
      <CampusProfile />
      <CurriculumPreview />
      <AdmissionProcess />
      <AlumniShowcase />
      <CTASection />
    </>
  );
}