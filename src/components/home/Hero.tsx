"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
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
                Educating Gujranwala&apos;s next generation with{" "}
                <span className="font-serif italic text-[#e15a2e]">
                  excellence
                </span>{" "}
                .
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-600 sm:text-[15px]">
                 A trusted institution focused on academic excellence, character building, and preparing students for a successful future.
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
          </div>

          {/* Right column — campus life card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:-mt-25 lg:max-w-none"
          >
            <div className="relative rounded-2xl bg-[#f3cdbe] p-3 shadow-xl sm:p-5">
              {/* Accreditation badge */}
              <div className="absolute -top-4 right-3 z-10 flex h-14 w-14 flex-col items-center justify-center rounded-full border-2 border-[#f1efe9] bg-[#e15a2e] text-white shadow-lg sm:-top-6 sm:right-4 sm:h-20 sm:w-20 sm:border-4">
                <span className="text-sm font-extrabold leading-none sm:text-lg">A+</span>
                <span className="mt-0.5 text-[5px] font-semibold uppercase tracking-wide sm:mt-1 sm:text-[7px]">
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
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-5">
                    <p className="text-base font-bold text-white sm:text-xl">
                      Campus Life
                    </p>

                    <p className="mt-0.5 text-xs text-white/70 sm:text-sm">
                      Model Town Main Block — Est. 1998
                    </p>
                  </div>


                  {/* Slider dots */}
                  <div className="absolute bottom-3 right-3 flex gap-1 sm:bottom-4 sm:right-5">
                    {campusImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveImage(index)}
                        className={`h-1 rounded-full transition-all sm:h-1.5 ${
                          activeImage === index
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/50"
                        }`}
                      />
                    ))}
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