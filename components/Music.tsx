const albums = [
  {
    title: "Y mientras... Tango",
    description: "Álbum · Tango · Arreglos propios",
    emoji: "🎹",
    link: "https://open.spotify.com/artist/4U401wla9HILG0PgWMWOYX",
  },,
  {
    title: "Latin Jazz con cuerdas",
    description: "En proceso · Composición propia",
    emoji: "🎷",
    badge: "Próximo",
    link: null,
  },
];

const videos = [
  { title: "En vivo — Mati Lanfranco", embedId: "K2whLaIDbU4" },
  { title: "En vivo — Mati Lanfranco", embedId: "uBk_amVdYEo" },
  { title: "En vivo — Mati Lanfranco", embedId: "3uME2pudBLc" },
];

const playlists = [
  {
    label: "Pop · Rock · Otros géneros",
    embedId: "7nXzC1cCafK9REBMyrQ9Yq",
  },
  {
    label: "Música Argentina",
    embedId: "1M9WOGtjuNlt54rzcn2F4c",
  },
];

export default function Music() {
  return (
    <section id="musica" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* Discografía */}
        <div>
          <div className="flex items-baseline justify-between mb-8">
            <h2 style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-4xl font-light text-white">
              Discografía
            </h2>
            <a href="https://open.spotify.com/artist/4U401wla9HILG0PgWMWOYX" target="_blank" className="text-[11px] tracking-[0.1em] uppercase transition-colors duration-200 hover:opacity-70" style={{ color: "#BA7517" }}>
              Ver en Spotify →
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {albums.map((album) => (
              <div key={album.title} className="flex items-center gap-4 bg-zinc-900 p-5 rounded-sm border border-zinc-800 hover:border-zinc-600 transition-colors duration-200">
                <div className="w-14 h-14 bg-zinc-800 rounded flex items-center justify-center text-2xl flex-shrink-0">
                  {album.emoji}
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-lg text-white">
                      {album.title}
                    </span>
                    {album.badge && (
                      <span className="text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 font-medium" style={{ backgroundColor: "#EF9F27", color: "#412402" }}>
                        {album.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-zinc-500 tracking-wide">{album.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colaboraciones — Spotify playlists */}
        <div>
          <div className="flex items-baseline justify-between mb-8">
            <h2 style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-4xl font-light text-white">
              Colaboraciones
            </h2>
            <a href="https://open.spotify.com/artist/4U401wla9HILG0PgWMWOYX" target="_blank" className="text-[11px] tracking-[0.1em] uppercase transition-colors duration-200 hover:opacity-70" style={{ color: "#BA7517" }}>
              Ver perfil →
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {playlists.map((playlist) => (
              <div key={playlist.embedId} className="flex flex-col gap-3">
                <p className="text-[10px] tracking-[0.15em] uppercase text-zinc-500">
                  {playlist.label}
                </p>
                <iframe
                  src={`https://open.spotify.com/embed/playlist/${playlist.embedId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div>
          <div className="flex items-baseline justify-between mb-8">
            <h2 style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-4xl font-light text-white">
              Videos en vivo
            </h2>
            <a href="https://www.youtube.com/@matilanfranco" target="_blank" className="text-[11px] tracking-[0.1em] uppercase transition-colors duration-200 hover:opacity-70" style={{ color: "#BA7517" }}>
              Ver en YouTube →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {videos.map((video) => (
              <div key={video.embedId} className="flex flex-col gap-2">
                <div className="relative aspect-video bg-zinc-900 rounded-sm overflow-hidden border border-zinc-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <p className="text-xs text-zinc-500 tracking-wide">{video.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}