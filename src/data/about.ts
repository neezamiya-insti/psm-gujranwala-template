export interface MissionVisionItem {
  id: string;
  label: string;
  title: string;
  description: string;
}

export const missionVisionItems: MissionVisionItem[] = [
  {
    id: "mission",
    label: "Mission",
    title: "Teach to the standard the city already respects.",
    description:
      "Deliver a Punjab Curriculum & BISE Gujranwala-aligned education with the same discipline Gujranwala's exporters bring to a shipment — measured, certified, and repeatable.",
  },
  {
    id: "vision",
    label: "Vision",
    title: "Every graduate export-ready, in the classroom or the trade.",
    description:
      "To be the campus a Wazirabad Road family chooses first — where academic results and industry linkage grow side by side.",
  },
  {
    id: "values",
    label: "Values",
    title: "Transparency, results, and one standard across every campus.",
    description:
      "No campus quietly performs below another. What's published for Model Town is published for Rahwali Cantt.",
  },
];

export const principalMessage = {
  name: "Dr. Nasreen Iqbal",
  role: "Principal & Founder, Est. 1998",
  quote:
    "Gujranwala's parents already know what a quality certificate looks like — on a fan, on a shipment, on a utensil set. We built this school to hold itself to the same standard, examined and re-examined every year.",
  bio: "Founded in 1998 by a family with roots in the city's steel and utensil trade, the Academy grew from a single Model Town classroom block to three campuses across the city — without ever changing the standard it opened with: every teacher qualified, every result published, every parent kept informed.",
};

export interface FacilityItem {
  id: string;
  label: string;
  image: string;
}

export const campusFacilities: FacilityItem[] = [
  {
    id: "labs",
    label: "Science Laboratories",
    image: "/images/facilities/science-lab.jpg",
  },
  {
    id: "sports",
    label: "Sports Ground",
    image: "/images/facilities/sports-ground.jpg",
  },
  {
    id: "fleet",
    label: "Transport Fleet",
    image: "/images/facilities/transport.jpg",
  },
  {
    id: "security",
    label: "Campus Security",
    image: "/images/facilities/security.jpg",
  },
  {
    id: "computer-lab",
    label: "Computer Lab",
    image: "/images/facilities/computer-lab.jpg",
  },
  {
    id: "library",
    label: "Library",
    image: "/images/facilities/library.jpg",
  },
  {
    id: "auditorium",
    label: "Auditorium",
    image: "/images/facilities/auditorium.jpg",
  },
  {
    id: "cafeteria",
    label: "Cafeteria",
    image: "/images/facilities/cafeteria.jpg",
  },
];
export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: "saira-bashir",
    name: "Saira Bashir",
    title: "Head of Science &middot; M.Phil",
    bio: "14 years teaching O/A-Level Biology & Chemistry.",
    image: "/images/faculty/saira-bashir.jpg",
  },
  {
    id: "imran-butt",
    name: "Imran Butt",
    title: "Head of Maths &middot; MSc",
    bio: "Leads Matric board-exam preparation cohort.",
    image: "/images/faculty/imran-butt.jpg",
  },
  {
    id: "farah-yousaf",
    name: "Farah Yousaf",
    title: "English Department &middot; MA TESOL",
    bio: "Runs the bilingual English-Urdu writing program.",
    image: "/images/faculty/farah-yousaf.jpg",
  },
  {
    id: "ali-raza",
    name: "Ali Raza",
    title: "Vocational Lead",
    bio: "Manages industry tie-ups with local trade partners.",
    image: "/images/faculty/ali-raza.jpg",
  },
];