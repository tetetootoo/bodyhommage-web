import { FaInstagram } from 'react-icons/fa6'
import './App.css'

const projects = Array.from({ length: 9 }, (_, index) => {
  const number = index + 1
  const image = `${index + 15}.png`
  return { number, image, label: `Project image ${image}` }
})

const projectGroups = [0, 1, 2].map((group) => projects.slice(group * 3, group * 3 + 3))

const partners = [
  ['Vogue', 'https://www.vogue.com/', '11.png'],
  ['On', 'https://on.com', '10.png'],
  ["Arc'teryx", 'https://arcteryx.com/de/de', '5.png'],
  ['UVU Club', 'https://uvuclub.com/', '9.png'],
  ['lululemon', 'https://shop.lululemon.com/', '2.png'],
  ['Nike', 'https://www.nike.com/en', '12.png'],
  ['adidas', 'https://www.adidas.com/', '13.png'],
  ['New Balance', 'https://www.newbalance.com/', 'new-balance.avif'],
  ['iGNANT', 'https://www.ignant.com/', '6.png'],
  ['NOHRD', 'https://www.nohrd.com/', '14.png'],
  ['GQ', 'https://www.gq.com/', '8.png'],
  ["Women's Health", 'https://www.womenshealthmag.com/', '3.png'],
]

function App() {
  return (
    <main>
      <section className="hero" id="top" data-placeholder="Add hero.jpg to public/img/">
        <picture>
          <source media="(max-width: 760px)" srcSet="/img/hero-mobile.jpg" />
          <img
            src="/img/hero.jpg"
            alt="Black-and-white portrait of Patrick Maschke"
            fetchPriority="high"
            onError={(event) => {
              event.currentTarget.hidden = true
            }}
          />
        </picture>
        <h1><span>body</span><span>HOMMAGE</span></h1>
      </section>

      <section className="intro">
        <div className="intro-brand">
          <p className="eyebrow">Patrick Maschke</p>
          <p className="role">Creative Consultant | Cultural Curator</p>
        </div>
        <div className="intro-copy">
          <p>
            Guided by a minimalist ethos and a fascination with aesthetics,
            Patrick designs boutique gyms, cultivates community, and curates
            meaningful spaces where longevity and culture meet.
          </p>
          <p>
            Having worked with leading figures across the creative industries,
            he delivers results that go beyond fitness — building balance,
            resilience, and tailoring systems that foster long-term vitality.
          </p>
          <p>
            Known as bodyHOMMAGE on social platforms, he approaches his work
            with a quiet mystique:
          </p>
          <p className="statement">
            no hype, no noise — just thoughtful compositions rooted in clarity
            and meaning.
          </p>
          <p>
            His artistic way of community building explores the deeper currents
            of our zeitgeist:
          </p>
          <p className="statement">pure, intentional, and profoundly human.</p>
        </div>
      </section>

      <section className="work section-block" id="work">
        <div className="section-heading">
          <h2>recent projects</h2>
        </div>
        <div className="project-grid" role="region" aria-label="Recent work gallery" tabIndex="0">
          {projectGroups.map((group, index) => (
            <div className="project-group" key={`group-${index + 1}`}>
              {group.map((project) => (
                <figure className="project" key={project.number}>
                  <div
                    className="project-image"
                    data-placeholder={`Add ${project.image}`}
                    role="img"
                    aria-label={project.label}
                  >
                    <img
                      src={`/img/gallery/${project.image}`}
                      alt={project.label}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.hidden = true
                      }}
                    />
                  </div>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="partners section-block" id="partners">
        <div className="section-heading">
          <h2>clients | partners</h2>
        </div>
        <ul className="partner-list">
          {partners.map(([name, url, image]) => (
            <li key={name}>
              <a href={url} target="_blank" rel="noreferrer">
                <span className="partner-mark" data-placeholder={name} role="img" aria-label={name}>
                  {image && (
                    <img
                      src={`/img/brand-logos/${image}`}
                      alt=""
                      loading="lazy"
                      onLoad={(event) => {
                        event.currentTarget.parentElement.dataset.loaded = 'true'
                      }}
                      onError={(event) => {
                        event.currentTarget.hidden = true
                      }}
                    />
                  )}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="site-footer section-block" id="contact">
        <div>
          <h2>contact</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:pm@bodyhommage.com">pm@bodyhommage.com</a>
          <a
            className="instagram-link"
            href="https://www.instagram.com/bodyhommage/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram aria-hidden="true" size={22} />
          </a>
        </div>
        <p className="copyright">© bodyhommage</p>
      </footer>
    </main>
  )
}

export default App
