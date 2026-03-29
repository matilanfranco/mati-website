"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-zinc-950 overflow-hidden">

      {/* Foto lateral derecha — apaizada con opacity */}
      <div className={`absolute right-0 top-0 bottom-0 w-[60%] transition-all duration-1000 ease-out ${loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
        <img src="/images/mati2.jpg" alt="Mati Lanfranco" className="w-full h-full object-cover object-center" style={{ opacity: 0.5 }} />
      </div>

      {/* Overlay degradado sobre la foto */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to right, #09090b 38%, transparent 68%, #09090b 100%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, #09090b 0%, transparent 30%)" }} />

      {/* Contenido izquierda */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32 flex flex-col gap-6">

        {/* Badge superior */}
        <div className={`transition-all duration-700 delay-300 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <span className="text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 border border-zinc-800 text-zinc-500">
            Pianist · Composer · Arranger
          </span>
        </div>

        {/* Nombre — fino pero bold */}
        <div className={`transition-all duration-700 delay-500 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <h1 className="uppercase leading-none tracking-tight text-white" style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: "clamp(64px, 10vw, 130px)", fontWeight: 300, letterSpacing: "-0.02em" }}>
            <span style={{ color: "#BA7517", fontWeight: 300 }}>Mati</span>
            <br />
            Lanfranco
          </h1>
        </div>

        {/* Línea amber + géneros */}
        <div className={`flex items-center gap-4 transition-all duration-700 delay-700 ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="w-8 h-px" style={{ backgroundColor: "#BA7517" }} />
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">
            Tango · Jazz · Latin · Buenos Aires — World
          </span>
        </div>

        {/* Descripción */}
        <p className={`text-sm text-zinc-500 max-w-xs leading-relaxed transition-all duration-700 delay-[800ms] ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Más de 20 años de carrera internacional. Del tango de concierto al jazz latino contemporáneo.
        </p>

        {/* CTAs */}
        <div className={`flex gap-3 mt-2 transition-all duration-700 delay-[900ms] ease-out ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <a href="#musica" className="px-7 py-3 text-zinc-950 text-[11px] tracking-[0.15em] uppercase font-medium hover:opacity-80 transition-opacity duration-200" style={{ backgroundColor: "#BA7517" }}>
            Escuchar
          </a>
          <a href="#contacto" className="px-7 py-3 border border-zinc-700 text-white text-[11px] tracking-[0.15em] uppercase hover:border-zinc-400 transition-colors duration-200">
            Contratar
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-16 flex items-center gap-3 transition-all duration-700 delay-[1100ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="relative w-px h-12 bg-zinc-800 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2" style={{ backgroundColor: "#EF9F27", animation: "slideDown 2s ease-in-out infinite" }} />
          </div>
          <span className="text-[9px] tracking-[0.25em] uppercase text-zinc-700">Scroll</span>
        </div>

      </div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>

    </section>
  );
}