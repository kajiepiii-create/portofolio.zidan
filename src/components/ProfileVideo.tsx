import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useScroll";
import { cn } from "@/utils/cn";
import { PlayIcon } from "./icons";

type ProfileVideoProps = {
  src: string;
  /** Tautan sumber asli bila video tidak bisa diputar. */
  fallbackHref?: string;
  /** Teks deskriptif untuk pembaca layar. */
  label: string;
  className?: string;
};

/**
 * Video profil vertikal di section About.
 *
 * - Autoplay `muted` + `playsInline` → diizinkan semua browser, tanpa tombol.
 * - Mulai dari frame pertama (bukan layar hitam) lewat `onLoadedData`.
 * - Dijeda saat keluar viewport.
 * - Menghormati `prefers-reduced-motion`.
 */
export default function ProfileVideo({
  src,
  fallbackHref,
  label,
  className,
}: ProfileVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || reduced || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.play().catch(() => undefined);
        else if (el.played.length > 0) el.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  useEffect(() => {
    if (reduced || !ready) return;
    videoRef.current?.play().catch(() => undefined);
  }, [ready, reduced]);

  if (failed) {
    return (
      <a
        href={fallbackHref ?? "#"}
        target={fallbackHref ? "_blank" : undefined}
        rel={fallbackHref ? "noopener noreferrer" : undefined}
        className={cn(
          "flex aspect-[9/16] w-full flex-col items-center justify-center gap-3 rounded-[1.6rem] border border-white/10 bg-navy-700/50 text-center",
          className,
        )}
      >
        <PlayIcon className="h-9 w-9 text-electric" />
        <span className="px-6 text-sm font-semibold text-white">
          Tonton video profil
        </span>
        <span className="px-6 text-[12px] text-slate-400">
          Buka di Google Photos
        </span>
      </a>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[9/16] w-full overflow-hidden rounded-[1.6rem] bg-navy-700/60 ring-1 ring-white/10",
        className,
      )}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay={!reduced}
        muted
        loop={!reduced}
        playsInline
        preload="auto"
        aria-label={label}
        onLoadedData={() => setReady(true)}
        onError={() => setFailed(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Gradasi menyatu dengan tema, tanpa mengaburkan wajah */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,12,0.28)_0%,transparent_30%,transparent_62%,rgba(10,10,12,0.6)_100%)]"
      />
      {/* Bingkai viewfinder khas kamera */}
      <div aria-hidden className="pointer-events-none absolute inset-4">
        <span className="absolute top-0 left-0 h-5 w-5 border-t border-l border-white/30" />
        <span className="absolute top-0 right-0 h-5 w-5 border-t border-r border-white/30" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-white/30" />
        <span className="absolute bottom-0 right-0 h-5 w-5 border-b border-r border-white/30" />
      </div>
      {/* Titik rekaman */}
      <div
        aria-hidden
        className="absolute top-5 left-1/2 flex -translate-x-1/2 items-center gap-1.5"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-pastel-pink" />
        <span className="text-[9px] font-medium tracking-[0.2em] text-white/80 uppercase">
          Reel
        </span>
      </div>
    </div>
  );
}
