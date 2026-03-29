const pressItems = [
  {
    source: "Broadway en Vivo",
    headline: "Premio a Mejores Músicos en Vivo y Mejores Arreglos",
    link: null,
    year: "2022",
  },
  {
    source: "CD Baby",
    headline: "Tango Corrupto — lanzamiento oficial en plataformas digitales",
    link: "https://open.spotify.com/artist/4U401wla9HILG0PgWMWOYX",
    year: "2023",
  },
  {
    source: "RWS Global",
    headline: "Seleccionado como músico residente para cruceros internacionales",
    link: null,
    year: "2024",
  },
];

const epkLinks = [
  { label: "Descargar EPK (Español)", file: "/epk-es.pdf" },
  { label: "Download EPK (English)", file: "/epk-en.pdf" },
];

export default function Press() {
  return (
    <section id="prensa" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-baseline justify-between mb-12">
          <h2 style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-4xl font-light text-zinc-900">
            Prensa & Reconocimientos
          </h2>
          <span className="text-[11px] tracking-[0.1em] uppercase text-zinc-400">
            Medios y premios
          </span>
        </div>

        {/* Press cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pressItems.map((item, i) => (
            <div key={i} className="flex flex-col gap-4 p-6 border border-zinc-100 rounded-sm hover:border-zinc-200 transition-colors duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.14em] uppercase text-zinc-400">
                  {item.source}
                </span>
                <span className="text-[10px] tracking-[0.1em] text-zinc-300">
                  {item.year}
                </span>
              </div>
              <p style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-lg font-light text-zinc-900 leading-snug flex-1">
                "{item.headline}"
              </p>
              {item.link ? (
                <a href={item.link} target="_blank" className="text-[11px] tracking-[0.08em] uppercase transition-colors duration-200 hover:opacity-70 self-start" style={{ color: "#BA7517" }}>
                  Ver más →
                </a>
              ) : (
                <span className="text-[11px] tracking-[0.08em] uppercase text-zinc-300">
                  Archivo
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="flex flex-col gap-4 p-6 border-l-2" style={{ borderColor: "#EF9F27" }}>
            <p style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-xl font-light italic text-zinc-700 leading-relaxed">
              "Uno de los pianistas más completos que conozco. Su versatilidad y musicalidad son extraordinarias."
            </p>
            <cite className="text-[11px] tracking-[0.1em] uppercase text-zinc-400 not-italic">
              — Nombre Artista, Rol
            </cite>
          </div>
          <div className="flex flex-col gap-4 p-6 border-l-2" style={{ borderColor: "#EF9F27" }}>
            <p style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-xl font-light italic text-zinc-700 leading-relaxed">
              "Su interpretación del tango tiene una profundidad poco común. Un músico de nivel internacional."
            </p>
            <cite className="text-[11px] tracking-[0.1em] uppercase text-zinc-400 not-italic">
              — Nombre Artista, Rol
            </cite>
          </div>
        </div>

        {/* EPK downloads */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-zinc-100">
          {epkLinks.map((epk) => (
            <a key={epk.label} href={epk.file} target="_blank" className="flex items-center gap-3 px-5 py-3 border border-zinc-200 rounded-sm text-sm text-zinc-700 hover:border-zinc-400 transition-colors duration-200">
              <span className="text-base">↓</span>
              {epk.label}
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}