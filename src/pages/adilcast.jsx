import "./AdilCast.css";

const episodes = [
  
{
  number: "01",
  guest: "Nehal Hashmi",
  title: "Governor Of Sindh",
  description: "Why is Pakistan’s importance increasing, and what new opportunities could emerge for the country? In this discussion, Adil Ali talks about Pakistan’s growing significance, while Bashir Memon discusses the strategic approach that he believes led to victory against India.",
  youtubeUrl: "https://www.youtube.com/watch?v=kKPO7_ab3ZM",
  videoId: "kKPO7_ab3ZM",
},
  {
  number: "02",
  guest: "Aamir Nawaz Wariach",
  title: "X General Secretary Karachi Bar Association",
  description: "Justice, governance and accountability are at the heart of a functioning society — but where does the real problem begin? Aamir Nawaz Waraich sits down with Adil Ali on AdilCast for an engaging discussion covering investigations, the justice system, administrative structures, provincial challenges, institutional limits and accountability. From the role of institutions to the challenges facing governance, this conversation explores the questions that matter to the public.",
  youtubeUrl: "https://www.youtube.com/watch?v=7zmAlighjo8",
  videoId: "7zmAlighjo8",
},
  {
    number: "03",
    guest: "Meer Murtaza Wahab",
    title: "Mayor Of Karachi",
    description:
      "A city that never stops deserves leadership that never gives up. In this exclusive #AdilCast episode, we sit down with Mayor Murtaza Wahab to discuss Karachi’s real issues, bold decisions, and what the future holds for the city. From urban challenges to public expectations — this is a conversation every Karachiite should hear.",
    youtubeUrl: "https://www.youtube.com/watch?v=bZnRpAPrXdw",
    videoId: "bZnRpAPrXdw",
  },
{
    number: "04",
    guest: "Faisal Nadeem",
    title: "Sadar ",
    description:"In this episode of AdilCast, Adil Ali highlights a powerful point: “Politics is never responsible for running your kitchen. Joined by Faisal Nadeem, President of Markazi Muslim League Sindh, the discussion dives into the need to reform the political system and what real change should look like.",
    youtubeUrl: "https://www.youtube.com/watch?v=ZaKDGY75Y_g",
    videoId: "ZaKDGY75Y_g",
  },
{
    number: "05",
    guest: "Arshad Shar",
    title: "Senior Advocate High Court",
    description:"Police reforms have been discussed for years, but why is real change still missing? Is a strong mechanism needed to improve the police system and deliver justice? Will the government finally take serious action?",
    youtubeUrl: "https://www.youtube.com/watch?v=1_SahnSBtcs",
    videoId: "1_SahnSBtcs",
  },
{
    number: "06",
    guest: "Alamgir Khan",
    title: "Former Member of National Assembly of Pakistan",
    description:
      "From Fix It movement to the Upper House, this episode of Adil Cast explores Alamgir Khan’s political journey, his relationship with Pakistan Tehreek-e-Insaf (PTI), and the real situation of Karachi and Pakistan.",
    youtubeUrl: "https://www.youtube.com/watch?v=Z1q2TxojrKg",
    videoId: "Z1q2TxojrKg",
  },
];

function AdilCast() {
  return (
    <main className="adilcast-page">
      <section className="adilcast-hero">
        <div
          className="adilcast-full-reveal"
          aria-hidden="true"
        />

        <p className="adilcast-eyebrow">
          CONVERSATIONS THAT MATTER
        </p>

        <div className="adilcast-word-wrap">
          <h1 className="adilcast-word">
            ADILCAST
          </h1>
        </div>

        <p className="adilcast-tagline">
          Real people. Real stories. Meaningful conversations.
        </p>

        <a href="#episodes" className="adilcast-button">
          Explore Episodes <span>↗</span>
        </a>

        <div className="adilcast-bottom-label">
          <span>INTERVIEWS</span>
          <span className="adilcast-dot">●</span>
          <span>IDEAS</span>
          <span className="adilcast-dot">●</span>
          <span>PERSPECTIVES</span>
        </div>
      </section>

      <section id="episodes" className="adilcast-intro">
        <p>THE ART OF CONVERSATION</p>
        <h2>
          Every voice has
          <span> a story.</span>
        </h2>
      </section>
      
<section className="adilcast-episodes">


  <div className="adilcast-episode-list">
    {episodes.map((episode) => (
      <article className="adilcast-episode" key={episode.number}>
        <a
          className="adilcast-thumbnail"
          href={episode.youtubeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Watch ${episode.guest} on YouTube`}
        >
          
<img
  src={`https://img.youtube.com/vi/${episode.videoId}/hqdefault.jpg`}
  alt={`${episode.guest} podcast thumbnail`}
  onError={(e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      `https://img.youtube.com/vi/${episode.videoId}/0.jpg`;
  }}
/>


          <span className="adilcast-play-button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
        </a>

        <div className="adilcast-episode-info">
          <p className="adilcast-episode-number">
            EPISODE {episode.number}
          </p>
          <h3>{episode.guest}</h3>
          <h4>{episode.title}</h4>
          <p className="adilcast-episode-description">
            {episode.description}
          </p>
          <a
            className="adilcast-watch-link"
            href={episode.youtubeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Watch on YouTube ↗
          </a>
        </div>
      </article>
    ))}
  </div>
</section>

    </main>
  );
}

export default AdilCast;