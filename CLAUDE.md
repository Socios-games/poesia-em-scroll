# Poesia em Scroll

Feed infinito de poemas em português (PWA). A especificação completa está em `SPEC.md`; leia antes de mudar comportamento.

## Regras fixas da v1

- **Stack:** React + TypeScript com Vite. Scroll com CSS `scroll-snap` vertical, sem biblioteca de carrossel.
- **Nada de servidor próprio na v1.** Sem login, sem backend, sem banco remoto. Gosto e favoritos ficam no aparelho (IndexedDB). A rede só entra para atualizar o app e enviar eventos anônimos de analytics.
- **Acervo:** `src/data/poems.json`, seguindo exatamente o modelo de dados da SPEC (tipado em `src/types.ts`). O gancho aponta para versos do próprio poema, nunca para texto novo.
- **Direitos:** só autores mortos até 1955 e só o texto original em português (nada de traduções, notas de edições modernas ou seleção copiada de antologias).
- **Design:** o poema é o protagonista. Tema escuro padrão, serifada (EB Garamond) para poemas e sem serifa discreta para a interface. Respeitar `prefers-reduced-motion`.
- **Nada de pop-up, cadastro ou anúncio.**

## Como trabalhar

- Uma fatia do plano de execução (SPEC.md) por sessão, com um commit ao final.
- O dono do projeto está aprendendo: explique decisões de forma simples, em português.
- Antes de commitar: `npm run build` e `npm run lint` precisam passar.

## Comandos

- `npm run dev`: servidor de desenvolvimento (acessível na rede local)
- `npm run build`: checa tipos e gera a versão final em `dist/`
- `npm run lint`: verifica o código com oxlint
