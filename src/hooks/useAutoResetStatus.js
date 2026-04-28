import { useEffect, useState } from 'react'

export function useAutoResetStatus(timeout = 5000) {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (status === 'sent') {
      const id = setTimeout(() => setStatus(null), timeout)
      return () => clearTimeout(id)
    }
  }, [status, timeout])

  return [status, setStatus]
}
