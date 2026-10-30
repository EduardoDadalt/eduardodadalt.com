import type { Dictionary } from "@/dictionaries/types";

export default function TerminalPanel({ dictionary }: { dictionary: Dictionary }) {
  const { ui, terminal } = dictionary;

  return (
    <section
      aria-label={ui.terminal}
      className="hidden min-h-0 flex-col border-t border-line bg-side md:flex"
    >
      <div className="flex h-8 shrink-0 items-center gap-[22px] px-5 text-[11px] tracking-wider text-dim">
        <span className="py-[7px] text-bright shadow-[0_1px_0_var(--color-accent)]">
          {ui.terminal}
        </span>
        <span>{ui.problems}</span>
        <span>{ui.output}</span>
      </div>
      <pre className="overflow-auto px-5 pt-1 pb-3 font-mono">
        <span className="text-accent">❯</span> pnpm dev{"\n"}
        {"  "}
        <span className="text-cyan">▲ eduardodadalt.com</span>{" "}
        <span className="text-dim">— Next.js</span>
        {"\n  "}
        <span className="text-accent">✓</span> Ready —{" "}
        <span className="text-amber">{terminal.ready}</span>
        {"\n"}
        <span className="text-accent">❯</span> git log --oneline -1{"\n  "}
        <span className="text-amber">a1f9e2c</span>{" "}
        <span className="text-cyan">(HEAD -&gt; main)</span> {terminal.lastCommit}
        {"\n"}
        <span className="text-accent">❯</span>{" "}
        <span className="inline-block h-[15px] w-2 animate-blink bg-fg align-[-2px]" />
      </pre>
    </section>
  );
}
