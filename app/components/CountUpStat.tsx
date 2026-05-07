"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

export type CountUpStatProps = {
  end: number;
  suffix: "+" | "%";
  durationMs?: number;
  /** Ms to wait after the block enters the viewport before counting (for stagger). */
  delayMs?: number;
};

export function CountUpStat({
  end,
  suffix,
  durationMs = 2200,
  delayMs = 0,
}: CountUpStatProps) {
  const ref = useRef<HTMLElement>(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setValue(end);
      return;
    }

    let raf = 0;
    let cancelled = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.some((e) => e.isIntersecting);
        if (!hit || cancelled) return;
        observer.disconnect();

        const startCount = performance.now() + delayMs;

        const tick = (now: number) => {
          if (cancelled) return;
          const elapsed = now - startCount;
          if (elapsed < 0) {
            raf = requestAnimationFrame(tick);
            return;
          }
          const t = Math.min(elapsed / durationMs, 1);
          setValue(Math.round(easeOutCubic(t) * end));
          if (t < 1) {
            raf = requestAnimationFrame(tick);
          }
        };

        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.25, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [delayMs, durationMs, end]);

  return (
    <strong ref={ref}>
      {value}
      {suffix}
    </strong>
  );
}
