const photos = [
  { src: "/images/gallery-1.jpg", alt: "Mati Lanfranco en vivo", size: "large" },
  { src: "/images/gallery-2.jpg", alt: "Foto estudio", size: "small" },
  { src: "/images/gallery-3.jpg", alt: "Show crucero", size: "small" },
  { src: "/images/gallery-4.jpg", alt: "Piano de cola", size: "small" },
  { src: "/images/gallery-5.jpg", alt: "Press foto", size: "small" },
];

export default function Gallery() {
  return (
    <section id="fotos" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-baseline justify-between mb-8">
          <h2 style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-4xl font-light text-zinc-900">
            Galería
          </h2>
          <span className="text-[11px] tracking-[0.1em] uppercase text-zinc-400">
            Fotos profesionales
          </span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[560px]">

          {/* Foto principal grande */}
          <div className="col-span-1 row-span-2 bg-zinc-100 rounded-sm overflow-hidden relative group">
            {photos[0].src ? (
              <img src={photos[0].src} alt={photos[0].alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xs tracking-widest uppercase">
                Foto principal
              </div>
            )}
          </div>

          {/* 4 fotos pequeñas */}
          {photos.slice(1).map((photo, i) => (
            <div key={i} className="bg-zinc-100 rounded-sm overflow-hidden relative group">
              {photo.src ? (
                <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-zinc-400 text-xs tracking-widest uppercase">
                  {photo.alt}
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Nota para agregar fotos */}
        <p className="mt-4 text-xs text-zinc-400 tracking-wide">
          Agregá tus fotos en <code className="bg-zinc-100 px-1 py-0.5 rounded text-zinc-600">public/images/</code> con los nombres gallery-1.jpg, gallery-2.jpg, etc.
        </p>

      </div>
    </section>
  );
}