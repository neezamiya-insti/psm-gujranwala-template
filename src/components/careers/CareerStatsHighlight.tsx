"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { ArrowRight, Users, Briefcase, GraduationCap, Building2, type LucideIcon } from "lucide-react";
import Container from "@/components/common/Container";
import { getCareerHighlight, getSecondaryStats } from "@/data/careers";
import { type SiteLanguage } from "@/lib/language";

const DARK = "#0f2b2e";
const ACCENT = "#e15a2e";

// Adjust this order/icon mapping to match how getSecondaryStats() orders its array:
// index 0 -> top-left, 1 -> top-right, 2 -> bottom-left, 3 -> bottom-right
const cornerIcons: LucideIcon[] = [Users, Briefcase, GraduationCap, Building2];

export default function CareerStatsHighlight({ lang }: { lang: SiteLanguage }) {
  const careerHighlight = getCareerHighlight(lang);
  const secondaryStats = getSecondaryStats(lang);

  const topLeft = secondaryStats[0];
  const topRight = secondaryStats[1];
  const bottomLeft = secondaryStats[2];
  const bottomRight = secondaryStats[3];

  return (
    <section className="bg-[#f1efe9] py-16 sm:py-20 ">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — headline, copy, CTA — slides in from the left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-extrabold leading-[1.1] text-[#0f2b2e] sm:text-5xl">
              {careerHighlight.title}
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

          {/* Right — center circle + 4 corner stats — scales in as a whole */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Desktop / large screens */}
            <div className="hidden -translate-x-6 items-stretch justify-center gap-2 lg:flex xl:gap-2">
              <div className="flex flex-col justify-between py-4">
                <StatCorner icon={cornerIcons[0]} value={topLeft.value} label={topLeft.label} side="left" delay={0.5} />
                <StatCorner icon={cornerIcons[2]} value={bottomLeft.value} label={bottomLeft.label} side="left" delay={0.8} />
              </div>

              <CenterCircle value={careerHighlight.featuredValue} label={careerHighlight.featuredLabel} />

              <div className="flex flex-col justify-between py-4">
                <StatCorner icon={cornerIcons[1]} value={topRight.value} label={topRight.label} side="right" delay={0.65} />
                <StatCorner icon={cornerIcons[3]} value={bottomRight.value} label={bottomRight.label} side="right" delay={0.95} />
              </div>
            </div>

            {/* Mobile / tablet fallback */}
            <div className="lg:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="mx-auto flex h-56 w-56 flex-col items-center justify-center rounded-full border border-[#0f2b2e]/10 text-center sm:h-64 sm:w-64"
              >
                <p className="text-5xl font-extrabold leading-none text-[#0f2b2e] sm:text-6xl">
                  <AnimatedNumber value={careerHighlight.featuredValue} delay={0.4} />
                </p>
                <span className="mt-3 h-[3px] w-10 rounded-full" style={{ backgroundColor: ACCENT }} />
                <p className="mt-3 max-w-[10rem] text-sm text-gray-600">{careerHighlight.featuredLabel}</p>
              </motion.div>

              <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10">
                {secondaryStats.map((stat, index) => {
                  const Icon = cornerIcons[index % cornerIcons.length];
                  return (
                    <motion.div
                      key={stat.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.12 }}
                    >
                      <IconAvatar icon={Icon} delay={index * 0.12} />
                      <p className="mt-3 text-3xl font-bold text-[#0f2b2e] sm:text-4xl">
                        <AnimatedNumber value={stat.value} delay={index * 0.12 + 0.2} />
                      </p>
                      <span className="mt-1 block h-[3px] w-8 rounded-full" style={{ backgroundColor: ACCENT }} />
                      <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Center 87% circle ---------- */

function CenterCircle({ value, label }: { value: string; label: string }) {
  const r = 38;
  const C = 2 * Math.PI * r;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: -18 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", stiffness: 90, damping: 14 }}
      className="relative flex h-64 w-64 shrink-0 items-center justify-center xl:h-72 xl:w-72"
    >
      {/* main partial ring: accent with a short dark segment — draws itself */}
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <g transform="rotate(-55 50 50)">
          {/* Accent half — draws first */}
          <motion.circle
  cx="50"
  cy="50"
  r={r}
  fill="none"
  stroke={ACCENT}
  strokeWidth="0.5"
  strokeLinecap="round"
  strokeDasharray={`${C * 0.45} ${C}`}
  initial={{
    strokeDashoffset: C * 0.45,
  }}
  whileInView={{
    strokeDashoffset: 0,
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1.1,
    ease: "easeInOut",
  }}
/>

          {/* Dark half — draws second, offset by half the circle */}
          <motion.circle
  cx="50"
  cy="50"
  r={r}
  fill="none"
  stroke={DARK}
  strokeWidth="0.5"
  strokeLinecap="round"
  strokeDasharray={`${C * 0.45} ${C}`}
  initial={{
    strokeDashoffset: C * 0.45 - C * 0.5,
  }}
  whileInView={{
    strokeDashoffset: -(C * 0.5),
  }}
  viewport={{ once: true }}
  transition={{
    duration: 1.1,
    delay: 0.25,
    ease: "easeInOut",
  }}
/>
        </g>
      </svg>

      {/* subtle dot texture, clipped to circle */}
      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className="absolute -left-2 top-8 h-28 w-28 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(${DARK} 1px, transparent 1px)`,
            backgroundSize: "9px 9px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-6xl mt-3 font-serif leading-none text-[#0f2b2e] xl:text-7xl">
          <AnimatedNumber value={value} delay={0.6} />
        </p>
        <span className="mt-3 h-[3px] w-10 rounded-full" style={{ backgroundColor: ACCENT }} />
        <p className="mt-3 max-w-[9rem] text-sm text-gray-600">{label}</p>
      </div>
    </motion.div>
  );
}

/* ---------- Corner stat (icon + elbow connector + number/label) ---------- */

function StatCorner({
  icon,
  value,
  label,
  side,
  delay = 0,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  side: "left" | "right";
  delay?: number;
}) {
  const isRight = side === "right";

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.max(delay - 0.5, 0) }}
      className={`flex items-center gap-3 ${
        isRight ? "flex-row-reverse text-right" : ""
      }`}
    >
      <IconAvatar icon={icon} delay={delay} />

      <div className={isRight ? "text-right" : ""}>
        <p className="text-3xl font-extrabold text-[#0f2b2e] sm:text-4xl">
          <AnimatedNumber value={value} delay={delay + 0.3} />
        </p>

        <span
          className={`mt-1 block h-[3px] w-9 rounded-full ${
            isRight ? "ml-auto" : ""
          }`}
          style={{ backgroundColor: ACCENT }}
        />

        <p className="mt-2 text-sm leading-5 text-gray-500">{label}</p>

        {/* Connector under label — draws outward, dots pop at the ends */}
        <div className={`mt-3 flex ${isRight ? "justify-end" : "justify-start"}`}>
          <Connector flipX={isRight} delay={delay + 0.15} />
        </div>
      </div>
    </motion.div>
  );
}

function IconAvatar({ icon: Icon, delay = 0 }: { icon: LucideIcon; delay?: number }) {
  return (
    <motion.div
      className="relative flex h-16 w-16 shrink-0 items-center justify-center"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 14, delay }}
    >
      <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full">
        <g transform="rotate(-90 32 32)">
          {/* 80% dark arc */}
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke={DARK}
            strokeWidth="1.5"
            pathLength={100}
            strokeDasharray="80 20"
            strokeLinecap="round"
          />

          {/* 20% dotted orange arc */}
          <circle
            cx="32"
            cy="32"
            r="29"
            fill="none"
            stroke={ACCENT}
            strokeWidth="1.5"
            pathLength={100}
            strokeDasharray="1.5 2 1.5 2 1.5 2 1.5 2 1.5 2 1.5 2 1.5 2 72"
            strokeDashoffset="-80"
            strokeLinecap="round"
          />
        </g>
      </svg>

      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f1efe9]">
        <Icon className="h-8 w-8 text-[#0f2b2e]" strokeWidth={1.75} />
      </div>
    </motion.div>
  );
}

