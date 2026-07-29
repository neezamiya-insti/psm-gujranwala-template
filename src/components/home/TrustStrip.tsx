import Container from "@/components/common/Container";
import { getTrustPoints } from "@/data/contact";
import { getPreferredLanguage } from "@/lib/language.server";

export default async function TrustStrip() {
  const lang = await getPreferredLanguage();
  const trustPoints = getTrustPoints(lang);

  return (
    <div className="relative -mt-8 border-t border-white/10 bg-[#0f2b2e] py-5 sm:py-3">
      <Container>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:items-center sm:justify-between">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#e15a2e]" />
              <span className="text-xs font-medium text-white/85 sm:text-[13px]">
                {point}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}