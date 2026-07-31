"use client";

import Image from "next/image";
import FadeUp from "@/components/common/FadeUp";
import { type SiteLanguage } from "@/lib/language";

export default function QuickContact({ lang }: { lang: SiteLanguage }) {
  return (
    <FadeUp>
      <div className="relative mt-8 min-h-[524px] overflow-hidden">
        <Image
          src="/images/contact-card.jpeg"
          alt="Contact"
          fill
          className="object-cover"
        />
      </div>
    </FadeUp>
  );
}