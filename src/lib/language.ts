export type SiteLanguage = "EN" | "UR";

export const LANGUAGE_COOKIE = "ggs-lang";

export function isUrdu(language: SiteLanguage) {
  return language === "UR";
}

export function normalizeLanguage(value?: string | null): SiteLanguage {
  return value === "UR" ? "UR" : "EN";
}
