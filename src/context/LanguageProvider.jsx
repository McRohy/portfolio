import { useEffect, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import { texts } from '../resources/texts'

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'sk')

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggle = () => {
    setLang(lang === 'sk' ? 'en' : 'sk')
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, texts: texts[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}
