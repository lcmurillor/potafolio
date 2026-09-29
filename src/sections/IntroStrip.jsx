import Icon from '../components/Icon'
/** Separador visual entre la presentación y los proyectos. */
export default function IntroStrip({ t }) {
  return (
    <div className="intro-strip">
      <span>{t('DEL CONCEPTO A LA EXPERIENCIA')}</span>
      <p>
        {t('Backend sólido')} <i>✳</i> {t('Interfaces intuitivas')} <i>✳</i>{' '}
        {t('Aprendizaje continuo')}
      </p>
      <a href="#proyectos" aria-label={t('Ir a proyectos')}>
        <Icon name="down" size={17} />
      </a>
    </div>
  )
}
