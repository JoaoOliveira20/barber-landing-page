# Progresso — Barbearia do Kelvin

Reconstrução completa a partir de `references/layout-desktop-aprovado.png`
(fonte de verdade visual) e `docs/content.md` (fonte de verdade de texto).
Código anterior em `src/` é legado e será substituído, não reaproveitado.

Convenção: cada item só é marcado `[x]` depois de (1) conferir contra o
print aprovado e (2) conferir em 375px de largura. Um item pela metade
fica `[~]` com uma linha dizendo o que falta.

- [x] **Fundação** — fontes (Bevan + Libre Franklin via `next/font/google`),
      tokens de cor (`--tinta`, `--fumo`, `--papel`, `--carvao`,
      `--vermelho`, `--mostarda`), escala tipográfica com `clamp` (hero,
      títulos, corpo), espaçamento entre seções (72px mobile / 128px
      desktop), container, reset. Arquivos: `src/app/globals.css`,
      `src/app/layout.tsx`, `src/config/site.ts`.
- [x] **Header** — wordmark (baseado em `references/logo-wordmark.svg`),
      nav desktop, botão vermelho "Agendar pelo WhatsApp", menu recolhido
      no mobile (sem botão de WhatsApp no header mobile). Arquivos:
      `src/components/layout/site-header.tsx`,
      `src/components/layout/mobile-nav.tsx` (client).
- [x] **Hero** — selo, título com "Sem frescura" em mostarda, subtítulo,
      botão primário (WhatsApp) + secundário (âncora para preços), foto
      com `next/image priority` e legenda de endereço sobreposta.
      Arquivos: `src/components/sections/hero-section.tsx`.
- [x] **Faixa de três fatos** — endereço, horário, agendamento fácil, com
      ícone, em faixa azul-escura logo abaixo do hero. Arquivos:
      `src/components/sections/facts-strip.tsx`.
- [x] **Tabela de preços** — cartão de borda fina, 5 serviços com linha
      pontilhada, tag "MAIS PEDIDO" no combo, nota de pagamento; no
      mobile nome e preço na mesma linha. Reveal ao rolar no título e na
      tabela. Arquivos: `src/components/sections/price-board.tsx`.
- [x] **Por que aqui** — 3 colunas (Preço justo, Atendimento de verdade,
      Corte bem feito) com ícone, título, texto e legenda em itálico.
      Arquivos: `src/components/sections/why-here-section.tsx`.
- [x] **Barbeiros** — Kelvin e Rafael, foto + nome + citação + link
      "Agendar c/ [nome]". Placeholder de foto com aspect-ratio fixo.
      Arquivos: `src/components/sections/barbers-section.tsx`.
- [x] **Galeria** — grade no desktop, faixa com scroll horizontal por
      toque no mobile. Placeholder de foto com aspect-ratio fixo.
      Arquivos: `src/components/sections/gallery-section.tsx`.
- [x] **Depoimentos** — 3 cards com estrelas, citação, nome e tempo de
      cliente. Arquivos: `src/components/sections/testimonials-section.tsx`.
- [x] **Onde ficamos** — endereço, horário, ponto de referência, botão
      "Como chegar", mapa estático que só carrega iframe após clique.
      Arquivos: `src/components/sections/location-section.tsx`,
      `src/components/ui/static-map.tsx` (client).
- [x] **Rodapé** — CTA final ("Seu próximo corte começa aqui"), colunas
      de contato/horário, aviso "Projeto demonstrativo — Barbearia
      fictícia", padding-bottom para a barra fixa mobile não cobrir
      conteúdo. Arquivos: `src/components/layout/site-footer.tsx`.
- [x] **Botão flutuante de WhatsApp** — pílula fixa desktop (só após o
      botão do hero sair da tela, via `IntersectionObserver`), barra fixa
      de largura total no mobile. Arquivos:
      `src/components/ui/floating-whatsapp.tsx` (client).
- [x] **Parallax e reveal** — `animation-timeline: view()` em CSS puro no
      hero e na galeria (parallax) e nos títulos de seção + tabela de
      preços (reveal), com fallback `@supports` e respeito a
      `prefers-reduced-motion`. Sem listener de scroll em JS. Arquivos:
      `src/app/globals.css`.
- [ ] **Passada de performance** — checar `next/image` com `sizes`
      corretos em toda imagem, iframe do Maps só após clique, Lighthouse
      mobile (meta: 100 Performance e SEO). Sem arquivo novo — ajustes no
      que já existe.

## Notas de processo

- `resize_window` do Claude in Chrome não muda o viewport real neste
  ambiente (fica preso na resolução do monitor). Para conferir 1280px
  desktop e 375px mobile, uso um servidor node local (porta 3002) que
  serve um `<iframe>` com `width` exata apontando pro dev server — dá
  viewport confiável sem depender de resize de janela.
- O dev server (Turbopack) já deixou CSS em cache desatualizado uma vez
  (uma regra nova não aparecia no bundle compilado). Se um estilo novo
  não aparecer depois de editar `globals.css`, matar o processo, apagar
  `.next` e reiniciar `npm run dev` antes de desconfiar do CSS em si.
- Elemento `position: fixed` só aparece certo no truque do iframe se a
  altura do iframe bater com a altura real do viewport (ex.: 812 para
  mobile) — um iframe "alto" pra caber a página inteira faz o fixed
  grudar no fim do iframe inteiro, não no fim da tela visível.

## Pendências / dúvidas

- Número de WhatsApp é placeholder (`5591999999999`) — trocar antes de
  publicar.
- Fotos reais de galeria e mapa ainda não existem — usando placeholder
  com aspect-ratio fixo até serem fornecidas. Barbeiros e hero já usam
  fotos reais (`references/photos/`), copiadas para `public/images/`.
- O rodapé do print mostra "Sábado: 08h às 18h", divergindo de
  `docs/content.md` e do resto do site (08h às 17h). Segui
  `content.md` no rodapé (dado factual, não detalhe visual) — sinalizar
  ao usuário.
- Galeria no print tem 5 fotos (bento: 1 larga + 1 média na primeira
  linha, 3 iguais na segunda), não 6 — corrigido em `content.ts`.
