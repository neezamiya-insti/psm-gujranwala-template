export interface CurriculumStage {
  id: string;
  ageRange: string;
  name: string;
  description: string;
}

export const curriculumStages: CurriculumStage[] = [
  {
    id: "montessori",
    ageRange: "Ages 3–5",
    name: "Montessori",
    description: "Play-based early years, city-core campus only.",
  },
  {
    id: "primary",
    ageRange: "Grades 1–5",
    name: "Primary",
    description:
      "Foundational literacy, numeracy & Urdu-English bilingual instruction.",
  },
  {
    id: "middle",
    ageRange: "Grades 6–8",
    name: "Middle",
    description: "Subject specialisation begins across sciences & languages.",
  },
];