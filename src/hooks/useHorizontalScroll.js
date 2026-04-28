import { useRef } from 'react'

export function useHorizontalScroll(step = 380) {
  const ref = useRef(null)

  const scrollLeft = () => {
    if (ref.current) ref.current.scrollLeft -= step
  }

  const scrollRight = () => {
    if (ref.current) ref.current.scrollLeft += step
  }

  return { ref, scrollLeft, scrollRight }
}
