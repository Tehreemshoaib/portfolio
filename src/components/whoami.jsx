
import { useState } from "react";

const identities = [
  {
    title: "As a Business Professional",
    description:
      "Leadership, strategic thinking, and building meaningful professional relationships.",
    images: [
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    title: "As an Anchor",
    description:
      "Connecting with audiences through confident communication and engaging conversations.",
    images: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    title: "As a Socio-Political Figure",
    description:
      "Engaging with social issues, public dialogue, and ideas that shape communities.",
    images: [
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    title: "As an Author",
    description:
      "Sharing perspectives, communicating ideas, and expressing knowledge through writing.",
    images: [
      "https://images.unsplash.com/photo-1455390582262-044cdej6c8f?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    title: "As an Advocate",
    description:
      "Supporting meaningful causes, raising awareness, and encouraging positive change.",
    images: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=900&q=80",
    ],
  },
  {
    title: "As a Member of FPCCI",
    description:
      "Engaging with the business community and supporting collaboration and growth.",
    images: [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
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
            className="aspect-[16/10] w-full shrink-0 object-cover"
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
    <section id="about" className="py-20 text-white sm:py-28">
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

              <h3 className="text-xl font-semibold leading-snug transition-colors duration-300 group-hover:text-emerald-400">
                {identity.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
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
