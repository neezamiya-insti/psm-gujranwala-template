import PageBanner from "@/components/layouts/PageBanner";
import GalleryGrid from "@/components/gallery-events/GalleryGrid";

export default function GalleryEventsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Gallery & Events"
        title="Campus life, on the record."
        description="Sports day, annual functions, science fairs — the co-curricular investment industrialist families expect to see before a report card ever comes up."
      />
      <GalleryGrid />
    </>
  );
}