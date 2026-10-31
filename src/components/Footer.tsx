import { links, navItems, site } from "@/data/site";
import { ArrowUp, DriveIcon, MailIcon, WhatsAppIcon } from "./icons";

export default function Footer() {
  const year = 2026;

  const quickLinks = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "Email", href: links.email, external: true },
    { label: "WhatsApp", href: links.whatsapp, external: true },
    { label: "Google Drive Portfolio", href: links.drive, external: true },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/8 pt-16 pb-8">
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-electric/12 blur-[160px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-display text-2xl font-extrabold tracking-[0.18em] text-white"
            >
              {site.logo}
              <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-electric align-super" />
            </a>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-slate-400">
              {site.role} — {site.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hubungi via WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-electric/50 hover:text-electric"
              >
                <WhatsAppIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={links.email}
                aria-label="Kirim email"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-electric/50 hover:text-electric"
              >
                <MailIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={links.drive}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Buka Google Drive Portfolio"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-electric/50 hover:text-electric"
              >
                <DriveIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Navigasi */}
          <nav aria-label="Navigasi footer">
            <p className="text-[10px] font-medium tracking-[0.26em] text-slate-500 uppercase">
              Navigasi
            </p>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group inline-flex items-center gap-2 text-[14px] text-slate-300 transition-colors hover:text-electric"
                  >
                    <span className="h-px w-0 bg-electric transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tautan cepat */}
          <div>
            <p className="text-[10px] font-medium tracking-[0.26em] text-slate-500 uppercase">
              Tautan Cepat
            </p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 text-[14px] text-slate-300 transition-colors hover:text-electric"
                  >
                    <span className="h-px w-0 bg-electric transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/8 pt-7 sm:flex-row">
          <p className="text-[12.5px] text-slate-500">
            © {year} {site.name}. All Rights Reserved.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 text-[12.5px] font-medium text-slate-400 transition-colors hover:text-electric"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-electric/50">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
