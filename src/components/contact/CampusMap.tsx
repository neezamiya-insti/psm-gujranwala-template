"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import { campusLocations } from "@/data/contact";

export default function CampusMap() {
  const [activeCampusId, setActiveCampusId] = useState(campusLocations[0].id);
  const activeCampus =
    campusLocations.find((c) => c.id === activeCampusId) ?? campusLocations[0];

  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <SectionHeading
            title="Campus Map & Directions"
            description="Select a campus to see its address, hours and directions."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            {campusLocations.map((campus) => {
              const isActive = campus.id === activeCampusId;
              return (
                <button
                  key={campus.id}
                  type="button"
                  onClick={() => setActiveCampusId(campus.id)}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-[#0f2b2e] text-white"
                      : "border border-[#0f2b2e]/15 bg-white text-[#0f2b2e]/70 hover:border-[#0f2b2e]/30"
                  }`}
                >
                  {campus.shortLabel}
                </button>
              );
            })}
          </div>
        </FadeUp>

        <FadeUp delay={0.15}>
  <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">

    {/* Map */}
    <div className="relative aspect-[4/3] overflow-hidden rounded-sm sm:aspect-[16/10]">
      <iframe
        title={`${activeCampus.name} location`}
        src={activeCampus.embedUrl}
        className="absolute inset-0 h-full w-full"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="absolute bottom-4 left-4">
        <span className="rounded-full bg-white px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-wide text-[#0f2b2e]">
          {activeCampus.mapLabel}
        </span>
      </div>
    </div>


    {/* Info card */}
    <div className="rounded-sm border border-[#0f2b2e]/10 bg-white p-6 sm:p-7">
      <h3 className="text-xl font-bold text-[#0f2b2e]">
        {activeCampus.name}
      </h3>

      <dl className="mt-5 space-y-3">
        <div className="flex gap-3 text-sm">
          <dt className="w-20 shrink-0 font-semibold text-[#0f2b2e]">
            Address
          </dt>
          <dd className="text-gray-600">{activeCampus.address}</dd>
        </div>

        <div className="flex gap-3 text-sm">
          <dt className="w-20 shrink-0 font-semibold text-[#0f2b2e]">
            Hours
          </dt>
          <dd className="text-gray-600">{activeCampus.hours}</dd>
        </div>

        <div className="flex gap-3 text-sm">
          <dt className="w-20 shrink-0 font-semibold text-[#0f2b2e]">
            Wings
          </dt>
          <dd className="text-gray-600">{activeCampus.wings}</dd>
        </div>

        <div className="flex gap-3 text-sm">
          <dt className="w-20 shrink-0 font-semibold text-[#0f2b2e]">
            Phone
          </dt>
          <dd className="text-gray-600">{activeCampus.phone}</dd>
        </div>
      </dl>

      <a
        href={activeCampus.directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-md bg-[#0f2b2e] px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Get Directions
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>

  </div>
</FadeUp>
      </Container>
    </section>
  );
}