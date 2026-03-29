"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Bio", href: "#bio" },
  { label: "Música", href: "#musica" },
  { label: "Fotos", href: "#fotos" },
  { label: "Shows", href: "#shows" },
  { label: "Prensa", href: "#prensa" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"ES" | "EN">("ES");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" style={{ fontFamily: "var(--font-barlow), sans-serif", fontWeight: 300, letterSpacing: "-0.02em" }} className="text-lg uppercase text-white">
            <span style={{ color: "#BA7517" }}>Mati</span> Lanfranco
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[11px] tracking-[0.14em] uppercase text-zinc-500 hover:text-white transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex bg-zinc-900 rounded-md overflow-hidden border border-zinc-800">
          {(["ES", "EN"] as const).map((l) => (
            <button key={l} onClick={() => setLang(l)} className={`text-[10px] tracking-widest px-3 py-1.5 transition-colors duration-200 ${lang === l ? "bg-white text-zinc-950" : "text-zinc-500 hover:text-white"}`}>
              {l}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}