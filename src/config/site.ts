export const siteConfig = {
  name: "Prime Barber",
  title: "Prime Barber | Barbearia premium em São Paulo",
  description:
    "Cortes, barba e cuidados masculinos com atendimento personalizado em um ambiente elegante e acolhedor.",
} as const;

export const whatsappNumber = "5511999999999";
const whatsappMessage =
  "Olá! Gostaria de agendar um horário na Prime Barber.";

export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

export type NavigationLink = Readonly<{
  label: string;
  href: `#${string}`;
}>;

export const pageLinks = {
  home: {
    label: "Início",
    href: "#inicio",
  },
  services: {
    label: "Serviços",
    href: "#servicos",
  },
  differentials: {
    label: "Diferenciais",
    href: "#diferenciais",
  },
  experience: {
    label: "Experiência",
    href: "#experiencia",
  },
  testimonials: {
    label: "Depoimentos",
    href: "#depoimentos",
  },
  gallery: {
    label: "Galeria",
    href: "#galeria",
  },
  location: {
    label: "Localização",
    href: "#localizacao",
  },
} as const satisfies Record<string, NavigationLink>;

export const navigationLinks = [
  pageLinks.services,
  pageLinks.differentials,
  pageLinks.testimonials,
  pageLinks.location,
] as const satisfies readonly NavigationLink[];

export const footerLinks = [
  pageLinks.home,
  pageLinks.services,
  pageLinks.experience,
  pageLinks.testimonials,
  pageLinks.gallery,
  pageLinks.location,
] as const satisfies readonly NavigationLink[];

export type BusinessHour = Readonly<{
  days: string;
  hours: string;
}>;

export const businessHours = [
  {
    days: "Segunda-feira",
    hours: "Fechado",
  },
  {
    days: "Terça a sexta",
    hours: "09:00 às 20:00",
  },
  {
    days: "Sábado",
    hours: "09:00 às 18:00",
  },
  {
    days: "Domingo",
    hours: "09:00 às 14:00",
  },
] as const satisfies readonly BusinessHour[];

export type SocialLink = Readonly<{
  name: string;
  url: string;
}>;

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/primebarber",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/primebarber",
  },
] as const satisfies readonly SocialLink[];

const addressData = {
  street: "Rua das Palmeiras, 247",
  neighborhood: "Jardim Paulista",
  city: "São Paulo",
  state: "SP",
  postalCode: "01427-020",
} as const;

const mapsQuery = encodeURIComponent(
  `${addressData.street}, ${addressData.neighborhood}, ${addressData.city} - ${addressData.state}, ${addressData.postalCode}`,
);

export const address = {
  ...addressData,
  full: `${addressData.street} — ${addressData.neighborhood}, ${addressData.city} — ${addressData.state}`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
} as const;
