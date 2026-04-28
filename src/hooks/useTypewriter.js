import { useEffect, useState } from 'react'

export function useTypewriter(fullText, speed = 60) {
  const [typed, setTyped] = useState('')

  useEffect(() => {
    setTyped('')
    let i = 0
    const interval = setInterval(() => {
      i++
      setTyped(fullText.substring(0, i))
      if (i >= fullText.length) {
        clearInterval(interval)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [fullText, speed])

  const isDone = typed === fullText
  return { typed, isDone }
}
