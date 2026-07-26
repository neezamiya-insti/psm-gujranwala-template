"use client";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { alumniProfiles } from "@/data/careers";
import { motion } from "framer-motion";

export default function AlumniShowcase() {
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0f2b2e]/70">
            Industry &amp; Alumni in Trade
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
            Our graduates run the export houses next door.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-600">
            A spotlight section built for the trading-family buyer — proof
            that a Gujranwala Grammar education leads back into
            the city&apos;s own industry.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
  <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
    {alumniProfiles.map((alum, index) => (
      <motion.div
        key={alum.id}
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
        {/* Shine animation */}
        <div
          className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />

        <div className="relative z-10">
          {/* Animated initials */}
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.1,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f2b2e] text-sm font-bold text-[#e15a2e]"
          >
            {alum.initials}
          </motion.div>

          <p className="mt-4 text-[15px] font-bold text-[#0f2b2e]">
            {alum.name}
          </p>

          <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-wide text-[#e15a2e]">
            {alum.role}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-[#0f2b2e]/65">
            {alum.quote}
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