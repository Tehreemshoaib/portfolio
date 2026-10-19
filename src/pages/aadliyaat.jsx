
import { FaArrowRight, FaBookOpen } from "react-icons/fa";

const galleryImages = [
  { src: "1.jpg", alt: "Aadliyaat photograph" },
  { src: "2.jpg", alt: "Aadliyaat photograph" },
  { src: "3.jpg", alt: "Aadliyaat photograph" },
  { src: "4.jpg", alt: "Aadliyaat photograph" },
  { src: "5.jpg", alt: "Aadliyaat photograph" },
  { src: "6.jpg", alt: "Aadliyaat photograph" },
  { src: "7.jpg", alt: "Aadliyaat photograph" },
  { src: "8.jpg", alt: "Aadliyaat photograph" },
  { src: "9.jpg", alt: "Aadliyaat photograph" },
  { src: "10.jpg", alt:"Aadliyaat photograph" },
  { src: "11.jpg", alt: "Aadliyaat photograph" },
  { src: "12.jpg", alt: "Aadliyaat photograph" },
  { src: "13.jpg", alt: "Aadliyaat photograph" },
];

function Aadliyaat() {
  return (
    <section
      id="aadliyaat"
      className="relative min-h-screen overflow-hidden bg-[#232a34] px-6 py-16 text-white sm:px-10 md:py-24 lg:px-16"
    >
      {/* Subtle emerald atmosphere */}
      <div className="pointer-events-none absolute right-0 top-1/4 h-96 w-96 rounded-full bg-emerald-400/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-12 md:mb-16">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-emerald-400">
            Literature &amp; Publication
          </p>

          <h1 className="flex flex-wrap items-center gap-x-4 gap-y-2 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            <span>Aadliyaat</span>
            <span className="text-emerald-400">—</span>

            <span
              lang="ur"
              dir="rtl"
              style={{ fontFamily: "AadliyaatUrdu, serif" }}
              className="font-normal leading-relaxed"
            >
              عادلیات
            </span>
          </h1>

          <div className="mt-6 h-[2px] w-20 bg-emerald-400" />
        </div>

        {/* Main Content */}
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-8 lg:gap-12">
          {/* Left: Book Description */}
          <div className="order-2 min-w-0 md:order-1">
            <div className="mb-6 flex items-center gap-3 text-emerald-400">
              <FaBookOpen className="text-xl" />
              <span className="text-xs uppercase tracking-[0.25em]">
                A World of Words
              </span>
            </div>

            <h2 className="mb-6 max-w-lg text-3xl font-medium leading-snug sm:text-4xl">
              Where stories meet{" "}
              <span className="text-emerald-400">the soul.</span>
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

            {/* Buy the book */}
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-full border border-emerald-400/50 px-6 py-3 text-sm font-semibold text-emerald-400 transition duration-300 hover:bg-emerald-400 hover:text-[#232a34]"
            >
              Discover Aadliyaat
              <FaArrowRight />
            </a>
          </div>

          {/* Right: Book Presentation */}
          <div className="order-1 flex min-w-0 items-start justify-center md:order-2 md:-mt-88 lg:-mt-100">
            <div className="book-display relative isolate flex w-full items-start justify-center md:translate-x-5 lg:translate-x-8">
              {/* Ambient emerald glow */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[90%] w-full -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(52,211,153,0.18) 0%, rgba(52,211,153,0.08) 45%, transparent 75%)",
                }}
              />

              {/* Focused light */}
              <div
                className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[65px]"
                style={{
                  background:
                    "radial-gradient(ellipse, rgba(110,231,183,0.14), transparent 72%)",
                }}
              />

              {/* Ground shadow */}
              <div className="pointer-events-none absolute bottom-[4%] left-1/2 -z-10 h-10 w-[72%] -translate-x-1/2 rounded-[50%] bg-black/50 blur-2xl" />

              <img
                src="/aadliyaat-book.png"
                alt="Aadliyaat hardcover book by Aadil Ali"
                className="relative z-10 block h-auto w-full max-w-none object-contain md:scale-125 lg:scale-[1.4]"
                style={{
                  filter:
                    "drop-shadow(16px 24px 22px rgba(0,0,0,0.48)) drop-shadow(0px 0px 12px rgba(52,211,153,0.10))",
                }}
              />

              {/* Reflection beneath the book */}
              <div
                className="pointer-events-none absolute bottom-[3%] left-1/2 -z-10 h-5 w-[55%] -translate-x-1/2 rounded-full blur-xl"
                style={{ background: "rgba(52,211,153,0.22)" }}
              />
            </div>
          </div>
        </div>

        {/* Aadliyaat Image Gallery */}
        <section className="relative mt-28 pb-12">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              A Closer Look
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              The World of Aadliyaat
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
              Explore the moments, memories, and stories connected to
              Aadliyaat.
            </p>

            <div className="mx-auto mt-6 h-[2px] w-16 bg-emerald-400/70" />
          </div>

          {/* Masonry layout preserves each image's natural proportions */}
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className="mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading={index > 2 ? "lazy" : "eager"}
                  className="block h-auto w-full transition duration-500 hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Book styling */}
      <style>{`
        .book-display {
          perspective: 1400px;
          transform-style: preserve-3d;
        }

        .book-display > img {
          transform: rotateY(-3deg) rotateZ(-0.5deg);
          transform-origin: center center;
        }

        @media (max-width: 767px) {
          .book-display > img {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}

export default Aadliyaat;
