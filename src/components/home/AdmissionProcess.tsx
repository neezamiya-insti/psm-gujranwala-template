import Link from "next/link";
import {
  ArrowRight,
  FileEdit,
  UploadCloud,
  Lock,
  Search,
  ShieldCheck,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { getAdmissionSteps } from "@/data/admissions";
import { getPreferredLanguage } from "@/lib/language.server";
import { isUrdu } from "@/lib/language";
import ScrollReveal from "@/components/common/ScrollReveal";

const STEP_ICONS = [
  FileEdit,
  UploadCloud,
  Lock,
  Search,
  ShieldCheck,
  FaWhatsapp,
];

export default async function AdmissionProcess() {
  const lang = await getPreferredLanguage();
  const admissionSteps = getAdmissionSteps(lang);
  const copy = isUrdu(lang)
    ? {
        eyebrow: "داخلہ خودکار نظام",
        title: "قطار چھوڑیں۔ اسے اپنے فون سے ٹریک کریں۔",
        subtitle: "درخواست سے تصدیق تک — ہر قدم، آپ کے ہاتھ میں۔",
        cta: "درخواست شروع کریں",
      }
    : {
        eyebrow: "Admission Automation",
        title: "Skip the queue. Track it from your phone.",
        subtitle: "From application to confirmation — every step, in your hand.",
        cta: "Start Application",
      };

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

            {/* Header */}
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
                  {copy.eyebrow}
                  <span className="inline-flex items-center gap-1">
                    <span className="h-px w-6 bg-[#e15a2e]/60" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#e15a2e]" />
                  </span>
                </p>
                <h2 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[2.4rem]">
                  {copy.title.includes("your phone") ? (
                    <>
                      Skip the queue.
                      <br />
                      Track it from
                      <span className="text-[#e15a2e]"> your phone.</span>
                    </>
                  ) : (
                    copy.title
                  )}
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
                  {copy.subtitle}
                </p>
              </div>

              <Link
                href="/admissions"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-[#e15a2e] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#e15a2e] hover:text-white"
              >
                {copy.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Timeline */}
            <ScrollReveal>
            <div className="relative mt-16">
              {/* connecting line (desktop) */}
              <svg
                className="pointer-events-none absolute left-0 top-[38px] hidden w-full lg:block"
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  className="timeline-path"
                  d="M 0 20
                    L 40 20
                    C 100 20, 100 50, 160 50
                    C 220 50, 220 20, 280 20
                    L 360 20
                    C 420 20, 420 50, 480 50
                    C 540 50, 540 20, 600 20
                    L 680 20
                    C 740 20, 740 50, 800 50
                    C 860 50, 860 20, 920 20
                    C 980 20, 980 50, 1040 50
                    C 1100 50, 1100 20, 1160 20
                    L 1180 20"
                  stroke="#e15a2e"
                  strokeWidth="2"
                />

                {/* start dot */}
                <circle cx="4" cy="20" r="5" fill="#f1efe9" stroke="#e15a2e" strokeWidth="2" />

                {/* junction dots at each icon's connection point */}
                <circle cx="160" cy="50" r="4" fill="#e15a2e" />
                <circle cx="280" cy="20" r="4" fill="#e15a2e" />
                <circle cx="480" cy="50" r="4" fill="#e15a2e" />
                <circle cx="600" cy="20" r="4" fill="#e15a2e" />
                <circle cx="800" cy="50" r="4" fill="#e15a2e" />
                <circle cx="1040" cy="50" r="4" fill="#e15a2e" />

                {/* arrow head */}
                <path d="M 1180 14 L 1194 20 L 1180 26 Z" fill="#e15a2e" />
              </svg>
              <div className="relative grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-2">
                {admissionSteps.map((step, i) => {
                  const Icon = STEP_ICONS[i % STEP_ICONS.length];
                  const isLast = i === admissionSteps.length - 1;

                  return (
                    <div
                      key={step.id}
                      className="admission-step flex flex-col items-center text-center"
                      style={{ animationDelay: `${1.2 + i * 0.35}s`,
}}
                    >
                      <span className="font-mono text-xs font-bold tracking-wider text-[#e15a2e]">
                        {step.number}
                      </span>

                      <div
                        className={`relative mt-2 flex h-[76px] w-[76px] items-center justify-center rounded-full ${
                          isLast
                            ? "bg-[#0f2b2e] border-[1.5px] border-[#e15a2e]"
                            : "border-[1.5px] border-[#e15a2e] bg-[#0f2b2e]"
                        }`}
                      >
                        <Icon
                          className="h-8 w-8 text-white"
                          {...(!isLast && { strokeWidth: 1.75 })}
                        />
                      </div>

                      <p className="mt-4 text-[15px] font-bold text-white">
                        {step.title}
                      </p>
                      <p className="mt-2 max-w-[160px] text-[13px] leading-relaxed text-white/55">
                        {step.description}
                      </p>

                      <span className="mt-3 h-px w-6 bg-[#e15a2e]" />
                    </div>
                  );
                })}
              </div>
            </div>
            </ScrollReveal>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}