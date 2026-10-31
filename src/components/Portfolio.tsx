import { useMemo, useState } from "react";
import { categories, portfolioNote, projects, type Project } from "@/data/site";
import { cn } from "@/utils/cn";
import { ArrowRight, CameraIcon, ExternalIcon, PlayIcon } from "./icons";
import Reveal from "./Reveal";
import { Chip, SectionHeading } from "./ui";
import VideoPlayer from "./VideoPlayer";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPlaceholder = project.kind === "placeholder";
  const isVideo = project.kind === "video";
  const isWide = project.span.includes("col-span-12");
  /** Karya video tanpa thumbnail gambar → pakai panel CSS bergaya motion. */
  const useCssPanel = isVideo && !project.thumbnail;

  return (
    <Reveal
      delay={(index % 3) * 90}
      className={cn("group flex", project.span)}
    >
      <article className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-navy-700/45 transition-all duration-500 hover:border-electric/40 hover:shadow-[0_30px_80px_-40px_rgba(169,198,232,0.23)]">
        <div
          className={cn(
            "relative overflow-hidden",
            // Karya video selalu 16:9 agar tidak ada pita hitam (letterbox)
            isWide && !isVideo ? "aspect-[16/9] lg:aspect-[21/9]" : "aspect-[16/9]",
          )}
        >
          {isVideo && project.videoUrl ? (
            /* Karya video asli — bisa diputar langsung di dalam situs */
            <VideoPlayer
              src={project.videoStreamUrl ?? project.videoUrl}
              fallbackSrc={project.videoUrl}
              label={`${project.title} — karya motion graphics Zidan Firstian Pandora`}
            />
          ) : useCssPanel ? (
            /* Panel motion graphics: gradasi pastel animasi, tanpa gambar */
            <div aria-hidden className="absolute inset-0 overflow-hidden bg-ink">
              <div className="mg-orb mg-orb-a" />
              <div className="mg-orb mg-orb-b" />
              <div className="mg-orb mg-orb-c" />
              <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_50%,transparent_30%,rgba(5,5,6,0.55)_100%)]" />
            </div>
          ) : (
            <img
              src={project.thumbnail}
              alt={
                isPlaceholder
                  ? `Thumbnail placeholder untuk ${project.title}`
                  : `${project.title} — hasil karya Zidan Firstian Pandora`
              }
              loading={index < 2 ? "eager" : "lazy"}
              decoding="async"
              width={project.imgWidth}
              height={project.imgHeight}
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]"
            />
          )}

          {/* Overlay: ringan agar foto tetap jelas, menguat saat hover */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/15 to-transparent transition-opacity duration-500 group-hover:from-navy/95"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-electric/8 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />

          {/* Label kategori + penanda jenis karya */}
          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-5">
            <span className="rounded-full border border-white/15 bg-navy-700/70 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-slate-200 uppercase backdrop-blur-md">
              {project.category}
            </span>
            {isVideo ? (
              <span className="flex items-center gap-1.5 rounded-full border border-pastel-pink/50 bg-pastel-pink/12 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-pastel-pink uppercase backdrop-blur-md">
                <PlayIcon className="h-3 w-3" />
                Video
              </span>
            ) : isPlaceholder ? (
              <span className="rounded-full border border-white/20 bg-navy-700/80 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-slate-300 uppercase backdrop-blur-md">
                Slot Video
              </span>
            ) : (
              <span className="flex items-center gap-1.5 rounded-full border border-pastel-mint/50 bg-pastel-mint/12 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-pastel-mint uppercase backdrop-blur-md">
                <CameraIcon className="h-3 w-3" />
                Foto Karya
              </span>
            )}
          </div>

          {/* Ikon di tengah saat hover */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 translate-y-3 scale-90 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
              {isPlaceholder ? (
                <PlayIcon className="ml-0.5 h-6 w-6" />
              ) : isVideo ? (
                <PlayIcon className="ml-0.5 h-7 w-7" />
              ) : (
                <CameraIcon className="h-6 w-6" />
              )}
            </span>
          </div>
        </div>

        {/* Info karya */}
        <div className="relative flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex items-center gap-2.5">
            <span className="h-1 w-1 rounded-full bg-electric" />
            <p className="text-[10.5px] font-medium tracking-[0.22em] text-electric-300 uppercase">
              {project.year}
            </p>
          </div>

          <h3 className="mt-2 font-display text-lg leading-snug font-bold text-white sm:text-xl">
            {project.title}
          </h3>
          <p className="mt-2.5 text-[13px] leading-relaxed text-slate-300/85 sm:text-sm">
            {project.description}
          </p>

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
            {/* Bila video bisa diputar inline, tombol utama tak diperlukan */}
            {!isVideo && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Buka karya: ${project.title} (Google Drive, tab baru)`}
                className="group/btn inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-semibold text-navy transition-all duration-300 hover:bg-electric hover:text-ink"
              >
                {isPlaceholder ? "Watch Project" : "View Project"}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
              </a>
            )}

            {!isPlaceholder && project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Lihat sumber foto asli: ${project.title} (Google Photos, tab baru)`}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-400 transition-colors hover:text-electric"
              >
                <ExternalIcon className="h-3.5 w-3.5" />
                Sumber foto
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  );

  return (
    <section
      id="portfolio"
      className="section-soft relative overflow-hidden border-t border-white/5 py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-pastel-lav/12 blur-[170px]"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Portfolio"
              title={
                <>
                  Selected Works<span className="text-electric">.</span>
                </>
              }
              subtitle="A collection of moments, ideas, and stories through my lens."
            />
          </Reveal>

          <Reveal delay={120} className="lg:pb-3">
            <a
              href="https://drive.google.com/drive/folders/1ixxwwiWVCywpuhSU8MahQZPXy_Q_9Las"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:border-electric/60 hover:bg-white/[0.07]"
            >
              <ExternalIcon className="h-4 w-4 text-electric" />
              Buka Folder Google Drive
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        {/* Filter kategori */}
        <Reveal delay={80}>
          <div
            role="group"
            aria-label="Filter kategori portofolio"
            className="mt-11 flex flex-wrap gap-2.5"
          >
            {categories.map((cat) => (
              <Chip
                key={cat}
                active={active === cat}
                onClick={() => setActive(cat)}
              >
                {cat}
              </Chip>
            ))}
          </div>
        </Reveal>

        {/* Filter kategori */}
        <Reveal delay={80}>
          <div
            role="group"
            aria-label="Filter kategori portofolio"
            className="mt-11 flex flex-wrap gap-2.5"
          >
            {categories.map((cat) => (
              <Chip key={cat} active={active === cat} onClick={() => setActive(cat)}>
                {cat}
              </Chip>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-6 max-w-3xl rounded-xl border-l-2 border-l-electric border-y border-r border-white/8 bg-white/[0.02] px-5 py-4 text-[13px] leading-relaxed text-slate-400">
            {portfolioNote}
          </p>
        </Reveal>

        {/* Grid portofolio */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-12">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-14 text-center text-sm text-slate-400">
            Belum ada karya pada kategori ini — untuk saat ini lengkapi lewat folder Google Drive.
          </p>
        )}
      </div>
    </section>
  );
}
