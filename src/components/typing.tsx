"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TypingProps = {
  words: string[];
  className?: string;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * Typewriter that cycles through `words`. Renders the first word on the
 * server (so SSR + print show real text) and enhances on the client.
 */
export default function Typing({ words, className }: TypingProps) {
  const [text, setText] = useState(words[0] ?? "");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Reduced motion or a single title: keep the server-rendered initial text.
    if (prefersReducedMotion() || words.length <= 1) {
      return;
    }

    const current = words[index % words.length];

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), 1700);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }, 400);
      return () => clearTimeout(t);
    }

    const t = setTimeout(
      () => {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1),
        );
      },
      deleting ? 40 : 80,
    );
    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return (
    <span className={cn("blinking-cursor", className)} aria-label={words[0]}>
      {text}
    </span>
  );
}
