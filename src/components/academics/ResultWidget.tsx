import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { getDistrictRanking } from "@/data/academics";
import { getPreferredLanguage } from "@/lib/language.server";

export default async function ResultWidget() {
  const lang = await getPreferredLanguage();
  const districtRanking = getDistrictRanking(lang);

  return (
    <section className="bg-[#f1efe9] pb-16 sm:pb-20">
      <Container>
        <FadeUp>
          <div className="flex flex-col gap-3 rounded-sm bg-[#f3cdbe] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="font-mono text-[15px] font-semibold uppercase tracking-wide text-[#0f2b2e]">
                {districtRanking.label}
              </p>
              <p className="mt-1 text-sm text-[#0f2b2e]/60">
                {districtRanking.description}
              </p>
            </div>
            <p className="font-serif text-xl font-bold text-[#e15a2e] sm:text-xl">
              {districtRanking.rank} &middot; {districtRanking.scope}
            </p>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}