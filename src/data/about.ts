import { type SiteLanguage } from "@/lib/language";

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

const missionVisionItemsByLanguage: Record<SiteLanguage, MissionVisionItem[]> = {
  EN: missionVisionItems,
  UR: [
    {
      id: "mission",
      label: "مشن",
      title: "اس معیار تک پڑھائیں جس کا شہر پہلے ہی احترام کرتا ہے۔",
      description:
        "پنجاب نصاب اور بی آئی ایس ای گوجرانوالہ سے ہم آہنگ تعلیم فراہم کریں، اسی نظم و ضبط کے ساتھ جسے گوجرانوالہ کے برآمد کنندگان اپنی کھیپ میں لاتے ہیں — ناپا ہوا، تصدیق شدہ اور دہرایا جانے والا۔",
    },
    {
      id: "vision",
      label: "خواب",
      title: "ہر فارغ التحصیل برآمدی معیار پر پورا اترے، چاہے کلاس روم میں ہو یا تجارت میں۔",
      description:
        "وہ کیمپس بننا جو وزیرآباد روڈ کا خاندان پہلے منتخب کرے — جہاں تعلیمی نتائج اور صنعتی روابط ساتھ ساتھ پروان چڑھیں۔",
    },
    {
      id: "values",
      label: "اقدار",
      title: "شفافیت، نتائج، اور ہر کیمپس پر ایک معیار۔",
      description:
        "کوئی کیمپس خاموشی سے دوسرے سے کم کارکردگی نہیں دکھاتا۔ جو ماڈل ٹاؤن کے لیے شائع کیا جاتا ہے وہ راولی کینٹ کے لیے بھی شائع کیا جاتا ہے۔",
    },
  ],
};

export function getMissionVisionItems(language: SiteLanguage): MissionVisionItem[] {
  return missionVisionItemsByLanguage[language];
}

export const principalMessage = {
  name: "Dr. Nasreen Iqbal",
  role: "Principal & Founder, Est. 1998",
  quote:
    "Gujranwala's parents already know what a quality certificate looks like — on a fan, on a shipment, on a utensil set. We built this school to hold itself to the same standard, examined and re-examined every year.",
  bio: "Founded in 1998 by a family with roots in the city's steel and utensil trade, the Academy grew from a single Model Town classroom block to three campuses across the city — without ever changing the standard it opened with: every teacher qualified, every result published, every parent kept informed.",
};

export function getPrincipalMessage(language: SiteLanguage) {
  if (language !== "UR") return principalMessage;

  return {
    name: "ڈاکٹر نسرین اقبال",
    role: "پرنسپل اور بانی، قائم 1998",
    quote:
      "گوجرانوالہ کے والدین پہلے ہی جانتے ہیں کہ معیاری سرٹیفکیٹ کیسا لگتا ہے — پنکھے پر، کھیپ پر، برتنوں کے سیٹ پر۔ ہم نے یہ اسکول اسی معیار پر قائم رہنے کے لیے بنایا، جس کا ہر سال جائزہ لیا جاتا ہے۔",
    bio: "1998 میں شہر کے اسٹیل اور برتنوں کی تجارت میں جڑوں والے ایک خاندان کے ذریعے قائم کیا گیا، یہ اکیڈمی ماڈل ٹاؤن کے ایک کلاس روم بلاک سے شہر بھر میں تین کیمپسز تک پھیل گئی — بغیر اس معیار کو تبدیل کیے جس کے ساتھ یہ کھلی تھی: ہر استاد اہل، ہر نتیجہ شائع، ہر والدین باخبر۔",
  };
}

export interface FacilityItem {
  id: string;
  label: string;
  image: string;
}

export const campusFacilities: FacilityItem[] = [
  {
    id: "labs",
    label: "Science Laboratories",
    image: "/images/facilities/science-lab.jpeg",
  },
  {
    id: "sports",
    label: "Sports Ground",
    image: "/images/facilities/sports-ground.jpeg",
  },
  {
    id: "fleet",
    label: "Transport Fleet",
    image: "/images/facilities/transport.jpeg",
  },
  {
    id: "security",
    label: "Campus Security",
    image: "/images/facilities/security.png",
  },
  {
    id: "computer-lab",
    label: "Computer Lab",
    image: "/images/facilities/computer-lab.jpeg",
  },
  {
    id: "library",
    label: "Library",
    image: "/images/facilities/library.jpeg",
  },
  {
    id: "auditorium",
    label: "Auditorium",
    image: "/images/facilities/auditorium.jpeg",
  },
  {
    id: "cafeteria",
    label: "Cafeteria",
    image: "/images/facilities/cafeteria.jpeg",
  },
];

export function getCampusFacilities(language: SiteLanguage): FacilityItem[] {
  if (language !== "UR") return campusFacilities;

  return [
    { id: "labs", label: "سائنس لیبارٹریز", image: "/images/facilities/science-lab.jpeg" },
    { id: "sports", label: "کھیل کا میدان", image: "/images/facilities/sports-ground.jpeg" },
    { id: "fleet", label: "ٹرانسپورٹ فلیٹ", image: "/images/facilities/transport.jpeg" },
    { id: "security", label: "کیمپس سیکیورٹی", image: "/images/facilities/security.png" },
    { id: "computer-lab", label: "کمپیوٹر لیب", image: "/images/facilities/computer-lab.jpeg" },
    { id: "library", label: "لائبریری", image: "/images/facilities/library.jpeg" },
    { id: "auditorium", label: "آڈیٹوریم", image: "/images/facilities/auditorium.jpeg" },
    { id: "cafeteria", label: "کیفےٹیریا", image: "/images/facilities/cafeteria.jpeg" },
  ];
}
export interface FacultyMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  reportsTo?: string;
}

