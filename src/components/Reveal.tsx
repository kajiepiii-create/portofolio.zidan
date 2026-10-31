import type { ElementType, ReactNode } from "react";
import { useInView } from "@/hooks/useScroll";
import { cn } from "@/utils/cn";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay animasi dalam ms */
  delay?: number;
  as?: ElementType;
  id?: string;
  "aria-label"?: string;
};

/** Membungkus konten agar muncul dengan efek fade + slide saat masuk viewport. */
export default function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  ...rest
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", inView && "is-visible", className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
