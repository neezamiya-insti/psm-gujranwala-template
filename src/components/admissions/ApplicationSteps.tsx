"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import DocumentUpload from "@/components/admissions/DocumentUpload";
import FeePayment from "@/components/admissions/FeePayment";
import { getApplicationFormFields } from "@/data/admissions";
import { type SiteLanguage } from "@/lib/language";

interface ApplicationStepsProps {
  lang: SiteLanguage;
}

export default function ApplicationSteps({ lang }: ApplicationStepsProps) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const applicationFormFields = getApplicationFormFields(lang);

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to real submission endpoint later
    console.log("Application form submitted:", formData);
  };

  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-extrabold leading-tight text-[#0f2b2e] sm:text-3xl">
              {lang === "UR" ? "آن لائن درخواست فارم" : "Online Application Form"}
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]"
          >
            {/* Form fields */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {applicationFormFields.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="text-sm font-medium text-[#0f2b2e]"
                  >
                    {field.label}
                  </label>

                  {field.type === "select" ? (
                    <select
                    id={field.id}
                    value={formData[field.id] || ""}
                    onChange={(e) => handleChange(field.id, e.target.value)}
                    className="mt-2 w-full rounded-sm border border-[#0f2b2e]/10 bg-[#f3cdbe] px-4 py-3 text-sm text-[#0f2b2e] focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
                  >
                    <option value="" disabled>
                      {lang === "UR" ? `${field.label} منتخب کریں` : `Select ${field.label}`}
                    </option>

                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  ) : (
                    <input
                      id={field.id}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      className="mt-2 w-full rounded-sm border border-[#0f2b2e]/10 bg-[#f3cdbe] px-4 py-3 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
                    />
                  )}
                </div>
              ))}

              <div className="sm:col-span-2">
                <DocumentUpload lang={lang} />
              </div>
            </div>

            {/* Fee sidebar */}
            <div>
              <FeePayment lang={lang} />
            </div>
          </form>
        </FadeUp>
      </Container>
    </section>
  );
}