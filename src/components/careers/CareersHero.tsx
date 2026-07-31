import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import CareersScopeModal from "@/components/careers/CareersScopeModal";
import { type SiteLanguage } from "@/lib/language";

export default function CareersHero({ lang }: { lang: SiteLanguage }) {
  return (
    <>
      <CareersScopeModal lang={lang} />

      <section className="border-b border-[#0f2b2e]/10 bg-[#f1efe9] py-14 sm:py-16">
        <Container>
          <FadeUp>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
              {lang === "UR" ? "کیریئر اور پلیسمنٹ" : "Careers & Placement"}
            </p>

            <h1 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
              {lang === "UR"
                ? "ہمارے فارغ التحصیل آگے کہاں جاتے ہیں۔"
                : "Where our graduates go next."}
            </h1>

            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-gray-600">
              {lang === "UR"
                ? "گوجرانوالہ کے پنکھا، برتن اور اسپورٹنگ گڈز کی تجارت میں صنعتی روابط، اور ایک پلیسمنٹ ریکارڈ جو ہم شائع کرتے ہیں نہ کہ صرف دعویٰ۔"
                : "Industry tie-ups across Gujranwala's fan, utensil and sporting-goods trade, and a placement record we publish rather than just claim."}
            </p>
          </FadeUp>
        </Container>
      </section>
    </>
  );
}