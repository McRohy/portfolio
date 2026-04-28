import { useState } from 'react'
import { useLanguage } from '../context/LanguageContext.js'
import './Contact.css'

export default function Contact() {
  const { texts } = useLanguage()
  const t = texts.contact

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [topic, setTopic] = useState(t.form.topicOptions[0])
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = topic + ' — ' + name
    const body = message + '\n\n— ' + name + ' (' + email + ')'
    window.location.href = 'mailto:' + t.form.emailAddress + '?subject=' + subject + '&body=' + body
  }

  return (
    <section id="Contact" className="contact-section reveal">

      <div className="contact-header">
        <span className="contact-num">03</span>
        <span className="contact-rule"></span>
        <span className="contact-label">{t.sectionLabel}</span>
      </div>

      <h2 className="contact-title">
        {t.title} <span className="accent">{t.titleAccent}</span>
      </h2>

      <p className="contact-sub">{t.sub}</p>

      <div className="contact-card">

        <div className="why-me">
          <span className="mono-label">{t.whyMe.label}</span>
          <h3 className="why-title">
            {t.whyMe.title} <span className="accent">{t.whyMe.titleAccent}</span>
          </h3>
          <p className="why-lede">{t.whyMe.lede}</p>

          <div className="perks">
            {t.whyMe.perks.map((perk, i) => (
              <div key={i} className="perk">
                <span className="perk-num">0{i + 1}</span>
                <div>
                  <h4>{perk.title}</h4>
                  <p>{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-wrap">
          <span className="mono-label">{t.form.label}</span>
          <h3 className="form-title">{t.form.title}</h3>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="field">
                <label>{t.form.nameLabel}</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.form.namePlaceholder}
                  required
                />
              </div>
              <div className="field">
                <label>{t.form.emailLabel}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.form.emailPlaceholder}
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>{t.form.topicLabel}</label>
              <select value={topic} onChange={(e) => setTopic(e.target.value)}>
                {t.form.topicOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="field">
              <label>{t.form.messageLabel}</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.form.messagePlaceholder}
                rows="4"
                required
              />
            </div>

            <button type="submit" className="send-btn">{t.form.sendButton}</button>
          </form>
        </div>

      </div>

    </section>
  )
}
