import { buildWhatsappUrl } from "@/config/site";

export const heroContent = {
  badge: "Desde 2018 • Centro de Castanhal",
  titleLines: ["Corte bom.", "Preço justo.", "Sem frescura."],
  highlightWord: "Sem frescura.",
  subtitle:
    "Barbearia de bairro no Centro de Castanhal. Corte, barba e aquele atendimento que faz você voltar. Tradição viva na navalha e tesoura afiada.",
  primaryCtaLabel: "Agendar pelo WhatsApp",
  primaryCtaUrl: buildWhatsappUrl(
    "Olá Kelvin, gostaria de agendar um horário na barbearia",
  ),
  secondaryCtaLabel: "Ver preços",
  secondaryCtaHref: "#servicos",
  photoCaption: "Tv. Quintino Bocaiúva",
} as const;

export const facts = [
  {
    label: "Centro de Castanhal",
    detail: "Tv. Quintino Bocaiúva, próx. à Praça do Estrela",
  },
  {
    label: "Seg — Sáb",
    detail: "Seg a Sex 08h–19h | Sáb 08h–17h",
  },
  {
    label: "Agendamento fácil",
    detail: "WhatsApp direto sem fila de espera",
  },
] as const;

export type Service = Readonly<{
  name: string;
  description: string;
  price: string;
  featured?: boolean;
  whatsappUrl: string;
}>;

export const services: readonly Service[] = [
  {
    name: "Corte masculino",
    description: "Tesoura, máquina e alinhamento clássico",
    price: "R$ 30",
    whatsappUrl: buildWhatsappUrl("Olá, gostaria de agendar um Corte masculino"),
  },
  {
    name: "Barba na navalha",
    description: "Toalha quente, navalhete e pós-barba artesanal",
    price: "R$ 25",
    whatsappUrl: buildWhatsappUrl("Olá, gostaria de agendar uma Barba na navalha"),
  },
  {
    name: "Corte + Barba",
    description: "O combo completo do sábado",
    price: "R$ 50",
    featured: true,
    whatsappUrl: buildWhatsappUrl(
      "Olá, gostaria de agendar um Combo Corte + Barba",
    ),
  },
  {
    name: "Acabamento / Pezinho",
    description: "Contorno, nuca limpa e alinhamento",
    price: "R$ 15",
    whatsappUrl: buildWhatsappUrl(
      "Olá, gostaria de agendar um Acabamento / Pezinho",
    ),
  },
  {
    name: "Sobrancelha na navalha",
    description: "Alinhamento e limpeza rápida",
    price: "R$ 10",
    whatsappUrl: buildWhatsappUrl(
      "Olá, gostaria de agendar uma Sobrancelha na navalha",
    ),
  },
];

export const pricePaymentNote = "Pagamento em dinheiro ou Pix";

export type WhyHereReason = Readonly<{
  title: string;
  description: string;
  tag: string;
}>;

export const whyHereReasons: readonly WhyHereReason[] = [
  {
    title: "Preço justo",
    description:
      "Serviços simples, preço claro e sem surpresa. O valor que tá na placa é o valor que você paga no balcão, sem firula e sem pegadinha.",
    tag: "Transparência total",
  },
  {
    title: "Atendimento de verdade",
    description:
      "Um lugar onde você já chega conhecido. Sem pose, café passado na hora, resenha esportiva sobre o Remo e o Paysandu, e conversa boa.",
    tag: "Cuidado de vizinho",
  },
  {
    title: "Corte bem feito",
    description:
      "Experiência, cuidado e atenção aos detalhes. Do corte social clássico ao disfarçado na régua com acabamento impecável na navalha.",
    tag: "Navalha afiada",
  },
];

export const barbersIntro = {
  title: "Quem cuida do seu corte",
  subtitle:
    "Profissionais experientes que conhecem o formato do seu rosto e o estilo que você gosta.",
} as const;

export type Barber = Readonly<{
  name: string;
  quote: string;
  photo: string;
  whatsappUrl: string;
}>;

export const barbers: readonly Barber[] = [
  {
    name: "Kelvin",
    quote:
      "Corte clássico, barba na navalha e conversa boa. Aqui a gente cuida da sua aparência com o respeito que você merece.",
    photo: "/images/barber-kelvin.jpg",
    whatsappUrl: buildWhatsappUrl("Olá Kelvin, gostaria de agendar um horário"),
  },
  {
    name: "Rafael",
    quote:
      "Do degradê navalhado ao corte tradicional, sempre no detalhe milimétrico e respeitando a textura do seu cabelo.",
    photo: "/images/barber-rafael.jpg",
    whatsappUrl: buildWhatsappUrl("Olá Rafael, gostaria de agendar um horário"),
  },
];

export const galleryIntro = {
  title: "O dia a dia no centro",
};

export type GalleryPhoto = Readonly<{
  src: string;
  alt: string;
}>;

export const galleryPhotos: readonly GalleryPhoto[] = [
  {
    src: "/images/gallery-loyal-client.jpg",
    alt: "Cliente sendo atendido durante o corte na Barbearia do Kelvin",
  },
  {
    src: "/images/gallery-straight-razor.jpg",
    alt: "Acabamento na navalha no pescoço do cliente",
  },
  {
    src: "/images/gallery-haircut-detail.jpg",
    alt: "Detalhe do acabamento do corte com máquina",
  },
];

export type Testimonial = Readonly<{
  name: string;
  tenure: string;
  quote: string;
}>;

export const testimonials: readonly Testimonial[] = [
  {
    name: "Marcos Silveira",
    tenure: "Cliente há 2 anos",
    quote:
      "Corte sempre bem feito e o preço é justo. Virou meu barbeiro de confiança em Castanhal.",
  },
  {
    name: "Thiago Pantoja",
    tenure: "Cliente há 1 ano",
    quote:
      "Ambiente tranquilo, sem frescura e atendimento de primeira. Café sempre quentinho.",
  },
  {
    name: "Anderson Barata",
    tenure: "Cliente há 4 anos",
    quote:
      "Já corto aqui faz 4 anos com o Kelvin. Não troco por nenhuma outra. O cara manja muito.",
  },
];

export const finalCta = {
  titleLines: ["Seu próximo corte", "começa aqui."],
  subtitle:
    "Escolha o serviço e fale com a gente pelo WhatsApp. Sem burocracia, horário marcado e garantia de sair na régua.",
  ctaLabel: "Agendar pelo WhatsApp agora",
  ctaUrl: buildWhatsappUrl(
    "Olá Kelvin, gostaria de agendar um horário na barbearia",
  ),
  note: "Sem taxa de agendamento · Atendimento pontual",
} as const;

export const footerContent = {
  location: "Centro de Castanhal — PA",
  tagline:
    "Corte clássico, navalha afiada e tradição de bairro no coração do Pará.",
  copyright: "© 2026 Barbearia do Kelvin. Todos os direitos reservados.",
} as const;
