"use client";

import Image from "next/image";
import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";
import { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
}

const sizeClasses: Record<GalleryItem["size"], string> = {
  featured:
    "h-[320px] sm:col-span-2 sm:row-span-2",

  tall:
    "h-[280px] sm:row-span-2",

  normal:
    "h-[220px]",
};

export default function GalleryCard({ item }: GalleryCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
const [playing, setPlaying] = useState(false);

const toggleVideo = () => {
  if (!videoRef.current) return;

  if (playing) {
    videoRef.current.pause();
  } else {
    videoRef.current.play();
  }

  setPlaying(!playing);
};
  return (
   <div
      className={`
        group 
        relative 
        h-full 
        min-h-[220px]
        overflow-hidden 
        rounded-sm
        ${sizeClasses[item.size]}
      `}
    >
      {/* Media */}
      {item.mediaType === "video" && item.video ? (
        <video
          ref={videoRef}
          src={item.video}
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      )}


      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          item.variant === "navy"
            ? "bg-gradient-to-t from-[#0f2b2e]/90 via-[#0f2b2e]/30 to-transparent"
            : "bg-gradient-to-t from-[#f3cdbe]/90 via-[#f3cdbe]/20 to-transparent"
        }`}
      />


      {/* Video indicator */}
      {item.mediaType === "video" && (
        <button
  type="button"
  onClick={toggleVideo}
  className="
    absolute
    right-4
    top-4
    flex
    h-10
    w-10
    items-center
    justify-center
    rounded-full
    bg-[#e15a2e]
    text-white
    shadow-lg
    transition-transform
    duration-300
    hover:scale-110
  "
>
  {playing ? (
    <Pause className="h-4 w-4 fill-white" />
  ) : (
    <Play className="h-4 w-4 fill-white" />
  )}
</button>
      )}


      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <p
          className={`text-base font-bold sm:text-lg ${
            item.variant === "navy"
              ? "text-white"
              : "text-[#0f2b2e]"
          }`}
        >
          {item.title}
        </p>

        <p
          className={`mt-1 font-mono text-[11px] uppercase tracking-wide ${
            item.variant === "navy"
              ? "text-white/70"
              : "text-[#0f2b2e]/60"
          }`}
        >
          {item.subtitle}
        </p>
      </div>
    </div>
  );
}