"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

/**
 * Acernity UI tarzı arka plan gradyan animasyonu.
 * Renkler prop ile özelleştirilebilir.
 *
 * Hydration güvenli: ilk server render'da statik gradient,
 * mount sonrası client'ta hareketli motion.div'ler başlar.
 *
 * Kullanım:
 *   <BackgroundGradient className="opacity-30">
 *     <div>...içerik...</div>
 *   </BackgroundGradient>
 */
export const BackgroundGradient = ({
  children,
  className,
  gradientBackgroundStart = "rgb(30, 58, 95)",      // vag-navy
  gradientBackgroundEnd = "rgb(37, 99, 235)",       // vag-blue
  firstColor = "220, 38, 38",                       // vag-red
  secondColor = "37, 99, 235",                      // vag-blue
  thirdColor = "30, 58, 95",                        // vag-navy
  fourthColor = "234, 179, 8",                      // yellow-500
  fifthColor = "22, 163, 74",                       // green-600
  pointerColor = "220, 38, 38",
  size = "80%",
  blendingValue = "hard-light",
  childrenClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: React.CSSProperties["mixBlendMode"];
  childrenClassName?: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "relative isolate flex w-full flex-col items-center justify-center overflow-hidden rounded-2xl",
        className
      )}
      style={{
        background: `linear-gradient(40deg, ${gradientBackgroundStart}, ${gradientBackgroundEnd})`,
      }}
      suppressHydrationWarning
    >
      {/* Statik gradient katmanları (her zaman render) */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-60 mix-blend-hard-light"
          style={{
            background: `radial-gradient(${size} circle at 50% 50%, rgb(${firstColor}) 0, transparent 60%)`,
          }}
        />
        {/* Hareket eden katmanlar sadece mount sonrası */}
        {mounted && (
          <>
            <motion.div
              className="absolute inset-0 opacity-70 mix-blend-soft-light"
              animate={{ x: ["0%", "20%", "-10%", "0%"], y: ["0%", "10%", "-5%", "0%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: `radial-gradient(${size} circle at 30% 70%, rgb(${secondColor}) 0, transparent 60%)`,
              }}
            />
            <motion.div
              className="absolute inset-0 opacity-70 mix-blend-soft-light"
              animate={{ x: ["0%", "-20%", "10%", "0%"], y: ["0%", "-10%", "5%", "0%"] }}
              transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: `radial-gradient(${size} circle at 70% 30%, rgb(${thirdColor}) 0, transparent 60%)`,
              }}
            />
            <motion.div
              className="absolute inset-0 opacity-60 mix-blend-hard-light"
              animate={{ x: ["0%", "15%", "-15%", "0%"], y: ["0%", "-15%", "15%", "0%"] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: `radial-gradient(${size} circle at 80% 80%, rgb(${fourthColor}) 0, transparent 60%)`,
              }}
            />
            <motion.div
              className="absolute inset-0 opacity-50 mix-blend-soft-light"
              animate={{ x: ["0%", "-10%", "10%", "0%"], y: ["0%", "5%", "-10%", "0%"] }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
              style={{
                background: `radial-gradient(${size} circle at 20% 30%, rgb(${fifthColor}) 0, transparent 60%)`,
              }}
            />
          </>
        )}
        {/* Fare imleci vurgusu — sadece client */}
        {mounted && (
          <motion.div
            className="absolute inset-0 opacity-80 mix-blend-overlay"
            style={{
              background: `radial-gradient(40% 40% at var(--mx,50%) var(--my,50%), rgb(${pointerColor}) 0, transparent 70%)`,
            }}
          />
        )}
      </div>
      {children && <div className={cn("relative z-10", childrenClassName)}>{children}</div>}
    </div>
  );
};
