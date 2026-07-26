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