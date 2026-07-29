"use client";

import { motion, AnimatePresence } from "framer-motion";
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

  const copy =
    lang === "UR"
      ? {
          title: "جماعت اور سطح کا ڈھانچہ",
          description: "ایک داخلہ دفتر، پانچ مراحل، اور ہر مرحلے کے لیے واضح بورڈ۔",
          stage: "مرحلہ",
        }
      : {
          title: "Grade & Level Structure",
          description: "One admissions office, five stages, a clear board for every one of them.",
          stage: "Stage",
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

        <FadeUp delay={0.1}>
          <div className="mt-8 grid items-start grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {curriculumStages.map((stage) => {
              const isActive = activeCard === stage.id;

              return (
                <motion.div
                  key={stage.id}
                  layout
                  onHoverStart={() => {
                    // Desktop hover only
                    if (window.innerWidth >= 640) {
                      setActiveCard(stage.id);
                    }
                  }}
                  onHoverEnd={() => {
                    // Desktop hover only
                    if (window.innerWidth >= 640) {
                      setActiveCard(null);
                    }
                  }}
                  onClick={() => {
                    // Mobile click toggle
                    if (window.innerWidth < 640) {
                      setActiveCard(isActive ? null : stage.id);
                    }
                  }}
                  transition={{
                    layout: {
                      duration: 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  className="h-full"
                >
                  <div className="relative min-h-[190px] cursor-pointer overflow-hidden rounded-md bg-[#f3cdbe] p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          exit={{ width: 0 }}
                          transition={{ duration: 0.35, ease: "easeOut" }}
                          className="absolute left-0 top-0 h-1 bg-[#e15a2e]"
                        />
                      )}
                    </AnimatePresence>
                    <motion.div layout>
                      {/* Stage */}
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#e15a2e]">
                        {copy.stage} {stage.id}
                      </p>

                      {/* Age */}
                      <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#0f2b2e]/60">
                        {stage.ageRange}
                      </p>

                      {/* Name */}
                      <p className="mt-2 text-xl font-bold leading-snug text-[#0f2b2e]">
                        {stage.name}
                      </p>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{
                              opacity: 0,
                              height: 0,
                              y: 10,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              y: 0,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              y: 10,
                            }}
                            transition={{
                              duration: 0.35,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="mt-5 border-t border-[#0f2b2e]/10 pt-4">
                              {/* Board */}
                              <span className="inline-block rounded-full bg-[#0f2b2e]/10 px-3 py-1 font-mono text-[10px] font-medium text-[#0f2b2e]/80">
                                {stage.board}
                              </span>

                              {/* Description */}
                              <p className="mt-4 text-sm leading-relaxed text-[#0f2b2e]/65">
                                {stage.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}