import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";

export default function CareersHero() {
  return (
    <>
      {/* Scope notice bar */}
      <div className="border-b border-[#0f2b2e]/10 bg-[#f3cdbe] py-3">
        <Container>
          <p className="flex items-center gap-2 text-sm font-semibold text-[#0f2b2e]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#e15a2e]" />
            This section applies to our Intermediate/O-A-Level College &amp;
            Vocational Wing only — not the Primary or Middle school.
          </p>
        </Container>
      </div>

      <section className="border-b border-[#0f2b2e]/10 bg-[#f1efe9] py-14 sm:py-16">
        <Container>
          <FadeUp>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
              Careers &amp; Placement
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
              Where our graduates go next.
            </h1>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-gray-600">
              Industry tie-ups across Gujranwala&apos;s fan, utensil and
              sporting-goods trade, and a placement record we publish rather
              than just claim.
            </p>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}