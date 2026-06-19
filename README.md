# Prime Barber Landing Page

Landing page one-page para a barbearia fictícia **Prime Barber**, desenvolvida com foco em apresentação comercial, responsividade, performance e conversão por WhatsApp.

O projeto simula a presença digital de uma barbearia premium, apresentando serviços, diferenciais, depoimentos, galeria, localização e horários de funcionamento em uma interface moderna e acessível.

## Objetivo

Criar uma landing page moderna e responsiva para servir como projeto de portfólio e exemplo comercial de página institucional para pequenos negócios.

A proposta principal da página é incentivar o visitante a entrar em contato pelo WhatsApp para agendar um horário.

## Tecnologias utilizadas

* Next.js com App Router
* React
* TypeScript
* Tailwind CSS
* HTML semântico

## Funcionalidades

* Layout responsivo para celular, tablet e desktop
* CTA principal direcionado ao WhatsApp
* Botão flutuante de WhatsApp
* Seção de serviços com preços e duração média
* Seção de diferenciais da barbearia
* Seção de experiência do cliente
* Depoimentos com avaliações fictícias de cinco estrelas
* Galeria visual sem dependência de imagens externas
* Localização com mapa incorporado
* Horários de funcionamento
* Footer com navegação rápida e redes sociais
* Metadata básica para SEO
* Estrutura de conteúdo centralizada em arquivos de configuração

## Como executar localmente

### Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js 20.9 ou superior
* npm

### Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
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

```bash
npm run dev
```

Executa o projeto em ambiente de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção do projeto.

```bash
npm run start
```

Executa a versão de produção após o build.

```bash
npm run lint
```

Executa a verificação de lint do projeto.

> Observação: caso exista um script de typecheck no `package.json`, ele também pode ser usado para validar os tipos TypeScript.

## Personalização

Os dados editáveis do projeto estão centralizados na pasta `src/config`.

### Informações gerais da barbearia

Edite o arquivo:

```txt
src/config/site.ts
```

Nesse arquivo é possível alterar:

* nome da barbearia;
* título e descrição do site;
* número do WhatsApp;
* mensagem padrão do WhatsApp;
* endereço;
* link do Google Maps;
* horários de funcionamento;
* links de redes sociais.

O número do WhatsApp deve incluir o código do país e o DDD, usando somente dígitos.

Exemplo:

```txt
5591999999999
```

### Conteúdo das seções

Edite o arquivo:

```txt
src/config/content.ts
```

Nesse arquivo é possível alterar:

* serviços;
* descrições;
* preços;
* duração média dos serviços;
* diferenciais;
* textos da seção de experiência;
* depoimentos;
* itens da galeria.

## Estrutura principal do projeto

```txt
src/
├── app/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
└── config/
    ├── content.ts
    └── site.ts
```

## Organização do código

O projeto foi organizado para manter a landing page simples, reutilizável e fácil de editar.

* `src/app`: estrutura principal do App Router.
* `src/components/layout`: componentes estruturais da página.
* `src/components/sections`: seções principais da landing page.
* `src/components/ui`: componentes reutilizáveis de interface.
* `src/config`: dados editáveis usados nas seções.

## Projeto demonstrativo

Este é um projeto fictício criado para fins de estudo e portfólio.

Os nomes, depoimentos, preços, contatos, endereços e demais informações exibidas na página são demonstrativos e não representam uma empresa real.

## Melhorias futuras

* Substituir os placeholders da galeria por imagens autorais otimizadas
* Adicionar imagem Open Graph para compartilhamento em redes sociais
* Melhorar animações e microinterações sem comprometer a performance
* Adicionar testes automatizados de acessibilidade
* Integrar métricas de acesso e conversão respeitando privacidade e consentimento
* Conectar o agendamento a um serviço externo caso o projeto evolua para uso real

## Autor

Desenvolvido por João Pedro como projeto de estudo e portfólio.
