"use client";

import Link from "next/link";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowRight,
  Users,
  Briefcase,
  GraduationCap,
  Building2,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/common/Container";
import { getCareerHighlight, getSecondaryStats } from "@/data/careers";
import { type SiteLanguage } from "@/lib/language";

const DARK = "#0f2b2e";
const ACCENT = "#e15a2e";

// index 0 -> top-left, 1 -> top-right, 2 -> bottom-left, 3 -> bottom-right
const cornerIcons: LucideIcon[] = [Users, Briefcase, GraduationCap, Building2];

type Stat = { id: string; value: string; label: string };
type CornerKey = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

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
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
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

          {/* Right — center circle + 4 corner stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <DesktopStatsLayout
              featuredValue={careerHighlight.featuredValue}
              featuredLabel={careerHighlight.featuredLabel}
              topLeft={topLeft}
              topRight={topRight}
              bottomLeft={bottomLeft}
              bottomRight={bottomRight}
            />

            {/* Mobile / tablet fallback */}
            <div className="lg:hidden">
              <CenterCircle
                value={careerHighlight.featuredValue}
                label={careerHighlight.featuredLabel}
              />

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
                        <AnimatedNumber
                          value={stat.value}
                          delay={index * 0.12 + 0.2}
                        />
                      </p>
                      <span
                        className="mt-1 block h-[3px] w-8 rounded-full"
                        style={{ backgroundColor: ACCENT }}
                      />
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

/* ---------- Desktop layout: measures real DOM positions so connector
   lines are computed geometrically and always touch both the icon
   ring and the center circle, no matter the rendered size. ---------- */

type ConnectorGeometry = {
  path: string;
  iconEdge: { x: number; y: number };
  circleEdge: { x: number; y: number };
};

function computeConnector(
  containerRect: DOMRect,
  iconRect: DOMRect,
  circleRect: DOMRect,
  corner: CornerKey
): ConnectorGeometry {
  const iconCenter = {
    x: iconRect.left + iconRect.width / 2 - containerRect.left,
    y: iconRect.top + iconRect.height / 2 - containerRect.top,
  };

  const iconRadius = iconRect.width / 2;

  const circleCenter = {
    x: circleRect.left + circleRect.width / 2 - containerRect.left,
    y: circleRect.top + circleRect.height / 2 - containerRect.top,
  };

  const circleRadius = circleRect.width / 2;

  const diagonal = 40;
  const bottomHorizontalGap = 48;

  let iconEdge = { x: 0, y: 0 };
  let circleEdge = { x: 0, y: 0 };
  let path = "";

  switch (corner) {
    case "topLeft": {
      iconEdge = {
        x: iconCenter.x + iconRadius * 0.7,
        y: iconCenter.y + iconRadius * 0.7,
      };

      circleEdge = {
        x: circleCenter.x - circleRadius * 0.76,
        y: circleCenter.y - circleRadius * 0.18,
      };

      const diagonalEnd = {
        x: iconEdge.x + diagonal,
        y: circleEdge.y,
      };

      path = [
        `M ${iconEdge.x} ${iconEdge.y}`,
        `L ${diagonalEnd.x} ${diagonalEnd.y}`,
        `L ${circleEdge.x} ${circleEdge.y}`,
      ].join(" ");

      break;
    }

    case "topRight": {
      iconEdge = {
        x: iconCenter.x - iconRadius * 0.7,
        y: iconCenter.y + iconRadius * 0.7,
      };

      circleEdge = {
        x: circleCenter.x + circleRadius * 0.76,
        y: circleCenter.y - circleRadius * 0.18,
      };

      const diagonalEnd = {
        x: iconEdge.x - diagonal,
        y: circleEdge.y,
      };

      path = [
        `M ${iconEdge.x} ${iconEdge.y}`,
        `L ${diagonalEnd.x} ${diagonalEnd.y}`,
        `L ${circleEdge.x} ${circleEdge.y}`,
      ].join(" ");

      break;
    }

    case "bottomLeft": {
      iconEdge = {
        x: iconCenter.x + iconRadius * 0.2,
        y: iconCenter.y + iconRadius * 0.88,
      };

      circleEdge = {
        x: circleCenter.x - circleRadius * 0.6,
        y: circleCenter.y + circleRadius * 0.48,
      };

      const firstCorner = {
        x: iconEdge.x + diagonal,
        y: iconEdge.y + diagonal,
      };

      const secondCorner = {
        x: circleEdge.x - bottomHorizontalGap,
        y: firstCorner.y,
      };

      path = [
        `M ${iconEdge.x} ${iconEdge.y}`,
        `L ${firstCorner.x} ${firstCorner.y}`,
        `L ${secondCorner.x} ${secondCorner.y}`,
        `L ${circleEdge.x} ${circleEdge.y}`,
      ].join(" ");

      break;
    }

    case "bottomRight": {
      iconEdge = {
        x: iconCenter.x - iconRadius * 0.2,
        y: iconCenter.y + iconRadius * 0.88,
      };

      circleEdge = {
        x: circleCenter.x + circleRadius * 0.6,
        y: circleCenter.y + circleRadius * 0.48,
      };

      const firstCorner = {
        x: iconEdge.x - diagonal,
        y: iconEdge.y + diagonal,
      };

      const secondCorner = {
        x: circleEdge.x + bottomHorizontalGap,
        y: firstCorner.y,
      };

      path = [
        `M ${iconEdge.x} ${iconEdge.y}`,
        `L ${firstCorner.x} ${firstCorner.y}`,
        `L ${secondCorner.x} ${secondCorner.y}`,
        `L ${circleEdge.x} ${circleEdge.y}`,
      ].join(" ");

      break;
    }
  }

  return {
    path,
    iconEdge,
    circleEdge,
  };
}

