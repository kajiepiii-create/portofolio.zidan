import { useEffect, useState } from "react";
import About from "@/components/About";
import Achievement from "@/components/Achievement";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Goals from "@/components/Goals";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";

/** Garis progres scroll tipis di atas halaman. */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-60 h-0.5 bg-transparent">
      <div
        className="h-full origin-left bg-gradient-to-r from-electric to-electric-300 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

export default function App() {
  /* Transisi halaman yang halus saat pertama dimuat. */
  const [loaded, setLoaded] = useState(false);

  /**
   * Halaman mulai terungkap saat tirai intro mulai terangkat, sehingga
   * transisi intro → halaman terasa satu rangkaian, bukan dua potongan.
   */
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Halaman mulai terungkap saat tirai intro terbelah, agar transisi menyatu.
    const t = window.setTimeout(() => setLoaded(true), reduced ? 60 : 2450);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div
      className="isolate min-h-screen bg-navy text-white transition-opacity duration-1000"
      style={{ opacity: loaded ? 1 : 0 }}
    >
      {/* Lapisan atmosfer: glow radial samar sebagai latar bersama */}
      <div aria-hidden className="atmosphere fixed inset-0 -z-10" />

      {/* Layar intro sinematik — tampil sekali per sesi */}
      <Intro />

      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-electric focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Lewati ke konten utama
      </a>

      <ScrollProgress />
      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Portfolio />
        <Experience />
        <Achievement />
        <Skills />
        <Goals />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
