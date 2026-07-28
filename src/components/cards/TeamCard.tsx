"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface TeamCardProps {
  name: string;
  title: string;
  bio: string;
  image: string;
}

export default function TeamCard({
  name,
  title,
  bio,
  image,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-xl bg-[#f3cdbe] transition-shadow duration-300 hover:shadow-xl"
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f2b2e]/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Info panel */}
      <div className="bg-[#f3cdbe] p-2 sm:p-5">
        <p className="text-[15px] font-bold text-[#0f2b2e]">
          {name}
        </p>

        <p
          className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#e15a2e]"
          dangerouslySetInnerHTML={{ __html: title }}
        />

        <p className="mt-3 text-[13px] leading-relaxed text-[#0f2b2e]/65">
          {bio}
        </p>
      </div>
    </motion.div>
  );
}