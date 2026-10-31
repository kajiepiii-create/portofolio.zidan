import { useState } from "react";
import { links, site } from "@/data/site";
import { ArrowRight, ExternalIcon, MailIcon, WhatsAppIcon } from "./icons";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

type Status = "idle" | "error" | "ready";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (status !== "idle") setStatus("idle");
  };

  /**
   * CATATAN JUJUR: situs ini belum punya backend / layanan pengirim pesan.
   * Formulir TIDAK mengklaim "terkirim". Tombol hanya menyusun pesan
   * dan membuka WhatsApp (atau mailto) dengan isi yang sudah terisi.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    const text = `Halo Zidan, saya ${form.name.trim()}.\n\n${form.message.trim()}\n\nEmail saya: ${form.email.trim()}`;
    window.open(`${links.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setStatus("ready");
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[14.5px] text-white placeholder:text-slate-500 transition-colors duration-300 focus:border-electric/70 focus:bg-white/[0.05] focus:outline-none";

  return (
    <section
      id="contact"
      className="section-soft relative overflow-hidden border-t border-white/5 py-24 lg:py-32"
    >
      <div
        aria-hidden
        className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-pastel-pink/11 blur-[170px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title={
              <>
                Have a Project in Mind?<span className="text-electric">.</span>
              </>
            }
            subtitle="Let's connect and turn your ideas into meaningful visual stories."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          {/* ---------- Info kontak ---------- */}
          <Reveal delay={80}>
            <div className="flex h-full flex-col gap-4">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/[0.05]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-electric/35 bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-ink">
                  <WhatsAppIcon className="h-5.5 w-5.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium tracking-[0.26em] text-slate-500 uppercase">
                    WhatsApp
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-white sm:text-lg">
                    {site.whatsappDisplay}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-electric" />
              </a>

              <a
                href={links.email}
                className="group flex items-center gap-5 rounded-2xl border border-white/8 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/[0.05]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-electric/35 bg-electric/10 text-electric transition-colors group-hover:bg-electric group-hover:text-ink">
                  <MailIcon className="h-5.5 w-5.5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium tracking-[0.26em] text-slate-500 uppercase">
                    Email
                  </p>
                  <p className="mt-1 truncate font-display text-base font-bold break-all text-white sm:text-lg">
                    {site.email}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-electric" />
              </a>

              <a
                href={links.drive}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-dashed border-white/10 p-6 transition-all duration-500 hover:border-electric/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-electric">
                  <ExternalIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium tracking-[0.26em] text-slate-500 uppercase">
                    Arsip Karya
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-white sm:text-lg">
                    Google Drive Portfolio
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-electric" />
              </a>

              <div className="mt-auto rounded-2xl border border-white/8 bg-white/[0.02] p-6">
                <p className="text-[10px] font-medium tracking-[0.26em] text-slate-500 uppercase">
                  Sekitar Proyek
                </p>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-400">
                  Dokumentasi kegiatan, videografi, editing video, hingga kolaborasi konten
                  kreatif — tulis kebutuhan Anda dan kita diskusikan konsepnya.
                </p>
              </div>
            </div>
          </Reveal>

          {/* ---------- Formulir ---------- */}
          <Reveal delay={140}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-3xl p-6 sm:p-8 lg:p-9"
              aria-describedby="form-note"
            >
              <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                Kirim Pesan Cepat
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-slate-400">
                Isi form di bawah, lalu pesan akan dibuka otomatis di WhatsApp Anda.
              </p>

              <div className="mt-7 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] font-medium tracking-[0.2em] text-slate-400 uppercase"
                  >
                    Nama
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Nama lengkap Anda"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-medium tracking-[0.2em] text-slate-400 uppercase"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={form.email}
                    onChange={update("email")}
                    placeholder="nama@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-medium tracking-[0.2em] text-slate-400 uppercase"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Ceritakan kebutuhan proyek, dokumentasi, atau kolaborasi Anda…"
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="group relative mt-7 inline-flex w-full cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-full bg-electric px-7 py-4 text-sm font-semibold tracking-wide text-white shadow-[0_16px_40px_-14px_rgba(169,198,232,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-electric/90"
              >
                <span className="relative z-10 inline-flex items-center gap-2.5">
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span
                  aria-hidden
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
              </button>

              <div id="form-note" className="mt-5 space-y-2.5" aria-live="polite">
                {status === "error" && (
                  <p className="rounded-xl border border-amber-400/30 bg-amber-400/8 px-4 py-3 text-[13px] text-amber-200">
                    Mohon lengkapi nama, email, dan pesan terlebih dahulu.
                  </p>
                )}
                {status === "ready" && (
                  <p className="rounded-xl border border-electric/30 bg-electric/8 px-4 py-3 text-[13px] text-electric-300">
                    WhatsApp terbuka di tab baru dengan pesan yang sudah terisi. Jika tidak terbuka,
                    kirim manual ke {site.whatsappDisplay} atau email ke {site.email}.
                  </p>
                )}
                <p className="text-[12px] leading-relaxed text-slate-500">
                  Catatan: formulir ini belum terhubung ke layanan pengiriman pesan (backend), jadi
                  belum ada pesan yang benar-benar terkirim dari sini. Untuk memastikan pesan sampai,
                  gunakan tombol WhatsApp atau email di samping.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
