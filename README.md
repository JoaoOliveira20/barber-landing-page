# Barbearia do Kelvin — Landing Page

**Status:** projeto concluído, pronto para publicação.

Landing page one-page para a **Barbearia do Kelvin**, barbearia fictícia de bairro no Centro de Castanhal (PA), desenvolvida como peça de portfólio comercial para venda de sites a pequenos negócios.

O projeto foi propositalmente redesenhado a partir de um template genérico de barbearia "premium" para ter identidade de bairro: texto informal em português, paleta de couro (marrom, creme e latão), tipografia condensada nos títulos de seção lembrando placa pintada, e a lista de serviços tratada como cardápio de parede — o elemento de assinatura da página.

## Preview

> https://barber-landing-page-rosy.vercel.app/

O projeto usa o domínio gratuito gerado pela Vercel, sem domínio próprio. Para a imagem Open Graph ser referenciada corretamente, defina a variável de ambiente `NEXT_PUBLIC_SITE_URL` no painel da Vercel com essa mesma URL.

## Objetivo

Servir como projeto de portfólio e exemplo comercial de página institucional para um pequeno negócio local, incentivando o visitante a entrar em contato pelo WhatsApp para agendar um horário ou simplesmente chegar e esperar a vez.

## Tecnologias utilizadas

* Next.js com App Router
* React
* TypeScript
* Tailwind CSS
* `next/font` (Google Fonts: Anton e Archivo)
* `next/og` para geração da imagem Open Graph
* HTML semântico

## Funcionalidades

* Layout responsivo para celular, tablet e desktop
* Barra de demonstração fixa no topo, específica deste projeto de portfólio (ver seção "Projeto demonstrativo")
* CTA principal direcionado ao WhatsApp
* Botão flutuante de WhatsApp
* Seção "Serviços e preços" com tratamento de placa de parede e cada linha como link clicável que abre o WhatsApp com mensagem já preenchida para aquele serviço
* Seção de diferenciais do negócio
* Seção com os barbeiros que atendem
* Depoimentos com textos de tamanhos variados, sem avaliação por estrelas
* Galeria de fotos em mosaico que se ajusta a qualquer quantidade de imagens, sem deixar buracos no grid, com leve zoom ao passar o mouse
* Animação sutil de entrada por scroll nas seções de conteúdo, respeitando `prefers-reduced-motion`
* Localização com mapa incorporado e horários de funcionamento
* Imagem Open Graph gerada dinamicamente a partir do conteúdo do site
* Footer com navegação rápida e redes sociais
* Conteúdo centralizado em arquivos de configuração

## Como executar localmente

### Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js 20.9 ou superior
* npm

### Instalação

Clone o repositório:

```bash
git clone https://github.com/JoaoOliveira20/barber-landing-page.git
```

Acesse a pasta do projeto:

```bash
cd barber-landing-page
```

Instale as dependências:

```bash
npm install
```

Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Depois, acesse no navegador:

```bash
http://localhost:3000
```

## Scripts disponíveis

Executa o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Gera a versão de produção:

```bash
npm run build
```

Executa a versão de produção após o build:

```bash
npm run start
```

Executa a verificação de lint:

```bash
npm run lint
```

Corrige problemas de lint automaticamente quando possível:

```bash
npm run lint:fix
```

Valida os tipos TypeScript:

```bash
npm run typecheck
```

## Personalização

Os dados editáveis do projeto estão centralizados na pasta `src/config`.

### Informações gerais da barbearia

Edite o arquivo:

```txt
src/config/site.ts
```

Nesse arquivo é possível alterar:

* nome e iniciais da barbearia;
* título e descrição do site;
* número do WhatsApp da barbearia e mensagem padrão;
* linha de apresentação do footer;
* endereço, referência de localização e link do Google Maps;
* horários de funcionamento;
* links de redes sociais;
* texto e número de WhatsApp da barra de demonstração (`demoBarContent` e `demoWhatsappUrl`).

O número do WhatsApp deve incluir o código do país e o DDD, usando somente dígitos.

Exemplo:

```txt
5591999999999
```

> **Atenção:** o número de WhatsApp da barra de demonstração (`demoWhatsappUrl`) é separado do número da barbearia (`whatsappUrl`) — o primeiro leva a quem vende o site, o segundo leva ao negócio. Se este template for reaproveitado para um cliente real, remova o componente `DemoBar` (`src/components/ui/demo-bar.tsx`) e sua importação em `src/app/page.tsx`.

### Conteúdo das seções

Edite o arquivo:

```txt
src/config/content.ts
```

Nesse arquivo é possível alterar:

* título e subtítulo do hero;
* serviços, preços e duração;
* diferenciais;
* barbeiros que atendem;
* depoimentos;
* imagens da galeria.

### Imagens

As imagens usadas nas seções ficam em `public/images`. Para trocar uma foto, substitua o arquivo mantendo o mesmo nome — os componentes não dependem de proporção específica de imagem.

## Estrutura principal do projeto

```txt
src/
├── app/
│   ├── opengraph-image.tsx
│   └── ...
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── config/
│   ├── content.ts
│   └── site.ts
└── hooks/
    └── use-scroll-reveal.ts
```

## Organização do código

O projeto foi organizado para manter a landing page simples, reutilizável e fácil de editar.

* `src/app`: estrutura principal do App Router, incluindo a geração da imagem Open Graph.
* `src/components/layout`: componentes estruturais da página.
* `src/components/sections`: seções principais da landing page.
* `src/components/ui`: componentes reutilizáveis de interface.
* `src/config`: dados editáveis usados nas seções.
* `src/hooks`: hooks reutilizáveis, como o de animação de entrada por scroll.

## Projeto demonstrativo

Este é um projeto fictício criado para fins de estudo e portfólio.

Os nomes, depoimentos, preços, contatos, endereços e demais informações exibidas na página são demonstrativos e não representam uma empresa real.

## Melhorias futuras

* Adicionar testes automatizados de acessibilidade
* Integrar métricas de acesso e conversão respeitando privacidade e consentimento
* Conectar o agendamento a um serviço externo caso o projeto evolua para uso real

## Autor

Desenvolvido por **João Pedro** como projeto de estudo e portfólio.
