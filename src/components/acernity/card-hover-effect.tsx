"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Acernity UI "Card Hover Effect" — fare imleci kartın üzerinde gezdikçe
 * hareket eden radial gradient highlight gösterir.
 *
 * Hydration güvenli: ilk render'da spotlight render edilmez,
 * useEffect sonrası client'ta mount olunca spotlight eklenir.
 */
export const CardHoverEffect = ({
  children,
  className,
  containerClassName,
  spotlightColor = "rgba(37, 99, 235, 0.25)", // vag-blue %25
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  spotlightColor?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  // Hook sırası korunmalı: tüm hooks return öncesi çağrılmalı
  // useMotionTemplate'i burada çağırıp style'a bağla (her render aynı sıra)
  const spotlightBackground = useMotionTemplate`
    radial-gradient(
      400px circle at ${mouseX}px ${mouseY}px,
      ${spotlightColor},
      transparent 80%
    )
  `;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const { left, top } = el.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    },
    [mouseX, mouseY]
  );

  // Mount sonrası spotlight merkezi + state guard
  useEffect(() => {
    setMounted(true);
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "group/spotlight relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950",
        containerClassName
      )}
      suppressHydrationWarning
    >
      {mounted && (
        <motion.div
          className="pointer-events-none absolute -inset-px z-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover/spotlight:opacity-100"
          style={{ background: spotlightBackground }}
        />
      )}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
