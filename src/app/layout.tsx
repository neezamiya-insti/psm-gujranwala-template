import type { Metadata } from "next";
import {
  Fraunces,
  IBM_Plex_Sans,
  Noto_Nastaliq_Urdu,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";

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
  title: "Gujranwala Grammar & Science Academy",
  description:
    "BISE Gujranwala affiliated school serving Model Town, Wazirabad Road & Rahwali Cantt families since 1998.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${ibmPlexSans.variable} ${urdu.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}