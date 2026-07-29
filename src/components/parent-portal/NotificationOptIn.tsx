"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { channelOptions, NotificationChannel } from "@/data/portal";
import { type SiteLanguage } from "@/lib/language";
import Link from "next/link";

export default function NotificationOptIn({ lang }: { lang: SiteLanguage }) {
  const [channel, setChannel] = useState<NotificationChannel>("whatsapp");
  const [phone, setPhone] = useState("");
  const [relationship, setRelationship] = useState("");
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to real opt-in endpoint later
    console.log("Notification opt-in:", { channel, phone, relationship, agreed });
  };

  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy + channel toggle */}
          <FadeUp>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
              {lang === "UR" ? "واٹس ایپ اور ایس ایم ایس آپٹ ان۔" : "WhatsApp &amp; SMS opt-in."}
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-600">
              {lang === "UR"
                ? "مصروف تاجر خاندان سارا دن کاروبار کے لیے واٹس ایپ چیک کرتے ہیں — لہٰذا یہ حاضری الرٹس، نتائج اور داخلہ اپ ڈیٹس کے لیے ڈیفالٹ چینل ہے۔ ایس ایم ایس فال بیک کے طور پر دستیاب ہے۔"
                : "Busy trading families check WhatsApp all day for business — so it&apos;s the default channel for attendance alerts, results and admission updates. SMS stays available as a fallback."}
            </p>

            <p
              dir="rtl"
              lang="ur"
              className="mt-5 max-w-md text-lg leading-relaxed text-[#0f2b2e]"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            >
              واٹس ایپ پر اطلاعات کے لیے نمبر درج کریں۔
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
                {channelOptions.map((option) => {
                    const isActive = channel === option.id;

                    return (
                    <button
                        key={option.id}
                        type="button"
                        onClick={() => setChannel(option.id)}
                        className={`flex h-11 w-34 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                        isActive
                            ? "bg-[#e15a2e] text-white"
                            : "border border-[#0f2b2e]/25 bg-white text-[#0f2b2e]/70 hover:border-[#0f2b2e]/30"
                        }`}
                    >
                        {option.label}
                    </button>
                    );
                })}
                </div>
          </FadeUp>

          {/* Right — form card */}
          <FadeUp delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="rounded-sm bg-[#f3cdbe] p-6 sm:p-8"
            >
              <div>
                  <input
                    type="tel"
                    placeholder={lang === "UR" ? "والدین کا واٹس ایپ / موبائل نمبر" : "Parent WhatsApp / mobile number"}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-sm border border-[#0f2b2e]/10 bg-gray-100 px-4 py-3.5 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/45 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
                />
              </div>

              <div className="mt-4">
                  <input
                    type="text"
                    placeholder={lang === "UR" ? "طالب علم سے رشتہ (مثلاً والد)" : "Relationship to student (e.g. Father)"}
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  className="w-full rounded-sm border border-[#0f2b2e]/10 bg-gray-100 px-4 py-3.5 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/45 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
                />
              </div>

              <label className="mt-5 flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#0f2b2e]"
                />
                <span className="text-sm leading-relaxed text-[#0f2b2e]/80">
                  {lang === "UR"
                    ? "میں گوجرانوالہ گرامر اسکول سے واٹس ایپ/ایس ایم ایس پر حاضری، نتیجہ اور داخلہ کی اطلاعات وصول کرنے سے اتفاق کرتا/کرتی ہوں۔"
                    : "I agree to receive attendance, result and admission notices on WhatsApp/SMS from Gujranwala Grammar School."}
                </span>
              </label>

              <Link
                href="https://wa.me/9255123456"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#0f2b2e]/90 px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {lang === "UR" ? "واٹس ایپ پر آپٹ ان کریں" : "Opt In on WhatsApp"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </form>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}