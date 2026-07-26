import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { alumniProfiles } from "@/data/careers";

export default function AlumniShowcase() {
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0f2b2e]/70">
            Industry &amp; Alumni in Trade
          </p>
          <h2 className="mt-3 max-w-4xl text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
            Our graduates run the export houses next door.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-gray-600">
            A spotlight section built for the trading-family buyer — proof
            that a Gujranwala Grammar education leads back into
            the city&apos;s own industry.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {alumniProfiles.map((alum) => (
              <div
                key={alum.id}
                className="rounded-sm bg-[#f3cdbe] p-6 sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f2b2e] text-sm font-bold text-[#e15a2e]">
                  {alum.initials}
                </div>
                <p className="mt-4 text-[15px] font-bold text-[#0f2b2e]">
                  {alum.name}
                </p>
                <p className="mt-1 font-mono text-[11px] font-bold uppercase tracking-wide text-[#e15a2e]">
                  {alum.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#0f2b2e]/65">
                  {alum.quote}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}