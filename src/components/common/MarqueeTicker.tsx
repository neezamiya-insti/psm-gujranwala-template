"use client";

import { tickerAnnouncements } from "@/data/announcements";

export default function MarqueeTicker() {
  // Duplicate the list so the CSS translateX(-50%) loop is seamless
  const loopItems = [...tickerAnnouncements, ...tickerAnnouncements];

  return (
    <div className="relative w-full overflow-hidden bg-[#e15a2e]">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap py-2.5">
        {loopItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={`${item.id}-${idx}`}
              className="flex shrink-0 items-center gap-2 px-2"
            >
              <Icon
                className="h-3.5 w-3.5 shrink-0 text-white/90"
                strokeWidth={2}
              />
              <span className="text-xs font-medium text-white sm:text-sm">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}