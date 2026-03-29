import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Bio from "@/components/Bio";
import Music from "@/components/Music";
import Gallery from "@/components/Gallery";
import Shows from "@/components/Shows";
import Press from "@/components/Press";
import Instagram from "@/components/Instagram";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ScrollReveal><Bio /></ScrollReveal>
      <ScrollReveal><Music /></ScrollReveal>
      <ScrollReveal><Gallery /></ScrollReveal>
      <ScrollReveal><Shows /></ScrollReveal>
      <ScrollReveal><Press /></ScrollReveal>
      <ScrollReveal><Instagram /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>
      <Footer />
    </main>
  );
}