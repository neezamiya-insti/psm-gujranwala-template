import PageBanner from "@/components/layouts/PageBanner";
import CurriculumLevels from "@/components/academics/CurriculumLevels";
import BoardAffiliations from "@/components/academics/BoardAffiliations";
import ResultsArchive from "@/components/academics/ResultsArchive";
import ResultWidget from "@/components/academics/ResultWidget";

export default function AcademicsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Academics"
        title="Curriculum, boards & published results."
      />
      <CurriculumLevels />
      <BoardAffiliations />
      <ResultsArchive />
      <ResultWidget />
    </>
  );
}