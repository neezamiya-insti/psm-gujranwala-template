export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery-events" },
  { label: "Careers", href: "/career" },
  { label: "Portal", href: "/parent-portal" },
  { label: "Contact", href: "/contact" },
];

export const contactInfo = {
  phone: "+92 55 123 4567",
  email: "admissions@gujranwalagsa.edu.pk",
  location: "Model Town · Wazirabad Road · Rahwali Cantt",
};