"use client";

import { type SiteLanguage } from "@/lib/language";
import Link from "next/link";
import { ArrowRight, GraduationCap, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";

export default function CTASection({ lang }: { lang: SiteLanguage }) {
  return (
    <section className="bg-[#f1efe9] pb-16 sm:pb-20">
      <Container>
        <FadeUp>
          <div className="group relative overflow-hidden rounded-2xl bg-[#0f2b2e] px-5 py-8 sm:px-8 lg:px-10 lg:py-8">

            {/* Animated background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#e15a2e30,transparent_35%),radial-gradient(circle_at_bottom_left,#1c4e8a40,transparent_40%)] animate-pulse" />

            {/* Floating circles */}
            <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-[#e15a2e]/10 blur-xl animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-5 left-6 h-14 w-14 rounded-full bg-[#1c4e8a]/20 blur-xl animate-[float_5s_ease-in-out_infinite]" />

            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Badge */}
              <div className="mb-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <GraduationCap className="h-4 w-4 text-[#e15a2e]" />
                <span className="text-xs font-semibold text-white">
                  {lang === "UR" ? "داخلے شروع ہو چکے ہیں" : "Admissions Now Open"}
                </span>
              </div>

              <h2 className="max-w-2xl text-xl font-bold leading-tight text-white sm:text-2xl lg:text-4xl">
                {lang === "UR"
                  ? "اپنے بچے کے روشن مستقبل کا پہلا قدم آج اٹھائیں"
                  : "Give Your Child the Foundation for a Brighter Future"}
              </h2>

              <p className="mt-3 max-w-xl text-xs leading-relaxed text-white/60 sm:text-sm">
                {lang === "UR"
                  ? "معیاری تعلیم، جدید سہولیات اور بہترین تعلیمی ماحول کے ساتھ اپنے بچے کے لیے گوجرانوالہ گرامر اسکول کا انتخاب کریں۔"
                  : "Discover quality education, modern facilities, and a nurturing environment where students grow with confidence."}
              </p>

              {/* CTA Button */}
              <Link
                href="/admissions"
                className="group relative mt-6 inline-flex overflow-hidden rounded-full bg-[#e15a2e] px-7 py-3 text-xs font-bold text-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-[#e15a2e]/40 sm:text-sm"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <span className="relative flex items-center gap-2">
                  {lang === "UR"
                    ? "داخلے کے لیے درخواست دیں"
                    : "Apply for Admission"}

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>

              <p className="mt-3 text-[11px] text-white/40">
                {lang === "UR"
                  ? "اپنے بچے کے تعلیمی سفر کا آغاز کریں"
                  : "Start your child's educational journey today"}
              </p>

            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}