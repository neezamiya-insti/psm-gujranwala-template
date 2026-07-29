import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import TeamCard from "@/components/cards/TeamCard";
import { getFacultyMembers } from "@/data/about";
import { type SiteLanguage } from "@/lib/language";

export default function Faculty({ lang }: { lang: SiteLanguage }) {
  const facultyMembers = getFacultyMembers(lang);
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
            {lang === "UR" ? "تدریسی عملہ" : "Faculty"}
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#0f2b2e] sm:text-3xl">
            {lang === "UR" ? "اہلیتیں جو والدین داخلہ سے پہلے جانچ سکتے ہیں۔" : "Qualifications parents can check before they enroll."}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facultyMembers.map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                title={member.title}
                bio={member.bio}
                image={member.image}
              />
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}