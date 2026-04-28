import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext.js'
import './Navbar.css'

const sectionIds = ['About', 'Work', 'Contact']

function Navbar() {
  const { texts, lang, toggle } = useLanguage()
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
        <button onClick={toggle}>
          {lang === 'sk' ? 'EN' : 'SK'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
