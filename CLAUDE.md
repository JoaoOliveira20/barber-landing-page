# Barbearia do Kelvin

Landing page de página única para barbearia de bairro fictícia, em
Castanhal-PA. Reconstrução completa do zero. Não existe código legado a
reaproveitar — qualquer HTML, CSS ou componente de uma versão anterior
deste projeto deve ser ignorado como referência de implementação. As
referências válidas são só as descritas abaixo.

## Referências de design

O layout de destino é `references/layout-desktop-aprovado.png`. Essa é a
fonte de verdade visual: cor exata de cada seção, peso de título,
espaçamento, ordem e quantidade de elemento por seção — tudo deve bater
com esse print. Quando o print e qualquer texto abaixo divergirem em
detalhe visual, **o print vence**.

Antes de começar uma seção nova, e de novo ao terminar cada seção, olhe o
print de novo e confira se o resultado bate com ele antes de seguir para a
próxima.

`docs/design-system.md` serve só para o que a imagem não mostra: valor
hexadecimal exato, nome das fontes, e regras de comportamento (parallax,
hover, botão flutuante). Não usar esse arquivo para decidir aparência de
seção — isso já está resolvido no print.

`references/logo-wordmark.svg` é a referência do lettering da marca no
menu, feito só de tipografia, sem ícone.

Existe também um export de referência do Stitch, mencionado no
design-system, com raio de borda e sombra que **não** devem ser seguidos —
ver a seção final desse documento.

## Conteúdo

Todo texto real (serviços, preços, depoimentos, endereço, horário, links
de WhatsApp) está em `docs/content.md`. Nunca inventar serviço, preço ou
depoimento que não esteja lá. O número de WhatsApp ali é placeholder do
protótipo — sinalizar antes de publicar.

## Regras de código

- Sem comentário em nenhuma linha de código, exceto para justificar uma
  decisão não óbvia de compatibilidade (ex.: por que existe um fallback
  sem `animation-timeline`). Nomes claros substituem comentário na
  maioria dos casos.
- Todo identificador — variável, função, componente, arquivo — em inglês.
- Nomes de função descrevem a ação, não o mecanismo: `openWhatsApp`, não
  `handleClick2`. `isPastHero`, não `flag`.
- Nomes de componente descrevem o que a seção é, não onde ela fica:
  `PriceBoard`, não `Section3`.
- Server Component por padrão. Só vira Client Component o que precisa de
  estado ou evento do navegador: o menu mobile e o botão flutuante de
  WhatsApp.
- Nenhum listener de scroll em JavaScript para efeito visual. Parallax e
  reveal usam `animation-timeline: view()` em CSS, com fallback em
  `@supports` e respeito a `prefers-reduced-motion`.
- `next/image` em toda imagem, com `aspect-ratio` fixo. `priority` só na
  foto do hero.
- Meta pública: 100 em Performance e SEO no Lighthouse mobile. O maior
  risco pra isso é o iframe do Google Maps — carregar só após clique.

  ## Responsividade

Mobile-first. Escreve o estilo base para telas pequenas e usa breakpoint
só para acrescentar o que muda em telas maiores.

Não existe print aprovado do layout mobile. As regras abaixo são a fonte
de verdade para ele:

- Breakpoints: até 767px mobile, 768px a 1023px tablet, 1024px ou mais
  desktop.
- Testar sempre em 375px de largura. É a menor tela que o projeto
  precisa atender e nenhuma seção pode quebrar ali.
- No mobile tudo vira coluna única, na mesma ordem vertical do print de
  desktop. Nenhuma seção é escondida ou reordenada.
- Nenhum scroll horizontal em nenhuma largura. Nenhum elemento pode
  estourar a viewport.
- Área de toque de qualquer elemento clicável: no mínimo 44x44px.
- Espaço vertical entre seções: 72px no mobile, 128px no desktop.
- Tipografia no mobile: hero em 44px, títulos de seção em 32px, corpo em
  17px. No desktop: hero em 96px, títulos em 48px, corpo em 18px. Usa
  clamp para a transição, não salto por breakpoint.
- Tabela de preços: no mobile o nome do serviço e o preço continuam na
  mesma linha, com a linha pontilhada entre eles. Não empilha o preço
  abaixo do nome.
- Galeria: faixa com scroll horizontal por toque no mobile, grade no
  desktop.
- Menu: os links do header viram menu recolhido no mobile. O botão de
  WhatsApp do header some, porque a barra fixa inferior já cumpre esse
  papel.
- A barra fixa de WhatsApp no rodapé da tela é mobile only. O rodapé da
  página precisa de padding-bottom equivalente à altura dela, senão ela
  cobre o último conteúdo.
- Imagem com next/image sempre com o atributo sizes correto. Sem sizes,
  o navegador baixa a versão desktop no celular e derruba a nota de
  performance.

Ao terminar cada seção, confere ela em 375px antes de dizer que está
pronta.

## Estado do projeto

`docs/PROGRESS.md` é o registro do que já foi feito e do que falta.
Lê ele logo depois deste arquivo, em toda sessão nova, antes de qualquer
coisa. Ele é a fonte de verdade sobre o andamento — nunca assume que uma
seção está pronta sem conferir ali.

Ao terminar cada seção, atualiza o docs/PROGRESS.md e faz um commit antes
de começar a próxima.
