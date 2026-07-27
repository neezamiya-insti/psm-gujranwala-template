"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import { careerHighlight, secondaryStats } from "@/data/careers";

export default function CareerStatsHighlight() {
  return (
    <section className="bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — headline, copy, CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            <h2 className="text-4xl font-extrabold leading-[1.1] text-[#0f2b2e] sm:text-5xl">
              Proven Track Record of Placement
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-gray-600">
              {careerHighlight.description}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href={careerHighlight.ctaHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0f2b2e] px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-1 hover:bg-[#e15a2e] active:scale-95"
              >
                {careerHighlight.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>


          {/* Right — featured stat + secondary grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1,
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
            >
              <p className="text-6xl font-extrabold leading-none text-[#0f2b2e] sm:text-7xl lg:ml-34">
                <AnimatedNumber value={careerHighlight.featuredValue} />
                </p>

                <p className="mt-3 text-base text-gray-600 lg:ml-24">
                {careerHighlight.featuredLabel}
                </p>
            </motion.div>


            <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10">
              {secondaryStats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -5,
                  }}
                >
                  <p className="text-3xl font-bold text-[#0f2b2e] sm:text-4xl">
                    <AnimatedNumber value={stat.value} />
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function AnimatedNumber({ value }: { value: string }) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) =>
    Math.floor(latest) + suffix
  );

  useEffect(() => {
    const controls = animate(count, numericValue, {
      duration: 2,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, numericValue]);

  return <motion.span>{rounded}</motion.span>;
}