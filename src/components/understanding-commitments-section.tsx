import Image from "next/image";

const commitments = [
  {
    title: "La dignité humaine et la solidarité",
    description:
      "La dignité humaine constitue le fondement de toute société juste et inclusive. Elle implique le respect des droits fondamentaux, la reconnaissance de chaque personne et la promotion de valeurs de solidarité, d'équité et de respect mutuel.",
    image: "/images/hero-community.jpg",
    imageAlt: "Femmes de la communauté d’Abéché, au Tchad",
  },
  {
    title: "Un avenir durable pour tous",
    description:
      "Construire un avenir durable suppose de concilier progrès social, préservation de l'environnement et développement économique. Cette vision repose sur la responsabilité collective, la gestion raisonnée des ressources et la transmission d'un cadre de vie viable aux générations futures.",
    image: "/images/action-food.jpg",
    imageAlt: "Agriculteur travaillant dans son champ",
  },
  {
    title: "La paix et la cohésion sociale",
    description:
      "Une société pacifique se construit à travers le dialogue, la tolérance, le respect des différences et la participation de tous. La cohésion sociale favorise la confiance entre les communautés et constitue un pilier essentiel de la stabilité et du vivre-ensemble.",
    image: "/images/action-peace.jpg",
    imageAlt: "Rencontre communautaire pour la paix et la cohésion sociale",
  },
  {
    title: "La coopération et la responsabilité collective",
    description:
      "Les grands défis humanitaires et sociaux nécessitent des réponses concertées. La coopération entre les institutions, les organisations, les partenaires et les communautés permet de partager les connaissances, de renforcer les synergies et de construire des réponses durables aux enjeux communs.",
    image: "/images/publication-dialogue.jpg",
    imageAlt: "Rencontre de dialogue communautaire organisée par l’ACHDR",
  },
];

export function UnderstandingCommitmentsSection() {
  return (
    <section
      id="comprendre-nos-engagements"
      aria-labelledby="understanding-commitments-heading"
      className="w-full bg-[#F8F9FA]"
    >
      <div className="mx-auto w-full max-w-[1216px] px-6 py-14 md:py-16">
        <header className="text-center">
          <h2
            id="understanding-commitments-heading"
            className="text-[30px] leading-[1.15] font-bold tracking-[-0.02em] text-[#3F4144] md:text-[42px]"
          >
            Comprendre nos engagements
          </h2>
          <span
            aria-hidden="true"
            className="mx-auto mt-3 block h-[3px] w-[122px] bg-accent"
          />
        </header>

        <div className="mt-[42px] grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((commitment) => (
            <article key={commitment.title} className="text-left">
              <div className="relative h-[218px] w-full overflow-hidden bg-neutral-100">
                <Image
                  src={commitment.image}
                  alt={commitment.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              <h3 className="mt-[19px] text-[22px] leading-[1.15] font-bold text-[#414347]">
                {commitment.title}
              </h3>

              <span
                aria-hidden="true"
                className="mt-[11px] mb-[15px] block h-[3px] w-[82px] bg-accent"
              />

              <p className="text-[15px] leading-[1.5] font-normal text-[#505256]">
                {commitment.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
