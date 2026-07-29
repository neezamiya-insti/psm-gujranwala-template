"use client";

import { MessageCircle, Mail, Clock } from "lucide-react";
import FadeUp from "@/components/common/FadeUp";
import { getContactChannels } from "@/data/contact";
import { type SiteLanguage } from "@/lib/language";

const iconMap = {
  chat: MessageCircle,
  clock: Clock,
  mail: Mail,
};

export default function QuickContact({ lang }: { lang: SiteLanguage }) {
  const contactChannels = getContactChannels(lang);
  return (
    <FadeUp>
  <div className="relative mt-8 min-h-[524px] overflow-hidden rounded-md bg-[#0f2b2e] p-2 sm:p-10">

    {/* Decorative blobs */}
    <span className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[#1c4548]" />
    <span className="pointer-events-none absolute -bottom-10 right-24 h-32 w-32 rounded-full bg-[#24585b]" />
    <span className="pointer-events-none absolute bottom-16 right-10 h-12 w-12 rounded-full bg-[#2d6b6d]" />

    <div className="relative z-10 pt-6 sm:pt-0">
      <h2 className="text-2xl font-bold text-white">
        {lang === "UR" ? "رابطہ کی معلومات" : "Contact Information"}
      </h2>

      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/70">
        {lang === "UR" ? "اپنی پوچھ گچھ کے لیے ہماری ٹیم سے رابطہ کریں۔" : "Contact our team for assistance with your queries."}
      </p>

      <div className="mt-15 space-y-4 lg:mt-25">
        {contactChannels.map((channel) => {
          const Icon = iconMap[channel.icon];

          return (
            <div key={channel.id} className="flex items-center gap-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center">
                <Icon className="h-5 w-5 text-white" />
              </span>

              <a
                href={channel.linkUrl}
                target={channel.id === "whatsapp" ? "_blank" : undefined}
                rel={channel.id === "whatsapp" ? "noopener noreferrer" : undefined}
                className="text-sm font-medium text-white hover:text-[#e15a2e]"
              >
                {channel.detail}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  </div>
</FadeUp>
  );
}