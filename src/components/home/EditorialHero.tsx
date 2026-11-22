import { Link } from "@tanstack/react-router";
import { hero } from "@/data/home";

export function EditorialHero() {
  const [first, second] = hero.stories;

  return (
    <section className="frame section-space pt-8 md:pt-14">
      {/* Masthead line */}
      <div className="kicker flex items-center justify-between text-muted-foreground animate-rise">
        <span>Discover — Edição Nº 01</span>
        <span className="hidden md:inline">Xangai · Shenzhen · Hangzhou</span>
        <span>Inverno 2026</span>
      </div>

      {/* Headline + intro */}
      <div className="mt-8 grid gap-7 md:mt-16 md:grid-cols-12 md:items-end">
        <h1 className="display text-[3.4rem] md:col-span-8 md:text-[6.5rem] xl:text-[8rem] animate-rise [animation-delay:80ms]">
          A China em
          <br />
          <em className="italic text-accent">novas</em> perspectivas
        </h1>
        <div className="md:col-span-3 md:col-start-10 md:pb-4 animate-rise [animation-delay:180ms]">
          <p className="text-[15px] leading-relaxed text-foreground/75">
            Cidades, ateliês e objetos que ainda não chegaram ao Brasil. Uma curadoria pessoal
            para quem viaja — ou deseja viajar — pela China contemporânea.
          </p>
          <Link to="/discover" className="link-quiet mt-6 text-foreground">
            Explorar Discover <span aria-hidden>→</span>
          </Link>
        </div>
      </div>

      {/* Editorial grid */}
      <div className="mt-10 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-x-10">
        <figure className="group md:col-span-7">
          <Link to="/discover" className="block overflow-hidden bg-surface">
            <div className="aspect-[4/5]">
              <img
                src={hero.main.image}
                alt={hero.main.alt}
                width={1024}
                height={1536}
                className="img-editorial group-hover:scale-[1.03]"
              />
            </div>
          </Link>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4">
            <span className="kicker text-muted-foreground">{hero.main.caption}</span>
            <span className="kicker text-muted-foreground">Fig. 01</span>
          </figcaption>
        </figure>

        <div className="flex flex-col justify-between gap-10 md:col-span-5 md:gap-12">
          {[first, second].map((story, i) =>
            story ? (
              <article key={story.title} className="group">
                <Link to="/discover" className="block">
                  <div className="aspect-[3/2] overflow-hidden bg-surface">
                    <img
                      src={story.image}
                      alt={story.alt}
                      width={1536}
                      height={1024}
                      loading="lazy"
                      className="img-editorial group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5 grid grid-cols-[auto_1fr] gap-x-5">
                    <span className="kicker pt-1.5 text-accent">0{i + 2}</span>
                    <div>
                      <p className="kicker text-muted-foreground">{story.kicker}</p>
                      <h3 className="display mt-3 text-2xl leading-[1.12] md:text-[1.9rem]">
                        {story.title}
                      </h3>
                      <span className="link-quiet mt-4 text-foreground/70 group-hover:text-foreground">
                        Ler história <span aria-hidden>→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ) : null,
          )}
        </div>
      </div>
    </section>
  );
}
