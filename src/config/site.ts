export const siteConfig = {
  name: "Barbearia do Kelvin",
  title: "Barbearia do Kelvin | Centro de Castanhal",
  description:
    "Corte, barba e pezinho no Centro de Castanhal. Preço justo, sem frescura. Agende pelo WhatsApp.",
} as const;

export const whatsappNumber = "5591999999999";

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = buildWhatsappUrl(
  "Olá Kelvin, gostaria de agendar um horário na barbearia",
);

export type NavigationLink = Readonly<{
  label: string;
  href: `#${string}`;
}>;

export const navigationLinks: readonly NavigationLink[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Barbeiros", href: "#barbeiros" },
  { label: "Galeria", href: "#galeria" },
  { label: "Onde ficamos", href: "#onde-ficamos" },
];

export const address = {
  street: "Tv. Quintino Bocaiúva, 1420",
  neighborhood: "Centro, Castanhal - PA",
  reference: "A duas quadras da Praça do Estrela",
  landmark:
    "Entre o Bairro do Rio Branco e a Major Wilson, próximo ao Colégio São José",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tv.+Quintino+Bocaiúva,+1420,+Castanhal+-+PA",
  wazeUrl: "https://waze.com/ul?q=Tv.%20Quintino%20Bocai%C3%BAva%2C%201420%2C%20Castanhal%20-%20PA",
} as const;

export const businessHours = [
  { days: "Segunda a Sexta", hours: "08:00 – 19:00" },
  { days: "Sábado", hours: "08:00 – 17:00" },
  { days: "Domingo", hours: "Fechado" },
] as const;

export const socialLinks = {
  instagram: "https://www.instagram.com",
} as const;

export const legalNotice = "Projeto demonstrativo — Barbearia fictícia.";
