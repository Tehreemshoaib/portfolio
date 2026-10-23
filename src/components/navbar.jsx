import { useState } from "react";

function Navbar() {
  const [journeyOpen, setJourneyOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Who Am I", path: "/#whoami" },
    { name: "My Journey", dropdown: "journey" },
    { name: "Experiences", dropdown: "experience" },
    { name: "Contact", path: "/#contact" },
  ];

  const journeyItems = [
    { name: "As a Human", path: "/#as-a-human" },
    { name: "As an Advocate", path: "/#as-an-advocate" },
    { name: "As an author", path: "/#as-an-author" },
    { name: "As ", path: "/#achievements" },
  ];

  const experienceItems = [
    { name: "Aadliyaat", path: "/aadliyaat" },
    { name: "Businesses", path: "/businesses" },
    { name: "AdilCast", path: "/adilcast" },
    { name: "Media & Podcasts", path: "/media&podcasts" },
  ];

  const closeDropdowns = () => {
    setJourneyOpen(false);
    setExperienceOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#232a34]/95 text-white shadow-lg backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16"
      >
        {/* Logo */}
        <a
          href="/"
          onClick={closeDropdowns}
          className="shrink-0 text-2xl font-bold tracking-tight transition-colors hover:text-emerald-400 sm:text-3xl"
        >
          Adil Ali
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {links.map((link) => {
            const isJourney = link.dropdown === "journey";
            const isExperience = link.dropdown === "experience";
            const isDropdown = isJourney || isExperience;

            const isOpen = isJourney
              ? journeyOpen
              : experienceOpen;

            const setOpen = isJourney
              ? setJourneyOpen
              : setExperienceOpen;

            const items = isJourney
              ? journeyItems
              : experienceItems;

            if (!isDropdown) {
              return (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={closeDropdowns}
                  className="whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400 xl:text-base"
                >
                  {link.name}
                </a>
              );
            }

            return (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => {
                  setOpen(true);
                  if (isJourney) setExperienceOpen(false);
                  else setJourneyOpen(false);
                }}
                onMouseLeave={() => setOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => {
                    setOpen((open) => !open);
                    if (isJourney) setExperienceOpen(false);
                    else setJourneyOpen(false);
                  }}
                  aria-expanded={isOpen}
                  className="flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400 xl:text-base"
                >
                  {link.name}
                  <span className="text-xs text-emerald-400">
                    {isOpen ? "⌃" : "⌄"}
                  </span>
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 top-full z-50 w-64 pt-4 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#232a34] py-2 shadow-2xl">
                    {items.map((item) => (
                      <a
                        key={item.name}
                        href={item.path}
                        onClick={closeDropdowns}
                        className="block px-5 py-3 text-sm text-slate-300 transition-colors hover:bg-emerald-400/10 hover:text-emerald-400"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile navigation: compact horizontal links */}
        <div className="flex items-center gap-4 overflow-x-auto lg:hidden">
          <a
            href="/"
            className="whitespace-nowrap text-sm text-slate-300 hover:text-emerald-400"
          >
            Home
          </a>
          <a
            href="/#whoami"
            className="whitespace-nowrap text-sm text-slate-300 hover:text-emerald-400"
          >
            Who Am I
          </a>
          <a
            href="/#my-journey"
            className="whitespace-nowrap text-sm text-slate-300 hover:text-emerald-400"
          >
            My Journey
          </a>
          <a
            href="/#experiences"
            className="whitespace-nowrap text-sm text-slate-300 hover:text-emerald-400"
          >
            Experiences
          </a>
          <a
            href="/#contact"
            className="whitespace-nowrap text-sm text-slate-300 hover:text-emerald-400"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
