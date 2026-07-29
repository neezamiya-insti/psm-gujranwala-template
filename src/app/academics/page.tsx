import PageBanner from "@/components/layouts/PageBanner";
import CurriculumLevels from "@/components/academics/CurriculumLevels";
import BoardAffiliations from "@/components/academics/BoardAffiliations";
import ResultsArchive from "@/components/academics/ResultsArchive";
import ResultWidget from "@/components/academics/ResultWidget";
import { getPreferredLanguage } from "@/lib/language.server";
import CTASection from "@/components/home/CTASection";

export default async function AcademicsPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <PageBanner
        eyebrow={lang === "UR" ? "تعلیم" : "Academics"}
        title={lang === "UR" ? "نصاب، بورڈز اور شائع شدہ نتائج۔" : "Curriculum, boards & published results."}
        description={
          lang === "UR"
            ? "ہر جماعت ایک تسلیم شدہ بورڈ سے منسلک ہے، اور ہر سال کے نتائج محفوظ ہیں — صرف دعویٰ نہیں۔"
            : "Every grade level mapped to a recognised board, and every year's board result kept on record — downloadable, not just claimed."
        }
      />
      <CurriculumLevels lang={lang} />
      <BoardAffiliations />
      <ResultsArchive lang={lang} />
      <ResultWidget />
      <CTASection lang={lang} />
    </>
  );
}