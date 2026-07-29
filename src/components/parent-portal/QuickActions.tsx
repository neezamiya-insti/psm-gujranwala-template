"use client";

import { motion } from "framer-motion";
import { Download, MessageCircle, CreditCard, Calendar } from "lucide-react";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { getQuickActions, getFeeStatus } from "@/data/portal";
import { type SiteLanguage } from "@/lib/language";

const iconMap = {
  download: Download,
  message: MessageCircle,
  creditCard: CreditCard,
  calendar: Calendar,
};

export default function QuickActions({ lang }: { lang: SiteLanguage }) {
  const quickActions = getQuickActions(lang);
  const feeStatus = getFeeStatus(lang);
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title={lang === "UR" ? "فوری کارروائیاں" : "Quick Actions"}
            description={lang === "UR" ? "عام کام، کیمپس آفس کا انتظار کیے بغیر۔" : "Common tasks, without waiting for the campus office."}
          />
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">

          {/* Actions */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {quickActions.map((action, index) => {
              const Icon = iconMap[action.icon];

              return (
                <motion.a
                key={action.id}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.96,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                }}
                className="
                    group relative overflow-hidden
                    flex items-center gap-4
                    rounded-xl
                    border border-[#0f2b2e]/30
                    bg-white
                    p-5
                    transition-all duration-300
                    hover:border-[#e15a2e]/40
                    hover:shadow-[0_12px_35px_rgba(15,43,46,0.08)]
                "
                >
                {/* Animated bottom line */}
                <span
                    className="
                    absolute bottom-0 left-0
                    h-[3px]
                    w-0
                    bg-[#e15a2e]
                    transition-all duration-500
                    group-hover:w-full
                    "
                />

                <motion.span
                    whileHover={{
                    rotate: 8,
                    scale: 1.1,
                    }}
                    className="
                    flex h-12 w-12 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#0f2b2e]
                    transition-all duration-300
                    group-hover:shadow-[0_0_25px_rgba(225,90,46,0.35)]
                    "
                >
                    <Icon className="h-5 w-5 text-white" />
                </motion.span>

                <p className="text-sm font-semibold text-[#0f2b2e]">
                    {action.label}
                </p>
                </motion.a>
              );
            })}
          </div>

          {/* Fee Card */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="group relative overflow-hidden rounded-2xl bg-[#0f2b2e] p-6"
          >
            {/* Background glow */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#e15a2e]/20 blur-3xl"
            />

            <div className="relative">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wide text-[#e15a2e]">
                {feeStatus.label}
              </p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.3,
                }}
                className="mt-3 text-3xl font-extrabold text-white"
              >
                {feeStatus.amount}
              </motion.p>

              <p className="mt-2 text-sm text-white/60">
                Due {feeStatus.dueDate}
              </p>

              <motion.a
                href="https://www.faysalbank.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="mt-5 flex w-full items-center justify-center rounded-full bg-[#e15a2e] px-5 py-3 text-sm font-semibold text-white"
              >
                Pay Now
              </motion.a>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}