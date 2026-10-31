import { achievements } from "@/data/site";
import { AwardIcon } from "./icons";
import Reveal from "./Reveal";
import { Eyebrow } from "./ui";

export default function Achievement() {
  return (
    <section
      id="achievement"
      aria-label="Achievement"
      className="section-soft relative overflow-hidden border-t border-white/5 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-center lg:gap-16">
          <Reveal>
            <Eyebrow>Achievement</Eyebrow>
            <h2 className="mt-5 text-4xl leading-[1.05] font-extrabold sm:text-5xl">
              Milestones<span className="text-electric">.</span>
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <article className="group relative flex h-full items-start gap-5 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-electric/40 sm:p-7">
                  <div
                    aria-hidden
                    className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-pastel-lav/14 blur-3xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60"
                  />
                  <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-electric/35 bg-electric/10 text-electric">
                    <AwardIcon className="h-5.5 w-5.5" />
                  </span>
                  <div className="relative">
                    <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-electric-300">{a.event}</p>
                    <p className="mt-2 text-[13px] text-slate-400">{a.category}</p>
                  </div>
                </article>
              </Reveal>
            ))}

            {/* Kartu pengisi agar grid seimbang & tidak mendominasi */}
            <Reveal delay={200}>
              <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-white/10 p-6 sm:p-7">
                <p className="text-[10px] tracking-[0.24em] text-slate-500 uppercase">
                  Next Milestone
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-400">
                  Terus belajar dan berkarya — prestasi berikutnya sedang dalam proses.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
