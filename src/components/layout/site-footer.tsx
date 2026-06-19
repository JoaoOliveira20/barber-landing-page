import { Container } from "@/components/layout/container";
import {
  address,
  footerLinks,
  siteConfig,
  socialLinks,
} from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-surface">
      <Container className="grid gap-8 py-10 sm:gap-10 sm:py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:py-14 lg:py-16">
        <div>
          <a
            href="#inicio"
            className="inline-flex items-center gap-3"
            aria-label={`${siteConfig.name} — voltar ao início`}
          >
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center border border-accent/60 font-display text-sm font-semibold text-accent-strong"
            >
              PB
            </span>
            <span className="font-display text-xl font-semibold tracking-wide text-foreground">
              {siteConfig.name}
            </span>
          </a>

          <p className="mt-5 max-w-sm text-sm leading-6 text-muted">
            Corte, barba e cuidado masculino em uma experiência feita com
            técnica, conforto e atenção aos detalhes.
          </p>
          <p className="mt-4 text-sm text-subtle">{address.full}</p>
        </div>

        <nav aria-label="Links rápidos do rodapé">
          <h2 className="text-xs font-bold tracking-[0.2em] text-foreground uppercase">
            Links rápidos
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-1">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-accent-strong"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold tracking-[0.2em] text-foreground uppercase">
            Redes sociais
          </h2>
          <ul className="mt-5 space-y-3">
            {socialLinks.map((social) => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.name} da Prime Barber (abre em nova aba)`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent-strong"
                >
                  {social.name}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/8">
        <Container className="flex flex-col gap-2 pt-5 pb-24 text-xs text-subtle sm:flex-row sm:items-center sm:justify-between lg:py-5">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
          <p className="lg:mr-36">
            Barbearia fictícia para fins demonstrativos.
          </p>
        </Container>
      </div>
    </footer>
  );
}
