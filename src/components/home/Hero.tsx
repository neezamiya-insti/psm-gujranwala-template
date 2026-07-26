"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import MarqueeTicker from "@/components/common/MarqueeTicker";
import { heroStats } from "@/data/stats";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Hero() {
  const campusImages = [
  "/images/campus-1.jpg",
  "/images/campus-2.jpg",
  "/images/campus-3.jpg",
  "/images/campus-4.jpg",
];

const [activeImage, setActiveImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveImage((prev) => (prev + 1) % campusImages.length);
  }, 3500);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="relative overflow-hidden bg-[#f1efe9]">
      <Container className="py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — copy */}
          <div>
            <FadeUp>
              <div className="mb-6 flex items-center gap-3">
                <div className="font-mono text-[11px] leading-tight text-gray-500 sm:text-xs">
                  <p className="tracking-wide">
                    SERVING WAZIRABAD ROAD &amp; MODEL TOWN FAMILIES SINCE 1998
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0f2b2e] sm:text-5xl lg:text-[3.4rem]">
                Educating Gujranwala&apos;s next generation to{" "}
                <span className="font-serif italic text-[#e15a2e]">
                  export-grade
                </span>{" "}
                standards.
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-600 sm:text-[15px]">
                A school built on a legacy of commitment and excellence — providing students with a disciplined learning environment, dedicated mentorship, and the academic foundation needed to achieve outstanding board results and future success.
              </p>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-8 flex items-center gap-3">
                <a
                  href="/admissions"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#e15a2e] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-orange-500 active:scale-[0.98] sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Apply Online
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0f2b2e] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-[#163f42] active:scale-[0.98] sm:gap-2 sm:px-6 sm:py-3 sm:text-sm"
                >
                  Book Campus Visit
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                {heroStats.map((stat) => (
                  <div
                    key={stat.id}
                    className="border-l-2 border-[#e15a2e] pl-4"
                  >
                    <p className="text-2xl font-extrabold text-[#0f2b2e] sm:text-[26px]">
                      {stat.value}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-wide text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right column — campus life card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:-mt-25 lg:max-w-none"
          >
            <div className="relative rounded-2xl bg-[#f3cdbe] p-4 shadow-xl sm:p-5">
              {/* Accreditation badge */}
              <div className="absolute -top-6 right-4 z-10 flex h-20 w-20 flex-col items-center justify-center rounded-full border-4 border-[#f1efe9] bg-[#e15a2e] text-white shadow-lg">
                <span className="text-lg font-extrabold leading-none">A+</span>
                <span className="mt-1 text-[7px] font-semibold uppercase tracking-wide">
                  Accredited
                </span>
              </div>

              {/* Image block */}
             <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-[16/11]">

                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={campusImages[activeImage]}
                      alt="Campus Life"
                      initial={{ opacity: 0, scale: 1.08 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />


                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xl font-bold text-white">
                      Campus Life
                    </p>

                    <p className="mt-0.5 text-sm text-white/70">
                      Model Town Main Block — Est. 1998
                    </p>
                  </div>


                  {/* Slider dots */}
                  <div className="absolute bottom-4 right-5 flex gap-1.5">
                    {campusImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`h-1.5 rounded-full transition-all ${
                          activeImage === index
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xl font-bold text-white">Campus Life</p>
                  <p className="mt-0.5 text-sm text-white/70">
                    Model Town Main Block — Est. 1998
                  </p>
                </div>
              </div>

              {/* Footer meta */}
              <div className="mt-4 flex items-center justify-between border-t border-dashed border-[#0f2b2e]/25 pt-3 font-mono text-[10px] uppercase tracking-wide text-[#0f2b2e]/70">
                <span>BISE Affiliated</span>
                <span>Since 1998</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}