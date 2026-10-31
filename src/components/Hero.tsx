import { useEffect, useRef, useState } from "react";
import { hero, links, marqueeWords, site } from "@/data/site";
import { useReducedMotion, useScrollY } from "@/hooks/useScroll";
import { cn } from "@/utils/cn";
import { ArrowRight, PlayIcon } from "./icons";
import { ButtonLink } from "./ui";

export default function Hero() {
  const scrollY = useScrollY();
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  /* Muat video belakangan agar first paint tetap cepat. */
  useEffect(() => {
    if (reduced) return;
    const t = window.setTimeout(() => setReady(true), 900);
    return () => window.clearTimeout(t);
  }, [reduced]);

  useEffect(() => {
    if (!ready || !videoRef.current) return;
    videoRef.current.play().catch(() => undefined);
  }, [ready]);

  const parallax = reduced ? 0 : Math.min(scrollY, 900) * 0.12;
  const fade = reduced ? 1 : Math.max(0, 1 - scrollY / 620);

  return (
    <section
      id="home"
      className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy pt-28 pb-28 sm:pb-32"
    >
      {/* ---------- Background ---------- */}
      <div
        className="absolute inset-x-0 -top-28 -bottom-28 -z-10"
        style={reduced ? undefined : { transform: `translate3d(0,${parallax}px,0)` }}
        aria-hidden
      >
        {/* Fallback gambar selalu ada, video menimpanya bila siap */}
        <img
          src={hero.fallbackImage}
          alt=""
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover opacity-55 saturate-[0.85]"
        />
        {ready && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover opacity-55 saturate-[0.85]"
            poster={hero.poster}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
            aria-hidden
            tabIndex={-1}
          >
            <source src={hero.video} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Overlay lembut agar teks tetap terbaca tanpa terlihat pekat */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(5,5,6,0.94)_0%,rgba(10,10,12,0.84)_38%,rgba(10,10,12,0.4)_68%,rgba(10,10,12,0.72)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_120%,rgba(169,198,232,0.2)_0%,rgba(201,189,228,0.1)_45%,transparent_62%)]"
      />
      <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-30" />

      {/* Bingkai ala film frame */}
      <div aria-hidden className="pointer-events-none absolute inset-6 -z-10 hidden md:block">
        {[
          "left-0 top-0 border-l border-t",
          "right-0 top-0 border-r border-t",
          "left-0 bottom-0 border-b border-l",
          "right-0 bottom-0 border-b border-r",
        ].map((pos) => (
          <span key={pos} className={cn("absolute h-10 w-10 border-white/25", pos)} />
        ))}
      </div>

      {/* ---------- Konten ---------- */}
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div
          className="max-w-4xl"
          style={reduced ? undefined : { opacity: fade, transform: `translateY(${parallax * 0.12}px)` }}
        >
          <p
            className="inline-flex flex-wrap items-center gap-x-3 gap-y-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-medium tracking-[0.26em] text-slate-200 backdrop-blur-md sm:text-[11px]"
            style={{ animation: reduced ? undefined : "zp-fade 1s ease 0.1s both" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-pulse-ring absolute inset-0 rounded-full bg-electric" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-electric" />
            </span>
            {site.labels.map((l, i) => (
              <span key={l} className="flex items-center gap-3">
                {l}
                {i < site.labels.length - 1 && (
                  <span aria-hidden className="text-electric/70">
                    •
                  </span>
                )}
              </span>
            ))}
          </p>

          <h1
            className="mt-7 font-display text-[10.5vw] leading-[0.92] font-extrabold tracking-tight sm:text-[9vw] lg:text-[6.4vw] xl:text-[5.6rem]"
            style={{ animation: reduced ? undefined : "zp-rise 1s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}
          >
            <span className="block text-white">ZIDAN FIRSTIAN</span>
            <span className="block bg-gradient-to-r from-electric via-pastel-lav to-pastel-pink bg-clip-text text-transparent">
              PANDORA
            </span>
          </h1>

          <div
            className="mt-8 flex items-start gap-4"
            style={{ animation: reduced ? undefined : "zp-rise 1s cubic-bezier(0.16,1,0.3,1) 0.3s both" }}
          >
            <span aria-hidden className="mt-2.5 hidden h-px w-14 shrink-0 bg-electric sm:block" />
            <div>
              <h2 className="font-display text-xl leading-snug font-semibold text-white sm:text-2xl lg:text-[1.75rem]">
                Turning Moments Into{" "}
                <span className="text-electric-300">Meaningful Stories.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-300/85 sm:text-base">
                {site.description}
              </p>
            </div>
          </div>

          <div
            className="mt-10 flex flex-wrap items-center gap-3.5"
            style={{ animation: reduced ? undefined : "zp-rise 1s cubic-bezier(0.16,1,0.3,1) 0.45s both" }}
          >
            <ButtonLink href="#portfolio">
              Explore My Work
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Contact Me
            </ButtonLink>
            <a
              href={links.drive}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-flex items-center gap-2 text-[13px] font-medium text-slate-300 underline decoration-white/25 decoration-1 underline-offset-4 transition-colors hover:text-electric"
            >
              <PlayIcon className="h-3.5 w-3.5 text-electric" />
              Lihat folder Google Drive
            </a>
          </div>
        </div>
      </div>

      {/* ---------- Scroll cue ---------- */}
      <div
        aria-hidden
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 lg:flex"
      >
        <span className="text-[10px] tracking-[0.3em] text-slate-400 uppercase">Scroll</span>
        <span className="animate-scroll-cue relative h-14 w-px overflow-hidden bg-white/15">
          <span className="absolute inset-x-0 top-0 block h-full bg-electric" />
        </span>
      </div>

      {/* ---------- Marquee bawah ---------- */}
      <div className="absolute inset-x-0 bottom-0 overflow-hidden border-y border-white/8 bg-navy-700/50 py-3 backdrop-blur-md">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 gap-10" aria-hidden={dup === 1}>
              {marqueeWords.map((word) => (
                <span
                  key={`${dup}-${word}`}
                  className="flex items-center gap-10 text-[11px] font-medium tracking-[0.3em] text-slate-400 uppercase"
                >
                  {word}
                  <span className="h-1 w-1 rounded-full bg-electric/80" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes zp-rise { from { opacity: 0; transform: translateY(26px); } to { opacity: 1; transform: none; } }
        @keyframes zp-fade { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </section>
  );
}
