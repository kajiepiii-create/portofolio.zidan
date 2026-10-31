import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useScroll";
import { cn } from "@/utils/cn";

type VideoPlayerProps = {
  src: string;
  /** Sumber cadangan bila `src` gagal (mis. koneksi Drive terputus). */
  fallbackSrc?: string;
  /** Teks deskriptif untuk pembaca layar. */
  label: string;
  className?: string;
};

/**
 * Video portofolio yang berputar otomatis — TANPA tombol play.
 *
 * Autoplay dijamin jalan di semua browser karena video diputar
 * `muted` + `playsInline` (syarat kebijakan autoplay Chrome/Safari/Firefox).
 * File ini juga memang tidak punya track audio, jadi tidak ada suara
 * yang hilang.
 *
 * - `prefers-reduced-motion`: video tidak di-autoplay, hanya frame statis.
 * - Keluar viewport: dijeda agar tidak memakai CPU/kuota diam-diam.
 */
export default function VideoPlayer({ src, fallbackSrc, label, className }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  /** Sumber aktif — pindah ke fallback bila sumber utama gagal. */
  const [activeSrc, setActiveSrc] = useState(src);

  /* Bila sumber utama gagal, coba sumber cadangan sebelum menyerah. */
  const handleError = () => {
    if (fallbackSrc && activeSrc !== fallbackSrc) {
      setActiveSrc(fallbackSrc);
      return;
    }
    setFailed(true);
  };

  /* Dijeda saat keluar viewport — hemat CPU & baterai. */
  useEffect(() => {
    const el = videoRef.current;
    if (!el || reduced || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => undefined);
        } else if (el.played.length > 0) {
          el.pause();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  /* Autoplay mulus setelah metadata cukup tersedia. */
  useEffect(() => {
    if (reduced || !ready) return;
    videoRef.current?.play().catch(() => undefined);
  }, [ready, reduced]);

  return (
    <div
      className={cn(
        // Gradasi pastel sebagai dasar — kartu tidak pernah tampak hitam kosong
        // selagi video termuat.
        "relative h-full w-full overflow-hidden bg-[radial-gradient(120%_120%_at_20%_15%,rgba(169,198,232,0.4)_0%,transparent_55%),radial-gradient(120%_120%_at_85%_85%,rgba(201,189,228,0.38)_0%,transparent_58%),radial-gradient(100%_100%_at_60%_40%,rgba(232,196,212,0.24)_0%,transparent_60%)] bg-ink",
        className,
      )}
    >
      <video
        ref={videoRef}
        key={activeSrc}
        src={activeSrc}
        // Autoplay tanpa tombol: wajib muted + playsInline agar diizinkan browser.
        autoPlay={!reduced}
        muted
        loop={!reduced}
        playsInline
        preload="auto"
        // Sengaja tanpa `controls` — video berperan sebagai karya visual berjalan.
        aria-label={label}
        onLoadedData={() => setReady(true)}
        onError={handleError}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700",
          ready ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Overlay gradasi sangat tipis agar karya menyatu dengan tema hitam-pastel */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.12)_0%,transparent_35%,rgba(5,5,6,0.22)_100%)]"
      />

      {/* Bila browser gagal memutar, tawarkan sumber aslinya */}
      {failed && (
        <a
          href="https://drive.google.com/file/d/1uhZsaWv8T73ygchYRQLCEhLqE-Bep1-S/view"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/85 text-center"
        >
          <span className="text-sm font-semibold text-white">
            Buka video di Google Drive
          </span>
          <span className="text-[12px] text-slate-400">
            Browser ini tidak mendukung formatnya
          </span>
        </a>
      )}
    </div>
  );
}
