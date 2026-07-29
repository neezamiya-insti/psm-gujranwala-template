import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import Image from "next/image";
import { getPreferredLanguage } from "@/lib/language.server";
import { isUrdu } from "@/lib/language";

const collageImages = [
  {
    id: "labs",
    label: "Science Laboratories",
    src: "/images/facilities/computer-lab.jpeg",
    span: "tall" as const,
  },
  {
    id: "sports",
    label: "Sports Ground",
    src: "/images/facilities/sports-ground.jpeg",
    span: "short" as const,
  },
  {
    id: "fleet",
    label: "Transport Fleet",
    src: "/images/campus-fleet.jpeg",
    span: "short" as const,
  },
];

export default async function CampusProfile() {
  const lang = await getPreferredLanguage();
  const copy = isUrdu(lang)
    ? {
        eyebrow: "ادارہ جاتی پروفائل",
        title: "کیمپس ہے، کمپاؤنڈ نہیں۔",
        description:
          "مونٹیسوری سے انٹرمیڈیٹ تک، ہمارے ماڈل ٹاؤن، وزیرآباد روڈ اور راولی کینٹ کیمپس ایک ہی تدریسی معیار، ایک ہی نتائج کا ریکارڈ اور ایک ہی داخلہ دفتر شیئر کرتے ہیں۔",
        cta: "پرنسپل کا پیغام پڑھیں",
        collageLabels: ["سائنس لیبارٹریز", "کھیل کا میدان", "ٹرانسپورٹ فلیٹ"],
      }
    : {
        eyebrow: "Institutional Profile",
        title: "A campus, not a compound.",
        description:
          "From Montessori to Intermediate, our Model Town, Wazirabad Road and Rahwali Cantt campuses share one faculty standard, one results record and one admissions office — so a parent relocating within the city, or comparing us to the school next door, sees exactly what they\'re signing their child up for.",
        cta: "Read the Principal's Message",
        collageLabels: ["Science Laboratories", "Sports Ground", "Transport Fleet"],
      };

  return (
    <section className="border-t border-[#0f2b2e]/8 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left — copy */}
          <FadeUp>
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0f2b2e]/70">
              {copy.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
              {copy.title}
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-gray-600">
              {copy.description}
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-3xl bg-[#0f2b2e] px-5 py-3 text-sm font-semibold text-white transition-colors hover:scale-[1.02] hover:bg-[#163f42]"
            >
              {copy.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeUp>

          {/* Right — image collage */}
{/* Right — image collage */}
<FadeUp delay={0.15}>
  <div className="grid grid-cols-2 grid-rows-2 gap-4">
    {/* Tall image, spans both rows */}
    <div className="relative row-span-2 h-full overflow-hidden rounded-sm">
      <Image
        src={collageImages[0].src}
        alt={copy.collageLabels[0]}
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

      <span className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-wide text-white">
        {copy.collageLabels[0]}
      </span>
    </div>

    {/* Two stacked images */}
    {collageImages.slice(1).map((img, index) => (
      <div
        key={img.id}
        className="relative aspect-4/3 overflow-hidden rounded-sm"
      >
        <Image
          src={img.src}
          alt={copy.collageLabels[index + 1]}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />

        <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-wide text-white">
          {copy.collageLabels[index + 1]}
        </span>
      </div>
    ))}
  </div>
</FadeUp>
        </div>
      </Container>
    </section>
  );
}