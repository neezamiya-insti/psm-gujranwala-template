import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { principalMessage } from "@/data/about";

export default function PrincipalMessage() {
  return (
    <section className="bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Photo card */}
          <FadeUp>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm sm:aspect-square lg:aspect-[4/5]">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(160deg, #12332f 0%, #0a201d 100%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 14px)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-lg font-bold text-white">
                  {principalMessage.name}
                </p>
                <p className="mt-0.5 text-sm text-white/70">
                  {principalMessage.role.split(",")[0]}
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Quote + bio */}
          <FadeUp delay={0.1}>
            <span
              aria-hidden
              className="block font-serif text-8xl leading-none text-[#e15a2e]"
            >
              &ldquo;
            </span>
            <blockquote className="mt-2 font-serif text-2xl italic leading-snug text-[#0f2b2e] sm:text-[1.7rem]">
              {principalMessage.quote}
            </blockquote>

            <p className="mt-6 text-[15px] font-bold text-[#0f2b2e]">
              {principalMessage.name}
            </p>
            <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#e15a2e]">
              {principalMessage.role}
            </p>

            <p className="mt-5 max-w-lg text-sm leading-relaxed text-gray-600">
              {principalMessage.bio}
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}