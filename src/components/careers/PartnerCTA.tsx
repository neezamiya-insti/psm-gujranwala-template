import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { partnerCTA } from "@/data/careers";
import Link from "next/link";

export default function PartnerCTA() {
  return (
    <section className="bg-[#f1efe9] pb-16 sm:pb-20">
      <Container>
        <FadeUp>
          <div className="flex flex-col gap-6 rounded-sm bg-[#0f2b2e] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-lg">
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {partnerCTA.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {partnerCTA.description}
              </p>
            </div>

            <Link
                href="/contact"
                className="mt-5 inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-[#e15a2e] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                {partnerCTA.buttonLabel}
                <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}