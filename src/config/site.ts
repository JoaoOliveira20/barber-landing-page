export const siteConfig = {
  name: "Barbearia do Léo",
  initials: "BL",
  title: "Barbearia do Léo | Corte e barba no Centro de Castanhal",
  description:
    "Corte, barba e pezinho de terça a domingo no Centro de Castanhal. Agende pelo WhatsApp ou chegue e espere a vez.",
} as const;

export const footerTagline =
  "Barbearia de bairro no Centro de Castanhal. Corte, barba e pezinho de terça a domingo.";

export const whatsappNumber = "5591999999999";
const whatsappMessage = "Oi! Queria marcar um horário.";

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
    label: "Por que voltar",
    href: "#diferenciais",
  },
  barbers: {
    label: "Barbeiros",
    href: "#barbeiros",
  },
  testimonials: {
    label: "Depoimentos",
    href: "#depoimentos",
  },
  gallery: {
    label: "A barbearia",
    href: "#galeria",
  },
  location: {
    label: "Onde ficamos",
    href: "#localizacao",
  },
} as const satisfies Record<string, NavigationLink>;

export const navigationLinks = [
  pageLinks.services,
  pageLinks.barbers,
  pageLinks.testimonials,
  pageLinks.location,
] as const satisfies readonly NavigationLink[];

export const footerLinks = [
  pageLinks.home,
  pageLinks.services,
  pageLinks.differentials,
  pageLinks.barbers,
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
    days: "Segunda",
    hours: "Fechado",
  },
  {
    days: "Terça a sexta",
    hours: "09h às 19h",
  },
  {
    days: "Sábado",
    hours: "08h às 20h",
  },
  {
    days: "Domingo",
    hours: "08h às 13h",
  },
] as const satisfies readonly BusinessHour[];

export type SocialLink = Readonly<{
  name: string;
  url: string;
}>;

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/barbeariadoleo",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/barbeariadoleo",
  },
] as const satisfies readonly SocialLink[];

const addressData = {
  street: "Av. Presidente Vargas, 1180",
  neighborhood: "Centro",
  city: "Castanhal",
  state: "PA",
  reference: "A uma quadra da praça da matriz",
} as const;

const mapsQuery = encodeURIComponent(
  `${addressData.street}, ${addressData.neighborhood}, ${addressData.city} - ${addressData.state}`,
);

export const address = {
  ...addressData,
  full: `${addressData.street} — ${addressData.neighborhood}, ${addressData.city} — ${addressData.state}`,
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${mapsQuery}&output=embed`,
} as const;
