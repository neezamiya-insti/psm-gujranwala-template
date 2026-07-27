"use client";

import { motion } from "framer-motion";

interface Props {
  event: {
    id: string;
    date: string;
    title: string;
    description: string;
    tag: string;
    tagType: string;
    link: string;
  };
}

export default function EventTimelineCard({ event }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.2 },
      }}
      className="flex flex-col gap-3 rounded-md border border-[#0f2b2e]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-28 shrink-0 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#e15a2e]"
        >
          {event.date}
        </motion.p>

        <div>
          <p className="text-[15px] font-bold text-[#0f2b2e]">
            {event.title}
          </p>

          <p className="mt-1 text-sm leading-relaxed text-gray-500">
            {event.description}
          </p>
        </div>
      </div>


      <motion.a
        href={event.link}
        target={event.tagType === "recap" ? "_blank" : undefined}
        rel={
          event.tagType === "recap"
            ? "noopener noreferrer"
            : undefined
        }
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#0f2b2e] px-3 py-2 font-mono text-[11px] font-semibold uppercase tracking-wide text-white transition hover:bg-[#e15a2e] sm:ml-4"
      >
        {event.tag}
      </motion.a>
    </motion.div>
  );
}