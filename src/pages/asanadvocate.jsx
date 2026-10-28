function AsAnAdvocate() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#232a34] text-white">
      {/* HERO */}
      <section className="relative px-6 pb-20 pt-12 sm:px-10 sm:pb-28 sm:pt-16 lg:px-16 lg:pt-20">
        <div className="mx-auto max-w-7xl">

          {/* Top label */}
          <div className="mb-12 flex items-center justify-between border-b border-white/10 pb-5">
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.85fr] lg:gap-20">

            {/* LEFT: CONTENT */}
            <div className="relative z-10">
              <p className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-400">
                <span className="h-px w-8 bg-emerald-400" />
                As an Advocate
              </p>

              <h1 className="max-w-2xl text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                A voice shaped
                <br />
                by <span className="font-normal italic text-emerald-400">conviction.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                Beyond his professional pursuits, Adil Ali's engagement
                with public life reflects an interest in the issues that
                shape people, communities, and society. His perspective
                brings together his experiences, his curiosity about the
                world around him, and his role as an advocate.
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                For Adil, this part of his journey is about remaining
                engaged, asking meaningful questions, and contributing
                his voice to conversations that deserve attention.
              </p>

              <a
                href="#advocacy-work"
                className="group mt-9 inline-flex items-center gap-4 border-b border-emerald-400/50 pb-3 text-sm font-medium transition hover:border-emerald-300"
              >
                Explore this side of Adil
                <span className="text-lg text-emerald-400 transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>

            {/* RIGHT: ADIL'S IMAGE */}
            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              {/* Emerald accent */}
              <div className="absolute -right-3 -top-3 h-28 w-28 border-r border-t border-emerald-400/60 sm:-right-5 sm:-top-5" />

              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-white/5">
                <img
                  src="/asadvocate.jpg"
                  alt="Adil Ali — As an Advocate"
                  className="h-full w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
                />

                {/* Subtle image overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101810]/35 via-transparent to-transparent" />

                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 sm:p-7">
                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/75">
                      Adil Ali
                    </p>
                    <p className="mt-1 text-lg font-medium">
                      As an Advocate
                    </p>
                  </div>
                  <span className="text-2xl text-emerald-300">↗</span>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute -bottom-3 -left-3 h-20 w-20 border-b border-l border-emerald-400/60 sm:-bottom-5 sm:-left-5" />
            </div>
          </div>
        </div>
      </section>

      {/* OVERSIZED WORDMARK */}
      <section className="px-4 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-7 sm:py-10">
          <p className="mb-3 text-center text-[10px] uppercase tracking-[0.4em] text-emerald-400/80">
            A personal perspective
          </p>

        <p
  aria-label="Advocacy"
  className="select-none text-center font-['Bricolage_Grotesque'] text-[16vw] font-bold leading-none tracking-[0.001em] text-white/[0.07] sm:text-[14vw] lg:text-[12vw]"
>
  Advocacy
</p>
        </div>
      </section>

      {/* PERSONAL PERSPECTIVE */}
      <section
        id="advocacy-work"
        className="scroll-mt-24 px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.65fr_1.35fr] md:gap-20">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-400">
              A closer perspective
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              More than a
              <br />
              professional title.
            </h2>
          </div>

          <div className="border-l border-emerald-400/40 pl-6 sm:pl-9">
            <p className="text-lg leading-9 text-white/70">
              Adil Ali's identity as an advocate forms one part of a
              broader journey spanning professional life, writing,
              communication, and public engagement. Each brings its own
              experiences and perspectives, contributing to how he
              understands the world and his place within it.
            </p>

            <p className="mt-6 text-lg leading-9 text-white/70">
              This page is a reflection of that side of his journey —
              one that sits alongside his other pursuits and continues
              to evolve with experience.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs uppercase tracking-[0.25em] text-white/45">
                Adil Ali · His journey, in his own context
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AsAnAdvocate;