import { useLanguage } from '../context/LanguageContext.js'
import './About.css'

export default function About() {
  const { texts } = useLanguage()
  const t = texts.hero

  return (
    <section id="About" className="hero-section">
      <div className="hero-grid">

        <div className="hero-copy">
          

          <h1 className="hero-title">
            {t.greeting} <span className="accent">{t.name}</span>
            <br />
            {t.tagline}
          </h1>

          <p className="hero-lede">{t.lede}</p>

          <div className="hero-buttons">
            <a href="#Work" className="btn btn-primary">{t.ctaPrimary}</a>
            <a href="#Contact" className="btn btn-secondary">{t.ctaSecondary}</a>
          </div>
        </div>

        <div className="id-card">
          <div className="id-card-head">
            <div className="id-card-avatar">
              <img src="./profilePicture.png" alt="Matej Roháč" />
            </div>
            <div>
              <b>Matej Roháč</b>
              <span>{t.card.subtitle}</span>
            </div>
          </div>

          <div className="id-card-rows">
            <div className="id-card-row">
              <span className="label">{t.card.roleLabel}</span>
              <span className="value">{t.card.roleValue}</span>
            </div>
            <div className="id-card-row">
              <span className="label">{t.card.schoolLabel}</span>
              <span className="value">{t.card.schoolValue}</span>
            </div>
            <div className="id-card-row">
              <span className="label">{t.card.focusLabel}</span>
              <span className="value">{t.card.focusValue}</span>
            </div>
            <div className="id-card-row">
              <span className="label">{t.card.experienceLabel}</span>
              <span className="value">{t.card.experienceValue}</span>
            </div>
            <div className="id-card-row">
              <span className="label">{t.card.statusLabel}</span>
              <span className="value ok">{t.card.statusValue}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
