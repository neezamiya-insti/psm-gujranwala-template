"use client";

import { galleryCategories } from "@/data/gallery";

interface GalleryFilterProps {
  activeCategory: string;
  onChange: (categoryId: string) => void;
}

export default function GalleryFilter({
  activeCategory,
  onChange,
}: GalleryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {galleryCategories.map((category) => {
        const isActive = activeCategory === category.id;
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onChange(category.id)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-[#e15a2e] text-white"
                : "border border-[#0f2b2e]/15 bg-white text-[#0f2b2e]/75 hover:border-[#0f2b2e]/30"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}