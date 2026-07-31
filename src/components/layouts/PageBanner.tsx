import { ReactNode } from "react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import Image from "next/image";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
  urduLine?: string;
  children?: ReactNode;
  centered?: boolean;
  backgroundImage?: string;
}

export default function PageBanner({
  eyebrow,
  title,
  description,
  urduLine,
  children,
  centered = false,
  backgroundImage,
}: PageBannerProps) {
  return (
    <section className="-mt-1 relative overflow-hidden border-b border-[#0f2b2e]/10 py-16 sm:py-20">
      {backgroundImage ? (
  <>
    <Image
      src={backgroundImage}
      alt=""
      fill
      priority
      className="object-cover"
    />

    {/* Dark overlay for readability */}
    <div className="absolute inset-0 bg-[#0f2b2e]/55" />
  </>
) : (
  <div className="absolute inset-0 bg-[#f1efe9]" />
)}
      <style>{`
        @keyframes pb-slide-in-right {
          from { opacity: 0; transform: translateX(90px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pb-slide-in-up {
          from { opacity: 0; transform: translateY(45px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pb-eyebrow {
          animation: pb-slide-in-right 1.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .pb-heading {
          animation: pb-slide-in-up 1.6s cubic-bezier(0.22, 1, 0.36, 1) 0.5s both;
        }
        .pb-description {
          animation: pb-slide-in-up 1.6s cubic-bezier(0.22, 1, 0.36, 1) 1s both;
        }
      `}</style>

      <div className="relative z-10">
  <Container>
    <FadeUp>
      <div
        className={
          centered
            ? "mx-auto max-w-4xl text-center"
            : "max-w-3xl"
        }
      >
        <p
          className={`pb-eyebrow font-mono text-xs font-semibold uppercase tracking-wider ${
            backgroundImage ? "text-orange-400" : "text-[#e15a2e]"
          }`}
        >
          {eyebrow}
        </p>

        <h1
          className={`pb-heading mt-3 text-3xl font-extrabold leading-tight sm:text-4xl ${
            backgroundImage ? "text-white" : "text-[#0f2b2e]"
          }`}
        >
          {title}
        </h1>

        {description && (
          <p
            className={`pb-description mt-4 max-w-3xl text-[15px] leading-relaxed ${
              centered ? "mx-auto" : ""
            } ${
              backgroundImage ? "text-white/90" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        )}

        {urduLine && (
          <p
            dir="rtl"
            lang="ur"
            className={`mt-5 text-lg leading-relaxed ${
              centered ? "mx-auto max-w-2xl" : "max-w-2xl"
            } ${
              backgroundImage ? "text-white" : "text-[#0f2b2e]"
            }`}
            style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
          >
            {urduLine}
          </p>
        )}

        {children && <div className="mt-8">{children}</div>}
      </div>
    </FadeUp>
  </Container>
</div>
    </section>
  );
}