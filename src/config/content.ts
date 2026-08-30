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

export type Barber = Readonly<{
  name: string;
  role: string | null;
  bio: string;
}>;

export const barbers = [
  {
    name: "Kelvin",
    role: "Dono",
    bio: "Corta desde 2013. Começou atendendo na sala de casa e abriu a barbearia em 2018. Faz degradê e barba na navalha.",
  },
  {
    name: "Léo",
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
    quote: "Corto com o Kelvin há uns 4 anos. Nunca saí de lá insatisfeito.",
  },
  {
    name: "Denise M.",
    attribution: null,
    quote:
      "Levei meu filho de 7 anos, que tem pavor de barbeiro. O Léo teve uma paciência que eu não esperava, cortou brincando com ele o tempo todo. Voltamos semana passada e ele já foi correndo sentar na cadeira.",
  },
  {
    name: "Anderson",
    attribution: null,
    quote:
      "Quando tá cheio no sábado demora um pouco, mas o corte compensa. Prefiro marcar durante a semana.",
  },
] as const satisfies readonly Testimonial[];

export const galleryNote =
  "Quatro cadeiras, ar-condicionado, e a espera com café ou cerveja por conta da casa.";

export type GalleryItem = Readonly<{
  image: Readonly<{
    src: `/images/${string}`;
    alt: string;
  }>;
}>;

export const galleryItems: readonly GalleryItem[] = [
  {
    image: {
      src: "/images/barber-cut.webp",
      alt: "Barbeiro realizando um corte masculino na barbearia",
    },
  },
  {
    image: {
      src: "/images/barber-shop.webp",
      alt: "Interior da barbearia com espelhos e poltronas",
    },
  },
  {
    image: {
      src: "/images/barber-service.webp",
      alt: "Área de espera da barbearia com sofá e geladeira de bebidas",
    },
  },
  {
    image: {
      src: "/images/beard.webp",
      alt: "Barbeiro fazendo a barba de um cliente com navalha",
    },
  },
  {
    image: {
      src: "/images/barber-finish.webp",
      alt: "Cliente observando o acabamento do corte no espelho",
    },
  },
];
