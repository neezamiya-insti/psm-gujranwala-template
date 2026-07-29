import PageBanner from "@/components/layouts/PageBanner";
import GalleryGrid from "@/components/gallery-events/GalleryGrid";
import EventTimeline from "@/components/gallery-events/EventTimeline";
import EventPreview from "@/components/gallery-events/EventPreview";
import { getPreferredLanguage } from "@/lib/language.server";

export default async function GalleryEventsPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <PageBanner
        eyebrow={lang === "UR" ? "گیلری اور تقریبات" : "Gallery & Events"}
        title={lang === "UR" ? "کیمپس کی زندگی، ریکارڈ پر۔" : "Campus life, on the record."}
        description={
          lang === "UR"
            ? "اسپورٹس ڈے، سالانہ فنکشن، سائنس فیئرز — وہ سرگرمیوں کی سرمایہ کاری جو کارکردگی رپورٹ سے پہلے دیکھی جاتی ہے۔"
            : "Sports day, annual functions, science fairs — the co-curricular investment industrialist families expect to see before a report card ever comes up."
        }
      />
      <GalleryGrid lang={lang} />
      <EventTimeline lang={lang} />
      <EventPreview lang={lang} />
    </>
  );
}