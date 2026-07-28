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
        description="Every grade level mapped to a recognised board, and every year's board result kept on record — downloadable, not just claimed."
      />
      <CurriculumLevels />
      <BoardAffiliations />
      <ResultsArchive />
      <ResultWidget />
    </>
  );
}