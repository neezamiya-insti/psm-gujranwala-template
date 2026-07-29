import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import TeamHierarchyChart from "@/components/cards/TeamHierarchyChart";
import { getFacultyMembers } from "@/data/about";
import { type SiteLanguage } from "@/lib/language";

export default function Faculty({ lang }: { lang: SiteLanguage }) {
  const facultyMembers = getFacultyMembers(lang);

  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <h2 className="mt-3 text-2xl text-center font-extrabold leading-tight text-[#0f2b2e] sm:text-3xl">
            {lang === "UR" ? "ہمارے اساتذہ سے ملیں" : "Meet Our Teachers"}
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-center text-sm leading-relaxed text-[#0f2b2e]/65 sm:text-base">
  {lang === "UR"
    ? "تجربہ کار اور پرعزم اساتذہ جو ہر طالب علم کی تعلیمی، اخلاقی اور ذاتی ترقی کے لیے بھرپور رہنمائی فراہم کرتے ہیں۔"
    : "Meet the dedicated educators who inspire curiosity, nurture confidence, and guide every student toward academic and personal success."}
</p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="mt-10">
            <TeamHierarchyChart members={facultyMembers} />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}