function DesktopStatsLayout({
  featuredValue,
  featuredLabel,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
}: {
  featuredValue: string;
  featuredLabel: string;
  topLeft: Stat;
  topRight: Stat;
  bottomLeft: Stat;
  bottomRight: Stat;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const iconRefs = {
    topLeft: useRef<HTMLDivElement>(null),
    topRight: useRef<HTMLDivElement>(null),
    bottomLeft: useRef<HTMLDivElement>(null),
    bottomRight: useRef<HTMLDivElement>(null),
  };

  const [lines, setLines] = useState<
    Partial<Record<CornerKey, ConnectorGeometry>>
  >({});
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    function measure(): string | null {
      const containerEl = containerRef.current;
      const centerEl = centerRef.current;
      if (!containerEl || !centerEl) return null;

      const containerRect = containerEl.getBoundingClientRect();
      const circleRect = centerEl.getBoundingClientRect();

      if (containerRect.width === 0 || circleRect.width === 0) return null;

      const next: Partial<Record<CornerKey, ConnectorGeometry>> = {};
      const snapshot: (number | string)[] = [
        containerRect.width,
        containerRect.height,
        circleRect.width,
        circleRect.height,
      ];

      (Object.keys(iconRefs) as CornerKey[]).forEach((key) => {
        const el = iconRefs[key].current;
        if (!el) return;
        const iconRect = el.getBoundingClientRect();
        snapshot.push(key, iconRect.left, iconRect.top, iconRect.width);
        next[key] = computeConnector(containerRect, iconRect, circleRect, key);
      });

      setLines(next);
      setSize({ width: containerRect.width, height: containerRect.height });

      return snapshot.join(",");
    }

    let rafId: number;
    let lastSnapshot: string | null = null;
    let stableFrames = 0;
    let totalFrames = 0;

    const STABLE_FRAMES_NEEDED = 20;
    const HARD_CAP_FRAMES = 600;

    function tick() {
      const snapshot = measure();
      totalFrames++;

      if (snapshot !== null && snapshot === lastSnapshot) {
        stableFrames++;
      } else {
        stableFrames = 0;
      }
      lastSnapshot = snapshot;

      if (stableFrames < STABLE_FRAMES_NEEDED && totalFrames < HARD_CAP_FRAMES) {
        rafId = requestAnimationFrame(tick);
      }
    }
    rafId = requestAnimationFrame(tick);

    const styleObserver = new MutationObserver((mutations) => {
      const addedStyles = mutations.some((m) =>
        Array.from(m.addedNodes).some(
          (n) => n.nodeName === "STYLE" || n.nodeName === "LINK"
        )
      );
      if (addedStyles) {
        stableFrames = 0;
        totalFrames = 0;
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(tick);
      }
    });
    styleObserver.observe(document.head, { childList: true });

    window.addEventListener("load", measure);
    if (document.fonts?.ready) {
      document.fonts.ready.then(measure);
    }

    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);

    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(rafId);
      styleObserver.disconnect();
      window.removeEventListener("load", measure);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const delays: Record<CornerKey, number> = {
    topLeft: 0.5,
    bottomLeft: 0.8,
    topRight: 0.65,
    bottomRight: 0.95,
  };

  return (
    <div
      ref={containerRef}
      className="relative hidden lg:block"
      style={{
        width: "640px",
        height: "460px",
      }}
    >
      {/* Connector overlay — drawn from measured DOM rects */}
      {size.width > 0 && (
        <svg
          className="pointer-events-none absolute inset-0 z-20 overflow-visible"
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
        >
          {(Object.keys(lines) as CornerKey[]).map((key) => {
            const line = lines[key];
            if (!line) return null;
            const delay = delays[key];
            return (
              <g key={key}>
                <motion.path
                  d={line.path}
                  fill="none"
                  stroke={DARK}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: Math.max(delay - 0.35, 0),
                    ease: "easeOut",
                  }}
                />
                <motion.circle
                  cx={line.iconEdge.x}
                  cy={line.iconEdge.y}
                  r={2.5}
                  fill={DARK}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                    delay: Math.max(delay - 0.35, 0),
                  }}
                />
                <motion.circle
                  cx={line.circleEdge.x}
                  cy={line.circleEdge.y}
                  r={2.5}
                  fill={ACCENT}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 12,
                    delay: Math.max(delay - 0.35, 0) + 0.55,
                  }}
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* TOP LEFT */}
      <div className="absolute left-4 top-8 z-10">
        <StatCorner
          iconRef={iconRefs.topLeft}
          icon={cornerIcons[0]}
          value={topLeft.value}
          label={topLeft.label}
          side="left"
          delay={delays.topLeft}
        />
      </div>

      {/* BOTTOM LEFT */}
      <div className="absolute bottom-8 left-4 z-0">
        <StatCorner
          // eslint-disable-next-line react-hooks/refs
          iconRef={iconRefs.bottomLeft}
          icon={cornerIcons[2]}
          value={bottomLeft.value}
          label={bottomLeft.label}
          side="left"
          delay={delays.bottomLeft}
        />
      </div>

      {/* CENTER */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <CenterCircle
          ref={centerRef}
          value={featuredValue}
          label={featuredLabel}
        />
      </div>

      {/* TOP RIGHT */}
      <div className="absolute right-4 top-8 z-10">
        <StatCorner
          // eslint-disable-next-line react-hooks/refs
          iconRef={iconRefs.topRight}
          icon={cornerIcons[1]}
          value={topRight.value}
          label={topRight.label}
          side="right"
          delay={delays.topRight}
        />
      </div>

      {/* BOTTOM RIGHT */}
      <div className="absolute bottom-8 right-4 z-10">
        <StatCorner
          // eslint-disable-next-line react-hooks/refs
          iconRef={iconRefs.bottomRight}
          icon={cornerIcons[3]}
          value={bottomRight.value}
          label={bottomRight.label}
          side="right"
          delay={delays.bottomRight}
        />
      </div>
    </div>
  );
}

