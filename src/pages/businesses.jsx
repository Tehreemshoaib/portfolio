const businessSections = [
  {
    name: "TechSynergy",
    number: "02",
    description:
      "TechSynergy (Private) Limited is a dedicated technology solutions company focused on delivering high-impact IT products and services across Pakistan’s corporate and public sectors. We offer end-to-end technology solutions designed to help organizations operate smarter, faster, and more efficiently.",
    image: "/techsynergy.png",
    imageAlt: "TechSynergy company",
    imageSide: "right",
    website: "",
  },
  {
    name: "CodeNergy FZE",
    number: "01",
    description:
      "Discover Codenergy, its vision, and the work behind the company. This space highlights its identity, purpose, and contribution to the business world.",
    image: "/codenergy.png",
    imageAlt: "Codenergy company",
    imageSide: "left",
    website: "https://codenergy.ae",
  },
];

function Businesses() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#232a34] px-6 py-16 text-white sm:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Introduction */}
        <section className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Beyond One Venture
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Our
              <span className="text-emerald-400"> Businesses.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              A closer look at the businesses associated with Adil Ali,
              their identities, and the ideas that drive them forward.
            </p>

            <a
              href="#our-businesses"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/40 px-6 py-3 font-medium text-emerald-400 transition hover:bg-emerald-400 hover:text-[#232a34]"
            >
              Explore Businesses <span>↓</span>
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-emerald-400/[0.08] blur-3xl" />

            <img
              src="/businesses.jpeg"
              alt="Business and professional environment"
              className="relative h-[380px] w-full rounded-3xl object-cover sm:h-[480px] lg:h-[540px]"
            />
          </div>
        </section>

        {/* Business sections */}
        <section id="our-businesses" className="mt-28 scroll-mt-10 sm:mt-36">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Our Ventures
            </p>

            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              The Businesses
              <span className="text-emerald-400"> Behind the Vision.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-300">
              Two companies, each with its own identity and story.
            </p>
          </div>

          <div className="space-y-24 sm:space-y-32">
            {businessSections.map((business) => (
              <article
                key={business.name}
                className="grid items-center gap-8 md:grid-cols-2 md:gap-16"
              >
                
{/* Image */}
<div
  className={
    business.imageSide === "right"
      ? "md:order-2"
      : "md:order-1"
  }
>
  <div className="group mx-auto flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white p-8 shadow-xl shadow-emerald-400/5 transition duration-500 hover:shadow-emerald-400/15 sm:h-[320px] sm:w-[320px] lg:h-[360px] lg:w-[360px]">
<img
  src={business.image}
  alt={business.imageAlt}
  loading="lazy"
  className="h-[90%] w-[90%] object-contain transition duration-500 group-hover:scale-105"
/>
  </div>
</div>

                {/* Description */}
                <div
                  className={
                    business.imageSide === "right"
                      ? "md:order-1"
                      : "md:order-2"
                  }
                >
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
                    Business {business.number}
                  </p>

                  <h3 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    {business.name}
                    <span className="text-emerald-400">.</span>
                  </h3>

                  <div className="my-6 h-px w-16 bg-emerald-400" />

                  <p className="max-w-xl text-base leading-8 text-slate-300">
                    {business.description}
                  </p>

                  {business.website && (
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-3 font-semibold text-emerald-400 transition hover:gap-5"
                    >
                      Visit Website <span>↗</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}

export default Businesses;