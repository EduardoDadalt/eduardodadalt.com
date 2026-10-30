# eduardodadalt.com

Portfólio pessoal do Eduardo Dadalt, desenhado como uma IDE: o `README.md` é a página inicial e cada seção é um "arquivo" (`sobre.ts`, `experiencia.ts`, `projetos.ts`, `stack.json`, `contato.sh`) com código gerado a partir dos dicionários.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- Tailwind CSS 4
- i18n por rota (`/pt`, `/en`) com detecção de idioma em `src/proxy.ts`

## Desenvolvimento

```bash
pnpm install
pnpm dev
```

## Estrutura

- `src/dictionaries/` — textos e dados em PT/EN
- `src/content/` — arquivos do explorer, links e stack
- `src/lib/source.ts` — gera o código exibido em cada arquivo
- `src/lib/highlight.ts` — syntax highlight simples
- `src/components/ide/` — activity bar, explorer, abas, terminal e status bar
