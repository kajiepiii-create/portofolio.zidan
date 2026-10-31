import { goals } from "@/data/site";
import { useReducedMotion } from "@/hooks/useScroll";
import { ArrowRight } from "./icons";
import Reveal from "./Reveal";
import { ButtonLink, Eyebrow } from "./ui";

export default function Goals() {
  const reduced = useReducedMotion();

  return (
    <section
      id="goals"
      aria-label="Career Goals"
      className="grain relative overflow-hidden border-y border-white/5 py-24 lg:py-36"
    >
      {/* Background foto dokumentasi asli, diredam agar teks tetap kontras */}
      <div aria-hidden className="absolute inset-0">
        <img
          src={goals.background}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full scale-105 object-cover opacity-25 saturate-[0.8]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(5,5,6,0.93)_0%,rgba(10,10,12,0.86)_45%,rgba(10,10,12,0.6)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_50%,transparent_25%,rgba(5,5,6,0.6)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl">
          <Reveal>
            <Eyebrow>Career Goals</Eyebrow>
            <h2 className="mt-6 text-[2.6rem] leading-[1.02] font-extrabold sm:text-6xl lg:text-[4.5rem]">
              Every Frame Has a{" "}
              <span className="bg-gradient-to-r from-electric via-pastel-lav to-pastel-pink bg-clip-text text-transparent">
                Story.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-8 max-w-2xl text-[16px] leading-[1.85] text-slate-300/90 sm:text-lg">
              {goals.description}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="#contact">
                {goals.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </ButtonLink>
              <span className="text-[13px] text-slate-400">
                Terbuka untuk proyek, magang, maupun kolaborasi tim kreatif.
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {!reduced && (
        <div
          aria-hidden
          className="animate-float absolute top-1/2 right-10 hidden h-40 w-40 rounded-full border border-electric/25 lg:block"
        />
      )}
    </section>
  );
}
