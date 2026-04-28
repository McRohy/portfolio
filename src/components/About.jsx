import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext.js'
import './About.css'

export default function About() {
  const { texts } = useLanguage()
  const t = texts.hero

  const fullText = t.greeting + ' ' + t.name + ' ' + t.tagline
  const [typed, setTyped] = useState('')
  const isDone = typed === fullText

  useEffect(() => {
    setTyped('')
    let i = 0
    const interval = setInterval(() => {
      i++
      setTyped(fullText.substring(0, i))
      if (i >= fullText.length) {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [fullText])

  return (
    <section id="About" className="hero-section reveal">
      <div className="hero-grid">

        <div className="hero-copy">
          <h1 className="hero-title">
            {isDone ? (
              <>
                {t.greeting} <span className="accent">{t.name}</span>
                <br />
                {t.tagline}
              </>
            ) : (
              <>
                {typed}
                <span className="cursor">|</span>
              </>
            )}
          </h1>

          <p className={`hero-lede fade-in ${isDone ? 'visible' : ''}`}>{t.lede}</p>

          <div className={`hero-buttons fade-in ${isDone ? 'visible' : ''}`}>
            <a href="#Work" className="btn btn-primary">{t.ctaPrimary}</a>
            <a href="#Contact" className="btn btn-secondary">{t.ctaSecondary}</a>
          </div>
        </div>

        <div className={`id-card fade-in ${isDone ? 'visible' : ''}`}>
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
