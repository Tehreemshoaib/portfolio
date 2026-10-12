import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Hero() {
  
const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/adil.ali3011",
    icon: <FaFacebookF />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/adilcasts/",
    icon: <FaInstagram />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/adil-ali89/",
    icon: <FaLinkedinIn />,
  },
];


  return (
    <section
      id="home"
      className="grid min-h-[calc(100vh-100px)] grid-cols-1 items-center gap-10 py-12 md:grid-cols-2 md:gap-16 md:py-8"
    >
      {/* Left side: introduction */}
      <div className="order-2 text-white md:order-1">

        <h1 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl">
          I'm Adil Ali
        </h1>

        <h2 className="mt-3 text-lg font-medium sm:text-2xl">
         Business Professional, Anchor, Socio-Political, Author &amp; Advocate, Member FPCCI
        </h2>
        

<div className="mt-7 space-y-4 text-slate-200">
  <p className="flex items-center gap-3">
    <FaMapMarkerAlt className="shrink-0 text-emerald-400" size={18} />
    <span>Karachi, Pakistan</span>
  </p>

  <p className="flex items-center gap-3">
    <FaEnvelope className="shrink-0 text-emerald-400" size={18} />
    <a
      href="mailto:Me@adilali.me"
      className="transition-colors hover:text-emerald-400"
    >
      Me@adilali.me
    </a>
  </p>
  
<p className="flex items-center gap-3">
  <FaPhoneAlt className="shrink-0 text-emerald-400" size={18} />
  <a
    href="tel:+92 337 8328310"
    className="transition-colors hover:text-emerald-400"
  >
    +92 337 8328310
  </a>
</p>
</div>


<div className="mt-8 flex flex-wrap gap-4">
  {socialLinks.map((social) => (
    <a
      key={social.name}
      href={social.url}
      aria-label={social.name}
      className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:border-emerald-400 hover:text-emerald-400"
    >
      <span className="text-xl">
        {social.icon}
      </span>
    </a>
  ))}
</div>
      </div>

      

{/* Right side: profile image */}
<div className="order-1 flex items-center justify-center md:order-2">
  <img
    src="/profile.png"
    alt="Profile portrait"
    className="h-auto w-full max-w-none object-contain md:scale-105 lg:scale-110"
  />
</div>
    </section>
  );
}

export default Hero;