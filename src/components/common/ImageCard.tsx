"use client";

import Image from "next/image";

interface ImageCardProps {
  label: string;
  image: string;
  aspect?: string;
  variant?: "peach" | "navy";
}

export default function ImageCard({
  label,
  image,
  aspect = "aspect-[4/3]",
  variant = "peach",
}: ImageCardProps) {
  return (
    <div
      className={`group relative ${aspect} w-full overflow-hidden rounded-sm`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          variant === "navy"
            ? "bg-gradient-to-t from-[#0f2b2e]/70 via-transparent to-transparent"
            : "bg-gradient-to-t from-black/40 via-transparent to-transparent"
        }`}
      />

      {/* Label */}
      <span
        className={`absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wide ${
          variant === "navy"
            ? "text-white/80"
            : "text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}