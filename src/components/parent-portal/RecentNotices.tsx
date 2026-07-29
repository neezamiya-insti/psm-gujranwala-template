"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import { getPortalNotices } from "@/data/portal";
import { type SiteLanguage } from "@/lib/language";

const noticeVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function RecentNotices({ lang }: { lang: SiteLanguage }) {
  const portalNotices = getPortalNotices(lang);
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <SectionHeading
            title={lang === "UR" ? "حالیہ نوٹسز" : "Recent Notices"}
            description={lang === "UR" ? "آپ کے واٹس ایپ پر بھیجی گئی ہر چیز، یہاں بھی محفوظ۔" : "Everything sent to your WhatsApp, kept here too."}
          />
        </FadeUp>

        <motion.div
          className="mt-8 space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {portalNotices.map((notice) => (
            <motion.div
              key={notice.id}
              variants={noticeVariants}
              whileHover={{
                x: 6,
                transition: { duration: 0.2 },
              }}
              className="flex items-center justify-between gap-4 rounded-sm border-l-2 border-[#e15a2e] bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-sm text-[#0f2b2e]/85">
                {notice.message}
              </p>

              <span className="shrink-0 font-mono text-[11px] uppercase tracking-wide text-gray-400">
                {notice.timestamp}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}