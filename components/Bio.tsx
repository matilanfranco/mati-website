const stats = [
  { number: "20+", label: "Años carrera" },
  { number: "6", label: "Países" },
  { number: "3", label: "Discos" },
  { number: "2", label: "Premios" },
];

export default function Bio() {
  return (
    <section id="bio" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Foto */}
          <div className="relative">
            <div className="aspect-[3/4] bg-zinc-100 rounded-sm overflow-hidden">
              {/* Reemplazá por tu foto: <img src="/images/mati.jpg" alt="Mati Lanfranco" className="w-full h-full object-cover" /> */}
              <img src="/images/mati.jpg" alt="Mati Lanfranco" className="w-full h-full object-cover" />
            </div>
            {/* Detalle decorativo */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-zinc-200 rounded-sm -z-10" />
          </div>

          {/* Contenido */}
          <div className="flex flex-col gap-6 pt-4">

            {/* Línea amber */}
            <div className="w-7 h-0.5" style={{ backgroundColor: "#EF9F27" }} />

            {/* Título */}
            <h2 style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-4xl md:text-5xl font-light leading-tight text-zinc-900">
              Argentinian pianist with a voice shaped by tango, jazz and the world
            </h2>

            {/* Bio */}
            <div className="flex flex-col gap-4 text-sm text-zinc-500 leading-relaxed">
              <p>
                Pianista, compositor y arreglador cordobés con dos licenciaturas en música. Su sonido cruza el tango de concierto más clásico con el jazz latino contemporáneo y la improvisación.
              </p>
              <p>
                Actuó junto a Il Divo en su tour sudamericano, fue músico residente en Rolling Stone Lounge y actualmente integra la compañía de RWS Global en cruceros internacionales.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4 pt-4 border-t border-zinc-100">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-4xl font-light text-zinc-900 leading-none">
                    {stat.number}
                  </span>
                  <span className="text-[10px] tracking-[0.1em] uppercase text-zinc-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CV link */}
            <a href="/cv.pdf" target="_blank" className="self-start text-[11px] tracking-[0.12em] uppercase border-b pb-0.5 transition-colors duration-200 text-zinc-900 hover:text-zinc-500" style={{ borderColor: "#BA7517" }}>
              Descargar CV
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}