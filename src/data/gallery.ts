export interface GalleryCategory {
  id: string;
  label: string;
}

export const galleryCategories: GalleryCategory[] = [
  { id: "all", label: "All" },
  { id: "sports-day", label: "Sports Day" },
  { id: "field-trips", label: "Field Trips" },
  { id: "annual-function", label: "Annual Function" },
  { id: "science-fair", label: "Science Fair" },
];


export type GallerySize = "featured" | "tall" | "normal";
export type GalleryVariant = "peach" | "navy";
export type GalleryMediaType = "image" | "video";


export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;

  image: string;
  video?: string;

  mediaType: GalleryMediaType;

  size: GallerySize;
  variant: GalleryVariant;

  alt: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "prize-distribution",
    title: "Prize Distribution",
    subtitle: "Matric Toppers 2026",
    category: "annual-function",

    image: "/images/gallery/prize-distribution.jpeg",

    video: "/images/gallery/prize-distribution.mp4",
    mediaType: "video",

    size: "featured",
    variant: "navy",

    alt: "Students receiving academic awards",
  },

  {
    id: "annual-function",
    title: "Annual Function",
    subtitle: "Auditorium Night",
    category: "annual-function",

    image: "/images/gallery/annual-function.jpeg",

    mediaType: "image",

    size: "normal",
    variant: "navy",

    alt: "Annual function celebration at school auditorium",
  },

  {
    id: "science-fair",
    title: "Science Fair",
    subtitle: "Grade 8–10 Projects",
    category: "science-fair",

    image: "/images/gallery/science-fair.jpeg",

    mediaType: "image",

    size: "normal",
    variant: "navy",

    alt: "Students presenting science fair projects",
  },

  {
    id: "sports-gala",
    title: "Sports Gala 2026",
    subtitle: "Model Town Ground",
    category: "sports-day",

    image: "/images/gallery/sports-gala.jpeg",
    mediaType: "image",

    size: "normal",
    variant: "navy",

    alt: "Students participating in Sports Gala 2026",
  },

  {
    id: "assembly",
    title: "Assembly",
    subtitle: "Morning Address",
    category: "campus-life",

    image: "/images/gallery/assembly.jpeg",

    mediaType: "image",

    size: "normal",
    variant: "navy",

    alt: "Morning school assembly",
  },

  {
    id: "field-trip",
    title: "Field Trip",
    subtitle: "Textile Expo Visit",
    category: "field-trips",

    image: "/images/gallery/field-trip.jpeg",

    mediaType: "image",

    size: "normal",
    variant: "navy",

    alt: "Students visiting textile expo",
  },
];