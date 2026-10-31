import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { useReducedMotion } from "@/hooks/useScroll";
import { cn } from "@/utils/cn";

type Phase = "in" | "out" | "done";

/**
 * Layar intro sinematik — tampil sekali saat website pertama dibuka.
 *
 * Koreografi:
 *   1. Bingkai film + hitung mundur ala kamera muncul
 *   2. Huruf "ZIDAN" terungkap dari balik masker (clip-path), bukan sekadar naik
 *   3. Garis aksen merentang, lalu label peran terungkap per kata
 *   4. Sorot cahaya menyapu teks (shine sweep)
 *   5. Tirai terbelah dua secara diagonal, halaman tersingkap
 *
 * Aksesibilitas & performa:
 * - `prefers-reduced-motion` → intro dilewati seluruhnya.
 * - Hanya transform/opacity/clip-path yang dianimasikan (GPU-friendly).
 * - `sessionStorage` → tidak diulang dalam satu sesi browser.
 * - Scroll dikunci selama intro berlangsung.
 */
export default function Intro() {
  const reduced = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("in");

  useEffect(() => {
    if (reduced) setPhase("done");
  }, [reduced]);

  /* Jangan tampilkan ulang dalam sesi yang sama. */
  useEffect(() => {
    if (phase !== "in") return;
    try {
      if (sessionStorage.getItem("zp-intro") === "1") setPhase("done");
    } catch {
      /* sessionStorage bisa diblokir — abaikan. */
    }
  }, [phase]);

  /* Kunci scroll selama intro tampil. */
  useEffect(() => {
    document.body.style.overflow = phase === "done" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  /* Mulai keluar setelah koreografi selesai. */
  useEffect(() => {
    if (reduced || phase !== "in") return;
    const t = window.setTimeout(() => setPhase("out"), 2350);
    return () => window.clearTimeout(t);
  }, [reduced, phase]);

  /* Tandai selesai + simpan penanda sesi. */
  useEffect(() => {
    if (phase !== "out") return;
    const t = window.setTimeout(() => {
      setPhase("done");
      try {
        sessionStorage.setItem("zp-intro", "1");
      } catch {
        /* abaikan */
      }
    }, 1100);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  const letters = site.logo.split("");
  const roles = ["Videographer", "Video Editor", "Visual Storyteller"];
  const leaving = phase === "out";

  return (
    <div aria-hidden className="fixed inset-0 z-200 overflow-hidden">
      {/* ── Tirai belah diagonal: panel atas & bawah terpisah ── */}
      <div className={cn("absolute inset-0 flex flex-col", leaving && "zp-split")}>
        <div className="zp-panel zp-panel-top flex-1 bg-ink" />
        <div className="zp-panel zp-panel-bottom flex-1 bg-ink" />
      </div>

      {/* ── Isi intro ── */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center px-6",
          leaving && "zp-content-leave",
        )}
      >
        {/* Glow pastel yang bernapas */}
        <div className="zp-glow absolute inset-0" />
        {/* Vinyet agar fokus ke tengah */}
        <div className="zp-vignette absolute inset-0" />
        {/* Sorot cahaya menyapu */}
        <div className="zp-sheen absolute inset-0" />

        {/* Bingkai film ala kamera */}
        <div className="zp-frame absolute inset-5 sm:inset-8">
          <span className="zp-frame-corner absolute top-0 left-0" />
          <span className="zp-frame-corner absolute top-0 right-0" />
          <span className="zp-frame-corner absolute bottom-0 left-0" />
          <span className="zp-frame-corner absolute bottom-0 right-0" />
        </div>

        <div className="relative flex flex-col items-center">
          {/* Penanda rekaman */}
          <div
            className="zp-rec mb-7 flex items-center gap-2"
            style={{ animationDelay: "80ms" }}
          >
            <span className="zp-rec-dot h-1.5 w-1.5 rounded-full bg-pastel-pink" />
            <span className="text-[9px] font-medium tracking-[0.3em] text-white/60 uppercase">
              Rec
            </span>
          </div>

          {/* Logo — terungkap dari balik masker */}
          <div className="flex overflow-hidden">
            {letters.map((ch, i) => (
              <span
                key={`${ch}-${i}`}
                className="zp-letter font-display text-[15vw] leading-none font-extrabold tracking-[0.14em] sm:text-[7.5rem]"
                style={{ animationDelay: `${380 + i * 95}ms` }}
              >
                {ch}
              </span>
            ))}
          </div>

          {/* Garis aksen merentang dari tengah */}
          <span className="zp-line mt-7 block h-px" />

          {/* Label peran — terungkap per kata */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {roles.map((role, i) => (
              <span
                key={role}
                className="zp-role inline-flex items-center gap-3 text-[9.5px] font-medium tracking-[0.28em] text-slate-300 uppercase sm:text-[11px]"
                style={{ animationDelay: `${1150 + i * 130}ms` }}
              >
                {role}
                {i < roles.length - 1 && (
                  <span aria-hidden className="h-1 w-1 rounded-full bg-electric/80" />
                )}
              </span>
            ))}
          </div>

          {/* Penghitung frame — detail khas videografi */}
          <p
            className="zp-counter mt-9 font-mono text-[9px] tracking-[0.3em] text-slate-500 uppercase"
            style={{ animationDelay: "1500ms" }}
          >
            00 · 00 · 24 FPS
          </p>
        </div>
      </div>
    </div>
  );
}
