
function AsAnAuthor() {
  const galleryImages = [
    {
      src: "/author-presentation.jpg",
      alt: "Adil Ali presenting his book",
      caption: "The Author",
    },
    {
      src: "/author-book.jpg",
      alt: "Book authored by Adil Ali",
      caption: "The Publication",
    },
    {
      src: "/author-event.jpg",
      alt: "Adil Ali at a literary event",
      caption: "A Moment in the Journey",
    },
  ];

  return (
    <main className="bg-[#232a34] text-white font-['Bricolage_Grotesque']">
      {/* Main Author Section */}
      <section className="py-12 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Hero Image and Independent Book Image */}
          <div className="relative mx-auto mb-6 w-full max-w-md pb-10 pr-10">

            {/* Main Hero Image Block */}
            <div className="relative w-full">
              {/* Hero Image Emerald Outline */}
              <div className="absolute -bottom-3 -left-3 h-full w-full rounded-2xl border border-emerald-400/40" />

              {/* Hero Image */}
              <img
                src="/present.jpg"
                alt="Adil Ali presenting his book"
                className="relative z-10 aspect-[3/4] w-full rounded-2xl object-cover"
              />

              {/* Hero Image Label */}
              <span className="absolute bottom-4 left-4 z-20 rounded-full bg-emerald-400 px-4 py-2 text-xs font-semibold text-[#232a34] shadow-lg sm:px-5 sm:py-3 sm:text-sm">
                Literature &amp; Publication
              </span>
            </div>

            {/* Independent Book Image Block */}
            <div className="absolute -bottom-1 -right-1 z-30 w-[38%]">
              {/* Book Block's Own Emerald Outline */}
              <div className="absolute -bottom-2 -right-2 h-full w-full rounded-xl border border-emerald-400/50" />

              {/* Separate Book Frame */}
              <div className="relative overflow-hidden rounded-xl border-4 border-[#232a34] bg-[#232a34] shadow-2xl">
                <img
                  src="/aadliyaat-book.png"
                  alt="Book authored by Adil Ali"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Author Details */}
          <div className="pt-5 lg:pt-0">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              As an Author
            </p>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              A voice shaped by ideas
            </h1>

            <div className="my-7 h-1 w-16 rounded-full bg-emerald-400" />

            <p className="max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              Beyond business, public life, and advocacy, writing offers
              Adil Ali another way to express his ideas and perspectives.
              Through his work as an author, he explores the thoughts,
              experiences, and questions that shape how we understand
              ourselves and the world around us.
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
              His literary journey reflects a belief that words can
              preserve ideas, encourage reflection, and connect people
              through shared experiences.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-sm tracking-wide text-white/60">
                Ideas. Expression. Perspective.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="border-t border-white/10 py-16 md:py-20">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Behind the pages
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              The Author&apos;s Journey
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-white/50">
            A glimpse into the book, its presentation, and the moments
            behind the work.
          </p>
        </div>

        {/* Author Gallery */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <figure key={image.src} className="group">
              <div className="overflow-hidden rounded-xl bg-white/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <figcaption className="mt-4 flex items-center gap-3">
                <span className="text-sm font-medium text-emerald-400">
                  0{index + 1}
                </span>

                <span className="text-base text-white/80">
                  {image.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AsAnAuthor;
