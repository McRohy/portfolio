import { useLanguage } from '../context/LanguageContext.js'
import './Footer.css'

export default function Footer() {
  const { texts } = useLanguage()

  return (
    <footer className="footer">
      <span>{texts.footer.copyright}</span>
      <span className="footer-version">{texts.footer.version}</span>
    </footer>
  )
}
