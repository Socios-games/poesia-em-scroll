# Poesia em Scroll — Especificação da v1

Oct 2, 2026 · @Eduardo Alves da Silva

## Visão geral

Um feed infinito de poemas em português, em tela cheia, que torna ler poesia tão envolvente quanto rolar uma rede social. A v1 é um site instalável (PWA), sem login e sem servidor próprio, feito para testar uma coisa: as pessoas voltam?

- **Problema:** ler poesia no celular hoje significa sites lentos, PDFs e anúncios. Os apps de poesia em scroll que existem são em inglês, com poesia anglófona.
- **Público inicial:** universitários, vestibulandos e jovens leitores que já consomem poesia nas redes sociais.
- **Proposta de valor:** o "só mais um poema". Cada tela abre no verso mais forte, e o feed aprende o gosto da pessoa em minutos.
- **Diferencial:** acervo em língua portuguesa, de Camões a Mário de Andrade, com ganchos escolhidos a dedo.

## Objetivos e métricas de sucesso

A v1 responde uma pergunta: as pessoas voltam sozinhas para ler poemas? O teste é com cerca de 30 conhecidos, durante duas semanas.

| Métrica | Como medir | Meta sugerida |
|---|---|---|
| Retenção no dia 14 | % de testadores que abrem o app no 14º dia ou depois | 30% ou mais |
| Poemas por sessão | média de poemas exibidos por sessão | 8 ou mais |
| Duração da sessão | mediana, em minutos | 4 min ou mais |
| Pulos rápidos | % de poemas pulados em menos de 2 s | caindo da 1ª para a 2ª semana |
| Favoritos | média por pessoa na 1ª semana | 5 ou mais |

As metas são palpites iniciais; o que mais importa é a tendência entre as duas semanas. Se a retenção no dia 14 ficar abaixo de 15%, revise o núcleo antes de somar funcionalidades.

## Escopo da v1

A v1 tem só o trio que cria o "só mais um": feed infinito, gancho e algoritmo que aprende. Todo o resto entra depois, guiado pelas métricas.

### Entra na v1

- Feed vertical infinito, um poema por tela, com encaixe ao deslizar
- Gancho: cada poema abre no verso mais forte; um toque mostra o poema inteiro
- Algoritmo de personalização simples, rodando no próprio aparelho
- Favoritar (toque duplo ou botão) e uma tela de favoritos
- Filtro por autor
- Escolha rápida de climas na primeira abertura, com opção de pular
- Funcionamento offline e instalação na tela inicial (PWA)
- Acervo inicial de cerca de 200 poemas em domínio público
- Eventos anônimos para medir as métricas

### Fica para depois

- Compartilhar trecho como imagem, poema do dia e sequência de dias (v1.1)
- Pintura de fundo combinando com o poema (v1.1)
- Contas, comentários e destaques coletivos (v1.2, exige servidor)
- Narração, glossário, contexto do autor e modo decorar (v2)
- Apps nas lojas: Android primeiro, iPhone por último (v2)

## Experiência do usuário

O feed é a única tela que importa; as demais ficam escondidas num menu discreto. Abrir o app leva direto ao feed, no ponto onde a pessoa parou.

### Telas

1. **Boas-vindas** (só na primeira vez): "Do que você está a fim?", com climas em botões grandes (melancolia, amor, saudade, morte e finitude, natureza, ironia, inquietação). A pessoa escolhe dois ou mais, ou toca em "Me surpreenda".
2. **Feed:** tela cheia, com o verso-gancho grande no centro e autor e ano pequenos embaixo. No canto, o coração de favorito e o ícone do menu.
3. **Poema aberto:** um toque expande o poema inteiro na mesma tela, com rolagem própria se for longo. O gancho fica destacado dentro do texto.
4. **Favoritos:** lista dos poemas salvos, do mais recente ao mais antigo, com busca por autor.
5. **Filtro por autor:** no menu; escolher um autor transforma o feed num feed só dele, até a pessoa limpar o filtro.

### Gestos

| Gesto | Ação |
|---|---|
| Deslizar para cima | próximo poema |
| Deslizar para baixo | poema anterior |
| Toque simples | abrir ou fechar o poema inteiro |
| Toque duplo | favoritar, com animação de coração |

### Regras

- O feed nunca acaba: se o acervo se esgotar, recomeça pelos poemas menos vistos.
- Nada de pop-up, cadastro ou anúncio na v1.

## Acervo

O acervo da v1 tem cerca de 200 poemas de autores mortos até 1955, cada um com os dados que o algoritmo precisa. No Brasil, os direitos patrimoniais duram 70 anos contados de 1º de janeiro do ano seguinte à morte do autor (Lei 9.610/98, art. 41).

### Autores candidatos (livres em 2026)

