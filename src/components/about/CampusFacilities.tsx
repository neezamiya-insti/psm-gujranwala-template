import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import ImageCard from "@/components/common/ImageCard";
import { getCampusFacilities } from "@/data/about";
import { type SiteLanguage } from "@/lib/language";

export default function CampusFacilities({ lang }: { lang: SiteLanguage }) {
  const campusFacilities = getCampusFacilities(lang);
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
            {lang === "UR" ? "کیمپس سہولیات" : "Campus Facilities"}
          </p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight text-[#0f2b2e] sm:text-3xl">
            {lang === "UR" ? "تعلیمی اور سرگرمیاں" : "Academics & Activities"}
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {campusFacilities.map((facility) => (
               <ImageCard
                  key={facility.id}
                  label={facility.label}
                  image={facility.image}
                />
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}