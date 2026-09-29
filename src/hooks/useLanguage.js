import { useEffect, useState } from 'react'
import { english } from '../i18n/en'
/** Gestiona el idioma, su persistencia y los metadatos del documento. */
export function useLanguage() {
  // Prioridad del idioma: enlace compartido (?lang=), preferencia guardada y español.
  const [language, setLanguage] = useState(() => {
    const requested = new URLSearchParams(window.location.search).get('lang')
    if (requested === 'en' || requested === 'es') return requested
    try {
      return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'es'
    } catch {
      return 'es'
    }
  })
  // El texto español funciona como clave y como alternativa si falta una traducción.
  const t = (text) => (language === 'en' ? english[text] || text : text)
  // Sincroniza idioma, metadatos y URL sin recargar ni perder el ancla de navegación.
  useEffect(() => {
    document.documentElement.lang = language
    const description =
      language === 'en'
        ? 'Luis Carlos, Full Stack Developer in Costa Rica. Explore my web, application, and cloud projects and the technologies I build with.'
        : 'Luis Carlos, desarrollador Full Stack en Costa Rica. Explora mis proyectos de desarrollo web, aplicaciones y cloud, y conoce las tecnologías con las que construyo.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description)
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', language === 'en' ? 'en_US' : 'es_CR')
    const url = new URL(window.location.href)
    url.searchParams.set('lang', language)
    window.history.replaceState(null, '', url)
    try {
      localStorage.setItem('portfolio-language', language)
    } catch {
      /* La página sigue funcionando si el navegador bloquea el almacenamiento. */
    }
  }, [language])

  return { language, setLanguage, t }
}