/* ---------- Center 87% circle ---------- */

const CenterCircle = forwardRef<
  HTMLDivElement,
  { value: string; label: string }
>(function CenterCircle({ value, label }, ref) {
  const r = 38;
  const C = 2 * Math.PI * r;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.7, rotate: -18 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, type: "spring", stiffness: 90, damping: 14 }}
      className="relative z-10 mx-auto flex h-48 w-48 shrink-0 items-center justify-center rounded-full bg-[#f1efe9] sm:h-52 sm:w-52 xl:h-56 xl:w-56"
    >
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100">
        <g transform="rotate(-55 50 50)">
          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={ACCENT}
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeDasharray={`${C * 0.45} ${C}`}
            initial={{ strokeDashoffset: C * 0.45 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />

          <motion.circle
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={DARK}
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeDasharray={`${C * 0.45} ${C}`}
            initial={{ strokeDashoffset: C * 0.45 - C * 0.5 }}
            whileInView={{ strokeDashoffset: -(C * 0.5) }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.25, ease: "easeInOut" }}
          />
        </g>
      </svg>

      <div className="absolute inset-0 overflow-hidden rounded-full">
        <div
          className="absolute -left-2 top-8 h-28 w-28 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(${DARK} 1px, transparent 1px)`,
            backgroundSize: "9px 9px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <p className="mt-2 font-serif text-5xl leading-none text-[#0f2b2e] xl:text-6xl">
          <AnimatedNumber value={value} delay={0.6} />
        </p>
        <span
          className="mt-2 h-[2px] w-8 rounded-full"
          style={{ backgroundColor: ACCENT }}
        />
        <p className="mt-2 max-w-[8rem] text-xs leading-4 text-gray-600">
          {label}
        </p>
      </div>
    </motion.div>
  );
});

