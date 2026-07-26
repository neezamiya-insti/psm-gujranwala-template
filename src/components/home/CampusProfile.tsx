import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";

const collageImages = [
  { id: "labs", label: "Science Laboratories", span: "tall" as const },
  { id: "sports", label: "Sports Ground", span: "short" as const },
  { id: "fleet", label: "Transport Fleet", span: "short" as const },
];

export default function CampusProfile() {
  return (
    <section className="border-t border-[#0f2b2e]/8 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <FadeUp>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0f2b2e]/70">
            Institutional Profile
          </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
              A campus, not a compound.
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-gray-600">
              From Montessori to Intermediate, our Model Town, Wazirabad Road
              and Rahwali Cantt campuses share one faculty standard, one
              results record and one admissions office — so a parent
              relocating within the city, or comparing us to the school next
              door, sees exactly what they&apos;re signing their child up
              for.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-3xl bg-[#0f2b2e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:scale-[1.02] hover:bg-[#163f42]"
            >
              Read the Principal&apos;s Message
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>

          {/* Right — image collage */}
          <FadeUp delay={0.15}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {/* Tall image, spans both rows */}
              <div className="relative row-span-2 h-full overflow-hidden rounded-sm">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, #f0c3ae 0%, #e9a68b 100%)",
                  }}
                />
                <span className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-wide text-[#0f2b2e]/60">
                  {collageImages[0].label}
                </span>
              </div>

              {/* Two stacked images */}
              {collageImages.slice(1).map((img) => (
                <div
                  key={img.id}
                  className="relative aspect-[4/3] overflow-hidden rounded-sm"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(160deg, #f0c3ae 0%, #e9a68b 100%)",
                    }}
                  />
                  <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wide text-[#0f2b2e]/60">
                    {img.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}