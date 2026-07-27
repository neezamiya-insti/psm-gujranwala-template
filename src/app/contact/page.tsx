import PageBanner from "@/components/layouts/PageBanner";
import CampusMap from "@/components/contact/CampusMap";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact & Location"
        title="Three campuses, one admissions office."
        description="Get directions, message us on WhatsApp Business, or check your area's van route — no need to visit in person first."
      />
      <CampusMap />
    </>
  );
}