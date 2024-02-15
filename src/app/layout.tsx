import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corentin Damas - Artefact",
  description: "Corentin Damas photography portfolio",
};

const geologicaRomLight = localFont({
  weight: "300",
  variable: "--font-geologica-Roman-light",
  src: "./font/GeologicaRoman-Thin.ttf",
});
const geologicaRomMedium = localFont({
  weight: "500",
  variable: "--font-geologica-Roman-Medium",
  src: "./font/GeologicaRoman-Medium.ttf",
});
const geologicaRomRegular = localFont({
  weight: "400",
  variable: "--font-geologica-Roman-Regular",
  src: "./font/GeologicaRoman-Regular.ttf",
});
const geologicaLight = localFont({
  weight: "300",
  variable: "--font-geologica-light",
  src: "./font/Geologica-Light.ttf",
});
const geologicaRegular = localFont({
  weight: "400",
  variable: "--font-geologica-Regular",
  src: "./font/Geologica-Regular.ttf",
});
const geologicaCursiveRegu = localFont({
  weight: "400",
  variable: "--font-geologica-Cursive-Regular",
  src: "./font/Geologica_Cursive-Regular.ttf",
});
const lateefRegular = localFont({
  weight: "400",
  variable: "--font-Lateef-Regular",
  src: "./font/Atom.ttf",
});
const sawarabiMincho = localFont({
  weight: "400",
  variable: "--font-SawarabiMincho-Regular",
  src: "./font/SawarabiMincho-Regular.ttf",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geologicaRomMedium.variable} ${geologicaRomLight.variable} ${geologicaRomRegular.variable} ${geologicaLight.variable} ${geologicaRegular.variable} ${geologicaCursiveRegu.variable} ${lateefRegular.variable} ${sawarabiMincho.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
