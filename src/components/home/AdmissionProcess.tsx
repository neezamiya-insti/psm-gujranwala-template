import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { admissionSteps } from "@/data/admissions";

export default function AdmissionProcess() {
  return (
    <section className="bg-[#f1efe9] pb-16 sm:pb-20">
      <Container>
        <FadeUp>
          <div className="relative overflow-hidden rounded-xl bg-[#0f2b2e] p-8 sm:p-10 lg:p-12">
            {/* Diagonal stripe texture, matches Hero's campus card */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 2px, transparent 2px, transparent 14px)",
              }}
            />

            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
                  Admission Automation
                </p>
                <h2 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[2.2rem]">
                  Skip the queue. Track it from your phone.
                </h2>
              </div>

              <Link
                href="/admissions"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-3xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0f2b2e] transition-transform hover:scale-[1.02] hover:bg-gray-100 active:scale-[0.98]"
              >
                Start Application
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {admissionSteps.map((step) => (
                <div
                  key={step.id}
                  className="border-l border-dashed border-white/25 pl-3"
                >
                  <p className="font-mono text-[11px] text-[#e15a2e]">
                    {step.number}
                  </p>
                  <p className="mt-2 text-[15px] font-bold text-white">
                    {step.title}
                  </p>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}