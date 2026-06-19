export type Service = Readonly<{
  name: string;
  description: string;
  duration: string;
  price: string;
}>;

export const services = [
  {
    name: "Corte Masculino",
    description:
      "Corte personalizado, acabamento preciso e finalização para o seu estilo.",
    duration: "45 min",
    price: "R$ 65",
  },
  {
    name: "Barba",
    description:
      "Contorno, modelagem e acabamento com toalha quente e produtos especiais.",
    duration: "35 min",
    price: "R$ 50",
  },
  {
    name: "Combo Corte + Barba",
    description:
      "A experiência completa para renovar o corte e cuidar da barba.",
    duration: "1h 15 min",
    price: "R$ 105",
  },
  {
    name: "Sobrancelha",
    description:
      "Alinhamento discreto e natural para valorizar a expressão do rosto.",
    duration: "15 min",
    price: "R$ 25",
  },
] as const satisfies readonly Service[];

export type DifferentialIcon =
  | "calendar"
  | "expertise"
  | "comfort"
  | "drink"
  | "products"
  | "location";

export type Differential = Readonly<{
  title: string;
  description: string;
  icon: DifferentialIcon;
}>;

export const differentials = [
  {
    title: "Atendimento com horário marcado",
    description:
      "Seu horário é reservado para um atendimento pontual, tranquilo e sem pressa.",
    icon: "calendar",
  },
  {
    title: "Profissionais experientes",
    description:
      "Técnica apurada e atenção aos detalhes em cada corte, barba e acabamento.",
    icon: "expertise",
  },
  {
    title: "Ambiente confortável",
    description:
      "Um espaço elegante e acolhedor, pensado para você relaxar durante a visita.",
    icon: "comfort",
  },
  {
    title: "Café ou cerveja gelada",
    description:
      "Uma cortesia para acompanhar seu momento e deixar a experiência ainda melhor.",
    icon: "drink",
  },
  {
    title: "Produtos profissionais",
    description:
      "Selecionamos produtos de alta qualidade para cuidar dos fios, da barba e da pele.",
    icon: "products",
  },
  {
    title: "Localização fácil",
    description:
      "Estamos em uma região acessível, com opções de estacionamento nas proximidades.",
    icon: "location",
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

export type Testimonial = Readonly<{
  name: string;
  occupation: string;
  quote: string;
  rating: 5;
}>;

export const testimonials = [
  {
    name: "Rafael Martins",
    occupation: "Cliente há 2 anos",
    quote:
      "Atendimento impecável e corte sempre consistente. É o tipo de lugar em que você chega e já sabe que vai sair bem.",
    rating: 5,
  },
  {
    name: "Lucas Almeida",
    occupation: "Cliente há 1 ano",
    quote:
      "O cuidado com a barba e os detalhes do acabamento fazem muita diferença. Ambiente excelente e equipe muito atenciosa.",
    rating: 5,
  },
  {
    name: "Bruno Ferreira",
    occupation: "Cliente há 8 meses",
    quote:
      "Agendamento rápido, atendimento pontual e um resultado que realmente combina com meu estilo.",
    rating: 5,
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
