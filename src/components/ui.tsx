import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

/* ------------------------------- EYEBROW ------------------------------ */

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 text-[11px] font-medium tracking-[0.32em] text-electric-400 uppercase",
        className,
      )}
    >
      <span className="h-px w-8 bg-electric/70" aria-hidden />
      {children}
    </span>
  );
}

/* ---------------------------- SECTION HEADING ------------------------- */

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div className={cn("max-w-3xl", centered && "mx-auto text-center", className)}>
      <Eyebrow className={centered ? "justify-center" : undefined}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-slate-300/85 sm:text-lg",
            centered && "mx-auto max-w-2xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* -------------------------------- BUTTON ------------------------------ */

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "outline";
  external?: boolean;
  className?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

const buttonBase =
  "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 will-change-transform";

const variants = {
  primary:
    "bg-electric text-ink shadow-[0_16px_40px_-14px_rgba(169,198,232,0.28)] hover:-translate-y-0.5 hover:bg-electric/90 hover:shadow-[0_22px_50px_-14px_rgba(169,198,232,0.31)]",
  outline:
    "border border-white/18 bg-white/[0.03] text-white backdrop-blur-sm hover:-translate-y-0.5 hover:border-electric/60 hover:bg-white/[0.07]",
  ghost: "text-slate-200 hover:text-electric",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(buttonBase, variants[variant], className)}
      {...rest}
    >
      <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
    </a>
  );
}

/* ------------------------------ BADGE/CHIP ---------------------------- */

export function Chip({
  children,
  active = false,
  ...rest
}: { children: ReactNode; active?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "cursor-pointer rounded-full border px-4.5 py-2 text-[13px] font-medium transition-all duration-300",
        active
          ? "border-electric bg-electric text-ink shadow-[0_10px_28px_-12px_rgba(169,198,232,0.30)]"
          : "border-white/12 bg-white/[0.02] text-slate-300 hover:border-electric/50 hover:bg-white/[0.06] hover:text-white",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
