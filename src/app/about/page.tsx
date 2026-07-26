import PageBanner from "@/components/layouts/PageBanner";
import PrincipalMessage from "@/components/about/PrincipalMessage";
import MissionVision from "@/components/about/MissionVision";
import CampusFacilities from "@/components/about/CampusFacilities";
import Faculty from "@/components/about/Faculty";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="Institutional Profile"
        title="About Gujranwala Grammar School"
      />
      <PrincipalMessage />
      <MissionVision />
      <CampusFacilities />
      <Faculty />
    </>
  );
}