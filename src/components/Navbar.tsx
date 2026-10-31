import { useEffect, useState } from "react";
import { navItems, site } from "@/data/site";
import { useActiveSection, useScrollY } from "@/hooks/useScroll";
import { cn } from "@/utils/cn";
import { CloseIcon, MenuIcon } from "./icons";

const sectionIds = navItems.map((n) => n.id);

export default function Navbar() {
  const scrollY = useScrollY();
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 24;

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong py-2.5" : "border-b border-transparent py-5",
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-[0.18em]"
          aria-label={`${site.name} — kembali ke atas`}
        >
          <span className="text-white transition-colors group-hover:text-electric">
            {site.logo}
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-electric transition-transform duration-300 group-hover:scale-150" />
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "group relative block px-4 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300",
                  active === item.id ? "text-white" : "text-slate-400 hover:text-white",
                )}
              >
                {item.label}
                <span
                  aria-hidden
                  className={cn(
                    "absolute bottom-0.5 left-4 h-px bg-electric transition-all duration-400",
                    active === item.id ? "w-[calc(100%-2rem)]" : "w-0 group-hover:w-[calc(100%-2rem)]",
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-electric hover:text-ink hover:shadow-[0_14px_34px_-12px_rgba(169,198,232,0.30)] sm:inline-flex"
          >
            Let&apos;s Collaborate
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white transition-colors hover:border-electric/50 lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden transition-[max-height,opacity,visibility] duration-500 lg:hidden",
          open
            ? "visible max-h-[560px] opacity-100"
            : "invisible max-h-0 opacity-0 lg:invisible",
        )}
      >
        <div className="glass-strong mx-4 mt-3 rounded-2xl p-4 sm:mx-8">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${i * 45}ms` : "0ms" }}
                  className={cn(
                    "flex items-center justify-between border-b border-white/5 py-3.5 font-display text-lg font-semibold transition-all duration-300 last:border-0",
                    active === item.id ? "text-electric" : "text-slate-200 hover:text-white",
                    open ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0",
                  )}
                >
                  {item.label}
                  <span className="text-xs text-slate-500">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center rounded-full bg-electric px-5 py-3 text-sm font-semibold text-white"
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
    </header>
  );
}
