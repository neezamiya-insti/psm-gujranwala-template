import { getPreviewStudent, getPortalStats, getPortalNotices } from "@/data/portal";
import { type SiteLanguage } from "@/lib/language";

export default function PortalPreview({ lang }: { lang: SiteLanguage }) {
  const previewStudent = getPreviewStudent(lang);
  const portalStats = getPortalStats(lang);
  const portalNotices = getPortalNotices(lang);
  return (
    <div className="relative overflow-hidden rounded-sm bg-[#0f2b2e] p-6 sm:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 2px, transparent 2px, transparent 14px)",
        }}
      />

      <div className="relative flex items-center justify-between gap-3">
        <h3 className="text-lg font-bold text-white sm:text-xl">
          {previewStudent.name} — {previewStudent.grade}
        </h3>
        <span className="shrink-0 rounded-full bg-[#e15a2e] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-white">
          {lang === "UR" ? "لائیو پیش نظارہ" : "Live Preview"}
        </span>
      </div>

      <div className="relative mt-6 grid grid-cols-3 gap-3">
        {portalStats.map((stat) => (
          <div
            key={stat.id}
            className="rounded-sm border border-white/10 bg-white/5 p-4"
          >
            <p className="text-2xl font-extrabold text-[#e15a2e] sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs leading-tight text-white/60">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="relative mt-6 space-y-3">
        {portalNotices.map((notice) => (
          <div
            key={notice.id}
            className="flex items-center justify-between gap-4 border-l-2 border-[#e15a2e] bg-white/5 py-3 pl-4 pr-4"
          >
            <p className="text-sm text-white/85">{notice.message}</p>
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-wide text-white/40">
              {notice.timestamp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}