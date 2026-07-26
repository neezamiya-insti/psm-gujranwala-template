"use client";

import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { curriculumStages } from "@/data/academics";
import { motion } from "framer-motion";

export default function CurriculumPreview() {
  return (
    <section className="border-t border-[#0f2b2e]/8 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0f2b2e]/70">
            Academics
          </p>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
            Every stage, one board, one standard.
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600">
            Curriculum mapped to BISE Gujranwala and the Punjab Curriculum
            framework, from first admission to board result.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
  <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
    {curriculumStages.map((stage, index) => (
      <motion.div
        key={stage.id}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{
          duration: 0.6,
          delay: index * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -8,
          scale: 1.02,
        }}
        className="group relative overflow-hidden rounded-xl bg-[#f3cdbe] p-6 transition-shadow duration-300 hover:shadow-xl sm:p-7"
      >
        {/* Animated shine layer */}
        <div
          className="pointer-events-none absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"
        />

        {/* Content */}
        <div className="relative z-10">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-[#e15a2e]">
            {stage.ageRange}
          </p>

          <p className="mt-2 text-xl font-bold text-[#0f2b2e]">
            {stage.name}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#0f2b2e]/65">
            {stage.description}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
</FadeUp>
      </Container>
    </section>
  );
}