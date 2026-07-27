import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import { eventTimeline } from "@/data/events";
import EventTimelineCard from "@/components/cards/EventTimelineCard";

export default function EventTimeline() {
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <SectionHeading
            title="Event Calendar"
            description="Past-event highlights, kept for parents who missed the WhatsApp group post."
          />
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-8 space-y-4">
                {eventTimeline.map((event) => (
                    <EventTimelineCard
                    key={event.id}
                    event={event}
                    />
                ))}
            </div>
        </FadeUp>
      </Container>
    </section>
  );
}