"use client";

import { Download } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import { getResultsArchive } from "@/data/academics";
import { type SiteLanguage } from "@/lib/language";

interface ResultsArchiveProps {
  lang: SiteLanguage;
}

export default function ResultsArchive({ lang }: ResultsArchiveProps) {
  const resultsArchive = getResultsArchive(lang);

  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <SectionHeading
            title={lang === "UR" ? "نتائج کا ذخیرہ" : "Results Archive"}
            description={lang === "UR" ? "سال بہ سال ڈاؤن لوڈ کے قابل بورڈ نتائج کی پی ڈی ایفز۔" : "Downloadable board-result PDFs, by year."}
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          {/* Desktop / tablet table */}
          <div className="mt-8 hidden overflow-hidden rounded-sm sm:block">
            <table className="w-full border-collapse bg-white">
              <thead>
                <tr className="bg-[#0f2b2e]">
                  <th className="px-6 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    {lang === "UR" ? "سیشن" : "Session"}
                  </th>
                  <th className="px-6 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    {lang === "UR" ? "میٹرک نتیجہ" : "Matric Result"}
                  </th>
                  <th className="px-6 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    {lang === "UR" ? "او/اے لیول نتیجہ" : "O/A-Level Result"}
                  </th>
                  <th className="px-6 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    {lang === "UR" ? "بورڈ" : "Board"}
                  </th>
                  <th className="px-6 py-3 text-left font-mono text-[11px] font-semibold uppercase tracking-wide text-white/80">
                    {lang === "UR" ? "دستاویز" : "Document"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultsArchive.map((record, idx) => (
                  <tr
                    key={record.session}
                    className={
                      idx !== resultsArchive.length - 1
                        ? "border-b border-[#0f2b2e]/8"
                        : ""
                    }
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-[#0f2b2e]">
                      {record.session}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-[#e15a2e]">
                      {record.matricResult}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-[#e15a2e]">
                      {record.oaLevelResult}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#0f2b2e]/70">
                      {record.board}
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href={record.pdfUrl}
                        download
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#0f2b2e]/15 bg-[#f1efe9] px-3 py-1.5 text-xs font-semibold text-[#0f2b2e] transition-colors hover:bg-[#0f2b2e] hover:text-white"
                      >
                        <Download className="h-3 w-3" />
                        {lang === "UR" ? "ڈاؤن لوڈ" : "Download"}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="mt-8 space-y-3 sm:hidden">
            {resultsArchive.map((record) => (
              <div
                key={record.session}
                className="rounded-sm bg-white p-5"
              >
                <div className="flex items-center justify-between">
                  <p className="text-base font-bold text-[#0f2b2e]">
                    {record.session}
                  </p>
                  <a
                    href={record.pdfUrl}
                    download
                    className="inline-flex items-center gap-1.5 rounded-full border bg-[#0f2b2e] px-3 py-1.5 text-xs font-semibold text-white"
                  >
                    <Download className="h-3 w-3" />
                    {lang === "UR" ? "ڈاؤن لوڈ" : "Download"}
                  </a>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-[11px] uppercase text-gray-500">
                      {lang === "UR" ? "میٹرک" : "Matric"}
                    </p>
                    <p className="font-bold text-[#e15a2e]">
                      {record.matricResult}
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase text-gray-500">
                      {lang === "UR" ? "او/اے لیول" : "O/A-Level"}
                    </p>
                    <p className="font-bold text-[#e15a2e]">
                      {record.oaLevelResult}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-gray-500">{record.board}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}