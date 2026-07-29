"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/common/Container";
import { LogOut } from "lucide-react";
import FadeUp from "@/components/common/FadeUp";
import { getDashboardChildren } from "@/data/portal";
import { type SiteLanguage } from "@/lib/language";

export default function DashboardHeader({ lang }: { lang: SiteLanguage }) {
  const dashboardChildren = getDashboardChildren(lang);
  const router = useRouter();
  const [activeChildId] = useState(dashboardChildren[0].id);

  const activeChild =
    dashboardChildren.find((c) => c.id === activeChildId) ??
    dashboardChildren[0];

  const handleLogout = () => {
    router.push("/parent-portal");
  };

  return (
    <section className="border-b border-[#0f2b2e]/10 bg-[#f1efe9] py-10 sm:py-12">
      <Container>
        <FadeUp>
          <div className="w-full">
            {/* Top Row */}
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#e15a2e]">
                {lang === "UR" ? "والدین ڈیش بورڈ" : "Parent Dashboard"}
              </p>

              <button
                type="button"
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-full bg-[#0f2b2e] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#e15a2e]"
              >
                <LogOut className="h-3.5 w-3.5" />
                {lang === "UR" ? "لاگ آؤٹ" : "Logout"}
              </button>
            </div>

            {/* Welcome Heading */}
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#0f2b2e] sm:text-4xl">
              {lang === "UR" ? "خوش آمدید" : "Welcome back"}, {activeChild.parent}!
            </h1>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}