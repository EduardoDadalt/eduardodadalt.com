import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/content/links";
import { STACK } from "@/content/stack";
import type { FileSlug } from "@/content/files";
import type { Dictionary } from "@/dictionaries/types";
import getAge from "./get-age";

type Value = string | number | boolean | undefined | Value[] | object;
type Options = { keys: Record<string, string>; json?: boolean };

const MAX_WIDTH = 80;

/** Serializa um valor como literal TypeScript (ou JSON) indentado. */
function literal(value: Value, options: Options, level = 0): string {
  const indent = "  ".repeat(level + 1);
  const closing = "  ".repeat(level);
  const trailing = options.json ? "" : ",";

  if (typeof value === "string") return JSON.stringify(value);
  if (typeof value !== "object" || value === null) return String(value);

  if (Array.isArray(value)) {
    const items = value.map((item) => literal(item, options, level + 1));
    const isFlat = value.every((item) => typeof item !== "object");
    const inline = `[${items.join(", ")}]`;
    if (isFlat && closing.length + inline.length <= MAX_WIDTH - 20) {
      return inline;
    }
    if (isFlat) {
      const rows: string[] = [];
      for (const item of items) {
        const row = rows.at(-1);
        if (row !== undefined && indent.length + row.length + item.length + 2 <= MAX_WIDTH) {
          rows[rows.length - 1] = `${row}, ${item}`;
        } else {
          rows.push(item);
        }
      }
      return `[\n${rows.map((row) => indent + row).join(",\n")}${trailing}\n${closing}]`;
    }
    return `[\n${items.map((item) => indent + item).join(",\n")}${trailing}\n${closing}]`;
  }

  const entries = Object.entries(value)
    .filter(([, item]) => item !== undefined)
    .map(([key, item]) => {
      const name = options.keys[key] ?? key;
      const label = options.json ? JSON.stringify(name) : name;
      return `${indent}${label}: ${literal(item as Value, options, level + 1)}`;
    });
  return `{\n${entries.join(",\n")}${trailing}\n${closing}}`;
}

/** Gera o conteúdo de cada "arquivo" exibido no editor. */
export function buildSource(slug: FileSlug, dictionary: Dictionary): string {
  const { code, profile } = dictionary;
  const options: Options = { keys: code.keys };
  const ts = (value: Value) => literal(value, options);

  switch (slug) {
    case "about":
      return [
        `// ${code.comments.about}`,
        `export const eduardo = ${ts({
          name: "Eduardo Dadalt",
          role: profile.role,
          age: getAge(),
          location: profile.location,
          degree: profile.degree,
          bio: profile.bio,
        })} as const;`,
      ].join("\n");

    case "experience":
      return [
        `import type { Experience, Education } from "./types";`,
        "",
        `export const ${code.vars.experiences}: Experience[] = ${ts(dictionary.experience)};`,
        "",
        `// ${code.comments.educationNote}`,
        `export const ${code.vars.education}: Education[] = ${ts(dictionary.education)};`,
      ].join("\n");

    case "projects":
      return `export const ${code.vars.projects} = ${ts(
        dictionary.projects.map(({ name, stack, summary }) => ({
          name,
          stack,
          summary,
        })),
      )};`;

    case "stack":
      return literal(STACK, { ...options, json: true });

    case "contact":
      return [
        "#!/usr/bin/env bash",
        ...code.comments.contact.map((line) => `# ${line}`),
        "",
        `EMAIL="mailto:${EMAIL}"`,
        `GITHUB="${GITHUB_URL}"`,
        `LINKEDIN="${LINKEDIN_URL}"`,
        "",
        `echo "${code.contactEcho}"`,
      ].join("\n");
  }
}
