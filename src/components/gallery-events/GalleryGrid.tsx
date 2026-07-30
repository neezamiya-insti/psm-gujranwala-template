"use client";

import { useState, useMemo } from "react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import GalleryFilter from "@/components/gallery-events/GalleryFilter";
import GalleryCard from "@/components/cards/GalleryCard";
import { getGalleryItems } from "@/data/gallery";
import { type SiteLanguage } from "@/lib/language";

interface GalleryGridProps {
  lang: SiteLanguage;
  searchQuery?: string;
}

export default function GalleryGrid({
  lang,
  searchQuery = "",
}: GalleryGridProps) {
  const galleryItems = getGalleryItems(lang);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <SectionHeading
            title={lang === "UR" ? "فوٹو اور ویڈیو گیلری" : "Photo & Video Gallery"}
            description={lang === "UR" ? "ایونٹ کی قسم کے مطابق فلٹر شدہ، ہر کیمپس سرگرمی کے بعد اپ ڈیٹ۔" : "Filtered by event type, updated after every campus activity."}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8">
            <GalleryFilter
              activeCategory={activeCategory}
              onChange={setActiveCategory}
              lang={lang}
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
           {filteredItems.map((item) => {
  const isHighlighted =
    searchQuery &&
    (
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div
      key={item.id}
      className={`
  h-full rounded-2xl transition-all duration-300
  ${
    searchQuery && !isHighlighted
      ? "opacity-50"
      : ""
  }
  ${
    isHighlighted
      ? "ring-4 ring-[#F5921E] shadow-[0_10px_30px_rgba(245,146,30,0.25)]"
      : ""
  }
`}
    >
      <GalleryCard item={item} />
    </div>
  );
})}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}