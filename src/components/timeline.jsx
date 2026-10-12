
const milestones = [
  {
    year: "1990",
    title: "The Beginning",
    description:
      "Every journey begins somewhere. This chapter introduces the early life, family background, and experiences that helped shape Adil Ali.",
    image: "/timeline/beginning.jpg",
    side: "right",
  },
  {
    year: "2008",
    title: "Education & Growth",
    description:
      "A period of learning, personal development, and experiences that helped build the foundation for future ambitions.",
    image: "/timeline/education.jpg",
    side: "left",
  },
  {
    year: "2012",
    title: "Professional Journey",
    description:
      "Explore the professional milestones, business experiences, and opportunities that contributed to his development.",
    image: "/timeline/career.jpg",
    side: "right",
  },
  {
    year: "2016",
    title: "A Voice in the Public Sphere",
    description:
      "Highlight the journey into anchoring, public communication, and engagement with important social and political issues.",
    image: "/timeline/anchoring.jpg",
    side: "left",
  },
  {
    year: "2020",
    title: "Leadership & Advocacy",
    description:
      "Showcase meaningful initiatives, advocacy, and contributions to the community and professional life.",
    image: "/timeline/advocacy.jpg",
    side: "right",
  },
  {
    year: "2024",
    title: "Expanding Horizons",
    description:
      "Explore recent achievements, business engagements, and contributions to the wider professional community.",
    image: "/timeline/fpcci.jpg",
    side: "left",
  },
];

function Timeline() {
  return (
    <section
      id="experiences"
      className="py-24 text-white sm:py-32"
    >
      {/* Heading */}
      <div className="mx-auto mb-24 max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
          Milestones & Memories
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
          The Journey
          <span className="text-emerald-400">.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-slate-300">
          A story of growth, ambition, leadership, and purpose.
          Every milestone marks another chapter.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-6xl">
        {/* Continuous center line */}
        <div className="absolute bottom-0 left-3 top-0 w-px bg-white/25 md:left-1/2 md:-translate-x-1/2" />

        {milestones.map((item, index) => (
          <article
            key={`${item.year}-${item.title}`}
            className="relative mb-24 last:mb-0"
          >
            {/* Year */}
            <div className="relative z-10 mb-8 pl-10 md:mb-0 md:flex md:justify-center md:pl-0">
              <div className="bg-[#232a34] px-4 py-2 md:px-6">
                <h3 className="text-5xl font-black tracking-tighter text-emerald-400 sm:text-7xl lg:text-8xl">
                  {item.year}
                </h3>
              </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-3 top-5 z-20 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-emerald-400 bg-[#232a34] md:left-1/2" />

            {/* Image and text */}
            <div
              className={`grid grid-cols-1 items-start gap-8 pl-10 md:mt-8 md:grid-cols-2 md:gap-16 md:pl-0 ${
                item.side === "left" ? "" : ""
              }`}
            >
              {/* Left content */}
              <div
                className={`${
                  item.side === "left"
                    ? "md:order-1"
                    : "md:order-2"
                }`}
              >
                <div className="group relative">
                  <div className="overflow-hidden border border-white/10">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={(event) => {
                        event.currentTarget.style.visibility = "hidden";
                      }}
                    />
                  </div>

                  <h4 className="relative -mt-7 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {item.title}
                  </h4>

                  <p className="mt-5 max-w-lg text-base leading-7 text-slate-300">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-16 bg-emerald-400 transition-all duration-300 group-hover:w-32" />
                </div>
              </div>

              {/* Opposite side remains open, like the reference */}
              <div
                className={`hidden md:block ${
                  item.side === "left"
                    ? "md:order-2"
                    : "md:order-1"
                }`}
              />
            </div>
          </article>
        ))}
      </div>

      <p className="mt-24 text-center text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
        The journey continues...
      </p>
    </section>
  );
}

export default Timeline;