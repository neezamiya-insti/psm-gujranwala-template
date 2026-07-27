"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { applicationTracker } from "@/data/admissions";

const statusLabel: Record<string, string> = {
  done: "Done",
  "in-review": "In Review",
  pending: "Pending",
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function StatusTracker() {
  const { applicantName, grade, refNumber, percentComplete, steps } =
    applicationTracker;

  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-extrabold leading-tight text-[#0f2b2e] sm:text-3xl">
              Application Status Tracker
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-sm bg-[#f3cdbe] p-6 sm:p-8"
          >
            {/* Header row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-lg font-bold text-[#0f2b2e]">
                  Applicant: {applicantName} — {grade}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-[#0f2b2e]/55">
                  Ref. No. {refNumber}
                </p>
              </div>
              <div className="sm:text-right">
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl font-extrabold text-[#e15a2e]"
                >
                  {percentComplete}%
                </motion.p>
                <p className="font-mono text-[12px] uppercase tracking-wide text-[#0f2b2e]/75 mr-4">
                  Complete
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-white/50">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percentComplete}%` }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                className="h-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #e15a2e 0%, #0f2b2e 100%)",
                }}
              />
            </div>

            {/* Step columns */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
              >
              {steps.map((step) => (
                <motion.div
                  variants={itemVariants}
                  key={step.id}
                  className={`border-l-2 pl-4 ${
                    step.status === "in-review"
                      ? "border-[#e15a2e]"
                      : "border-[#0f2b2e]/70"
                  }`}
                >
                  <p
                    className={`font-mono text-[11px] uppercase tracking-wide ${
                      step.status === "in-review"
                        ? "text-[#e15a2e] font-semibold"
                        : "text-[#0f2b2e]/50"
                    }`}
                  >
                    {step.stepNumber} &middot; {statusLabel[step.status]}
                  </p>
                  <p className="mt-2 text-[15px] font-bold text-[#0f2b2e]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-sm text-[#0f2b2e]/60">
                    {step.detail}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </FadeUp>
      </Container>
    </section>
  );
}