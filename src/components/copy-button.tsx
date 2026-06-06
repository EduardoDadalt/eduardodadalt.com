"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  value: string;
  copyLabel: string;
  copiedLabel: string;
  className?: string;
};

export default function CopyButton({
  value,
  copyLabel,
  copiedLabel,
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — no-op */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : copyLabel}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-border px-2 py-1 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/60 hover:text-foreground",
        className,
      )}
    >
      {copied ? (
        <Check className="size-3.5 text-term-green" />
      ) : (
        <Copy className="size-3.5" />
      )}
      {copied ? copiedLabel : copyLabel}
    </button>
  );
}
