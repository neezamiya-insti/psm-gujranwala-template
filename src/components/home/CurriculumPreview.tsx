"use client";

import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { getCurriculumStages } from "@/data/academics";
import { motion } from "framer-motion";
import { type SiteLanguage } from "@/lib/language";
import {
  Leaf,
  BookOpen,
  Brain,
  Target,
  GraduationCap,
} from "lucide-react";

interface CurriculumPreviewProps {
  lang: SiteLanguage;
}

const stageIcons = [Leaf, BookOpen, Brain, Target, GraduationCap];

export default function CurriculumPreview({ lang }: CurriculumPreviewProps) {
  const curriculumStages = getCurriculumStages(lang);

  return (
    <section className="border-t border-[#0f2b2e]/8 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0f2b2e]/70">
            {lang === "UR" ? "تعلیم" : "Academics"}
          </p>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
            {lang === "UR"
              ? "ہر مرحلہ، ایک بورڈ، ایک معیار۔"
              : "Every stage, one board, one standard."}
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
            {lang === "UR"
              ? "نصاب بی آئی ایس ای گوجرانوالہ اور پنجاب نصاب کے مطابق، پہلی داخلہ سے بورڈ نتیجے تک۔"
              : "Curriculum mapped to BISE Gujranwala and the Punjab Curriculum framework, from first admission to board result."}
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="relative mt-14 sm:mt-16">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
              {curriculumStages.map((stage, index) => {
                const Icon = stageIcons[index] ?? Leaf;
                const isDark = index % 2 === 0; // 0,2,4 → dark teal

                return (
                  <motion.div
                      key={stage.id}
                      initial={{
                        opacity: 0,
                        y: 70,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        delay: index * 0.12,
                        duration: 0.7,
                        type: "spring",
                        stiffness: 90,
                        damping: 14,
                      }}
                      whileHover={{ y: -8 }}
                      className="cursor-pointer relative flex flex-col items-center text-center"
                    >
                    {/* Circle + Icon */}
                    <motion.div
  initial={{
    scale: 0.6,
    rotate: -60,
    opacity: 0,
  }}
  whileInView={{
    scale: 1,
    rotate: 0,
    opacity: 1,
  }}
  transition={{
    delay: index * 0.12 + 0.1,
    duration: 0.8,
    type: "spring",
    stiffness: 120,
  }}
  whileHover={{
    rotate: 12,
    scale: 1.06,
  }}
  className={`relative z-10 flex h-[106px] w-[106px] items-center justify-center rounded-full border-2 ${
    isDark
      ? "border-[#0f2b2e]/30"
      : "border-[#e15a2e]/35"
  }`}
>
                      <motion.div
  initial={{
    scale: 0,
  }}
  whileInView={{
    scale: 1,
  }}
  transition={{
    delay: index * 0.12 + 0.22,
    type: "spring",
    stiffness: 260,
    damping: 12,
  }}
  whileHover={{
    scale: 1.08,
  }}
  className={`flex h-[88px] w-[88px] items-center justify-center rounded-full ${
    isDark
      ? "bg-[#0f2b2e] text-[#f3cdbe]"
      : "bg-[#f3cdbe] text-[#0f2b2e]"
  }`}
>
                        <Icon
                          className="h-9 w-9"
                          strokeWidth={1.6}
                        />
                      </motion.div>
                    </motion.div>

                    {/* Number on the line */}
                    <div className="relative mt-5 flex flex-col items-center">
                      
                      <span className="font-mono text-sm font-bold tracking-wider text-[#0f2b2e]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Age / Grade range */}
                    <p className="mt-4 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#e15a2e]">
                      {stage.ageRange}
                    </p>

                    {/* Stage name */}
                    <h3 className="mt-1.5 text-lg font-bold text-[#0f2b2e]">
                      {stage.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 max-w-[220px] text-[13px] leading-relaxed text-[#0f2b2e]/65">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}