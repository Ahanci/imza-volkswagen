"use client";

import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

/**
 * Acernity UI tarzı "Text Generate Effect" — kelimeleri sırayla,
 * soldan sağa fade-in olarak gösterir. Hero başlıklarında kullanılır.
 *
 * Hydration güvenli: ilk server render'da animasyonsuz statik text döner,
 * useEffect sonrası client'ta animasyon başlar (mismatch riski yok).
 */
export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
  as: Tag = "h1",
  delay = 0,
}: {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "div" | "span";
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  useEffect(() => {
    setMounted(true);
  }, []);

  // Her kelime için harf sayısı toplamı (stagger için)
  const totalLetters = words.reduce((acc, w) => acc + w.text.length, 0);

  let letterIndex = 0;

  const renderWord = (word: { text: string; className?: string }, wi: number) => {
    const letters = Array.from(word.text);
    return (
      <span key={`word-${wi}`} className={cn("inline-block whitespace-nowrap", word.className)}>
        {letters.map((letter, li) => {
          const current = letterIndex++;
          return (
            <motion.span
              key={`letter-${wi}-${li}`}
              initial={{ opacity: 0, y: 8, filter: "blur(8px)" }}
              animate={mounted && inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{
                duration: 0.45,
                delay: delay + current * 0.035,
                ease: "easeOut",
              }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          );
        })}
        {wi < words.length - 1 && <span>&nbsp;</span>}
      </span>
    );
  };

  // Hydration-safe: ilk server render'da sadece text
  if (!mounted) {
    const fullText = words.map((w) => w.text).join(" ");
    return (
      <Tag
        ref={ref}
        className={cn("leading-snug tracking-tight", className)}
        aria-label={fullText}
        suppressHydrationWarning
      >
        {fullText}
      </Tag>
    );
  }

  return (
    <Tag
      ref={ref}
      className={cn("leading-snug tracking-tight", className)}
      aria-label={words.map((w) => w.text).join(" ")}
    >
      {words.map(renderWord)}
      <motion.span
        initial={{ opacity: 0 }}
        animate={mounted && inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: delay + totalLetters * 0.035 + 0.2 }}
        className={cn(
          "inline-block h-[0.9em] w-[3px] translate-y-[0.05em] bg-current align-middle",
          cursorClassName
        )}
        style={{ boxShadow: "0 0 12px currentColor" }}
      >
        <motion.span
          aria-hidden
          className="block h-full w-full bg-current"
          animate={mounted ? { opacity: [1, 0, 1] } : { opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.span>
    </Tag>
  );
};