| Autor | Morreu em | Papel no feed |
|---|---|---|
| Luís de Camões | 1580 | sonetos de amor, a base da língua |
| Gregório de Matos | 1696 | sátira e humor, contraste no feed |
| Álvares de Azevedo | 1852 | romantismo sombrio, morte e tédio |
| Gonçalves Dias | 1864 | saudade e natureza |
| Castro Alves | 1871 | paixão e poesia social |
| Cesário Verde | 1886 | cenas da cidade |
| Cruz e Sousa | 1898 | simbolismo muito musical |
| Machado de Assis | 1908 | poemas pouco conhecidos, efeito "achado" |
| Augusto dos Anjos | 1914 | vocabulário científico, o mais diferente de todos |
| Olavo Bilac | 1918 | sonetos famosos, ganchos fortes |
| Florbela Espanca | 1930 | sonetos intensos |
| Fernando Pessoa e heterônimos | 1935 | o maior estoque de ganchos |
| Mário de Andrade | 1945 | modernismo, livre desde 2016 |
| Oswald de Andrade | 1954 | poemas-piada curtos, livre desde 2025 |

Ainda protegidos, fora da v1: Manuel Bandeira (livre em 2039), Cecília Meireles (2035), Drummond (2058), Vinicius de Moraes (2051), Cora Coralina (2056) e Mario Quintana (2065).

### Cuidados com direitos

- Use só o texto original em português: traduções e adaptações de obras em domínio público têm direitos do tradutor (art. 14).
- Monte a própria seleção: antologias modernas são protegidas pela escolha e organização dos textos (art. 7º, XIII).
- Notas, introduções e comentários de edições modernas também têm autor; fique só com o poema.
- Obras póstumas seguem o mesmo prazo (art. 41, parágrafo único), então o Pessoa publicado depois de 1935 também está livre.
- Onde buscar os textos: Wikisource em português e Portal Domínio Público. Registre a fonte de cada poema.

### Modelo de dados de um poema

```json
{
  "id": "augusto-dos-anjos-versos-intimos",
  "titulo": "Versos íntimos",
  "autor": "Augusto dos Anjos",
  "anoMorteAutor": 1914,
  "ano": 1912,
  "estrofes": [["verso 1", "verso 2", "verso 3", "verso 4"], ["..."]],
  "gancho": { "estrofe": 0, "versos": [0, 1] },
  "climas": ["melancolia", "ironia"],
  "temas": ["solidão", "ingratidão"],
  "tamanho": "curto",
  "fonte": "https://pt.wikisource.org/...",
  "revisado": true
}
```

Tamanho: curto até 14 versos, médio de 15 a 40, longo acima de 40. O gancho aponta para um ou dois versos do próprio poema, nunca para texto novo.

### Curadoria

A IA sugere gancho, climas e temas de cada poema; você revisa e marca `revisado: true` antes de publicar. É nessa revisão que mora a qualidade do feed, então vale começar pelos poemas que serão mais exibidos.

## Algoritmo do feed

O feed escolhe cada próximo poema somando a afinidade com o gosto da pessoa a uma dose de surpresa. Tudo roda no aparelho, sem servidor.

### Sinais e pesos

| Sinal | Peso | O que indica |
|---|---|---|
| Favoritou | +3 | gostou muito |
| Abriu o poema inteiro | +2 | o gancho funcionou |
| Voltou para reler | +1 | quis ler de novo |
| Ficou 8 s ou mais no gancho | +1 | leu com atenção |
| Pulou em menos de 2 s | −1 | não pegou |

Cada sinal soma seu peso a todos os atributos do poema no perfil: autor, climas, temas e tamanho.

### Como escolhe o próximo

1. A afinidade de um poema é a soma dos pesos dos seus atributos no perfil: `afinidade(p) = Σ w_x` para cada atributo `x` de `p`, onde `w_x` é o peso que o atributo acumulou no perfil da pessoa.
2. A cada 10 poemas, 7 vêm pela maior afinidade, 2 de atributos pouco vistos (exploração) e 1 é totalmente aleatório.
3. Nenhum poema visto nos últimos 7 dias volta, e o mesmo autor não aparece duas vezes seguidas.
4. Os pesos perdem 2% por dia, para o feed acompanhar as mudanças de gosto.

### Partida a frio

- Os climas escolhidos nas boas-vindas começam com peso +2.
- Sem escolha, os 10 primeiros poemas são uma seleção de entrada curada: climas e autores variados, todos com ganchos fortes.
- Com o filtro por autor ativo, a mistura 7-2-1 vale só dentro daquele autor.

Todos os números acima são pontos de partida, para ajustar olhando os eventos medidos.

## Arquitetura técnica

A v1 é um site estático: o acervo viaja junto com o app e o gosto da pessoa fica salvo no próprio aparelho. Sem servidor próprio, quase não há custo nem nada para manter. Depois de instalado, o feed funciona sem internet; a rede só entra para atualizar o app e enviar as métricas.

