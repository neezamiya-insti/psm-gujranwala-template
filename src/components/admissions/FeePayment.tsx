import { ArrowRight } from "lucide-react";
import { getAdmissionFees, totalFee } from "@/data/admissions";
import { type SiteLanguage } from "@/lib/language";

interface FeePaymentProps {
  lang: SiteLanguage;
}

export default function FeePayment({ lang }: FeePaymentProps) {
  const admissionFees = getAdmissionFees(lang);
  const copy = lang === "UR"
    ? {
        title: "داخلہ پروسیسنگ فیس",
        payable: "اب قابلِ ادائیگی",
        button: "جمع کریں اور آن لائن ادا کریں",
        note:
          "محفوظ ڈیجیٹل ادائیگی۔ آپ بینک ٹرانسفر بھی کر سکتے ہیں اور رسید اپ لوڈ کر سکتے ہیں — والدین کے لیے واٹس ایپ بزنس سہولت بھی موجود ہے۔",
      }
    : {
        title: "Admission Processing Fee",
        payable: "Payable Now",
        button: "Submit & Pay Online",
        note:
          "Secure digital payment. You can also pay via bank transfer and upload the receipt — a WhatsApp Business concierge is available for parents who prefer to complete this over chat instead of the form.",
      };

  return (
    <div className="rounded-sm bg-[#0f2b2e] p-6 sm:p-7">
      <h3 className="text-xl font-bold text-white">{copy.title}</h3>

      <div className="mt-5 space-y-3">
        {admissionFees.map((fee) => (
          <div
            key={fee.id}
            className="flex items-center justify-between border-b border-dashed border-white/15 pb-3 text-sm"
          >
            <span className="text-white/75">{fee.label}</span>
            <span className="font-mono text-white/90">{fee.amount}</span>
          </div>
        ))}

        <div className="flex items-center justify-between pt-1">
          <span className="text-[15px] font-bold text-white">{copy.payable}</span>
          <span className="font-mono text-lg font-bold text-white">
            {totalFee}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-[#e15a2e] px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        {copy.button}
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-4 text-xs leading-relaxed text-white/50">
        {copy.note}
      </p>
    </div>
  );
}