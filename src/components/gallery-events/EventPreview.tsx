"use client";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import { getUpcomingEvent } from "@/data/events";
import { type SiteLanguage } from "@/lib/language";

export default function EventPreview({ lang }: { lang: SiteLanguage }) {
  const upcomingEvent = getUpcomingEvent(lang);
  const addToGoogleCalendar = () => {
    const startDate = "20260815T090000"; // YYYYMMDDTHHMMSS
    const endDate = "20260815T110000";

    const calendarUrl = new URL(
      "https://calendar.google.com/calendar/render"
    );

    calendarUrl.searchParams.set("action", "TEMPLATE");
    calendarUrl.searchParams.set("text", upcomingEvent.title);
    calendarUrl.searchParams.set(
      "details",
      `${upcomingEvent.audience}`
    );
    calendarUrl.searchParams.set(
      "location",
      upcomingEvent.location
    );
    calendarUrl.searchParams.set(
      "dates",
      `${startDate}/${endDate}`
    );

    window.open(calendarUrl.toString(), "_blank");
  };

  return (
    <section className="bg-[#f1efe9] pb-16 sm:pb-20">
      <Container>
        <FadeUp>
          <div className="flex flex-col gap-6 rounded-sm bg-[#0f2b2e] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">
                {upcomingEvent.title}
              </h3>

              <p className="mt-2 text-sm text-white/60">
                {upcomingEvent.date} &middot; {upcomingEvent.location} &middot;{" "}
                {upcomingEvent.audience}
              </p>
            </div>

            <button
              type="button"
              onClick={addToGoogleCalendar}
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-md bg-[#e15a2e] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {lang === "UR" ? "کیلنڈر میں شامل کریں" : "Add to Calendar"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}