import type { Metadata } from "next";
import { cookies } from "next/headers";
import {
  Fraunces,
  IBM_Plex_Sans,
  Noto_Nastaliq_Urdu,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { isUrdu, normalizeLanguage, LANGUAGE_COOKIE } from "@/lib/language";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gujranwala Grammar School",
  description:
    "BISE Gujranwala affiliated school serving Model Town, Wazirabad Road & Rahwali Cantt families since 1998.",
};

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const lang = normalizeLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);

  return (
    <html lang={isUrdu(lang) ? "ur" : "en"} dir={isUrdu(lang) ? "ltr" : "ltr"}>
      <body
        className={`${fraunces.variable} ${ibmPlexSans.variable} ${urdu.variable} antialiased`}
      >
        <Navbar initialLang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}