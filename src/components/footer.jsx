import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  const navigation = [
    { name: "Home", href: "/#home" },
    { name: "Who Am I", href: "/#whoami" },
    { name: "My Journey", href: "/#my-journey" },
    { name: "Experiences", href: "/#experiences" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  const socials = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/adil.ali3011",
      Icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/adilcasts/",
      Icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/adil-ali89/",
      Icon: FaLinkedinIn,
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#232a34] px-6 text-white sm:px-10 lg:px-16">

      <div className="relative mx-auto max-w-7xl">

        {/* Main footer content */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16 lg:py-20">

          {/* Brand and introduction */}
          <div>
            <a
              href="/#home"
              className="inline-block text-3xl font-bold tracking-tight transition-colors hover:text-emerald-400"
            >
              Adil Ali<span className="text-emerald-400">.</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Business professional, anchor, socio-political figure, author
              and advocate. Building meaningful connections through leadership,
              communication and public service.
            </p>

            {/* Social media */}
            <div className="mt-7 flex gap-3">
              {socials.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-400 hover:text-[#232a34]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Explore
            </h3>

            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-emerald-400"
                  >
                    <span className="h-px w-0 bg-emerald-400 transition-all duration-300 group-hover:w-3" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact call-to-action */}
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Let's Connect
            </h3>

            <h4 className="max-w-xs text-2xl font-medium leading-snug sm:text-3xl">
              Have something meaningful in mind?
            </h4>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              For collaborations, professional opportunities or inquiries,
              let's start a conversation.
            </p>

            <a
              href="/#contact"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-[#17251f] transition-all duration-300 hover:bg-emerald-300 hover:shadow-[0_0_25px_rgba(52,211,153,0.18)]"
            >
              Get in Touch
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-6 text-gray-500">
            © {new Date().getFullYear()} Adil Ali. All rights reserved.
          </p>

          <a
            href="/#home"
            className="group inline-flex items-center gap-3 text-xs text-gray-400 transition-colors hover:text-emerald-400"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-emerald-400 group-hover:bg-emerald-400 group-hover:text-[#232a34]">
              <FaArrowUp size={12} />
            </span>
          </a>

        </div>
      </div>
    </footer>
  );
}

export default Footer;