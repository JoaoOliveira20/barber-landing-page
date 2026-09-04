# Design system — Barbearia do Kelvin

A fonte de verdade visual é `references/layout-desktop-aprovado.png`. Este
documento só existe para o que uma imagem não consegue transmitir: valor
hexadecimal exato, nomes de fonte, e regras de comportamento. Nunca use
este arquivo para decidir como uma seção deve parecer — isso já está
resolvido no print. Quando este texto e o print divergirem em qualquer
detalhe visual, **o print vence**.

## Cor

```css
--tinta:    #14293F;  /* fundo dominante */
--fumo:     #21384F;  /* superfície elevada sobre o azul */
--papel:    #EDE6D6;  /* fundo creme, texto sobre azul */
--carvao:   #1A1714;  /* texto sobre creme */
--vermelho: #C0342B;  /* única cor de ação — botões que levam ao WhatsApp */
--mostarda: #E0A526;  /* uso único: a palavra "Sem frescura" no hero */
```

Regra de uso do vermelho: só em elemento clicável que leva ao WhatsApp.
Preço, tag, link secundário e pin de mapa usam a cor de texto padrão do
fundo em que estão.

Regra de uso da mostarda: só na palavra "Sem frescura" no hero. Em nenhum
outro lugar da página.

## Tipografia

- Títulos e preços: **Bevan**, peso único (400), sem variação de peso.
- Corpo, labels, botões: **Libre Franklin**, pesos 400/600/700 conforme a
  hierarquia do print.
- Ambas via Google Fonts, `display=swap`, subset latin.
- Bevan nunca em parágrafo. Nunca em botão pequeno de navegação.

## Comportamento

- **Parallax:** dois pontos só — foto do hero e faixa de galeria.
  Implementado com `animation-timeline: view()` em CSS puro. Proibido
  listener de scroll em JavaScript para efeito visual.
- **Reveal ao rolar:** só em títulos de seção e na tabela de preços.
  Opacidade + 12px de subida, 400ms. Não aplicar em cards individuais.
- **`prefers-reduced-motion: reduce`:** desliga todo parallax e reveal.
- **Botão flutuante de WhatsApp:**
  - Desktop: pílula retangular fixa no canto inferior direito, 24px das
    bordas, ícone + texto "Chamar no WhatsApp", raio de 2px, sem sombra.
    Só aparece depois que o botão do hero sai da tela (via
    `IntersectionObserver`, não scroll listener).
  - Mobile: barra fixa de largura total no rodapé da tela, mesmo texto,
    ~56px de altura, sempre visível. Adicionar `padding-bottom` no rodapé
    da página para a barra não cobrir o último conteúdo.
- **Mapa:** imagem estática por padrão. O iframe do Google Maps só carrega
  após clique do usuário — é o maior ganho de performance da página.

## O que não seguir do export do Stitch

O `code.html` e o `DESIGN.md` originais do Stitch trazem raio de borda de
4px e sombra projetada dura (`3px 3px 0px`) em botões e cards. Isso **não**
está no print aprovado e não deve ser implementado: painéis têm raio 0,
botões têm raio 2px, e não existe sombra em nenhum elemento da página.
Profundidade vem só da alternância entre fundo azul e fundo creme.
