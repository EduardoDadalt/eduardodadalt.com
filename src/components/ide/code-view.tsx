import type { FileLanguage } from "@/content/files";
import { highlight, type Token, type TokenType } from "@/lib/highlight";
import clsx from "clsx";

const TOKEN_CLASSES: Record<TokenType, string> = {
  plain: "",
  comment: "text-dim italic",
  string: "text-accent",
  keyword: "text-pink",
  number: "text-amber",
  property: "text-cyan",
  constant: "text-violet",
};

function renderToken(token: Token, index: number) {
  if (token.href) {
    const quote = token.text[0];
    return (
      <span key={index} className={TOKEN_CLASSES.string}>
        {quote}
        <a
          href={token.href}
          target={token.href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="underline decoration-accent/40 underline-offset-[3px] hover:decoration-accent"
        >
          {token.href}
        </a>
        {quote}
      </span>
    );
  }
  return (
    <span key={index} className={TOKEN_CLASSES[token.type]}>
      {token.text}
    </span>
  );
}

export default function CodeView({
  source,
  language,
}: {
  source: string;
  language: FileLanguage;
}) {
  const lines = highlight(source, language);

  return (
    <pre className="pt-3.5 pb-10 font-mono text-[12.5px] leading-[1.7] md:text-[13.5px]">
      <code>
        {lines.map((tokens, index) => {
          // Recuo deslocado: linhas quebradas continuam alinhadas à indentação.
          const indent = (tokens[0]?.text.match(/^ */)?.[0].length ?? 0) + 2;
          return (
            <div key={index} className={clsx("flex", index === 0 && "bg-accent/5")}>
              <span
                aria-hidden
                className="w-11 shrink-0 pr-3 text-right text-gutter select-none md:w-14 md:pr-[18px]"
              >
                {index + 1}
              </span>
              <span
                className="min-w-0 flex-1 pr-6 break-words whitespace-pre-wrap md:pr-10"
                style={{ paddingLeft: `${indent}ch`, textIndent: `-${indent}ch` }}
              >
                {tokens.length ? tokens.map(renderToken) : " "}
              </span>
            </div>
          );
        })}
      </code>
    </pre>
  );
}
