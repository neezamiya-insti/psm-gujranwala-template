"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, CheckCircle2 } from "lucide-react";
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

  const curriculumStages = getCurriculumStages(lang);

  const activeStage = curriculumStages.find(
    (stage) => stage.id === activeCard
  );

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
          <SectionHeading
            title={copy.title}
            description={copy.description}
          />
        </FadeUp>


        {/* Stage Cards */}
        <FadeUp delay={0.1}>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {curriculumStages.map((stage) => {
              const isActive = activeCard === stage.id;

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