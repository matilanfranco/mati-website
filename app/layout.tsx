import type { Metadata } from "next";
import { Cormorant_Garamond, Barlow } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Mati Lanfranco — Pianist · Composer · Arranger",
  description: "Argentinian pianist with 20+ years of international experience. Tango, Jazz, Latin. Buenos Aires — World.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${barlow.variable}`}>
      <body className="font-barlow">
        {children}
      </body>
    </html>
  );
}