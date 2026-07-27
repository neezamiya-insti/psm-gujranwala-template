"use client";

import { useState, useMemo } from "react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import GalleryFilter from "@/components/gallery-events/GalleryFilter";
import GalleryCard from "@/components/cards/GalleryCard";
import { galleryItems } from "@/data/gallery";

export default function GalleryGrid() {
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
            title="Photo & Video Gallery"
            description="Filtered by event type, updated after every campus activity."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8">
            <GalleryFilter
              activeCategory={activeCategory}
              onChange={setActiveCategory}
            />
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:auto-rows-[200px]">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}