import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const showOrHideOnScroll = (observedEntries) => {
      for (const observedSection of observedEntries) {
        if (observedSection.isIntersecting) {
          observedSection.target.classList.add('visible')
        } else {
          observedSection.target.classList.remove('visible')
        }
      }
    }

    const visibilityWatcher = new IntersectionObserver(
      showOrHideOnScroll,
      { threshold: 0.15 }
    )

    const sectionsToReveal = document.querySelectorAll('.reveal')
    for (const section of sectionsToReveal) {
      visibilityWatcher.observe(section)
    }

    return () => visibilityWatcher.disconnect()
  }, [])
}
