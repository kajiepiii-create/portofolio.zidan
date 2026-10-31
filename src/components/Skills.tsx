import { skills, tools } from "@/data/site";
import { iconMap } from "./icons";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-soft relative overflow-hidden border-t border-white/5 py-24 lg:py-32"
    >
      <div aria-hidden className="grid-lines absolute inset-0 opacity-30" />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/3 h-[520px] w-[520px] rounded-full bg-pastel-peach/10 blur-[170px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Skills & Tools"
            title={
              <>
                My Creative Toolkit<span className="text-electric">.</span>
              </>
            }
            subtitle="Keahlian dan perangkat yang saya gunakan untuk mengubah rekaman menjadi cerita."
          />
        </Reveal>

        {/* ---- Keahlian ---- */}
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            const Icon = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <li key={skill.name}>
                <Reveal delay={i * 80} className="h-full">
                  <article className="group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-electric/40 hover:bg-white/[0.05] sm:p-7">
                    <div
                      aria-hidden
                      className="absolute inset-x-0 -bottom-24 h-32 bg-pastel-lav/16 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-electric transition-colors duration-500 group-hover:border-electric/50 group-hover:bg-electric/10">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-5 font-display text-lg font-bold text-white">
                      {skill.name}
                    </h3>
                    <p className="relative mt-2 text-[13.5px] leading-relaxed text-slate-400">
                      {skill.desc}
                    </p>
                  </article>
                </Reveal>
              </li>
            );
          })}

          {/* Kartu kisi halus sebagai penyeimbang grid 3 kolom */}
          <li>
            <Reveal delay={skills.length * 80} className="h-full">
              <div className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-white/10 p-7">
                <p className="font-display text-[15px] font-semibold text-white">
                  Selalu terbuka belajar tool baru.
                </p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
                  Premiere Pro, DaVinci Resolve, dan software lain siap saya pelajari sesuai
                  kebutuhan proyek.
                </p>
              </div>
            </Reveal>
          </li>
        </ul>

        {/* ---- Software ---- */}
        <Reveal delay={120}>
          <div className="mt-16">
            <p className="text-[11px] font-medium tracking-[0.3em] text-slate-500 uppercase">
              Software
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {tools.map((tool, i) => (
                <Reveal key={tool.name} delay={i * 90}>
                  <article className="group flex items-center gap-5 rounded-2xl border border-white/8 bg-gradient-to-r from-white/[0.04] to-transparent p-5 transition-all duration-500 hover:border-electric/40 hover:from-electric/[0.08] sm:p-6">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-navy-700 font-display text-xl font-bold text-electric ring-1 ring-white/10 transition-all duration-500 group-hover:ring-electric/60">
                      {tool.mark}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-bold text-white sm:text-lg">
                        {tool.name}
                      </h3>
                      <p className="mt-0.5 text-[13px] text-slate-400">{tool.desc}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
