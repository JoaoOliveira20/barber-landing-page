# Design system — Barbearia do Kelvin

A fonte de verdade visual passou a ser `references/stitch-export-referencia.html`
— o HTML puro exportado do Stitch, com todas as seções da página. Ele
substitui o print (`layout-desktop-aprovado.png`) como referência principal:
onde os dois divergirem, **o HTML vence**. O print continua útil pra
conferir composição geral, mas valor exato de cor, tipografia, espaçamento,
raio e sombra vêm do HTML.

## Cor

```css
--tinta:         #14293F;  /* fundo dominante */
--fumo:          #21384F;  /* superfície elevada — faixa de fatos */
--papel:         #EDE6D6;  /* fundo creme, texto sobre azul */
--papel-cartao:  #F4EFE6;  /* fundo do quadro de preços — mais claro que --papel */
--papel-destaque:#E9E2D2;  /* linha "mais pedido" dentro do quadro de preços */
--carvao:        #1A1714;  /* texto sobre creme, cor padrão de sombra e borda */
--vermelho:      #C0342B;  /* única cor de ação — botões que levam ao WhatsApp */
--mostarda:      #E0A526;  /* uso único: a palavra "Sem frescura" no hero */
```

Regra de uso do vermelho: só em elemento clicável que leva ao WhatsApp.
Preço, tag, link secundário e pin de mapa usam a cor de texto padrão do
fundo em que estão.

Regra de uso da mostarda: só na palavra "Sem frescura" no hero. Em nenhum
outro lugar da página.

## Tipografia

Duas famílias via Google Fonts (`display=swap`, subset latin): **Bevan**
para título/preço, **Libre Franklin** para corpo/label/botão. Bevan nunca
em parágrafo nem em botão pequeno de navegação.

Escala nomeada (tamanho / altura de linha / tracking / peso). Só o token
`display` muda de tamanho por breakpoint (via `clamp`, sem salto); todos os
outros são fixos em qualquer largura:

| Token            | Fonte          | Mobile → Desktop | Line-height | Tracking | Peso |
|---|---|---|---|---|---|
| `display`        | Bevan          | 32px → 48px (clamp) | ~1.15   | 0.01em   | 400  |
| `headline-lg`     | Bevan          | 32px             | 40px       | 0.01em   | 400  |
| `headline-md`     | Bevan          | 22px             | 28px       | 0.01em   | 400  |
| `headline-sm`     | Bevan          | 18px             | 24px       | 0.02em   | 400  |
| `price-display`   | Bevan          | 28px             | 32px       | -0.01em  | 400  |
| `title-md`        | Libre Franklin | 16px             | 22px       | 0.04em   | 700  |
| `body-lg`         | Libre Franklin | 16px             | 24px       | 0em      | 400  |
| `body-md`         | Libre Franklin | 14px             | 20px       | 0em      | 400  |
| `label-lg`        | Libre Franklin | 13px             | 16px       | 0.08em   | 700  |
| `label-sm`        | Libre Franklin | 11px             | 14px       | 0.06em   | 600  |

`display` é usado tanto no `<h1>` do hero quanto nos títulos de seção — os
dois têm o mesmo tamanho, o hero não é maior. `headline-lg` é usado sem
variação por breakpoint (nome do barbeiro, título da galeria/depoimentos).

## Espaçamento e largura

Escala de espaçamento = escala padrão do Tailwind (4px por unidade), sem
token customizado: `xxs`=1 (4px), `xs`=2 (8px), `sm`=3 (12px), `md`=4
(16px), `lg`=6 (24px), `xl`=8 (32px), `2xl`=12 (48px), `3xl`=16 (64px).

- Container principal: `max-width: 1200px`, padding lateral 16px mobile /
  40px desktop (`px-4 lg:px-10`).
- Quadro de preços: `max-width: 960px` (mais estreito que o container
  principal).
