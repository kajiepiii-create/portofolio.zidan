import { timeline } from "@/data/site";
import { BriefcaseIcon, GraduationIcon } from "./icons";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const typeIcon = {
  Profesional: BriefcaseIcon,
  Pendidikan: GraduationIcon,
} as const;

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-soft relative overflow-hidden border-t border-white/5 py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="absolute top-1/4 -left-40 h-[520px] w-[520px] rounded-full bg-pastel-mint/10 blur-[160px]"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title={
              <>
                Experience &amp; Journey<span className="text-electric">.</span>
              </>
            }
            subtitle="Perjalanan belajar, bekerja, dan berkembang di dunia visual."
          />
        </Reveal>

        <ol className="relative mt-16 max-w-4xl space-y-10 lg:mt-20">
          {/* garis vertikal */}
          <span
            aria-hidden
            className="absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-electric via-pastel-lav/45 to-transparent sm:left-[23px]"
          />

          {timeline.map((item, i) => {
            const Icon = typeIcon[item.type as keyof typeof typeIcon] ?? BriefcaseIcon;
            return (
              <li key={item.title}>
                <Reveal delay={i * 110}>
                  <div className="flex gap-5 sm:gap-8">
                    {/* Node */}
                    <div className="relative z-10 shrink-0">
                      <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-electric/40 bg-navy sm:h-12 sm:w-12">
                        <Icon className="h-4.5 w-4.5 text-electric sm:h-5 sm:w-5" />
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-full bg-electric/25 opacity-0 transition-opacity duration-500 hover:opacity-100"
                        />
                      </span>
                    </div>

                    {/* Kartu */}
                    <article className="group flex-1 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-electric/35 hover:bg-white/[0.04] sm:p-8">
                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={
                            item.type === "Pendidikan"
                              ? "rounded-full border border-white/12 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-slate-300 uppercase"
                              : "rounded-full border border-electric/35 bg-electric/10 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-electric-300 uppercase"
                          }
                        >
                          {item.type}
                        </span>
                        <span className="text-[11px] tracking-[0.22em] text-slate-500 uppercase">
                          {item.period}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-medium text-electric-300">{item.role}</p>
                      <p className="mt-4 max-w-2xl text-[14.5px] leading-[1.8] text-slate-300/85">
                        {item.description}
                      </p>

                      {item.tags.length > 0 && (
                        <ul className="mt-6 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[11.5px] text-slate-400"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      )}
                    </article>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
