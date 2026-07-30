import { ReactNode } from "react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";

interface PageBannerProps {
  eyebrow: string;
  title: string;
  description?: string;
  urduLine?: string;
  children?: ReactNode;
}

export default function PageBanner({
  eyebrow,
  title,
  description,
  urduLine,
  children,
}: PageBannerProps) {
  return (
    <section className="border-b border-[#0f2b2e]/10 bg-[#f1efe9] py-10 sm:py-12">
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

      <Container>
        <FadeUp>
          <p className="pb-eyebrow font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
            {eyebrow}
          </p>

          <h1 className="pb-heading mt-3 text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
            {title}
          </h1>

          {description && (
            <p className="pb-description mt-4 max-w-3xl text-[15px] leading-relaxed text-gray-600">
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

          {children && <div className="mt-8">{children}</div>}
        </FadeUp>
      </Container>
    </section>
  );
}