export interface Campus {
  name: string;
  detail: string;
}

export const footerCampuses: Campus[] = [
  { name: "Model Town (Main)", detail: "GT Road Corridor, Gujranwala" },
  { name: "Wazirabad Road", detail: "Industrialist-linked campus" },
  { name: "Rahwali Cantt", detail: "Girls' Wing" },
];

export const trustPoints: string[] = [
  "BISE Gujranwala Affiliated",
  "Punjab Curriculum Aligned",
  "Established 1998",
  "3 Campuses · Boys & Girls Wings",
];

export interface CampusLocation {
  id: string;
  name: string;
  shortLabel: string;
  address: string;
  hours: string;
  wings: string;
  phone: string;
  mapLabel: string;
  pinPosition: { top: string; left: string };
  directionsUrl: string;
  embedUrl: string;
}

export const campusLocations: CampusLocation[] = [
  {
    id: "model-town",
    name: "Model Town (Main Campus)",
    shortLabel: "Model Town (Main)",
    address: "Block C, Model Town, GT Road Corridor, Gujranwala",
    hours: "Mon–Sat, 7:30 AM – 2:30 PM",
    wings: "Montessori · Primary · Middle · Matric · Intermediate",
    phone: "+92 55 123 4567",
    mapLabel: "Model Town, GT Road Corridor",
    pinPosition: { top: "48%", left: "48%" },
    directionsUrl: "https://maps.google.com/?q=Model+Town+Gujranwala",
    embedUrl:
      "https://maps.google.com/maps?q=Model+Town+Gujranwala&z=15&output=embed",
  },
  {
    id: "wazirabad-road",
    name: "Wazirabad Road Campus",
    shortLabel: "Wazirabad Road",
    address: "Industrial Sector, Wazirabad Road, Gujranwala",
    hours: "Mon–Sat, 7:30 AM – 2:30 PM",
    wings: "Primary · Middle · Matric",
    phone: "+92 55 123 4568",
    mapLabel: "Wazirabad Road Corridor",
    pinPosition: { top: "37%", left: "72%" },
    directionsUrl: "https://maps.google.com/?q=Wazirabad+Road+Gujranwala",
    embedUrl:
      "https://maps.google.com/maps?q=Wazirabad+Road+Gujranwala&z=15&output=embed",
  },
  {
    id: "rahwali-cantt",
    name: "Rahwali Cantt — Girls' Wing",
    shortLabel: "Rahwali Cantt — Girls' Wing",
    address: "Cantt Road, Rahwali, Gujranwala",
    hours: "Mon–Sat, 7:30 AM – 2:00 PM",
    wings: "Primary · Middle · Matric (Girls only)",
    phone: "+92 55 123 4569",
    mapLabel: "Rahwali Cantonment",
    pinPosition: { top: "63%", left: "27%" },
    directionsUrl: "https://maps.google.com/?q=Rahwali+Cantt+Gujranwala",
    embedUrl:
      "https://maps.google.com/maps?q=Rahwali+Cantt+Gujranwala&z=15&output=embed",
  },
];

export interface ContactChannel {
  id: string;
  icon: "chat" | "clock" | "mail";
  title: string;
  detail: string;
  linkLabel: string;
  linkUrl: string;
  variant: "green" | "peach";
}

export const contactChannels: ContactChannel[] = [
  {
    id: "whatsapp",
    icon: "chat",
    title: "WhatsApp Business",
    detail:
      "+92 55 123 456",
    linkLabel: "Start Chat",
    linkUrl: "https://wa.me/9255123456",
    variant: "green",
  
  },
  {
    id: "phone",
    icon: "clock",
    title: "Call the Office",
    detail: "Mon to Sat, 8 AM to 3 PM",
    linkLabel: "Call Now",
    linkUrl: "tel:+925512345667",
    variant: "peach",
  },
  {
    id: "email",
    icon: "mail",
    title: "Email Admissions",
    detail:
      "admissions@gujranwalagsa.edu.pk",
    linkLabel: "Send Email",
    linkUrl: "mailto:admissions@gujranwalagsa.edu.pk",
    variant: "peach",
  },
];

export interface VanRoute {
  id: string;
  route: string;
  covers: string;
  pickupTime: string;
  campus: string;
}

export const vanRoutes: VanRoute[] = [
  {
    id: "route-1",
    route: "Route 1 · GT Road Corridor",
    covers: "Model Town, Satellite Town, Peoples Colony",
    pickupTime: "6:45 AM",
    campus: "Model Town",
  },
  {
    id: "route-2",
    route: "Route 2 · Wazirabad Road",
    covers: "Wazirabad Road industrial belt",
    pickupTime: "6:50 AM",
    campus: "Wazirabad Road",
  },
  {
    id: "route-3",
    route: "Route 3 · Rahwali Cantt",
    covers: "Rahwali Cantt, Peoples Colony (Girls only)",
    pickupTime: "7:00 AM",
    campus: "Rahwali Cantt",
  },
  {
    id: "route-4",
    route: "Route 4 · Ghakkhar / Kamoke",
    covers: "Ghakkhar, Kamoke, Nowshera Virkan",
    pickupTime: "6:15 AM",
    campus: "Model Town",
  },
];