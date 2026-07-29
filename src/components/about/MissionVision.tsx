import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { getMissionVisionItems } from "@/data/about";
import { type SiteLanguage } from "@/lib/language";

export default function MissionVision({ lang }: { lang: SiteLanguage }) {
  const missionVisionItems = getMissionVisionItems(lang);
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {missionVisionItems.map((item, idx) => (
            <FadeUp key={item.id} delay={idx * 0.08}>
              <div className="h-full rounded-xl bg-[#f3cdbe] p-6 sm:p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <p className="font-mono text-[13px] font-semibold uppercase tracking-wide text-[#e15a2e]">
                  {item.label}
                </p>
                <p className="mt-2 text-lg font-bold leading-snug text-[#0f2b2e]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#0f2b2e]/65">
                  {item.description}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}