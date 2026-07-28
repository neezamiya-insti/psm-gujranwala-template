"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ForgotPasswordForm() {
  const [studentId, setStudentId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to real password-reset endpoint later
    console.log("Password reset requested for:", studentId);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-[#0f2b2e]/10 bg-white p-6 text-center sm:p-8">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#1a7a4c]/10">
          <CheckCircle2 className="h-6 w-6 text-[#1a7a4c]" />
        </span>
        <h2 className="mt-4 text-xl font-bold text-[#0f2b2e]">
          Reset link sent
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-gray-500">
          If <span className="font-semibold text-[#0f2b2e]">{studentId}</span>{" "}
          matches an enrolled student, a reset link has been sent to the
          registered parent WhatsApp number on file.
        </p>
        <Link
          href="/parent-portal"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f2b2e] underline-offset-2 hover:underline"
        >
          Back to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-sm border border-[#0f2b2e]/10 bg-white p-6 sm:p-8">
      <h2 className="text-2xl font-extrabold leading-tight text-[#0f2b2e]">
        Reset your password
      </h2>
      <p className="mt-2 text-sm text-gray-500">
        Enter the Student ID on file. We&apos;ll send a reset link to the
        registered parent WhatsApp number.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="resetStudentId"
            className="text-sm font-medium text-[#0f2b2e]"
          >
            Student ID
          </label>
          <input
            id="resetStudentId"
            type="text"
            placeholder="e.g. GSA-2026-00847"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            className="mt-2 w-full rounded-sm border border-[#0f2b2e]/10 bg-gray-100 px-4 py-3 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-[#e15a2e] px-5 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99]"
        >
          Send Reset Link
          <ArrowRight className="h-4 w-4" />
        </button>

        <Link
          href="/parent-portal"
          className="block text-center text-sm font-medium text-[#0f2b2e] underline-offset-2 hover:underline"
        >
          Back to Login
        </Link>
      </form>
    </div>
  );
}