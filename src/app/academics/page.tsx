import PageBanner from "@/components/layouts/PageBanner";
import CurriculumLevels from "@/components/academics/CurriculumLevels";

export default function AcademicsPage() {
  return (
    <>
      <PageBanner eyebrow="Academics" title="Curriculum, boards & published results." />
      <CurriculumLevels />
    </>
  );
}