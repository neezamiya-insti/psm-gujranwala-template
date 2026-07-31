import { getPreferredLanguage } from "@/lib/language.server";
import GalleryEventsClient from "@/components/gallery-events/GalleryEventsClient";

export default async function GalleryEventsPage() {
  const lang = await getPreferredLanguage();

  return <GalleryEventsClient lang={lang} />;
}