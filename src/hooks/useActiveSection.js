import { useEffect, useState } from 'react'

export function useActiveSection(sectionIds, offset = 200) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < offset) {
          setActive(id)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds, offset])

  return active
}
