"use client";

import { Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { admissionCalendar } from "@/data/admissions";

export default function AdmissionCalendar() {
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <div className="flex items-center gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0f2b2e]">
              <Calendar className="h-4 w-4 text-white" />
            </span>

            <h2 className="text-2xl font-extrabold leading-tight text-[#0f2b2e] sm:text-3xl">
              Admission Calendar — Session 2026–27
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
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
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
                        {isLeft && <TimelineCard event={event} />}
                        </div>

                        <div className="flex w-1/2 justify-start pl-10">
                        {!isLeft && <TimelineCard event={event} />}
                        </div>

                  </div>


                  {/* Mobile layout */}
                  <div className="pl-14 sm:hidden">
                    <TimelineCard event={event} />
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
}: {
  event: {
    date: string;
    title: string;
    description: string;
  };
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
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

      <p className="mt-2 text-sm leading-relaxed text-[#0f2b2e]/65">
        {event.description}
      </p>
    </motion.div>
  );
}