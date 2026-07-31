"use client";

import { useState } from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { getAdmissionCalendar } from "@/data/admissions";
import { type SiteLanguage } from "@/lib/language";

interface AdmissionCalendarProps {
  lang: SiteLanguage;
}

export default function AdmissionCalendar({ lang }: AdmissionCalendarProps) {
  const admissionCalendar = getAdmissionCalendar(lang);
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b2e]">
              <Calendar className="h-4 w-4 text-white" />
            </span>

            <h2 className="text-2xl font-extrabold leading-tight text-[#0f2b2e] sm:text-3xl">
              {lang === "UR" ? "داخلہ کیلنڈر — سیشن 2026–27" : "Admission Calendar — Session 2026–27"}
            </h2>
          </div>
        </FadeUp>


        <div className="relative mt-12">

          {/* Timeline line */}
          <div
            className="
              absolute 
              left-5
              top-0
              h-full
              w-px
              bg-[#0f2b2e]/20
              sm:left-1/2
              sm:-translate-x-1/2
            "
          />

          <div className="space-y-12 sm:space-y-16">
            {admissionCalendar.map((event, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0 }}
whileInView={{ opacity: 1 }}
viewport={{ once: true }}
transition={{
  duration: 0.25,
  delay: index * 0.08,
}}
                  className="relative"
                >

                  {/* Node */}
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="
                      absolute 
                      left-0
                      top-5
                      z-10
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#e15a2e]
                      shadow-md
                      sm:left-1/2
                      sm:h-12
                      sm:w-12
                      sm:-translate-x-1/2
                    "
                  >
                    <span className="text-sm font-bold text-white">
                        {index + 1}
                    </span>
                  </motion.div>


                  {/* Desktop layout */}
                  <div className="hidden sm:flex">

                    <div className="flex w-1/2 justify-end pr-10">
                        {isLeft && <TimelineCard event={event} isLeft={true} />}
                        </div>

                        <div className="flex w-1/2 justify-start pl-10">
                        {!isLeft && <TimelineCard event={event} isLeft={false} />}
                        </div>

                  </div>


                  {/* Mobile layout */}
                  <div className="pl-14 sm:hidden">
                    <TimelineCard event={event} isLeft={true} />
                  </div>


                </motion.div>
              );
            })}
          </div>

        </div>
      </Container>
    </section>
  );
}


function TimelineCard({
  event,
  isLeft,
}: {
  event: {
    date: string;
    title: string;
    description: string;
  };
  isLeft: boolean;
}) {
  // Bumps every time a hover starts, so the typing animation replays each hover
  const [typeKey, setTypeKey] = useState(0);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: isLeft ? -140 : 140,
        y: 20,
        rotate: isLeft ? -4 : 4,
        scale: 0.94,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
      }}
      animate={{
        y: [0, -4, 0],
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        x: {
          type: "spring",
          stiffness: 55,
          damping: 16,
          mass: 1.2,
        },
        opacity: {
          duration: 0.5,
        },
        rotate: {
          type: "spring",
          stiffness: 55,
          damping: 16,
        },
        scale: {
          type: "spring",
          stiffness: 55,
          damping: 16,
        },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.3,
        },
      }}
      onHoverStart={() => setTypeKey((k) => k + 1)}
      className="
        w-full
        max-w-lg
        rounded-xl
        border
        border-[#0f2b2e]/10
        bg-[#f3cdbe]
        p-5
        shadow-sm
        transition-shadow
        hover:shadow-lg
      "
    >
      <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#e15a2e]">
        {event.date}
      </p>

      <h3 className="mt-2 text-lg font-extrabold text-[#0f2b2e] sm:text-xl">
        {event.title}
      </h3>

      <TypewriterDescription
        key={typeKey}
        text={event.description}
        playTyping={typeKey > 0}
      />
    </motion.div>
  );
}

function TypewriterDescription({
  text,
  playTyping,
}: {
  text: string;
  playTyping: boolean;
}) {
  const characters = text.split("");

  return (
    <p className="mt-2 text-sm leading-relaxed text-[#0f2b2e]/65">
      {characters.map((char, i) => (
        <motion.span
          key={i}
          // On first render (before any hover) skip animation entirely — text is just static.
          // Once a hover has happened, replay a fresh "type in" from blank to full.
          initial={playTyping ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.01,
            delay: playTyping ? i * 0.018 : 0,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </p>
  );
}