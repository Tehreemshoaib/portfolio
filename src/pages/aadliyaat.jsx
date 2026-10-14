
import { FaArrowRight, FaBookOpen } from "react-icons/fa";

function Aadliyaat() {
  return (
    <section
      id="aadliyaat"
      className="relative min-h-screen overflow-hidden bg-[#232a34] px-6 py-16 text-white sm:px-10 md:py-24 lg:px-16"
    >
      {/* Subtle golden atmosphere */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-[#c9a96e]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#c9a96e]">
            Literature &amp; Publication
          </p>

          <h1 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            <span>Aadliyaat</span>
            <span className="text-[#c9a96e]">—</span>

            <span
              lang="ur"
              dir="rtl"
              style={{ fontFamily: "AadliyaatUrdu, serif" }}
              className="font-normal leading-relaxed"
            >
              عادلیات
            </span>
          </h1>

          <div className="mt-6 h-[2px] w-20 bg-[#c9a96e]" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-8 lg:gap-12">
          {/* Left: Book Description */}
          <div className="order-2 min-w-0 md:order-1">
            <div className="mb-6 flex items-center gap-3 text-[#c9a96e]">
              <FaBookOpen className="text-xl" />

              <span className="text-xs uppercase tracking-[0.25em]">
                A World of Words
              </span>
            </div>

            <h2 className="mb-6 max-w-lg text-3xl font-medium leading-snug sm:text-4xl">
              Where stories meet{" "}
              <span className="text-[#c9a96e]">the soul.</span>
            </h2>

            <p className="mb-5 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Rooted in imagination and inspired by the realities of life,
              Aadliyaat offers readers a compelling journey into the world of
              stories, human experiences, and thoughtful reflection.
            </p>

            <p className="mb-5 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Drawing upon his observations of everyday life, Aadil Ali presents
              a narrative that invites readers to look beyond the surface and
              discover deeper meanings in the world around them.
            </p>

            <p className="mb-8 max-w-xl text-base leading-8 text-gray-300 sm:text-lg">
              Through engaging storytelling and a distinctive perspective,
              the author explores the power of imagination and the significance
              of life's experiences.
            </p>

            {/* Call to Action */}
            <div className="border-l-2 border-[#c9a96e] py-2 pl-5">
              <p className="mb-5 text-lg font-medium text-white sm:text-xl">
                Discover the world of Aadliyaat.
              </p>

              <a
                href="#"
                className="group inline-flex items-center gap-3 rounded-full bg-[#c9a96e] px-7 py-3.5 font-semibold text-[#232a34] transition-all duration-300 hover:bg-[#e5c68e] hover:shadow-[0_0_30px_rgba(201,169,110,0.25)]"
              >
                Buy Now
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right: Large Book with Static Golden Glow */}
          <div className="order-1 flex min-w-0 items-start justify-center md:order-2 md:-mt-96 lg:-mt-116">
            <div className="relative isolate flex w-full items-center justify-center md:translate-x-3 lg:translate-x-5">
              {/* Main golden aura */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[65px]"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,215,130,0.34) 0%, rgba(201,169,110,0.20) 40%, rgba(201,169,110,0.06) 68%, transparent 100%)",
                }}
              />

              {/* Central golden shine */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,230,170,0.30) 0%, rgba(230,190,105,0.12) 50%, transparent 75%)",
                }}
              />

              {/* Static golden sparkles */}
              <span className="pointer-events-none absolute left-[8%] top-[18%] z-20 text-3xl text-[#f3d995] drop-shadow-[0_0_12px_rgba(243,217,149,0.9)]">
                ✦
              </span>

              <span className="pointer-events-none absolute right-[10%] top-[14%] z-20 text-2xl text-[#e5c477] drop-shadow-[0_0_12px_rgba(229,196,119,0.9)]">
                ✧
              </span>

              <span className="pointer-events-none absolute right-[5%] top-[55%] z-20 text-3xl text-[#f3d995] drop-shadow-[0_0_12px_rgba(243,217,149,0.9)]">
                ✦
              </span>

              <span className="pointer-events-none absolute bottom-[12%] left-[15%] z-20 text-2xl text-[#e5c477] drop-shadow-[0_0_12px_rgba(229,196,119,0.9)]">
                ✧
              </span>

              <span className="pointer-events-none absolute left-[3%] top-[48%] z-20 text-lg text-[#f3d995]">
                ✧
              </span>

              {/* Book Image */}
              <img
                src="/aadliyaat-book.png"
                alt="Aadliyaat book"
                className="relative z-10 block h-auto w-full scale-110 object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)] md:scale-125 lg:scale-[1.35]"
              />

              {/* Golden light beneath the book */}
              <div
                className="pointer-events-none absolute bottom-[2%] left-1/2 -z-10 h-10 w-[70%] -translate-x-1/2 rounded-full blur-2xl"
                style={{
                  background: "rgba(229,190,105,0.45)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aadliyaat;
