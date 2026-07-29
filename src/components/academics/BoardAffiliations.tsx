import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { getBoardAffiliations } from "@/data/academics";
import { getPreferredLanguage } from "@/lib/language.server";
import { School, BookOpen, Globe2 } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";

const ICONS = [School, BookOpen, Globe2];

export default async function BoardAffiliations() {
  const lang = await getPreferredLanguage();
  const boardAffiliations = getBoardAffiliations(lang);

  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f3efe8] py-16 sm:py-24">
      <style>{`
        @keyframes bh-draw-line {
          from { stroke-dashoffset: 1400; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes bh-dot-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.6); opacity: 0.5; }
        }
        .bh-line-path {
          stroke-dasharray: 1400;
          animation: bh-draw-line 1.4s ease-out 0.2s forwards;
        }
        .bh-dot-pulse {
          animation: bh-dot-pulse 2.2s ease-in-out infinite;
        }
      `}</style>

      <Container>
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col items-center text-center">

            <SectionHeading
              title={lang === "UR" ? "نصاب اور بورڈ وابستگی" : "Curriculum & Board Affiliation"}
              description={
                lang === "UR"
                  ? "اعتماد کی وہ علامت جسے گوجرانوالہ کے والدین سب سے پہلے دیکھتے ہیں۔"
                  : "The credibility signal Gujranwala parents check for before anything else."
              }
            />
          </div>
        </FadeUp>

        {/* Connector tree (desktop only) */}
        <FadeUp delay={0.1}>
          <div className="relative mt-16 hidden h-[70px] sm:block">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1200 70"
              preserveAspectRatio="none"
              fill="none"
            >
              <path
                className="bh-line-path"
                d="M 190 70 V 40 Q 190 18 212 18 H 988 Q 1010 18 1010 40 V 70"
                stroke="#0f2b3a"
                strokeWidth="2"
                fill="none"
              />
              <line
                className="bh-line-path"
                x1="600"
                y1="0"
                x2="600"
                y2="70"
                stroke="#0f2b3a"
                strokeWidth="2"
              />
            </svg>
            <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e15a2e] bh-dot-pulse" />
          </div>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 gap-12 sm:mt-0 sm:grid-cols-3 sm:gap-8">
            {boardAffiliations.map((board, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={board.id}
                  className="group flex flex-col items-center text-center transition-transform duration-500 hover:-translate-y-2"
                >
                  <div className="flex h-24 w-24 items-center justify-center rounded-full ring-4 ring-[#e15a2e]/15 transition-all duration-500 group-hover:ring-[#e15a2e]/35">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#0f2b3a] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon
                        className="h-8 w-8 text-[#e15a2e] transition-transform duration-500 group-hover:scale-110"
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <h3 className="mt-5 font-serif text-lg font-bold text-[#0f2b3a] sm:text-xl">
                    {board.name}
                  </h3>

                  <p className="mt-2 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#e15a2e]">
                    {board.tag}
                  </p>
                  <span className="mt-2 h-[3px] w-8 rounded-full bg-[#e15a2e] transition-all duration-500 group-hover:w-12" />

                  <p className="mt-4 max-w-[260px] text-[13px] leading-relaxed text-[#0f2b3a]/60">
                    {board.description}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}