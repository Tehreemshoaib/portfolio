import { useState } from "react";

const identities = [
  {
    title: "As a Business Professional",
    description:
      "Leadership, strategic thinking, and building meaningful professional relationships.",
    images: [
      "/business1.jpg",
      "/business2.jpg",
      "/business3.jpg",
    ],
  },
  {
    title: "As an Anchor",
    description:
      "Connecting with audiences through confident communication and engaging conversations.",
    images: [
      "/anchor1.jpg",
      "/anchor2.jpg",
      "/anchor3.jpg",
    ],
  },
  {
    title: "As a Socio-Political Figure",
    description:
      "Engaging with social issues, public dialogue, and ideas that shape communities.",
    images: [
      "/politician1.jpg",
      "/politician2.jpg",
    ],
  },
  {
    title: "As an Author",
    description:
      "Sharing perspectives, communicating ideas, and expressing knowledge through writing.",
    images: [
      "/author1.jpg",
      "/author2.jpg",
    ],
  },
  {
    title: "As an Advocate",
    description:
      "Supporting meaningful causes, raising awareness, and encouraging positive change.",
    images: [
      "/advocate1.jpg",
      "/advocate2.jpg",
      "/advocate3.jpg",
    ],
  },
  {
    title: "As a Member of FPCCI",
    description:
      "Engaging with the business community and supporting collaboration and growth.",
    images: [
      "/fpcci.jpg",
      "/fpcci3.png",
    ],
  },
];

function ImageSlider({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const next = () => {
    setActiveIndex((current) =>
      (current + 1) % images.length
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* Sliding images */}
      <div
        className="flex transition-transform duration-500 ease-in-out motion-reduce:transition-none"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${title} — sample photo ${index + 1}`}
            loading="lazy"
            className="aspect-[4/3] w-full shrink-0 object-cover"
          />
        ))}
      </div>

      {/* Previous / next controls */}
      <button
        type="button"
        onClick={previous}
        aria-label={`Previous photo for ${title}`}
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#232a34]/80 text-white backdrop-blur transition hover:border-emerald-400 hover:text-emerald-400"
      >
        &#8592;
      </button>

      <button
        type="button"
        onClick={next}
        aria-label={`Next photo for ${title}`}
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#232a34]/80 text-white backdrop-blur transition hover:border-emerald-400 hover:text-emerald-400"
      >
        &#8594;
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show photo ${index + 1} for ${title}`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "w-7 bg-emerald-400"
                : "w-1.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* Image counter */}
      <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-[#232a34]/80 px-3 py-1 text-xs text-white backdrop-blur">
        {activeIndex + 1} / {images.length}
      </span>
    </div>
  );
}

function WhoAmI() {
  return (
    <section id="whoami" className="py-20 text-white sm:py-28">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
          Beyond a Single Title
        </p>

        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Who am I<span className="text-emerald-400"> ?</span>
        </h2>

        <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg">
          A journey shaped by leadership, communication, creativity,
          advocacy, and a commitment to making a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {identities.map((identity, index) => (
          <article
            key={identity.title}
            className="group overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-[0_12px_35px_rgba(16,185,129,0.08)]"
          >
            <ImageSlider
              images={identity.images}
              title={identity.title}
            />

            <div className="p-6 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs font-semibold tracking-[0.2em] text-emerald-400">
                  0{index + 1}
                </span>

                <span className="h-px w-10 bg-emerald-400/60 transition-all duration-300 group-hover:w-16" />
              </div>

            <h3 className="text-center text-xl font-bold uppercase tracking-wide leading-snug transition-colors duration-300 group-hover:text-emerald-400 sm:text-2xl">
            {identity.title}
            </h3>

              <p className="mt-3 text-center text-sm leading-7 text-slate-300">
              {identity.description}
             </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default WhoAmI;
