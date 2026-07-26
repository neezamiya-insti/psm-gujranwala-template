import PageBanner from "@/components/layouts/PageBanner";
import PrincipalMessage from "@/components/about/PrincipalMessage";
import MissionVision from "@/components/about/MissionVision";

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="Institutional Profile"
        title="About Gujranwala Grammar School"
      />
      <PrincipalMessage />
      <MissionVision />
    </>
  );
}