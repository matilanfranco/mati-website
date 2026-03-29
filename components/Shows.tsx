const shows = [
  { date: "Abr 2025", name: "RWS Global — Crucero MSC", place: "Mediterráneo", tag: "Próximo", tagColor: "#BA7517" },
  { date: "Mar 2025", name: "Rolling Stone Lounge", place: "Buenos Aires, ARG", tag: "Pasado", tagColor: null },
  { date: "2023", name: "Il Divo — South American Tour", place: "Sudamérica", tag: "Destacado", tagColor: "#BA7517" },
  { date: "2022", name: "Broadway en Vivo", place: "Argentina", tag: "Premio", tagColor: "#BA7517" },
  { date: "2022", name: "Orquesta Sinfónica de Córdoba", place: "Córdoba, ARG", tag: "Pasado", tagColor: null },
  { date: "2017", name: "Il Divo — South American Tour", place: "Sudamérica", tag: "Destacado", tagColor: "#BA7517" },
];

export default function Shows() {
  return (
    <section id="shows" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h2 style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-4xl font-light text-white">
            Shows & Gigs
          </h2>
          <span className="text-[11px] tracking-[0.1em] uppercase text-zinc-600">
            Historial de presentaciones
          </span>
        </div>
        <div className="flex flex-col">
          {shows.map((show, i) => (
            <div key={i} className="flex items-center justify-between py-5 border-b border-zinc-800 group hover:bg-zinc-900 hover:px-4 transition-all duration-200 rounded-sm">
              <span style={{ fontFamily: "var(--font-cormorant), serif", color: "#BA7517" }} className="text-xl font-light min-w-[90px]">
                {show.date}
              </span>
              <div className="flex flex-col gap-0.5 flex-1 px-6">
                <span className="text-sm font-medium text-white tracking-wide">{show.name}</span>
                <span className="text-xs text-zinc-500 tracking-wide">{show.place}</span>
              </div>
              <span className="text-[10px] tracking-[0.08em] uppercase px-3 py-1 border rounded-sm" style={{ borderColor: show.tagColor ?? "#3f3f46", color: show.tagColor ?? "#52525b" }}>
                {show.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}