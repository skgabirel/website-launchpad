import { Link } from "@tanstack/react-router";
import { about } from "@/data/home";

export function AboutIntro() {
  return (
    <section className="frame pb-24 md:pb-36">
      <div className="grid gap-10 border-t border-rule pt-10 md:grid-cols-12 md:gap-x-10 md:pt-14">
        <div className="md:col-span-6">
          <div className="aspect-[4/3] overflow-hidden bg-surface">
            <img
              src={about.image}
              alt={about.alt}
              width={1536}
              height={1024}
              loading="lazy"
              className="img-editorial"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 md:col-span-5 md:col-start-8">
          <div>
            <p className="kicker text-accent">03 — Sobre a GUAN</p>
            <h2 className="display mt-6 text-[2.2rem] leading-[1.05] md:text-[3.2rem]">
              Um olhar atento, <em className="italic">na China</em>, a serviço de quem viaja.
            </h2>
          </div>

          <div className="space-y-5 text-[15px] leading-relaxed text-foreground/75">
            <p>
              A GUAN é um serviço de personal shopper e descoberta para brasileiros que viajam à
              China. Percorremos ateliês, mercados de design e marcas independentes para encontrar
              o que merece ser levado para casa.
            </p>
            <p>
              Cada produto é escolhido com cuidado. Cada pedido, acompanhado de perto — da
              primeira conversa até a entrega.
            </p>
            <Link to="/sobre" className="link-quiet pt-2 text-foreground">
              Conheça a GUAN <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