- CTA final: `max-width: 800px`.
- Padding vertical por seção:
  - Hero: 32px mobile / 64px desktop (`py-8 lg:py-16`).
  - Faixa de fatos: 24px fixo, sem variação (`py-6`).
  - Depoimentos: 32px mobile / 48px desktop (`py-8 lg:py-12`).
  - Todas as outras seções (preços, por que aqui, barbeiros, galeria,
    onde ficamos, CTA final): 48px mobile / 64px desktop (`py-12 lg:py-16`,
    valor do `.section` padrão).
- Toda seção tem `border-bottom: 3px solid`, cor = a cor de texto da seção
  seguinte no contraste (seção com fundo `--tinta` ou `--fumo` → borda
  `--papel` ou `--carvao`; seção com fundo `--papel` → borda `--tinta`).
  Único ponto de profundidade entre seções — sem sombra de seção.

## Raio e sombra

Ao contrário da regra antiga deste documento, o export do Stitch **agora é
a fonte de verdade** para raio e sombra:

- Painéis, linhas da tabela de preços, botões do hero, botão do CTA final
  e botões de "Onde ficamos": raio 0 (cantos retos).
- Botão de WhatsApp do header (desktop): raio 4px (`rounded-lg`).
- Botão flutuante de WhatsApp (desktop): círculo.
- Sombra projetada dura, cor `--carvao`, sem blur, offset variável por
  elemento: quadro de preços inteiro 6px/6px; linha "mais pedido" 3px/3px;
  demais linhas de preço 2px/2px; botões do hero e CTA do header 3–4px/3–4px.
  Ao pressionar (`:active`), o elemento desloca 2px na direção da sombra e
  a sombra encolhe para 1px/1px (efeito de botão físico sendo apertado).
- Botão flutuante de WhatsApp e link "Agendar c/ [nome]": sem sombra.

## Hover

- Links de navegação e rodapé: cor de texto muda para a versão "cheia" (sem
  opacidade reduzida).
- Botões vermelhos (hero, CTA final): `brightness(1.1)`.
- Botão "Ver preços" (outline): inverte para fundo `--papel` / texto
  `--tinta`.
- Linha de serviço da tabela de preços (é um link para o WhatsApp): a linha
  inteira inverte — fundo `--tinta`, texto `--papel`, preço e traço
  pontilhado também mudam de cor. Linhas sem link (Acabamento/Pezinho,
  Sobrancelha) não são clicáveis, mas mantêm o mesmo hover visual.
- Foto de galeria: `scale(1.02)`, transição 300ms.
- Link "Agendar c/ [nome]": sublinhado.
- Botões "Como chegar" / "Abrir no GPS": `brightness(1.25)`.
- Botão flutuante de WhatsApp: escurece (não usa brightness — cor sólida
  mais escura).

## Comportamento

- **Parallax:** dois pontos só — foto do hero e faixa de galeria.
  Implementado com `animation-timeline: view()` em CSS puro. Proibido
  listener de scroll em JavaScript para efeito visual.
- **Reveal ao rolar:** só em títulos de seção e na tabela de preços.
  Opacidade + 12px de subida, 400ms. Não aplicar em cards individuais.
- **`prefers-reduced-motion: reduce`:** desliga todo parallax e reveal.
- **Botão flutuante de WhatsApp:**
  - Desktop: círculo fixo no canto inferior direito, ~24px das bordas,
    só ícone (sem texto). Só aparece depois que o botão do hero sai da
    tela (via `IntersectionObserver`, não scroll listener).
  - Mobile: barra fixa de largura total no rodapé da tela, ícone + texto
    "Chamar no WhatsApp", ~56px de altura, sempre visível. Adicionar
    `padding-bottom` no rodapé da página para a barra não cobrir o último
    conteúdo.
- **Mapa:** imagem estática por padrão. O iframe do Google Maps só carrega
  após clique do usuário — é o maior ganho de performance da página.
