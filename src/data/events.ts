export type EventTagType = "recap" | "photos" | "video-photos";

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  tag: string;
  tagType: EventTagType;
  link: string;
}

export const eventTimeline: TimelineEvent[] = [
  {
    id: "ptm-term2",
    date: "12 Jul 2026",
    title: "Parent-Teacher Meeting — Term 2",
    description:
      "All grades, Model Town & Wazirabad Road campuses. Individual report card review.",
    tag: "Catchup with Teachers",
    tagType: "recap",
    link: "https://wa.me/923001234567",
  },
  {
    id: "science-fair",
    date: "28 Jun 2026",
    title: "Inter-School Science Fair",
    description:
      "Grade 8–10 projects; three of our exhibits placed in the district top ten.",
    tag: "See Pictures",
    tagType: "photos",
    link: "/gallery/science-fair",
  },
  {
    id: "sports-gala",
    date: "14 May 2026",
    title: "Sports Gala 2026",
    description:
      "Annual inter-house athletics day, Model Town Ground — full family attendance.",
    tag: "See Video",
    tagType: "video-photos",
    link: "/gallery/sports-gala-video",
  },
  {
    id: "annual-function",
    date: "02 Mar 2026",
    title: "Annual Function & Prize Distribution",
    description:
      "Matric & O-Level toppers recognised on stage, followed by student performances.",
    tag: "See Pictures",
    tagType: "recap",
    link: "/gallery/annual-function",
  },
];

export interface UpcomingEvent {
  title: string;
  date: string;
  start: string;
  end: string;
  location: string;
  audience: string;
}

export const upcomingEvent: UpcomingEvent = {
  title: "Next up: Independence Day Assembly",
  date: "14 August 2026",
  start: "20260814T090000",
  end: "20260814T120000",
  location: "Model Town Ground",
  audience: "Open to all parents",
};