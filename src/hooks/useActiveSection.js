import { useEffect, useState } from 'react'
/** Observa la sección visible y libera el observador cuando deja de utilizarse. */
export function useActiveSection() {
  const [active, setActive] = useState('inicio')
  // Marca la sección visible y libera el observador al desmontar el componente.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-15% 0px -55% 0px' },
    )
    document.querySelectorAll('main > section[id]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return active
}