function Connector({ flipX = false, delay = 0 }: { flipX?: boolean; delay?: number }) {
  const dotTransition = { type: "spring" as const, stiffness: 300, damping: 12, delay: delay + 0.5 };

  return (
    <svg viewBox="0 0 120 34" className="h-8 w-28">
      {flipX ? (
        <>
          {/* Right stats: elbow on LEFT — line draws outward */}
          <motion.path
            d="M4 18 H78 L98 18 L116 4"
            fill="none"
            stroke={DARK}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
          />
          <motion.circle
            cx="4"
            cy="18"
            r="2.5"
            fill={DARK}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={dotTransition}
          />
          <motion.circle
            cx="116"
            cy="4"
            r="2.5"
            fill={DARK}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={dotTransition}
          />
        </>
      ) : (
        <>
          {/* Left stats: elbow on RIGHT — line draws outward */}
          <motion.path
            d="M116 18 H42 L22 18 L4 4"
            fill="none"
            stroke={DARK}
            strokeWidth="1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: "easeOut" }}
          />
          <motion.circle
            cx="116"
            cy="18"
            r="2.5"
            fill={DARK}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={dotTransition}
          />
          <motion.circle
            cx="4"
            cy="4"
            r="2.5"
            fill={DARK}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={dotTransition}
          />
        </>
      )}
    </svg>
  );
}

/* ---------- Animated number — fades in while counting up ---------- */

function AnimatedNumber({ value, delay = 0 }: { value: string; delay?: number }) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest) + suffix);

  useEffect(() => {
    const controls = animate(count, numericValue, { duration: 1.4, ease: "easeOut", delay });
    return controls.stop;
  }, [count, numericValue, delay]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {rounded}
    </motion.span>
  );
}