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
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
  e.preventDefault()
  setStatus('sending')

  const token = '8713370979:AAFIMziMV4ufdw3jEMEFRzFKGee9lcaBD9M'
  const chatId = '6189100792'

  const text =
    'NOVA SPRAVA\n\n' +
    'Meno: ' + name + '\n' +
    'Email: ' + email + '\n' +
    'Téma: ' + topic + '\n\n' +
    message

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text })
    })

    const result = await res.json()
    if (result.ok) {
      setStatus('sent')
      setName('')
      setEmail('')
      setTopic(t.form.topicOptions[0])
      setMessage('')
      setTimeout(() => setStatus(null), 5000)
    } else {
      setStatus('error')
    }
  } catch {
    setStatus('error')
  }
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

            <button type="submit" className="send-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Odosielam…' : t.form.sendButton}
            </button>

            {status === 'sent' && (
              <p className="form-msg success">✓ Správa bola odoslaná. Ozvem sa čo najskôr!</p>
            )}
            {status === 'error' && (
              <p className="form-msg error">Niečo sa pokazilo. Skús to znova alebo mi napíš priamo na tvoj@email.com</p>
            )}
          </form>
        </div>

      </div>

    </section>
  )
}
