"use client";

import { Search } from "lucide-react";
import { useState } from "react";

export default function EventSearch({
  lang,
  onSearch,
}: {
  lang: string;
  onSearch: (value: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="mx-auto mt-8 w-full max-w-2xl">
      <div
        className="
          group flex w-full flex-col gap-3
          rounded-3xl border border-[#0f2b2e]/10
          bg-white/80 p-3
          shadow-[0_10px_35px_rgba(15,43,46,0.08)]
          backdrop-blur-xl
          transition-all duration-300
          focus-within:border-[#F5921E]
          focus-within:shadow-[0_15px_40px_rgba(245,146,30,0.18)]
          sm:flex-row sm:items-center sm:rounded-full
        "
      >
        {/* Input row */}
        <div className="flex flex-1 items-center">
          <div
            className="
              ml-1 flex h-11 w-11 shrink-0 items-center justify-center
              rounded-full bg-[#0f2b2e]
              transition-transform duration-300
              group-focus-within:scale-105
            "
          >
            <Search className="h-5 w-5 text-white" />
          </div>

          <input
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              onSearch(e.target.value);
            }}
            placeholder={
              lang === "UR"
                ? "تقریبات تلاش کریں..."
                : "Search school events..."
            }
            className="
              h-12 w-full bg-transparent px-4
              text-sm font-medium
              text-[#0f2b2e]
              outline-none
              placeholder:text-gray-400
            "
          />
        </div>

        {/* Button */}
        <button
          className="
            w-full rounded-full bg-[#F5921E]
            px-6 py-3
            text-sm font-bold text-white
            shadow-md
            transition-all duration-300
            hover:-translate-y-0.5
            hover:bg-[#e68113]
            hover:shadow-lg
            sm:w-auto
            cursor-pointer
          "
        >
          {lang === "UR" ? "تلاش" : "Search"}
        </button>
      </div>

      <p className="mt-3 ml-4 text-xs text-gray-500">
        {lang === "UR"
          ? "تقریبات، سرگرمیوں اور یادگار لمحات تلاش کریں"
          : "Find sports days, annual functions, fairs and campus memories"}
      </p>
    </div>
  );
}