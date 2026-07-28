export interface AlumniProfile {
  id: string;
  initials: string;
  name: string;
  classOf: string;
  role: string;
  quote: string;
}

export const alumniProfiles: AlumniProfile[] = [
  {
      id: "hassan",
      initials: "HS",
      name: "Hassan S., Class of 2011",
      role: "Director, Steel Utensil Exports",
      quote: "Now runs export operations on Wazirabad Road, and sends both his children to our Model Town campus.",
      classOf: ""
  },
  {
      id: "ayesha",
      initials: "AR",
      name: "Ayesha R., Class of 2014",
      role: "Partner, Sporting Goods House",
      quote: "Credits the school's English-medium program for opening direct client conversations abroad.",
      classOf: ""
  },
  {
      id: "tariq",
      initials: "MT",
      name: "M. Tariq, Class of 2009",
      role: "Fan Manufacturing, Plant Head",
      quote: "Recruits our vocational-track graduates each year for floor supervisor roles.",
      classOf: ""
  },
];

export interface IndustryPartner {
  id: string;
  initials: string;
  name: string;
  logo: string;
  tags: string[];
  description: string;
}
export const industryPartners: IndustryPartner[] = [
  {
    id: "wazirabad-fan",
    initials: "FM",
    name: "Wazirabad Fan Works",
    logo: "/images/partners/w-fan.jpg",
    tags: ["Internship", "Placement"],
    description:
      "Manufacturing floor internships for vocational-track students.",
  },
  {
    id: "model-town-steel",
    initials: "SU",
    name: "Model Town Steel Utensils",
    logo: "/images/partners/model-town-steel.jpg",
    tags: ["Placement"],
    description:
      "Annual recruitment drive for supervisory and QC roles.",
  },
  {
    id: "sialkot-sporting",
    initials: "SG",
    name: "Sialkot Bypass Sporting Goods Co.",
    logo: "/images/partners/sialkot-sporting.jpg",
    tags: ["Internship"],
    description:
      "Summer internships in export documentation & QC.",
  },
  {
    id: "chamber-commerce",
    initials: "CC",
    name: "Gujranwala Chamber of Commerce",
    logo: "/images/partners/chamber-commerce.jpg",
    tags: ["Sponsorship", "Mentorship"],
    description:
      "Guest lectures and trade-body co-branded certification.",
  },
];

export interface SecondaryStat {
  id: string;
  value: string;
  label: string;
}

export const careerHighlight = {
  title: "Proven Track Record of Placement",
  description:
    "With over 28 years of experience, we have helped students build successful careers through 220+ internship placements, 14 industry partnerships, and an 87% placement rate. Our strong industry network and career-focused approach ensure students gain the skills, exposure, and opportunities needed to succeed.",
  ctaLabel: "Talk to Admissions",
  ctaHref: "/admissions",
  featuredValue: "87%",
  featuredLabel: "Placed or Enrolled Within 6 Months",
};

export const secondaryStats: SecondaryStat[] = [
  { id: "partners", value: "14+", label: "Active Industry Partners" },
  { id: "internships", value: "220+", label: "Internships Since 2018" },
  { id: "tracks", value: "6+", label: "Vocational Short-Course Tracks" },
  { id: "years", value: "28yr", label: "Serving Gujranwala Since 1998" },
];

export const partnerCTA = {
  title: "Recruiting from GGS & Vocational Wing?",
  description:
    "Register as an industry partner to post internships, sponsor a short course, or join our campus recruitment day.",
  buttonLabel: "Become a Partner",
};