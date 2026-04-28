import { useState } from 'react'

export function useModal(initial = false) {
  const [isOpen, setIsOpen] = useState(initial)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      close()
    }
  }

  return { isOpen, open, close, handleBackdropClick }
}
