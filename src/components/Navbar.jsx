import { useLanguage } from '../context/LanguageContext.js'
import { useActiveSection } from '../hooks/useActiveSection'
import './Navbar.css'

const sectionIds = ['About', 'Work', 'Contact']

function Navbar() {
  const { texts, lang, toggle } = useLanguage()
  const active = useActiveSection(sectionIds, 200)

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
