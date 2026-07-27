"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PortalLogin() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to real auth endpoint later
    console.log("Login attempt:", { studentId, password });
  };

  return (
    <div className="rounded-sm border border-[#0f2b2e]/10 bg-white p-6 sm:p-8">
      <h2 className="text-2xl font-extrabold leading-tight text-[#0f2b2e]">
        Login to Parent Portal
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Use the Student ID and password issued by the Admissions Office.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="studentId"
            className="text-sm font-medium text-[#0f2b2e]"
          >
            Student ID
          </label>
          <input
            id="studentId"
            type="text"
            placeholder="e.g. GSA-2026-00847"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="mt-2 w-full rounded-sm border border-[#0f2b2e]/10 bg-gray-100 px-4 py-3 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="text-sm font-medium text-[#0f2b2e]"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-sm border border-[#0f2b2e]/10 bg-gray-100 px-4 py-3 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#e15a2e] px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]"
        >
          Log In
          <ArrowRight className="h-4 w-4" />
        </button>

        <div className="flex items-center justify-between text-sm">
          <Link
            href="/parent-portal/forgot-password"
            className="font-medium text-[#0f2b2e] underline-offset-2 hover:underline"
          >
            Forgot password?
          </Link>
          <Link
            href="/admissions"
            className="font-medium text-[#0f2b2e] underline-offset-2 hover:underline"
          >
            New parent? Get your login
          </Link>
        </div>
      </form>

      <p className="mt-6 border-t border-dashed border-[#0f2b2e]/30 pt-5 text-xs leading-relaxed text-gray-500">
        One login per enrolled child, shared automatically with both parents.
      </p>
    </div>
  );
}