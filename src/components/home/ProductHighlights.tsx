import { Link } from "@tanstack/react-router";
import { products } from "@/data/home";
import { SectionHeading } from "./SectionHeading";

export function ProductHighlights() {
  return (
    <section className="frame pb-24 md:pb-36">
      <SectionHeading
        index="01"
        title="Uma seleção da GUAN"
        action={
          <Link to="/catalogo" className="link-quiet text-foreground/80 hover:text-foreground">
            Ver catálogo <span aria-hidden>→</span>
          </Link>
        }
      />

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:mt-14 md:grid-cols-4 md:gap-x-8">
        {products.map((p) => (
          <li key={p.name} className="group">
            <Link to="/catalogo" className="block">
              <div className="aspect-square overflow-hidden bg-surface">
                <img
                  src={p.image}
                  alt={p.name}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="img-editorial group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-4 space-y-1.5">
                <p className="kicker text-muted-foreground">{p.brand}</p>
                <h3 className="text-[15px] font-medium leading-snug">{p.name}</h3>
                <p className="text-[13px] text-foreground/60">{p.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
