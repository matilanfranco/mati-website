"use client";

import { useState } from "react";

const consultTypes = [
  "Show / Evento",
  "Sesión de grabación",
  "Arreglos / Producción",
  "Otro",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Consulta: ${formData.type || "General"} — ${formData.name}`;
    const body = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTipo: ${formData.type}\n\nMensaje:\n${formData.message}`;
    window.open(`mailto:matilanfranco@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="w-7 h-0.5" style={{ backgroundColor: "#EF9F27" }} />
            <h2 style={{ fontFamily: "var(--font-cormorant), serif" }} className="text-4xl md:text-5xl font-light text-zinc-900 leading-tight">
              Trabajemos juntos
            </h2>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Para shows, sesiones, arreglos o cualquier consulta profesional, escribime directamente o completá el formulario.
            </p>
            <a href="mailto:matilanfranco@gmail.com" className="text-base transition-colors duration-200 hover:opacity-70" style={{ color: "#BA7517" }}>
              matilanfranco1@gmail.com
            </a>
            <div className="flex flex-wrap gap-2 pt-2">
              {["Córdoba, AR", "Disponible internacional"].map((tag) => (
                <span key={tag} className="text-[10px] tracking-[0.1em] uppercase px-3 py-1.5 bg-zinc-100 text-zinc-500 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 pt-4 border-t border-zinc-100">
              {[
                { label: "Instagram", href: "https://www.instagram.com/mati_lanfranco" },
                { label: "YouTube", href: "https://www.youtube.com/@matilanfranco" },
                { label: "Spotify", href: "https://open.spotify.com/artist/4U401wla9HILG0PgWMWOYX" },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" className="text-[10px] tracking-[0.12em] uppercase text-zinc-400 hover:text-zinc-900 transition-colors duration-200">
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.12em] uppercase text-zinc-400">Nombre</label>
                <input required type="text" placeholder="Tu nombre" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-zinc-50 border border-zinc-200 rounded-sm px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors duration-200" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] tracking-[0.12em] uppercase text-zinc-400">Email</label>
                <input required type="email" placeholder="tu@email.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-zinc-50 border border-zinc-200 rounded-sm px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors duration-200" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-[0.12em] uppercase text-zinc-400">Tipo de consulta</label>
              <select required value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })} className="bg-zinc-50 border border-zinc-200 rounded-sm px-4 py-3 text-sm text-zinc-900 focus:outline-none focus:border-zinc-400 transition-colors duration-200 appearance-none">
                <option value="">Seleccioná una opción</option>
                {consultTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] tracking-[0.12em] uppercase text-zinc-400">Mensaje</label>
              <textarea required rows={5} placeholder="Contame de qué se trata..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-zinc-50 border border-zinc-200 rounded-sm px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors duration-200 resize-none" />
            </div>
            <button type="submit" className="w-full py-3 bg-zinc-900 text-white text-[11px] tracking-[0.14em] uppercase hover:bg-zinc-700 transition-colors duration-200">
              {sent ? "✓ Mensaje enviado" : "Enviar mensaje"}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}