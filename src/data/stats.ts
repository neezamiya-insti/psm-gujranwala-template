export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export const heroStats: StatItem[] = [
  { id: "students", value: "1,850+", label: "Students enrolled" },
  { id: "result", value: "96%", label: "Matric result rate" },
  { id: "campuses", value: "3", label: "City campuses" },
];

export const quickStats: StatItem[] = [
  { id: "students", value: "1,850+", label: "Students across 3 campuses" },
  { id: "result", value: "96%", label: "Matric & O/A-Level result rate" },
  { id: "faculty", value: "74", label: "Qualified faculty members" },
  { id: "years", value: "28yr", label: "Serving Gujranwala since 1998" },
];