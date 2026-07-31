import { Fragment } from "react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { getQuickStats } from "@/data/stats";
import Counter from "@/components/common/Counter";
import { getPreferredLanguage } from "@/lib/language.server";
import { ShieldHalf, Users, GraduationCap, Building2, BookTextIcon } from "lucide-react";

const DARK = "#0f2b2e";
const ACCENT = "#e15a2e";
const icons = [Users, GraduationCap, BookTextIcon, Building2];

export default async function QuickStats() {
  const lang = await getPreferredLanguage();
  const quickStats = getQuickStats(lang);

  return (
    <section className="bg-[#f1efe9] py-20 sm:py-24">
      <Container>
        {/* Eyebrow */}
        <FadeUp>
          <div className="flex flex-col items-center gap-3">
            <span
              className="text-xs font-extralight tracking-[0.2em]"
              style={{ color: ACCENT }}
            >
              OUR IMPACT
            </span>

            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-[#e15a2e]/35 sm:w-16" />
              <ShieldHalf
                className="h-4 w-4"
                strokeWidth={2}
                style={{ color: ACCENT }}
              />
              <span className="h-px w-10 bg-[#e15a2e]/35 sm:w-16" />
            </div>
          </div>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.05}>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
            {lang === "UR" ? (
              "وہ اعداد و شمار جو ہمارے معیارِ کار کی عکاسی کرتے ہیں۔"
            ) : (
              <>
                The numbers that define our <br></br> commitment to{" "}
                <span className="relative inline-block" style={{ color: ACCENT }}>
                  excellence
                </span>
                .
              </>
            )}
          </h2>
        </FadeUp>

        {/* Stats row */}
        <FadeUp delay={0.1}>
          <div className="mt-16 flex flex-wrap items-start justify-center gap-x-6 gap-y-12 sm:flex-nowrap sm:justify-center sm:gap-x-10">
            {quickStats.map((stat, i) => {
              const Icon = icons[i % icons.length];
              const isTopHalf = i % 2 === 0; // 1st & 3rd = dark top half, 2nd & 4th = accent bottom half
              const arcColor = isTopHalf ? DARK : ACCENT;
              // sweep=1 draws through the top, sweep=0 draws through the bottom
              const arcPath = isTopHalf
                ? "M 4 50 A 46 46 0 0 1 96 50"
                : "M 4 50 A 46 46 0 0 0 96 50";

              return (
                <Fragment key={stat.id}>
                  <div className="flex w-[calc(50%-0.75rem)] shrink-0 flex-col items-center text-center sm:w-auto">
                    {/* single half-circle arc */}
                    <div className="relative flex h-24 w-24 items-center justify-center">
                      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
                        <path
                          d={arcPath}
                          fill="none"
                          stroke={arcColor}
                          strokeWidth="5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                        <Icon className="h-7 w-7 text-[#0f2b2e]" strokeWidth={1.75} />
                      </div>
                    </div>

                    <svg width="4" height="24" className="my-1" aria-hidden="true">
                      {/* Solid line */}
                      <line
                        x1="2"
                        y1="0"
                        x2="2"
                        y2="18"
                        stroke={DARK}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />

                      {/* Dot at the end */}
                      <circle
                        cx="2"
                        cy="21"
                        r="2"
                        fill={DARK}
                      />
                    </svg>

                    <p className="text-3xl font-extrabold text-[#0f2b2e] sm:text-4xl">
                      <Counter value={stat.value} />
                    </p>
                    <span className="mt-2 h-[3px] w-8 rounded-full" style={{ backgroundColor: ACCENT }} />
                    <p className="mt-3 max-w-[9rem] text-sm text-gray-500">{stat.label}</p>
                  </div>

                  {/* solid connector, only between circles, desktop only */}
                  {i < quickStats.length - 1 && (
                    <div
                      className="mt-12 hidden h-[2px] w-20 sm:block"
                      style={{ backgroundColor: DARK }}
                    />
                  )}
                </Fragment>
              );
            })}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}