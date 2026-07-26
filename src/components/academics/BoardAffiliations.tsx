import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import { boardAffiliations } from "@/data/academics";

export default function BoardAffiliations() {
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <SectionHeading
            title="Curriculum & Board Affiliation"
            description="The credibility signal Gujranwala parents check for before anything else."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {boardAffiliations.map((board) => (
            <div
              key={board.id}
              className="relative rounded-md bg-[#0f2b2e] p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-7"
            >
              {board.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-[#e15a2e] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-white">
                  Primary Board
                </span>
              )}

              <p className="mt-4 text-lg font-bold text-white">
                {board.name}
              </p>

              <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#e15a2e]">
                {board.tag}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {board.description}
              </p>
            </div>
          ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}