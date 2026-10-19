import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

  const links = [
  { name: "Home", id: "home", path: "/" },
  { name: "Who Am I", id: "whoami", path: "/#whoami" },
  { name: "My Journey", id: "/#my-journey" },
  { name: "Experiences", id: "experiences" },
  { name: "Contact", id: "/#contact" },
];

  const experienceItems = [
  {
    name: "Aadliyaat",
    path: "/aadliyaat",
  },
  {
    name: "Businesses",
    path: "/businesses",
  },
  {
    name: "AdilCast",
    path: "/adilcast",
  },
  {
    name: "Media & Podcasts",
    path: "/media&podcasts",
  },
];

  const closeMenu = () => {
    setMenuOpen(false);
    setExperienceOpen(false);
  };

  return (
    <>
      <header className="relative z-50 flex items-center justify-between">
        <a
  href="#home"
  onClick={() => {
    closeMenu();
    document.getElementById("home")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
>
  Adil Ali
</a>

        <button
          type="button"
          onClick={() => {
            setMenuOpen((open) => !open);
            setExperienceOpen(false);
          }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-[70] flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 text-white transition hover:border-emerald-400 hover:bg-white/10"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Background overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[55] bg-black/60 transition-opacity duration-500 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Left sliding menu */}
      <nav
        aria-label="Main navigation"
        aria-hidden={!menuOpen}
        className={`fixed left-0 top-0 z-[60] flex h-dvh w-[min(85vw,400px)] flex-col overflow-y-auto border-r border-white/10 bg-[#232a34] px-8 pb-10 pt-24 shadow-2xl transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col">
          {links.map((link, index) => (
            
<div
  key={link.id}
  onMouseEnter={() => {
    if (link.id === "experiences" && menuOpen) {
      setExperienceOpen(true);
    }
  }}
  onMouseLeave={() => {
    if (link.id === "experiences") {
      setExperienceOpen(false);
    }
  }}
>

              {link.id === "experiences" ? (
                <>
                  {/* Experiences dropdown trigger */}
                  <button
                    type="button"
                    tabIndex={menuOpen ? 0 : -1}
                    onClick={() => setExperienceOpen((open) => !open)}
                    aria-expanded={experienceOpen}
                    className={`group flex w-full items-center justify-between border-b border-white/10 py-4 text-xl font-medium transition-all duration-300 hover:pl-3 ${
                      menuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: menuOpen
                        ? `${index * 50}ms`
                        : "0ms",
                    }}
                  >
                    <span className="text-white transition-colors group-hover:text-emerald-400">
                      Experiences
                    </span>

                    <span className="text-sm text-emerald-400">
                      {experienceOpen ? "⌃" : "⌄"}
                    </span>
                  </button>

                  {/* Experiences submenu */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                      experienceOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                    aria-hidden={!experienceOpen}
                  >
                    <div className="overflow-hidden">
                      <div className="border-b border-white/10 py-2 pl-4">
                        {experienceItems.map((item) =>
  item.path ? (
    <a
      key={item.name}
      href={item.path}
      tabIndex={menuOpen && experienceOpen ? 0 : -1}
      onClick={closeMenu}
      className="block border-l border-emerald-400/30 py-3 pl-4 text-base font-medium text-slate-300 transition-colors hover:border-emerald-400 hover:text-emerald-400"
    >
      {item.name}
    </a>
  ) : (
    <span
      key={item.name}
      className="block cursor-default border-l border-white/10 py-3 pl-4 text-base font-medium text-slate-500"
    >
      {item.name}
    </span>
  )
)}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={link.path || `#${link.id}`}
                  tabIndex={menuOpen ? 0 : -1}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: menuOpen
                      ? `${index * 50}ms`
                      : "0ms",
                  }}
                  className={`group flex items-center justify-between border-b border-white/10 py-4 text-xl font-medium transition-all duration-300 hover:pl-3 hover:text-emerald-400 ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                >
                  <span className="text-white transition-colors group-hover:text-emerald-400">
                    {link.name}
                  </span>

                  <span className="text-sm text-emerald-400 opacity-0 transition group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-10">
          <div className="mb-4 h-px bg-white/10" />
          <p className="text-sm text-slate-400">Adil Ali</p>
          <p className="mt-1 text-xs tracking-wide text-slate-500">
            Business · Advocacy · Public Service
          </p>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
