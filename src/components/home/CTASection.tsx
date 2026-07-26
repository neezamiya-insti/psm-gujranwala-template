import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";

export default function CTASection() {
  return (
    <section className="bg-[#f1efe9] pb-20 sm:pb-24">
      <Container>
        <FadeUp>
          <div className="rounded-xl bg-[#0f2b2e] p-8 sm:p-10 lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-lg">
                <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  Attendance &amp; progress updates, on WhatsApp.
                </h2>
                <p className="mt-3 text-[14px] leading-relaxed text-white/55">
                  The Parent-Teacher Management System sends attendance
                  alerts, homework and result notices straight to
                  WhatsApp/SMS — built for parents who are running a
                  business, not checking a portal.
                </p>
              </div>

              <Link
                href="https://wa.me/9255123456"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0f2b2e] transition-transform hover:scale-[1.02] active:scale-[0.98] lg:self-center"
              >
                Opt In on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}