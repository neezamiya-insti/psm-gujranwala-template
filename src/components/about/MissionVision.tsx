"use client";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { getMissionVisionItems } from "@/data/about";
import { type SiteLanguage } from "@/lib/language";
import { motion } from "framer-motion";

export default function MissionVision({ lang }: { lang: SiteLanguage }) {
  const missionVisionItems = getMissionVisionItems(lang);
  const [mission, vision] = missionVisionItems;

  return (
    <section className="relative overflow-hidden bg-[#f7f3ee] py-24">

  <motion.div
    className="absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-[#f3cdbe]/40 blur-[120px]"
    animate={{
      x: [0, 60, -30, 0],
      y: [0, -50, 30, 0],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />

  <motion.div
    className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-[#173338]/15 blur-[120px]"
    animate={{
      x: [0, -50, 30, 0],
      y: [0, 40, -20, 0],
      scale: [1.1, 1, 1.1]
    }}
    transition={{
      duration: 22,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
      <Container>
        <div className="relative grid grid-cols-1 items-center gap-16 sm:grid-cols-[1fr_auto_1fr] sm:gap-6 lg:gap-10">
          {/* MISSION */}
          <FadeUp delay={0}>
            <div className="max-w-md">
              <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.08em] text-[#e15a2e]">
                {mission?.label ?? "Mission"}
              </p>
              <span className="mt-2 block h-[2px] w-8 bg-[#e15a2e]" />
              <p className="font-sans mt-5 text-[26px] font-bold leading-[1.2] text-[#0f2b2e] sm:text-[28px]">
                {mission?.title}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#0f2b2e]/60">
                {mission?.description}
              </p>
            </div>
          </FadeUp>

          {/* CENTER RING GRAPHIC */}
          <FadeUp delay={0.08}>
            <div className="mx-auto flex h-[220px] w-[220px] items-center justify-center sm:h-[240px] sm:w-[240px]">
              <MissionVisionRing />
            </div>
          </FadeUp>

          {/* VISION */}
          <FadeUp delay={0.16}>
            <div className="max-w-md sm:ml-auto sm:text-left">
              <p className="font-mono text-[15px] font-semibold uppercase tracking-[0.08em] text-[#173338]">
                {vision?.label ?? "Vision"}
              </p>
              <span className="mt-2 block h-[2px] w-8 bg-[#173338]" />
              <p className="font-sans mt-5 text-[26px] font-bold leading-[1.2] text-[#0f2b2e] sm:text-[28px]">
                {vision?.title}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-[#0f2b2e]/60">
                {vision?.description}
              </p>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}

function MissionVisionRing() {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      {/* faint outer guide circle, matches the subtle background rings in the design */}
      <circle
        cx="100"
        cy="100"
        r="98"
        fill="none"
        stroke="#0f2b2e"
        strokeOpacity="0.06"
        strokeWidth="1"
      />

      {/* left arc — peach / mission */}
      <path
        d="M 86.11 178.78 A 80 80 0 0 1 86.11 21.22"
        fill="none"
        stroke="#f3cdbe"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* right arc — dark teal / vision */}
      <path
        d="M 113.89 21.22 A 80 80 0 0 1 113.89 178.78"
        fill="none"
        stroke="#173338"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* thin inner circle outline */}
      <circle
        cx="100"
        cy="100"
        r="58"
        fill="none"
        stroke="#0f2b2e"
        strokeOpacity="0.15"
        strokeWidth="1"
      />

      {/* mountain + flag icon */}
      <g
        stroke="#0f2b2e"
        strokeOpacity="0.55"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* flag pole — shortened at the top so the flag sits a little lower */}
        <line x1="85" y1="66" x2="85" y2="102" />
        {/* flag pennant — shifted down to match the shortened pole */}
        <path d="M 85 68 L 103 74 Q 96 78 103 82 L 85 88" />
        {/* mountain peaks */}
        <path d="M 62 128 L 88 100 L 100 112 L 112 96 L 138 128 Z" />
      </g>
      <path
  id="mountainPath"
  d="M 62 128
     L 88 100
     L 100 112
     L 112 96
     L 138 128"
  fill="none"
  stroke="transparent"
/>
<motion.circle
  r="2"
  fill="#e15a2e"
  style={{
    offsetPath: `path("M 62 128 L 88 100 L 100 112 L 112 96 L 138 128")`,
  }}
  animate={{
    offsetDistance: ["0%", "100%"],
    opacity: [0, 1, 1, 0],
    scale: [0.5, 1.8, 1.8, 0.5],
  }}
  transition={{
    duration: 2.8,
    repeat: Infinity,
    repeatDelay: 1.5,
    ease: "easeInOut",
  }}
/>
    </svg>
  );
}