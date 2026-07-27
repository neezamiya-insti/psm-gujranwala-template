import PageBanner from "@/components/layouts/PageBanner";
import GalleryGrid from "@/components/gallery-events/GalleryGrid";
import EventTimeline from "@/components/gallery-events/EventTimeline";
import EventPreview from "@/components/gallery-events/EventPreview";

export default function GalleryEventsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Gallery & Events"
        title="Campus life, on the record."
        description="Sports day, annual functions, science fairs — the co-curricular investment industrialist families expect to see before a report card ever comes up."
      />
      <GalleryGrid />
      <EventTimeline />
      <EventPreview />
    </>
  );
}