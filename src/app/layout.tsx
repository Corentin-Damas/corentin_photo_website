import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { Providers } from "../../providers/theme-provider";
import { ChakraProviders } from "../../providers/chakra-provider";
import LocalStorage from "../../components/LocalStorage";

export const metadata: Metadata = {
  title: "Corentin Damas - Artefact",
  description:
    "Corentin Damas photography portfolio. French Project based photographer located in Cagliari,Italy. Come discover my differents projects",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={`${geologicaRomMedium.variable} ${geologicaRomLight.variable} ${geologicaRomRegular.variable} ${geologicaLight.variable} ${geologicaRegular.variable} ${geologicaCursiveRegu.variable} ${lateefRegular.variable} ${sawarabiMincho.variable}`}
      >
        <ChakraProviders>
          <Providers>{children}</Providers>
        </ChakraProviders>
      </body>
    </html>
  );
}
