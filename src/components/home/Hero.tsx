"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";

export default function Hero() {
  const campusImages = [
    "/images/campus-1.jpeg",
    "/images/campus-2.jpeg",
    "/images/campus-3.jpeg",
    "/images/campus-4.jpeg",
  ];

  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % campusImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#f1efe9]">

      {/* Right side image slider */}
<div className="absolute inset-y-0 right-0 hidden w-[55%] lg:block">

  <div
    className="absolute inset-0 overflow-hidden"
    style={{
      clipPath:
        "path('M220 0 C70 160 70 300 220 450 C360 600 80 760 220 900 L900 900 L900 0 Z')",
    }}
  >

    <AnimatePresence>
  <motion.img
    key={activeImage}
    src={campusImages[activeImage]}
    alt="Campus Life"
    initial={{
      opacity: 0,
      scale: 1.12,
    }}
    animate={{
      opacity: 1,
      scale: 1,
    }}
    exit={{
      opacity: 0,
      scale: 1.05,
    }}
    transition={{
      opacity: {
        duration: 1.2,
        ease: "easeInOut",
      },
      scale: {
        duration: 4,
        ease: "easeOut",
      },
    }}
    className="absolute inset-0 h-full w-full object-cover"
  />
</AnimatePresence>


    {/* overlay */}
    <div className="absolute inset-0 bg-black/20" />


    {/* Campus text */}
    <div className="absolute bottom-12 left-72 z-20">
      <p className="text-3xl font-bold text-white">
        Campus Life
      </p>

      <p className="mt-2 text-sm text-white/70">
        Model Town Main Block — Est. 1998
      </p>
    </div>

  </div>

</div>

      {/* Main content */}
      <Container className="relative z-10 py-16 sm:py-20 lg:py-24">

        <div className="grid items-center lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">

            <FadeUp>
              <div className="mb-6">
                <p className="font-mono text-[11px] tracking-wide text-gray-500 sm:text-xs">
                  SERVING WAZIRABAD ROAD &amp; MODEL TOWN FAMILIES SINCE 1998
                </p>
              </div>
            </FadeUp>


            <FadeUp delay={0.1}>
              <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#0f2b2e] sm:text-5xl lg:text-[3.4rem]">
                Educating Gujranwala&apos;s next generation with{" "}
                <span className="font-serif italic text-[#e15a2e]">
                  excellence
                </span>.
              </h1>
            </FadeUp>


            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-gray-600 sm:text-[15px]">
                A trusted institution focused on academic excellence,
                character building, and preparing students for a successful
                future.
              </p>
            </FadeUp>


            <FadeUp delay={0.4}>
              <div className="mt-8 flex items-center gap-3">

                <a
                  href="/admissions"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#e15a2e] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-orange-500 active:scale-[0.98] sm:px-6 sm:py-3 sm:text-sm"
                >
                  Apply Online
                  <ArrowRight className="h-4 w-4" />
                </a>


                <a
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#0f2b2e] px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-transform hover:scale-[1.02] hover:bg-[#163f42] active:scale-[0.98] sm:px-6 sm:py-3 sm:text-sm"
                >
                  Book Campus Visit
                </a>

              </div>
            </FadeUp>

          </div>


          {/* Desktop spacer */}
<div className="hidden lg:block" />

{/* Mobile slider */}
<div className="mt-10 lg:hidden">
  <div className="relative mx-auto aspect-[16/10] w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
    <AnimatePresence>
      <motion.img
        key={activeImage}
        src={campusImages[activeImage]}
        alt="Campus Life"
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </AnimatePresence>

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

    <div className="absolute bottom-4 left-4">
      <p className="text-lg font-bold text-white">Campus Life</p>
      <p className="text-xs text-white/75">
        Model Town Main Block — Est. 1998
      </p>
    </div>

    <div className="absolute bottom-4 right-4 flex gap-1.5">
      {campusImages.map((_, index) => (
        <button
          key={index}
          onClick={() => setActiveImage(index)}
          className={`rounded-full transition-all ${
            activeImage === index
              ? "h-2 w-6 bg-white"
              : "h-2 w-2 bg-white/50"
          }`}
        />
      ))}
    </div>
  </div>
</div>

        </div>

      </Container>

      

    </section>
  );
}