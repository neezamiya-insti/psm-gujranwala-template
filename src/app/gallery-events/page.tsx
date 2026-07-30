import PageBanner from "@/components/layouts/PageBanner";
import GalleryGrid from "@/components/gallery-events/GalleryGrid";
import EventTimeline from "@/components/gallery-events/EventTimeline";
import EventPreview from "@/components/gallery-events/EventPreview";
import { getPreferredLanguage } from "@/lib/language.server";
import EventSearch from "@/components/gallery-events/EventSearch";
import GalleryEventsClient from "@/components/gallery-events/GalleryEventsClient";

export default async function GalleryEventsPage() {
  const lang = await getPreferredLanguage();

  return <GalleryEventsClient lang={lang} />;
}