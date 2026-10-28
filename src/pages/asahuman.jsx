
function AsAHuman() {
  return (
    <section
      id="as-a-human"
      className="relative overflow-hidden bg-[#232a34] px-6 py-16 text-white sm:px-10 md:py-24 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:gap-20">

        {/* Left: Description */}
        <div className="order-2 md:order-1">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Beyond the titles
          </p>

          <h1 className="mb-7 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            As a Human<span className="text-emerald-400"></span>
          </h1>

          <p className="mb-5 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
            What remains when the titles fade, the achievements fall silent, and the world stops watching? 
          </p>
          <p className="mb-8 max-w-xl text-base leading-8 text-gray-400">
          Just a human being — shaped by experiences, strengthened by challenges, and still discovering the meaning of it all.
          Beyond business, law, journalism and public life, Adil Ali is someone who believes that life is not measured by success alone, but by the lessons we learn, the connections we build, and the person we become along the way. 
          Curious by nature and ambitious by spirit, he continues to explore new perspectives, embrace life's uncertainties, and grow through every experience.
          </p>
          <a
            href="#personal-story"
            className="inline-flex items-center gap-3 border-b border-emerald-400 pb-2 text-sm font-semibold transition-colors hover:text-emerald-400"
          >
            A little more about me
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Right: Portrait */}
        <div className="relative order-1 md:order-2">
          <div className="absolute -inset-4 rounded-3xl bg-emerald-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/as-a-human.jpg"
              alt="Adil Ali"
              className="aspect-[4/5] w-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
          </div>

          <p className="mt-4 text-right text-xs uppercase tracking-[0.25em] text-gray-500">
            The person behind the journey
          </p>
        </div>

      </div>
    </section>
  );
}

export default AsAHuman;