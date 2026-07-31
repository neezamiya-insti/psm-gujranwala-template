"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { type SiteLanguage } from "@/lib/language";

export default function CareersScopeModal({
  lang,
}: {
  lang: SiteLanguage;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpen(true);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-xl rounded-2xl bg-white p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#0f2b2e]"
        >
          <X size={20} />
        </button>

        <div className="mb-4 flex items-center gap-3">
          <div className="h-3 w-3 rounded-full bg-[#e15a2e]" />
          <h2 className="text-xl font-bold text-[#0f2b2e]">
            {lang === "UR" ? "اہم اطلاع" : "Important Notice"}
          </h2>
        </div>

        <p className="text-[15px] leading-7 text-gray-600">
          {lang === "UR"
            ? "یہ سیکشن صرف ہمارے انٹرمیڈیٹ/او-اے-لیول کالج اور پیشہ وارانہ ونگ پر لاگو ہوتا ہے۔ یہ پرائمری یا مڈل اسکول سے متعلق نہیں ہے۔"
            : "This section applies to our Intermediate/O-A-Level College & Vocational Wing only. It does not apply to the Primary or Middle School."}
        </p>

        <button
          onClick={() => setOpen(false)}
          className="mt-8 w-full rounded-xl bg-[#e15a2e] px-6 py-3 font-semibold text-white transition hover:bg-[#c94d24]"
        >
          {lang === "UR" ? "ٹھیک ہے" : "OK"}
        </button>
      </div>
    </div>
  );
}