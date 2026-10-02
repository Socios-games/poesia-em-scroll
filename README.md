# Poesia em Scroll

Um feed infinito de poemas em português, um poema por tela. Veja a especificação em [SPEC.md](SPEC.md).

## Rodar no seu computador (Windows)

1. Instale o [Node.js](https://nodejs.org) (versão LTS) e o [Git](https://git-scm.com).
2. Abra o **PowerShell** e baixe o projeto:
   ```powershell
   git clone https://github.com/Socios-games/poesia-em-scroll.git
   cd poesia-em-scroll
   npm install
   ```
3. Rode o servidor de desenvolvimento:
   ```powershell
   npm run dev
   ```
4. Abra no navegador o endereço `Local:` que aparecer (normalmente `http://localhost:5173`).

## Abrir no celular pela rede local

1. O celular precisa estar no **mesmo Wi-Fi** que o computador.
2. Com o `npm run dev` rodando, procure a linha `Network:` no terminal, por exemplo `http://192.168.0.12:5173`.
3. Digite esse endereço no navegador do celular.
4. Se não abrir, o Firewall do Windows provavelmente está bloqueando. Na primeira vez que rodar, ele pergunta se quer permitir o Node.js: marque **Redes privadas** e confirme. Confira também se a sua rede Wi-Fi está marcada como **Privada** nas configurações do Windows.

## Colar os textos dos poemas

Os versos em `src/data/poems.json` são placeholders como `"[Título — estrofe 1, verso 1]"`. Para cada poema:

1. Busque o texto original no [Wikisource em português](https://pt.wikisource.org).
2. Substitua os versos (cada estrofe é uma lista de versos, entre colchetes). Ajuste o número de estrofes e versos se for diferente.
3. Preencha `fonte` com o link da página, confira o `gancho` (estrofe e versos, contando a partir de 0) e marque `"revisado": true`.
