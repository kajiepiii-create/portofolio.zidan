import { useState } from "react";
import { about, galleryShots, links, profileImage, profileReel } from "@/data/site";
import ProfileVideo from "./ProfileVideo";
import Reveal from "./Reveal";
import { ArrowRight, ExternalIcon } from "./icons";
import { ButtonLink, Eyebrow } from "./ui";

export default function About() {
  const [photoSrc, setPhotoSrc] = useState(profileImage.src);
  return (
    <section id="about" className="section-soft relative overflow-hidden border-t border-white/5 py-24 lg:py-32">
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-electric/14 blur-[150px]"
      />

      <div className="mx-auto grid max-w-[1400px] items-start gap-14 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20 lg:px-12">
        {/* ---------- Video profil + foto ---------- */}
        <Reveal className="relative mx-auto w-full max-w-md lg:sticky lg:top-28">
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] border border-white/8"
            />
            {/* Glow aksen di belakang bingkai */}
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-pastel-lav/14 blur-[90px]"
            />

            {/* Reel video profil — autoplay tanpa tombol */}
            <ProfileVideo
              src={profileReel.src}
              fallbackHref={profileReel.href}
              label={profileReel.label}
            />

            {/* Foto profil — kartu menumpuk di pojok kanan bawah */}
            <div className="absolute -right-3 -bottom-8 w-[42%] overflow-hidden rounded-2xl border border-white/12 bg-navy-700 shadow-[0_24px_60px_-24px_rgba(5,5,6,0.9)] sm:-right-5">
              <img
                src={photoSrc}
                alt={profileImage.alt}
                loading="lazy"
                decoding="async"
                width={1086}
                height={1448}
                onError={() => {
                  if (photoSrc !== profileImage.fallback) setPhotoSrc(profileImage.fallback);
                }}
                className="aspect-[3/4] w-full object-cover object-center brightness-[0.97] contrast-[1.02] saturate-[0.88]"
              />
            </div>
          </div>

          <div className="mt-12">
            {/* Kartu info glass */}
            <dl className="glass space-y-2.5 rounded-2xl p-5">
              {about.facts.slice(0, 2).map((f) => (
                <div key={f.label} className="flex items-baseline justify-between gap-4 text-[13px]">
                  <dt className="shrink-0 tracking-[0.14em] text-slate-400 uppercase">{f.label}</dt>
                  <dd className="text-right font-semibold text-white">{f.value}</dd>
                </div>
              ))}
            </dl>

            {/* Atribusi sumber video & foto */}
            <a
              href={profileReel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[11.5px] text-slate-500 transition-colors hover:text-electric"
            >
              <ExternalIcon className="h-3.5 w-3.5" />
              Video &amp; foto profil — Google Photos
            </a>
          </div>
        </Reveal>


        {/* ---------- Deskripsi ---------- */}
        <div className="pt-4 lg:pt-8">
          <Reveal>
            <Eyebrow>About Me</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-[3.4rem]">
              Behind The Visuals.
            </h2>
          </Reveal>

          <Reveal delay={90}>
            <div className="mt-8 space-y-5 text-[15px] leading-[1.85] text-slate-300/85 sm:text-[17px]">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-white/8 pt-9 sm:grid-cols-2">
              {about.facts.map((f) => (
                <div key={f.label} className="border-l border-electric/40 pl-4">
                  <dt className="text-[10px] font-medium tracking-[0.24em] text-slate-400 uppercase">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 font-display text-[15px] font-semibold text-white">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-11 flex flex-wrap gap-3.5">
              <ButtonLink href="#portfolio" variant="outline">
                Lihat Portofolio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink href={links.drive} variant="ghost" external>
                <span className="underline decoration-white/20 underline-offset-4">
                  Arsip karya di Google Drive
                </span>
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ---------- Strip foto dokumentasi asli ---------- */}
      <div className="mx-auto mt-20 max-w-[1400px] px-5 sm:px-8 lg:mt-24 lg:px-12">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="text-[11px] font-medium tracking-[0.3em] text-slate-500 uppercase">
              Behind The Lens — Dokumentasi Terpilih
            </p>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-slate-400 transition-colors hover:text-electric"
            >
              Lihat semua karya
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>

        <div className="mt-7 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {galleryShots.map((shot, i) => (
            <Reveal key={shot.src} delay={i * 110}>
              <a
                href="#portfolio"
                className="group relative block overflow-hidden rounded-2xl border border-white/8 bg-navy-700/50"
                aria-label={`Lihat karya: ${shot.caption}`}
              >
                <img
                  src={shot.src}
                  alt={shot.caption}
                  loading="lazy"
                  decoding="async"
                  width={1000}
                  height={667}
                  className="aspect-[3/2] w-full object-cover opacity-85 transition-all duration-[1100ms] ease-out group-hover:scale-[1.06] group-hover:opacity-100"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/10 to-transparent"
                />
                <span className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 text-[12px] font-medium text-slate-200">
                  <span className="h-1 w-1 rounded-full bg-electric" />
                  {shot.tag}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
