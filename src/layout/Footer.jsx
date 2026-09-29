import Icon from '../components/Icon'
import { github } from '../data/profile'

/** Enlaces sociales y pie de página. */
export default function Footer({ t }) {
  return (
    <footer className="footer container">
      <a className="wordmark" href="#inicio">
        <span>&lt;</span> lc<span>.</span> <span>/&gt;</span>
      </a>
      <p>
        © {new Date().getFullYear()} {t('Luis Carlos · Hecho en Costa Rica')}
      </p>
      <div>
        <a href={github} target="_blank" rel="noreferrer">
          GitHub <Icon name="arrow" size={13} />
        </a>
        <a href="https://linkedin.com/in/lcmurillor" target="_blank" rel="noreferrer">
          LinkedIn <Icon name="arrow" size={13} />
        </a>
        <a href="#inicio" aria-label={t('Volver al inicio')}>
          ↑
        </a>
      </div>
    </footer>
  )
}
