import Container from "@/components/common/Container";
import FadeUp from "@/components/common/FadeUp";
import SectionHeading from "@/components/common/SectionHeading";
import { getEventTimeline } from "@/data/events";
import { type SiteLanguage } from "@/lib/language";
import EventTimelineCard from "@/components/cards/EventTimelineCard";

export default function EventTimeline({ lang }: { lang: SiteLanguage }) {
  const eventTimeline = getEventTimeline(lang);
  return (
    <section className="border-t border-[#0f2b2e]/10 bg-[#f1efe9] py-16 sm:py-20">
      <Container>
        <FadeUp>
          <SectionHeading
            title={lang === "UR" ? "ایونٹ کیلنڈر" : "Event Calendar"}
            description={lang === "UR" ? "گزشتہ تقریبات کی جھلکیاں، ان والدین کے لیے جو واٹس ایپ گروپ پوسٹ سے محروم رہ گئے تھے۔" : "Past-event highlights, kept for parents who missed the WhatsApp group post."}
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