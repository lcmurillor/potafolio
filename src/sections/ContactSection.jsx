import Icon from '../components/Icon'
import { createContactHref } from '../utils/contact'

/** Contenido de la sección contacto, separado de la composición general. */
export default function ContactSection({ t, language }) {
  const contactHref = createContactHref(language)
  return (
    <section id="contacto" className="contact-section">
      <div className="eyebrow">
        <span className="status-dot" /> {t('CONSTRUYAMOS ALGO JUNTOS')}
      </div>
      <h2>
        {t('¿Tienes una idea?')}
        <br />
        <span>{t('Hablemos de ella.')}</span>
      </h2>
      <p>
        {t('Un proyecto, una colaboración o simplemente un hola.')}
        <br />
        {t('Las puertas siempre están abiertas.')}
      </p>
      <div className="hero-buttons">
        <a className="button primary" href={contactHref}>
          <Icon name="mail" size={18} /> {t('Escríbeme')} <Icon name="arrow" size={17} />
        </a>
      </div>
      <span className="contact-decoration" aria-hidden="true">
        {'{ }'}
      </span>
    </section>
  )
}
