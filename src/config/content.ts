export type HeroContent = Readonly<{
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  infoItems: readonly string[];
}>;

export const heroContent: HeroContent = {
  title: "Mais de dez anos cortando cabelo no Centro de Castanhal.",
  subtitle:
    "Corte, barba e pezinho de terça a domingo. Marca pelo WhatsApp ou chega e espera a vez, do jeito que você preferir.",
  primaryCtaLabel: "Chamar no WhatsApp",
  secondaryCtaLabel: "Ver preços",
  infoItems: [
    "Terça a domingo",
    "Centro de Castanhal",
    "Pix, cartão e dinheiro",
  ],
} as const;

export type Service = Readonly<{
  name: string;
  duration: string;
  price: string;
}>;

export const services = [
  {
    name: "Corte masculino",
    duration: "40 min",
    price: "R$ 30",
  },
  {
    name: "Barba na navalha",
    duration: "30 min",
    price: "R$ 25",
  },
  {
    name: "Corte + barba",
    duration: "1h10",
    price: "R$ 50",
  },
  {
    name: "Corte infantil (até 10 anos)",
    duration: "30 min",
    price: "R$ 25",
  },
  {
    name: "Pezinho",
    duration: "10 min",
    price: "R$ 10",
  },
  {
    name: "Sobrancelha",
    duration: "10 min",
    price: "R$ 10",
  },
] as const satisfies readonly Service[];

export const servicesNote = "Sábado depois das 16h, só com agendamento.";

export type DifferentialIcon = "drink" | "location" | "calendar";

export type Differential = Readonly<{
  title: string;
  description: string;
  icon: DifferentialIcon;
}>;

export const differentials = [
  {
    title: "Cerveja gelada e café",
    description:
      "Tem cerveja na geladeira e café passado na hora. Por conta da casa.",
    icon: "drink",
  },
  {
    title: "Dá pra parar na frente",
    description:
      "Carro ou moto, tem espaço na porta. Você não vai rodar atrás de vaga.",
    icon: "location",
  },
  {
    title: "Com ou sem agendamento",
    description:
      "Marcou, seu horário fica guardado. Não marcou, chega e espera a vez.",
    icon: "calendar",
  },
] as const satisfies readonly Differential[];

export type ExperienceHighlight = Readonly<{
  title: string;
  description: string;
}>;

export const experienceContent = {
  eyebrow: "Experiência Prime",
  title: "Mais que um corte, uma experiência.",
  description:
    "Um atendimento feito sem pressa, em um espaço onde técnica, conforto e atenção aos detalhes trabalham juntos para renovar sua confiança.",
  highlights: [
    {
      title: "Ambiente pensado para você relaxar.",
      description:
        "Boa música, atendimento atencioso e uma atmosfera confortável do início ao fim.",
    },
    {
      title: "Visual alinhado para qualquer ocasião.",
      description:
        "Do dia a dia aos momentos importantes, entregamos um resultado que combina com você.",
    },
    {
      title: "Seu tempo tratado com respeito.",
      description:
        "Horário reservado e uma experiência organizada para você aproveitar cada minuto.",
    },
  ] satisfies readonly ExperienceHighlight[],
} as const;

export type Barber = Readonly<{
  name: string;
  role: string | null;
  bio: string;
}>;

export const barbers = [
  {
    name: "Léo",
    role: "Dono",
    bio: "Corta desde 2013. Começou atendendo na sala de casa e abriu a barbearia em 2018. Faz degradê e barba na navalha.",
  },
  {
    name: "Kelvin",
    role: null,
    bio: "Entrou em 2021. É quem faz os cortes mais modernos, freestyle e desenho. Bom com criança.",
  },
] as const satisfies readonly Barber[];

export type Testimonial = Readonly<{
  name: string;
  attribution: string | null;
  quote: string;
}>;

export const testimonials = [
  {
    name: "Rafael",
    attribution: "cliente desde 2021",
    quote: "Corto com o Léo há uns 4 anos. Nunca saí de lá insatisfeito.",
  },
  {
    name: "Denise M.",
    attribution: null,
    quote:
      "Levei meu filho de 7 anos, que tem pavor de barbeiro. O Kelvin teve uma paciência que eu não esperava, cortou brincando com ele o tempo todo. Voltamos semana passada e ele já foi correndo sentar na cadeira.",
  },
  {
    name: "Anderson",
    attribution: null,
    quote:
      "Quando tá cheio no sábado demora um pouco, mas o corte compensa. Prefiro marcar durante a semana.",
  },
] as const satisfies readonly Testimonial[];

export type GalleryItem = Readonly<{
  title: string;
  category: string;
  description: string;
  visual: "cut" | "beard" | "space" | "service" | "finish";
  layout: "featured" | "standard" | "wide";
  image: Readonly<{
    src: `/images/${string}`;
    alt: string;
    objectPosition?: string;
  }> | null;
}>;

export const galleryItems: readonly GalleryItem[] = [
  {
    title: "Cortes com identidade",
    category: "Corte masculino",
    description:
      "Técnica e leitura de estilo para um resultado que combina com cada cliente.",
    visual: "cut",
    layout: "featured",
    image: {
      src: "/images/barber-cut.webp",
      alt: "Barbeiro realizando um corte masculino em uma barbearia premium",
      objectPosition: "64% center",
    },
  },
  {
    title: "Ambiente premium",
    category: "Nosso espaço",
    description:
      "Conforto, personalidade e uma atmosfera criada para desacelerar.",
    visual: "space",
    layout: "standard",
    image: {
      src: "/images/barber-shop.webp",
      alt: "Interior elegante da barbearia com espelhos iluminados e poltronas",
      objectPosition: "center",
    },
  },
  {
    title: "Atendimento cuidadoso",
    category: "Experiência",
    description:
      "Atenção exclusiva e tempo reservado para cuidar de cada detalhe.",
    visual: "service",
    layout: "standard",
    image: {
      src: "/images/barber-service.webp",
      alt: "Barbeiro cuidando do acabamento do cliente",
      objectPosition: "65% center",
    },
  },
  {
    title: "Barba bem desenhada",
    category: "Barba",
    description:
      "Contornos precisos e acabamento pensado para valorizar o rosto.",
    visual: "beard",
    layout: "standard",
    image: {
      src: "/images/beard.webp",
      alt: "Barbeiro desenhando o contorno da barba de um cliente",
      objectPosition: "68% center",
    },
  },
  {
    title: "Acabamento impecável",
    category: "Detalhes",
    description:
      "O toque final que transforma um bom visual em uma presença marcante.",
    visual: "finish",
    layout: "wide",
    image: {
      src: "/images/barber-finish.webp",
      alt: "Cliente observando o acabamento do corte no espelho",
      objectPosition: "45% center",
    },
  },
];
