export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-lg text-zinc-600">
          Mati Lanfranco
        </span>
        <div className="flex gap-6">
          {[
            { label: "Instagram", href: "https://www.instagram.com/mati_lanfranco" },
            { label: "YouTube", href: "https://www.youtube.com/@matilanfranco" },
            { label: "Spotify", href: "https://open.spotify.com/artist/4U401wla9HILG0PgWMWOYX" },
          ].map((social) => (
            <a key={social.label} href={social.href} target="_blank" className="text-[10px] tracking-[0.12em] uppercase text-zinc-600 hover:text-white transition-colors duration-200">
              {social.label}
            </a>
          ))}
        </div>
        <span className="text-[10px] text-zinc-700 tracking-wide">
          © {new Date().getFullYear()} Mati Lanfranco
        </span>
      </div>
    </footer>
  );
}