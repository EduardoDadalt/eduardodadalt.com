import type { FileLanguage } from "@/content/files";

export type TokenType =
  | "plain"
  | "comment"
  | "string"
  | "keyword"
  | "number"
  | "property"
  | "constant";

export type Token = { type: TokenType; text: string; href?: string };

const KEYWORDS =
  "export|const|as|import|type|from|return|function|echo|true|false|null";

function pattern(language: FileLanguage) {
  const comment = language === "shell" ? String.raw`#.*$` : String.raw`\/\/.*$`;
  return new RegExp(
    [
      `(${comment})`,
      String.raw`("(?:[^"\\]|\\.)*")`,
      String.raw`\b(${KEYWORDS})\b`,
      String.raw`\b(\d+)\b`,
      String.raw`([A-Za-z_]\w*)(?=\s*[:=])`,
      String.raw`(\$?\b[A-Z][A-Z_]{2,}\b)`,
    ].join("|"),
    "gm",
  );
}

function classify(match: RegExpExecArray, source: string): Token {
  const [text, comment, string, keyword, number, property] = match;

  if (comment) return { type: "comment", text };
  if (string) {
    // Em JSON, strings seguidas de ":" são chaves.
    const isKey = /^\s*:/.test(source.slice(match.index + text.length));
    if (isKey) return { type: "property", text };
    const inner = text.slice(1, -1);
    const href = /^(https?:|mailto:)/.test(inner) ? inner : undefined;
    return { type: "string", text, href };
  }
  if (keyword) return { type: "keyword", text };
  if (number) return { type: "number", text };
  if (property) return { type: "property", text };
  return { type: "constant", text };
}

/** Quebra o código em linhas de tokens coloridos. */
export function highlight(source: string, language: FileLanguage): Token[][] {
  const tokens: Token[] = [];
  const re = pattern(language);
  let last = 0;

  for (let match = re.exec(source); match; match = re.exec(source)) {
    if (match.index > last) {
      tokens.push({ type: "plain", text: source.slice(last, match.index) });
    }
    tokens.push(classify(match, source));
    last = match.index + match[0].length;
  }
  if (last < source.length) {
    tokens.push({ type: "plain", text: source.slice(last) });
  }

  const lines: Token[][] = [[]];
  for (const token of tokens) {
    token.text.split("\n").forEach((part, index) => {
      if (index > 0) lines.push([]);
      if (part) lines[lines.length - 1].push({ ...token, text: part });
    });
  }
  return lines;
}
