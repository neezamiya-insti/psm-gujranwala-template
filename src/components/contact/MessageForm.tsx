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
            className="h-full mt-8 rounded-md border border-[#0f2b2e]/10 bg-white p-8 sm:p-10"
            >
            <div>
              <label
                htmlFor="fullName"
                className="text-sm font-semibold text-[#0f2b2e]"
              >
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                placeholder="Your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-2 w-full rounded-sm border border-[#0f2b2e]/10 bg-gray-100 px-4 py-3.5 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
              />
            </div>

            <div className="mt-5">
                <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#0f2b2e]"
                >
                    Email Address
                </label>

                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="mt-2 w-full rounded-sm border border-[#0f2b2e]/10 bg-gray-100 px-4 py-3.5 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
                />
                </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="text-sm font-semibold text-[#0f2b2e]"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="How can we help?"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full resize-y rounded-sm border border-[#0f2b2e]/10 bg-gray-100 px-4 py-3.5 text-sm text-[#0f2b2e] placeholder:text-[#0f2b2e]/40 focus:outline-none focus:ring-2 focus:ring-[#e15a2e]"
              />
            </div>

            <Link
                href="mailto:admissions@gujranwalagsa.edu.pk"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[#e15a2e] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                Send Message
                <ArrowRight className="h-4 w-4" />
            </Link>
          </form>
        </FadeUp>
      </div>
  );
}