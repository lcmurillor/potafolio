import { useEffect, useState } from 'react'
/** Conserva y aplica el tema visual elegido por el visitante. */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') || 'dark'
    } catch {
      return 'dark'
    }
  })
  // Aplica el tema y lo conserva cuando el navegador permite almacenamiento local.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('portfolio-theme', theme)
    } catch {
      /* La página sigue funcionando si el navegador bloquea el almacenamiento. */
    }
  }, [theme])
  return { theme, setTheme }
}
