import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
  urduLine?: string;
}

export default function PageBanner({
  eyebrow,
  title,
  description,
  urduLine,
}: PageBannerProps) {
  return (
    <section className="border-b border-[#0f2b2e]/10 bg-[#f1efe9] py-10 sm:py-12">
      <Container>
        <FadeUp>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
            {eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-gray-600">
              {description}
            </p>
          )}
          {urduLine && (
            <p
              dir="rtl"
              lang="ur"
              className="mt-5 max-w-2xl text-lg leading-relaxed text-[#0f2b2e]"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
            >
              {urduLine}
            </p>
          )}
        </FadeUp>
      </Container>
    </section>
  );
}