| Peça | Escolha sugerida | Por quê |
|---|---|---|
| Interface | React + TypeScript com Vite | rápido de montar, com muito material de apoio |
| Scroll | CSS scroll-snap vertical | encaixe nativo e leve, sem biblioteca |
| Acervo | `poems.json` dentro do app | 200 poemas pesam pouco |
| Gosto e favoritos | IndexedDB no aparelho | dispensa login na v1 |
| Offline e instalação | PWA com vite-plugin-pwa | funciona sem internet e vai para a tela inicial |
| Medição | PostHog, Umami ou similar | eventos anônimos; confira os planos gratuitos atuais |
| Hospedagem | Vercel, Netlify ou Cloudflare Pages | publica sozinho a cada push no GitHub |
| Depois: Android | Capacitor | reaproveita o mesmo código |

## Design visual

O poema é o protagonista e todo o resto quase desaparece. Se uma tela tiver dúvida entre mostrar mais ou menos, mostra menos.

- **Tipografia:** uma serifada elegante para os poemas (EB Garamond, Lora ou Cormorant, do Google Fonts) e uma sem serifa discreta para autor e menus.
- **Gancho:** letra grande (28 a 36 px no celular), poucas palavras por linha e muito espaço em volta.
- **Cores:** tema escuro como padrão, que favorece a leitura à noite, com tema claro opcional. Na v1, cada clima ganha um degradê suave de fundo; pinturas entram na v1.1.
- **Movimento:** transição de 200 a 300 ms ao trocar de poema, o gancho surgindo num fade leve e um coração animado no toque duplo.
- **Som:** desligado na v1; um som discreto de virar página fica como experimento futuro.
- **Acessibilidade:** contraste alto, respeito ao tamanho de fonte do sistema e à opção de reduzir movimento.

## Eventos e medição

Seis eventos anônimos bastam para calcular todas as métricas da v1. O campo de origem mostra se a mistura 7-2-1 do algoritmo está funcionando.

| Evento | Quando dispara | Dados enviados |
|---|---|---|
| `app_aberto` | ao abrir o app | id anônimo do aparelho, data e hora |
| `poema_exibido` | quando o poema entra na tela | id do poema, posição no feed, origem (afinidade, exploração ou aleatório) |
| `poema_expandido` | toque que abre o poema inteiro | id do poema, segundos até o toque |
| `poema_favoritado` | toque duplo ou botão | id do poema |
| `poema_pulado` | quando o poema sai da tela | id do poema, segundos na tela |
| `sessao_encerrada` | app vai para segundo plano | duração, número de poemas exibidos |

O id do aparelho é um código aleatório, sem nome, e-mail ou localização. Avise os testadores de que o app mede o uso de forma anônima.

## Roadmap

O roadmap tem quatro fases, e cada uma só começa quando a anterior bate a meta do seu portão. As metas dos portões são sugestões iniciais, para ajustar quando chegarem os primeiros números. Regras e taxas das lojas mudam com frequência, então confira-as antes da v2.

## Riscos e decisões em aberto

O maior risco é a novidade passar e ninguém voltar; os outros são contornáveis com curadoria e ajuste de números.

| Risco | Como aparece | Resposta |
|---|---|---|
| Ninguém volta depois da novidade | retenção no dia 14 abaixo de 15% | rever ganchos e seleção de entrada antes de somar funcionalidades |
| Feed repetitivo | pulos rápidos subindo na 2ª semana | aumentar a exploração e o acervo |
| Ganchos fracos | poucos poemas expandidos | revisar os ganchos à mão, começando pelos mais exibidos |
| Poema protegido por engano | autor morto depois de 1955, ou texto tirado de tradução ou antologia | conferir autor e fonte de cada poema antes de marcar como revisado |
| Desânimo no meio do caminho | v1 passando de 2 meses sem teste | cortar escopo, nunca adiar o teste |

### Decisões em aberto

- Nome do app
- Ortografia: atualizada (mais fácil de ler) ou original (mais fiel)
- Tema padrão: escuro ou claro
- Ter ou não um freio opcional de tempo de uso, e a partir de quando
- Ferramenta de analytics
- Lista final de climas das boas-vindas

## Plano de execução no Claude Code

Construa em fatias que funcionam de ponta a ponta, testando no celular a cada passo. Os passos 1 a 3 já entregam um feed que dá para mostrar a alguém.

1. Criar o projeto (Vite + React + TypeScript) e o repositório no GitHub.
2. Montar o `poems.json` com 20 poemas de teste, já no modelo de dados.
3. Feed em tela cheia com scroll-snap, mostrando gancho e autor.
4. Toque para expandir, toque duplo para favoritar e tela de favoritos.
5. Perfil local e algoritmo do feed (sinais, pesos e mistura 7-2-1).
6. Boas-vindas com climas e filtro por autor.
7. PWA: funcionamento offline e instalação na tela inicial.
8. Eventos de analytics.
9. Publicar na hospedagem e testar em celulares reais, Android e iPhone.
10. Ampliar o acervo para 200 poemas com curadoria.
11. Convidar os 30 testadores e acompanhar as métricas por duas semanas.

Uma fatia por sessão, com um commit no GitHub ao final de cada passo.