/* ---------- Corner stat ---------- */

function StatCorner({
  icon,
  value,
  label,
  side,
  delay = 0,
  iconRef,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  side: "left" | "right";
  delay?: number;
  iconRef?: React.Ref<HTMLDivElement>;
}) {
  const isRight = side === "right";

  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: Math.max(delay - 0.5, 0) }}
      className={`flex items-center gap-2.5 ${
        isRight ? "flex-row-reverse text-right" : ""
      }`}
    >
      <IconAvatar ref={iconRef} icon={icon} delay={delay} />

      <div className={isRight ? "text-right" : ""}>
        <p className="text-2xl font-extrabold leading-none text-[#0f2b2e] sm:text-3xl">
          <AnimatedNumber value={value} delay={delay + 0.3} />
        </p>

        <span
          className={`mt-1 block h-[2px] w-7 rounded-full ${
            isRight ? "ml-auto" : ""
          }`}
          style={{ backgroundColor: ACCENT }}
        />

        <p
          className={`mt-1.5 max-w-[135px] text-xs leading-4 text-gray-500 ${
            isRight ? "ml-auto" : ""
          }`}
        >
          {label}
        </p>
      </div>
    </motion.div>
  );
}

const IconAvatar = forwardRef<
  HTMLDivElement,
  { icon: LucideIcon; delay?: number }
>(function IconAvatar({ icon: Icon, delay = 0 }, ref) {
  return (
    <motion.div
      ref={ref}
      className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 260, damping: 14, delay }}
    >
      <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full">
        <g transform="rotate(-90 32 32)">
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

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1efe9]">
        <Icon className="h-6 w-6 text-[#0f2b2e]" strokeWidth={1.7} />
      </div>
    </motion.div>
  );
});

/* ---------- Animated number ---------- */

function AnimatedNumber({
  value,
  delay = 0,
}: {
  value: string;
  delay?: number;
}) {
  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest) + suffix);

  useEffect(() => {
    const controls = animate(count, numericValue, {
      duration: 1.4,
      ease: "easeOut",
      delay,
    });
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