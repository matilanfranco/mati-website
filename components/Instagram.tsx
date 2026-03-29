const posts = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

export default function Instagram() {
  return (
    <section id="instagram" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-white">@mati_lanfranco</span>
              <span className="text-xs text-zinc-500">2.9K seguidores · Instagram</span>
            </div>
          </div>
          <a href="https://www.instagram.com/mati_lanfranco" target="_blank" className="text-[11px] tracking-[0.1em] uppercase px-4 py-2 border transition-colors duration-200 hover:opacity-70" style={{ borderColor: "#BA7517", color: "#BA7517" }}>
            Seguir
          </a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {posts.map((post) => (
            <a key={post.id} href="https://www.instagram.com/mati_lanfranco" target="_blank" className="aspect-square bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden block hover:border-zinc-600 transition-colors duration-200" />
          ))}
        </div>
        <p className="mt-4 text-xs text-zinc-600 tracking-wide text-center">
          Agregá tus fotos en <code className="bg-zinc-900 px-1 py-0.5 rounded text-zinc-400">public/images/ig-1.jpg</code> hasta ig-6.jpg
        </p>
      </div>
    </section>
  );
}