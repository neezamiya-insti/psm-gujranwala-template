"use client";

import { useState } from "react";
import PageBanner from "@/components/layouts/PageBanner";
import GalleryGrid from "@/components/gallery-events/GalleryGrid";
import EventTimeline from "@/components/gallery-events/EventTimeline";
import EventPreview from "@/components/gallery-events/EventPreview";
import EventSearch from "@/components/gallery-events/EventSearch";
import { type SiteLanguage } from "@/lib/language";

export default function GalleryEventsClient({
  lang,
}: {
  lang: SiteLanguage;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <PageBanner
        eyebrow={lang === "UR" ? "گیلری اور تقریبات" : "Gallery & Events"}
        title={
          lang === "UR"
            ? "کیمپس کی زندگی، ریکارڈ پر۔"
            : "Campus life, on the record."
        }
        description={
          lang === "UR"
            ? "اسپورٹس ڈے، سالانہ فنکشن، سائنس فیئرز — وہ سرگرمیاں جو کارکردگی رپورٹ سے پہلے دیکھی جاتی ہیں۔"
            : "Sports day, annual functions, science fairs — explore the moments that define campus life."
        }
      >
        <EventSearch
          lang={lang}
          onSearch={setSearchQuery}
        />
      </PageBanner>


      <GalleryGrid
        lang={lang}
        searchQuery={searchQuery}
      />

      <EventTimeline lang={lang} />
      <EventPreview lang={lang} />
    </>
  );
}