"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionHeading from "@/components/common/SectionHeading";
import { monthlyAttendance, subjectGrades } from "@/data/portal";

export default function AttendanceProgress() {
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            title="Attendance & Academic Progress"
            description="Last six months of attendance, and current term grades by subject."
          />
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-[1.3fr_1fr]">
          {/* Attendance */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
              boxShadow: "0 20px 50px rgba(15,43,46,.08)",
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/75 p-7 backdrop-blur-xl transition-[box-shadow,border-color] duration-300"
          >
            <motion.div
              animate={{ x: ["-130%", "130%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#e15a2e]/8 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#0f2b2e]">
                Monthly Attendance
              </h3>
            </div>

            <div className="relative mt-8 flex flex-1 items-end justify-between gap-4">
              {monthlyAttendance.map((entry, index) => (
                <div
                  key={entry.month}
                  className="flex flex-1 flex-col items-center"
                >
                  <motion.span
                    initial={{ opacity: 0, y: -8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.08 + 0.2,
                    }}
                    viewport={{ once: true }}
                    className="mb-2 text-xs font-semibold text-[#0f2b2e]/60"
                  >
                    {entry.percent}%
                  </motion.span>

                  <div className="flex h-40 w-full items-end rounded-xl bg-[#f4f3ef] lg:h-64 xl:h-72">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{
                        height: `${entry.percent}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.08,
                      }}
                      className="relative w-full rounded-md bg-gradient-to-t from-[#d94f20] via-[#e15a2e] to-[#ffb08d]"
                    >
                    </motion.div>
                  </div>

                  <span className="mt-3 font-mono text-[11px] uppercase tracking-widest text-[#0f2b2e]/80">
                    {entry.month}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Grades */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
              boxShadow: "0 20px 50px rgba(15,43,46,.08)",
            }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/75 p-7 backdrop-blur-xl transition-[box-shadow,border-color] duration-300"
          >
            <motion.div
              animate={{ x: ["-130%", "130%"] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                delay: 0.8,
              }}
              className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            />

            <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-[#0f2b2e]/5 blur-3xl" />

            <div className="relative flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#0f2b2e]">
                Current Term Grades
              </h3>
            </div>

            <div className="relative mt-6 space-y-4">
              {subjectGrades.map((subject, index) => (
                <motion.div
  key={subject.id}
  initial={{ opacity: 0, x: 15 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    delay: index * 0.08,
  }}
  whileHover={{
    y: -6,
    scale: 1.02,
    boxShadow: "0 12px 30px rgba(15,43,46,0.12)",
    transition: {
      duration: 0.25,
    },
  }}
  className="cursor-pointer rounded-xl border border-[#0f2b2e]/8 bg-[#faf9f6] p-4 transition-colors duration-300 hover:border-[#e15a2e]/30"
>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[#0f2b2e]">
                        {subject.subject}
                      </p>

                      <p className="mt-1 text-xs text-[#0f2b2e]/55">
                        Score • {subject.score}
                      </p>
                    </div>

                    <span className="rounded-full bg-[#f3cdbe] px-3.5 py-1.5 text-sm font-bold text-[#0f2b2e]">
                      {subject.grade}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}