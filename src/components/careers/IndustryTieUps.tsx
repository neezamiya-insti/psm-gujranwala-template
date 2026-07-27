"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { industryPartners } from "@/data/careers";
import Image from "next/image";

export default function IndustryTieUps() {
  const partners = industryPartners.slice(0, 6);

   const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="border border-[#0f2b2e]/20 overflow-hidden bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left — copy */}
          <FadeUp>
            <h2 className="text-4xl font-extrabold leading-tight text-[#0f2b2e] sm:text-5xl">
              Trusted by Industry Partners
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600">
              Our industry partnerships connect students with real-world opportunities,
  professional mentorship, and practical experiences. Through collaboration
  with organizations across different sectors, we help students develop the
  skills, confidence, and exposure needed for successful careers.
            </p>
          </FadeUp>

          {/* Right — orbit diagram */}
          <FadeUp delay={0.15}>
            <div className="relative mx-auto aspect-square h-[300px] w-[300px] sm:h-[380px] sm:w-[380px]">

              {/* Dotted orbit rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#0f2b2e]/30" />

              <div className="absolute inset-[15%] rounded-full border border-dashed border-[#0f2b2e]/30" />


              {/* Center hub */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="
                  absolute left-1/2 top-1/2
                  flex h-16 w-16 sm:h-24 sm:w-24
                  -translate-x-1/2 -translate-y-1/2
                  items-center justify-center
                  rounded-full bg-[#0f2b2e]
                  text-center shadow-xl
                "
              >
                <span className="px-2 text-[8px] font-bold leading-tight text-white sm:px-3 sm:text-xs">
                  Our Industry Network
                </span>
              </motion.div>


              {/* Partner nodes */}
              {partners.map((partner, index) => {
                const radius = isMobile ? 100 : 145;

                const angle = (360 / partners.length) * index - 90;
                const radians = (angle * Math.PI) / 180;

                return (
                  <motion.div
                    key={partner.id}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 3 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="
                      absolute flex
                      h-14 w-14 sm:h-20 sm:w-20
                      -translate-x-1/2 -translate-y-1/2
                      items-center justify-center
                      rounded-full bg-white shadow-lg
                    "
                    style={{
                        left: `calc(50% + ${radius * Math.cos(radians)}px)`,
                        top: `calc(50% + ${radius * Math.sin(radians)}px)`,
                    }}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={50}
                      height={50}
                      className="h-9 w-9 rounded-full object-contain sm:h-12 sm:w-12"
                    />
                  </motion.div>
                );
              })}
            </div>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}