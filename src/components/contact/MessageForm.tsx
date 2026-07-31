"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import FadeUp from "@/components/common/FadeUp";
import Link from "next/link";
export default function MessageForm() {
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire to real submission endpoint later
    console.log("Message form submitted:", { fullName, contact, message });
  };
  return (
    <div>
        <FadeUp delay={0.1}>
            <form
            onSubmit={handleSubmit}
            className="relative h-full mt-8 border border-[#0f2b2e]/10 bg-[#0f2b2e] p-8 sm:p-10 overflow-hidden"
            >
            {/* Decorative corner circles */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-28 w-28 rounded-full bg-[#19454a]" />
            <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#19454a]" />

            {/* Decorative center circles */}
            <div className="pointer-events-none absolute top-[40%] left-[28%] h-10 w-10 rounded-full bg-[#19454a]" />
            <div className="pointer-events-none absolute top-[62%] left-[55%] h-6 w-6 rounded-full bg-[#19454a]" />

            {/* Decorative small triangle */}
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 "
              style={{
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderRight: "9px solid rgba(59,130,246,0.5)",
              }}
            />

            <div className="relative mx-auto w-full max-w-xl">
  <div>
    <label
      htmlFor="fullName"
      className="text-sm font-semibold text-white"
    >
      Full Name
    </label>
    <input
      id="fullName"
      type="text"
      placeholder="Your name"
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      className="mt-2 w-full rounded-sm border border-[#0f2b2e]/10 bg-white px-4 py-3.5 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
    />
  </div>

  <div className="mt-5">
    <label
      htmlFor="email"
      className="text-sm font-semibold text-white"
    >
      Email Address
    </label>
    <input
      id="email"
      type="email"
      placeholder="Enter your email address"
      value={contact}
      onChange={(e) => setContact(e.target.value)}
      className="mt-2 w-full rounded-sm border border-[#0f2b2e]/10 bg-white px-4 py-3.5 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
    />
  </div>

  <div className="mt-5">
    <label
      htmlFor="message"
      className="text-sm font-semibold text-white"
    >
      Message
    </label>
    <textarea
      id="message"
      placeholder="How can we help?"
      rows={5}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      className="mt-2 w-full resize-y rounded-sm border border-[#0f2b2e]/10 bg-white px-4 py-3.5 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
    />
  </div>

  <div className="flex justify-center">
  <Link
    href="mailto:admissions@gujranwagsa.edu.pk"
    className="mt-6 inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-sm bg-[#e15a2e] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] sm:w-auto sm:px-20"
  >
    Send Message
    <ArrowRight className="h-4 w-4" />
  </Link>
</div>
</div>
          </form>
        </FadeUp>
      </div>
  );
}