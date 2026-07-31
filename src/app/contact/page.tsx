import PageBanner from "@/components/layouts/PageBanner";
import CampusMap from "@/components/contact/CampusMap";
import ContactSection from "@/components/contact/ContactSection";
import TransportRoutes from "@/components/contact/TransportRoutes";
import { getPreferredLanguage } from "@/lib/language.server";
import CTASection from "@/components/home/CTASection";

export default async function ContactPage() {
  const lang = await getPreferredLanguage();

  return (
    <>
      <PageBanner
        centered={true}
         backgroundImage="/images/contact-banner.jpeg"
        eyebrow={lang === "UR" ? "رابطہ اور مقام" : "Contact & Location"}
        title={lang === "UR" ? "تین کیمپس، ایک داخلہ دفتر۔" : "Three campuses, one admissions office."}
        description={
          lang === "UR"
            ? "راستہ دیکھیں، واٹس ایپ بزنس پر پیغام دیں، یا اپنے علاقے کا وین روٹ چیک کریں — پہلے آکر دیکھنے کی ضرورت نہیں۔"
            : "Get directions, message us on WhatsApp Business, or check your area's van route. No need to visit in person first."
        }
      />
      <ContactSection lang={lang} />
      <CampusMap lang={lang} />
      <TransportRoutes lang={lang} />
      <CTASection lang={lang} />
    </>
  );
}