export const facultyMembers: FacultyMember[] = [
  {
    id: "vice-principal",
    name: "Nadia Ahmed",
    title: "Vice Principal · M.Ed",
    bio: "Supports academic planning, teacher coordination, and student development.",
    image: "/images/faculty/nadia-ahmed.jpeg",
  },
  {
    id: "saira-bashir",
    name: "Saira Bashir",
    title: "Head of Science · M.Phil",
    bio: "14 years teaching O/A-Level Biology & Chemistry.",
    image: "/images/faculty/saira-bashir.jpeg",
    reportsTo: "vice-principal",
  },
  {
    id: "imran-butt",
    name: "Imran Butt",
    title: "Head of Maths · MSc",
    bio: "Leads Matric board-exam preparation cohort.",
    image: "/images/faculty/imranz-butt.jpeg",
    reportsTo: "vice-principal",
  },
  {
    id: "farah-yousaf",
    name: "Farah Yousaf",
    title: "English Department · MA TESOL",
    bio: "Develops communication skills and bilingual learning programs.",
    image: "/images/faculty/farah-yousaf.jpeg",
    reportsTo: "saira-bashir",
  },
  {
    id: "new-under-saira",
    name: "Ayesha Khalid",
    title: "Computer Department · BS CS",
    bio: "Introduces students to programming, technology, and digital skills.",
    image: "/images/faculty/ayesha-khalid.jpeg",
    reportsTo: "saira-bashir",
  },
  {
    id: "ali-raza",
    name: "Ali Raza",
    title: "Activity Coordinator · MSc",
    bio: "Manages student activities, events, and skill development programs.",
    image: "/images/faculty/ali-raza.jpeg",
    reportsTo: "imran-butt",
  },
  {
    id: "new-under-imran",
    name: "Hina Malik",
    title: "Urdu Department · MA Urdu",
    bio: "Promotes language skills, creativity, and cultural awareness among students.",
    image: "/images/faculty/hina-malik.jpeg",
    reportsTo: "imran-butt",
  },
];

export function getFacultyMembers(language: SiteLanguage): FacultyMember[] {
  if (language !== "UR") return facultyMembers;
  return [
   {
  id: "vice-principal",
  name: "نادیہ احمد",
  title: "نائب پرنسپل · M.Ed",
  bio: "تعلیمی منصوبہ بندی، اساتذہ کی رہنمائی اور طلبہ کی ترقی میں معاونت کرتی ہیں۔",
  image: "/images/faculty/nadia-ahmed.jpeg",
},
    {
      id: "saira-bashir",
      name: "سائرہ بشیر",
      title: "سربراہ سائنس · M.Phil",
      bio: "O/A-Level بائیولوجی اور کیمسٹری پڑھانے کا 14 سالہ تجربہ۔",
      image: "/images/faculty/saira-bashir.jpeg",
      reportsTo: "vice-principal",
    },
    {
      id: "imran-butt",
      name: "عمران بٹ",
      title: "سربراہ ریاضی · MSc",
      bio: "میٹرک بورڈ امتحان کی تیاری کرنے والے گروپ کی قیادت کرتے ہیں۔",
      image: "/images/faculty/imranz-butt.jpeg",
      reportsTo: "vice-principal",
    },
    {
      id: "farah-yousaf",
      name: "فارہ یوسف",
      title: "شعبہ انگریزی · MA TESOL",
      bio: "دو لسانی انگریزی-اردو تحریری پروگرام چلاتی ہیں۔",
      image: "/images/faculty/farah-yousaf.jpeg",
      reportsTo: "saira-bashir",
    },
   {
  id: "new-under-saira",
  name: "عائشہ خالد",
  title: "کمپیوٹر سائنس ٹیچر · BS CS",
  bio: "طلبہ کو پروگرامنگ، ٹیکنالوجی اور ڈیجیٹل مہارتیں سکھاتی ہیں۔",
  image: "/images/faculty/ayesha-khalid.jpeg",
  reportsTo: "saira-bashir",
},
    {
      id: "ali-raza",
      name: "علی رضا",
      title: "پیشہ وارانہ سربراہ",
      bio: "مقامی تجارتی شراکت داروں کے ساتھ صنعتی روابط کا انتظام کرتے ہیں۔",
      image: "/images/faculty/ali-raza.jpeg",
      reportsTo: "imran-butt",
    },
    {
  id: "new-under-imran",
  name: "حنا ملک",
  title: "شعبہ اردو · MA اردو",
  bio: "طلبہ میں زبان، تخلیقی صلاحیتوں اور ثقافتی شعور کو فروغ دیتی ہیں۔",
  image: "/images/faculty/hina-malik.jpeg",
  reportsTo: "imran-butt",
},
  ];
}