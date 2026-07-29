import { cookies } from "next/headers";
import { LANGUAGE_COOKIE, normalizeLanguage, type SiteLanguage } from "./language";

export async function getPreferredLanguage(): Promise<SiteLanguage> {
  const cookieStore = await cookies();
  return normalizeLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
}
