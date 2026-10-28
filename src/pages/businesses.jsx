import "../components/Businesses.css";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaLightbulb,
  FaLaptopCode,
  FaHeadset,
  FaCode,
  FaBullhorn,
  FaCloud,
  FaGlobe,
  FaBolt,
} from "react-icons/fa6";

const businesses = [
  {
    id: "techsynergy",
    number: "01",
    name: "TechSynergy",
    category: "TECHNOLOGY & DIGITAL SOLUTIONS",
    subcategory: "TECHNOLOGIES & DIGITAL",
    tagline: "Smarter technology. Stronger tomorrow.",
    description:
      "TechSynergy is focused on delivering innovative technology solutions. It helps businesses grow through strategic planning, modern design, and reliable development.",
    website: "https://techsynergypk.com/",
    websiteLabel: "Visit TechSynergy",
    theme: "tech",
    services: [
      { icon: FaLightbulb, label: "IT Strategy" },
      { icon: FaLaptopCode, label: "Web Design" },
      { icon: FaHeadset, label: "IT Support" },
    ],
  },
  {
    id: "codenergy",
    number: "02",
    name: "CodeNergy",
    suffix: "FZE.",
    category: "DIGITAL SOFTWARE SOLUTIONS",
    subcategory: "DIGITAL & SOFTWARE",
    tagline: "Build. Innovate. Grow.",
    description:
      "CodeNergy FZE delivers digital solutions, creative design, and strategic marketing to help businesses grow and stand out. We turn ideas into impactful digital experiences.",
    website: "https://www.codenergy.ae/",
    websiteLabel: "Visit CodeNergy",
    theme: "code",
    services: [
      { icon: FaCode, label: "Web Development" },
      { icon: FaCloud, label: "UI/UX Design" },
      { icon: FaBullhorn, label: "Branding" },
    ],
  },
];

function Businesses() {
  return (
    <main className="businesses-page">
      {/* HERO */}
      <section className="businesses-hero">
        <div className="businesses-hero-copy">
          <span className="business-eyebrow">
            <i />
            BEYOND ONE VENTURE
          </span>

          <h1>
            Our
            <span>Businesses.</span>
          </h1>

          <p>
            A closer look at the businesses associated with
            Adil Ali, their identities, and the ideas that
            drive them forward.
          </p>

          <a className="business-button" href="#business-portfolio">
            Explore Businesses <FaArrowRight />
          </a>
        </div>

        <div className="businesses-hero-visual">
  <img
    src="/business-img.png"
    alt="CodeNergy and TechSynergy office"
    className="hero-photo-space"
  />

  <span className="hero-photo-tag">
    DUAL VENTURES / HEADQUARTERS
  </span>

          <div className="hero-photo-caption">
            <small>COLLABORATIVE ECOSYSTEM</small>
            <strong>
              Ideas into <span>Impact.</span>
            </strong>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="businesses-overview" id="business-portfolio">
        <div className="overview-copy">
          <span className="business-eyebrow">
            <i />
            OUR PORTFOLIO
          </span>

          <h2>
            Different identities.
            <span>One vision.</span>
          </h2>

          <p>
            Two distinct brands, each with a unique focus, but
            driven by the same mission — to create digital
            solutions, build lasting partnerships, and deliver
            real value.
          </p>
        </div>

        <div className="overview-stats">
          <div className="overview-stat">
            <span className="stat-icon"><FaLightbulb /></span>
            <strong>2</strong>
            <small>Brands</small>
          </div>

          <div className="overview-stat">
            <span className="stat-icon"><FaGlobe /></span>
            <strong>1</strong>
            <small>Vision</small>
          </div>

          <div className="overview-stat">
            <span className="stat-icon"><FaBolt /></span>
            <strong className="endless-stat">Endless</strong>
            <small>Possibilities</small>
          </div>
        </div>
      </section>

      {/* COMPANY SHOWCASES */}
      <section className="businesses-showcases">
        {businesses.map((business) => {
          constisTech = business.theme === "tech";

          return (
            <article
              key={business.id}
              id={business.id}
              className={`business-showcase ${business.theme}-showcase`}
            >
              {isTech ? (
                <>
                  <div className="showcase-copy">
                    <div className="showcase-meta">
                      <strong>{business.number}</strong>
                      <span className="meta-line" />
                      <span>{business.category}</span>
                    </div>

                    <p className="showcase-subcategory">
                      {business.subcategory}
                    </p>

                    <h2 className="showcase-title">
                      Tech<span>Synergy</span>.
                    </h2>

                    <p className="showcase-tagline">
                      {business.tagline}
                    </p>

                    <p className="showcase-description">
                      {business.description}
                    </p>

                    <div className="showcase-services">
                      {business.services.map((service) => {
                        const Icon = service.icon;

                        return (
                          <span className="service-pill" key={service.label}>
                            <Icon />
                            {service.label}
                          </span>
                        );
                      })}
                    </div>

                    <a
                      className="showcase-button"
                      href={business.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {business.websiteLabel}
                      <FaArrowRight />
                    </a>
                  </div>

                  <div className="showcase-visual tech-visual">
  <img
    src="/images/techsynergy-logo.png"
    alt="TechSynergy Logo"
    className="company-logo-space object-contain"
  />

  <img
    src="/images/techsynergy-website.png"
    alt="TechSynergy Website"
    className="company-website-space object-cover object-top"
  />
</div>
                </>
              ) : (
                <>
                  <div className="showcase-visual code-visual">
                    <div className="company-website-space" />
                    <div className="company-logo-space" />
                  </div>

                  <div className="showcase-copy">
                    <div className="showcase-meta">
                      <strong>{business.number}</strong>
                      <span className="meta-line" />
                      <span>{business.category}</span>
                    </div>

                    <p className="showcase-subcategory">
                      {business.subcategory}
                    </p>

                    <h2 className="showcase-title code-title">
                      {business.name}
                      <span>{business.suffix}</span>
                    </h2>

                    <p className="showcase-tagline">
                      {business.tagline}
                    </p>

                    <p className="showcase-description">
                      {business.description}
                    </p>

                    <div className="showcase-services">
                      {business.services.map((service) => {
                        const Icon = service.icon;

                        return (
                          <span className="service-pill" key={service.label}>
                            <Icon />
                            {service.label}
                          </span>
                        );
                      })}
                    </div>

                    <a
                      className="showcase-button"
                      href={business.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {business.websiteLabel}
                      <FaArrowRight />
                    </a>
                  </div>
                </>
              )}
            </article>
          );
        })}
      </section>

      {/* CLOSING */}
      <section className="businesses-closing">
        <div className="closing-copy">
          <span className="business-eyebrow">
            <i />
            TWO BRANDS. ONE VISION.
          </span>

          <h2>
            Different Ideas. <span>Same Purpose.</span>
          </h2>

          <p>
            Together, we build digital experiences that make a
            difference. Technology. Innovation. Impact.
          </p>
        </div>

        <a className="closing-button" href="/">
          <span><FaArrowRight /></span>
          Back to Adil Ali's Portfolio
          <FaArrowUpRightFromSquare className="closing-external-icon" />
        </a>
      </section>
    </main>
  );
}

export default Businesses;