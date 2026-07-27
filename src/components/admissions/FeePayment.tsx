import { ArrowRight } from "lucide-react";
import { admissionFees, totalFee } from "@/data/admissions";

export default function FeePayment() {
  return (
    <div className="rounded-sm bg-[#0f2b2e] p-6 sm:p-7">
      <h3 className="text-xl font-bold text-white">Admission Processing Fee</h3>

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
          <span className="text-[15px] font-bold text-white">Payable Now</span>
          <span className="font-mono text-lg font-bold text-white">
            {totalFee}
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-[#e15a2e] px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]"
      >
        Submit &amp; Pay Online
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-4 text-xs leading-relaxed text-white/50">
        Secure digital payment. You can also pay via bank transfer and upload
        the receipt — a WhatsApp Business concierge is available for parents
        who prefer to complete this over chat instead of the form.
      </p>
    </div>
  );
}