import { useState } from 'react'
import Icon from '../components/Icon'
import { useTheme } from '../hooks/useTheme'
import { useActiveSection } from '../hooks/useActiveSection'
/** Navegación principal, selector de idioma y controles de tema y menú móvil. */
export default function Header({ t, language, onLanguageChange }) {
  const [menu, setMenu] = useState(false)
  const { theme, setTheme } = useTheme()
  const active = useActiveSection()
  return (
    <header className="header">
      <div className="nav-wrap">
        <a className="wordmark" href="#inicio" aria-label={t('Luis Carlos, inicio')}>
          <span>&lt;</span> lc<span>.</span> <span>/&gt;</span>
        </a>
        <nav className={menu ? 'nav open' : 'nav'} aria-label={t('Navegación principal')}>
          {[
            ['inicio', 'Inicio'],
            ['proyectos', 'Proyectos'],
            ['sobre-mi', 'Sobre mí'],
            ['stack', 'Stack'],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'active' : ''}
              onClick={() => setMenu(false)}
            >
              {t(label)}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <div
            className="language-switch"
            role="group"
            aria-label={language === 'en' ? 'Language' : 'Idioma'}
          >
            <button
              lang="es"
              aria-label="Español"
              aria-pressed={language === 'es'}
              onClick={() => {
                onLanguageChange('es')
              }}
            >
              ES
            </button>
            <span aria-hidden="true">/</span>
            <button
              lang="en"
              aria-label="English"
              aria-pressed={language === 'en'}
              onClick={() => {
                onLanguageChange('en')
              }}
            >
              EN
            </button>
          </div>
          <button
            className="theme-button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={t(theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro')}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a className="contact-nav" href="#contacto">
            {t('Hablemos')} <Icon name="arrow" size={16} />
          </a>
          <button
            className="menu-button"
            aria-label={t('Abrir menú')}
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  )
}
