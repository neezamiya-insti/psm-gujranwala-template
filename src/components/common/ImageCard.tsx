"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

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
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Image Card */}
      <div
        onClick={() => setOpen(true)}
        className={`group relative ${aspect} w-full cursor-pointer overflow-hidden rounded-sm animate-[imagePulse_4s_ease-in-out_infinite]`}
      >
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
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


      {/* Popup */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[70vh] w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-2xl animate-in zoom-in duration-300"
          >
            <Image
              src={image}
              alt={label}
              fill
              className="object-contain"
            />

            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}