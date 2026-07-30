"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle2, GraduationCap, ChevronDown } from "lucide-react";
import { useState } from "react";

import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import { getCurriculumStages } from "@/data/academics";
import { type SiteLanguage } from "@/lib/language";

interface CurriculumLevelsProps {
  lang: SiteLanguage;
}

export default function CurriculumLevels({ lang }: CurriculumLevelsProps) {
  const [activeCard, setActiveCard] = useState<string | null>(null);
const [selectedGrade, setSelectedGrade] = useState<string>("");
const [highlightedStage, setHighlightedStage] = useState<string | null>(null);

  const curriculumStages = getCurriculumStages(lang);

  const activeStage = curriculumStages.find(
    (stage) => stage.id === activeCard
  );

  const gradeStageMap: Record<string, string> = {
  "1": "2",
  "2": "2",
  "3": "2",
  "4": "2",
  "5": "2",
  "6": "3",
  "7": "3",
  "8": "3",
  "9": "4",
  "10": "4",
  "11": "5",
  "12": "5",
};

  const copy =
    lang === "UR"
      ? {
          title: "تعلیمی مراحل",
          description: "ایک منظم تعلیمی سفر جو طلبہ کی ہر مرحلے پر نشوونما، سیکھنے اور کامیابی میں معاون ثابت ہوتا ہے۔",
          stage: "مرحلہ",
          courses: "پڑھائے جانے والے مضامین",
        }
      : {
          title: "Learning Stages",
          description: "A structured pathway designed to support students at every stage of development.",
          stage: "Stage",
          courses: "Courses Taught",
        };

  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
    <div className="max-w-2xl">
      <SectionHeading
        title={copy.title}
        description={copy.description}
      />
    </div>

    <div className="flex items-center gap-3 self-start lg:mt-2">
    <div className="relative">
  <GraduationCap
    className="
      pointer-events-none
      absolute
      left-4
      top-1/2
      h-4
      w-4
      -translate-y-1/2
      text-[#e15a2e]
    "
  />

  <ChevronDown
    className="
      pointer-events-none
      absolute
      right-4
      top-1/2
      h-4
      w-4
      -translate-y-1/2
      text-[#0f2b2e]/50
    "
  />
      <select
        value={selectedGrade}
        onChange={(e) => {
  const grade = e.target.value;

  setSelectedGrade(grade);

  if (!grade) {
    setHighlightedStage(null);
    setActiveCard(null);
    return;
  }

  const stageId = gradeStageMap[grade];

  setHighlightedStage(stageId);

  // This opens the courses panel.
  setActiveCard(stageId);
}}
        className="
      h-12
      appearance-none
      rounded-full
      border
      border-[#0f2b2e]/10
      bg-white
      pl-11
      pr-11
      text-sm
      font-semibold
      text-[#0f2b2e]
      shadow-sm
      transition-all
      duration-300
      hover:border-[#e15a2e]/40
      hover:shadow-md
      focus:border-[#e15a2e]
      focus:ring-4
      focus:ring-[#e15a2e]/10
      outline-none
    "
      >
        <option value="">
          {lang === "UR"
            ? "منتخب کریں جماعت "
            : "Choose Grade"}
        </option>

        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {lang === "UR"
              ? `جماعت ${i + 1}`
              : `Class ${i + 1}`}
          </option>
        ))}
      </select>
      </div>
    </div>
  </div>
</FadeUp>

        {/* Stage Cards */}
        <FadeUp delay={0.1}>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {curriculumStages.map((stage) => {
              const isActive =
              activeCard === stage.id ||
              highlightedStage === stage.id;

              return (
                <motion.div
                  key={stage.id}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25 }}
                  onClick={() =>
                    setActiveCard(
                      isActive ? null : stage.id
                    )
                  }
                  className="cursor-pointer"
                >
                  <div
                    className={`
                    relative min-h-[190px]
                    overflow-hidden
                    rounded-xl
                    p-6
                    shadow-sm
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "bg-[#0f2b2e] text-white shadow-xl"
                        : "bg-[#f3cdbe]"
                    }
                    `}
                  >

                    {/* Active indicator */}
                    <motion.div
                      initial={false}
                      animate={{
                        width: isActive ? "100%" : "0%",
                      }}
                      className="
                      absolute
                      left-0
                      top-0
                      h-1
                      bg-[#e15a2e]
                      "
                    />


                    <p
                      className={`
                      font-mono text-[10px]
                      uppercase tracking-[0.2em]
                      ${
                        isActive
                          ? "text-[#f5921e]"
                          : "text-[#e15a2e]"
                      }
                      `}
                    >
                      {copy.stage} {stage.id}
                    </p>


                    <p
                      className={`
                      mt-3 font-mono text-[11px]
                      uppercase
                      ${
                        isActive
                          ? "text-white/60"
                          : "text-[#0f2b2e]/60"
                      }
                      `}
                    >
                      {stage.ageRange}
                    </p>


                    <p
                      className={`
                      mt-3 text-xl font-extrabold
                      ${
                        isActive
                          ? "text-white"
                          : "text-[#0f2b2e]"
                      }
                      `}
                    >
                      {stage.name}
                    </p>

                    <p
                      className={`
                        mt-5 text-xs
                        ${
                          isActive
                            ? "text-white/60"
                            : "text-[#0f2b2e]/50"
                        }
                      `}
                    >
                      {lang === "UR"
                        ? "مضامین دیکھنے کے لیے کلک کریں"
                        : "Click to view subjects"}
                    </p>

                    {isActive && (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-4 sm:hidden overflow-hidden"
    >
      <div className="rounded-xl bg-white p-5 shadow-md border border-[#0f2b2e]/10">

        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-[#e15a2e]" />

          <div>
            <h3 className="font-bold text-[#0f2b2e]">
              {stage.name}
            </h3>

            <p className="text-xs text-[#0f2b2e]/60">
              {copy.courses}
            </p>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          {stage.courses.map((course) => (
            <div
              key={course}
              className="flex items-center gap-2 rounded-lg bg-[#f1efe9] px-3 py-2"
            >
              <CheckCircle2 className="h-4 w-4 text-[#e15a2e]" />

              <span className="text-sm text-[#0f2b2e]">
                {course}
              </span>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  </AnimatePresence>
)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeUp>

        {/* Courses Panel */}
        <AnimatePresence mode="wait">
          {activeStage && (
            <motion.div
              key={activeStage.id}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
              }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
              mt-10
              rounded-2xl
              border
              border-[#0f2b2e]/10
              bg-white
              p-6
              shadow-sm
              sm:p-8
              "
            >

              <div className="flex items-center gap-3">
                <span
                  className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-[#0f2b2e]
                  "
                >
                  <BookOpen className="h-5 w-5 text-white" />
                </span>

                <div>
                  <h3 className="text-xl font-extrabold text-[#0f2b2e]">
                    {activeStage.name}
                  </h3>

                  <p className="text-sm text-[#0f2b2e]/60">
                    {copy.courses}
                  </p>
                </div>
              </div>


              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                {activeStage.courses?.map(
                  (course:string, index:number)=>(
                  <motion.div
                    key={course}
                    initial={{
                      opacity:0,
                      y:15,
                    }}
                    animate={{
                      opacity:1,
                      y:0,
                    }}
                    transition={{
                      delay:index * 0.08,
                    }}
                    className="
                    flex
                    items-center
                    gap-3
                    rounded-lg
                    bg-[#f1efe9]
                    p-4
                    "
                  >

                    <CheckCircle2
                      className="
                      h-5 w-5
                      text-[#e15a2e]
                      "
                    />

                    <span className="
                    text-sm
                    font-semibold
                    text-[#0f2b2e]
                    ">
                      {course}
                    </span>

                  </motion.div>
                ))}

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </Container>
    </section>
  );
}