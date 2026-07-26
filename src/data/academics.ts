export interface CurriculumStage {
  id: string;
  ageRange: string;
  name: string;
  board: string;
  description: string;
}

export const curriculumStages: CurriculumStage[] = [
  {
    id: "montessori",
    ageRange: "Ages 3–5",
    name: "Montessori & Pre-Primary",
    board: "Punjab Curriculum",
    description: "Play-based early years at the Model Town campus only.",
  },
  {
    id: "primary",
    ageRange: "Grades 1–5",
    name: "Primary School",
    board: "Punjab Curriculum",
    description:
      "Bilingual English–Urdu foundation in literacy & numeracy.",
  },
  {
    id: "middle",
    ageRange: "Grades 6–8",
    name: "Middle School",
    board: "Punjab Curriculum",
    description: "Subject specialisation begins across sciences & languages.",
  },
  {
    id: "matric",
    ageRange: "Grades 9–10",
    name: "Matric / Secondary",
    board: "BISE Gujranwala",
    description:
      "Our most-marketed segment — board result rankings drive local reputation.",
  },
  {
    id: "intermediate",
    ageRange: "Ages 16–18",
    name: "Intermediate / O-A Level",
    board: "Cambridge · BISE",
    description:
      "University-placement focused; results content matters most here.",
  },
];