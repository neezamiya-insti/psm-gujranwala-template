"use client";

import { useRef, useState } from "react";
import { Upload, Check } from "lucide-react";
import { requiredDocuments } from "@/data/admissions";

export default function DocumentUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<
    Record<string, File | null>
  >({});

  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleClick = (id: string) => {
    inputRefs.current[id]?.click();
  };

  const handleFileChange = (
    id: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    setUploadedFiles((prev) => ({
      ...prev,
      [id]: file,
    }));
  };

  return (
    <div>
      <label className="text-sm font-medium text-[#0f2b2e]">
        Required Documents
      </label>

      <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {requiredDocuments.map((doc) => {
          const file = uploadedFiles[doc.id];

          return (
            <div key={doc.id}>
              <input
                ref={(el) => {
                  inputRefs.current[doc.id] = el;
                }}
                type="file"
                accept=".pdf,.doc,.docx,.txt,.rtf,.odt,jpg,.jpeg,.png"
                className="hidden"
                onChange={(e) => handleFileChange(doc.id, e)}
              />

              <button
                type="button"
                onClick={() => handleClick(doc.id)}
                className="flex w-full flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-[#0f2b2e]/20 bg-[#f3cdbe] px-4 py-6 text-center transition-colors hover:bg-[#f0c3ae]"
              >
                {file ? (
                  <Check
                    className="h-4 w-4 text-[#0f2b2e]"
                    strokeWidth={3}
                  />
                ) : (
                  <Upload className="h-4 w-4 text-[#e15a2e]" />
                )}

                <span className="font-mono text-[11px] font-semibold uppercase tracking-wide text-[#e15a2e]">
                  {file ? "Uploaded" : "Upload"}
                </span>

                <span className="text-xs text-[#0f2b2e]/70">
                  {doc.label}
                </span>

                {file && (
                  <span
                    className="mt-1 max-w-full truncate text-[13px] text-[#0f2b2e]"
                    title={file.name}
                  >
                    {file.name}
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}