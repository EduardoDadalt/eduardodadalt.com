import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TerminalWindowProps = {
  title?: string;
  headerRight?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

/** A card chromed like a terminal / code-editor window. */
export default function TerminalWindow({
  title,
  headerRight,
  children,
  className,
  bodyClassName,
}: TerminalWindowProps) {
  return (
    <div
      className={cn(
        "break-avoid overflow-hidden rounded-xl border border-border bg-card shadow-sm",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-terminal-bar/70 px-4 py-2.5">
        <span className="flex gap-1.5 print:hidden" aria-hidden="true">
          <span className="size-3 rounded-full bg-[var(--terminal-dot-1)]" />
          <span className="size-3 rounded-full bg-[var(--terminal-dot-2)]" />
          <span className="size-3 rounded-full bg-[var(--terminal-dot-3)]" />
        </span>
        {title ? (
          <span className="truncate font-mono text-xs text-muted-foreground sm:ml-2">
            {title}
          </span>
        ) : null}
        {headerRight ? <span className="ml-auto">{headerRight}</span> : null}
      </div>
      <div className={cn("p-5 sm:p-6", bodyClassName)}>{children}</div>
    </div>
  );
}
