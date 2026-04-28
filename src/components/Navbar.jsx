import { useEffect, useState } from 'react'
import ReactCountryFlag from 'react-country-flag'
import { useLanguage } from '../context/LanguageContext.js'
import './Navbar.css'

const sectionIds = ['About', 'Skills', 'Work', 'Contact']

function Navbar() {
  const { texts, lang, setLang } = useLanguage()
  const [active, setActive] = useState('About')

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < 200) {
          setActive(id)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const labels = {
    About: texts.nav.about,
    Skills: texts.nav.skills,
    Work: texts.nav.work,
    Contact: texts.nav.contact,
  }

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        {sectionIds.map((id) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''}>
              {labels[id]}
            </a>
          </li>
        ))}
      </ul>

      <div className="lang-toggle">
        <button
          className={lang === 'sk' ? 'active' : ''}
          onClick={() => setLang('sk')}
        >
          <ReactCountryFlag countryCode="SK" svg style={{ width: '18px', height: '13px' }} />
        </button>
        <button
          className={lang === 'en' ? 'active' : ''}
          onClick={() => setLang('en')}
        >
          <ReactCountryFlag countryCode="GB" svg style={{ width: '18px', height: '13px' }} />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
