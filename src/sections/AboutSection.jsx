import Icon from '../components/Icon'

/** Contenido de la sección sobre-mi, separado de la composición general. */
export default function AboutSection({ t }) {
  return (
    <section id="sobre-mi" className="section about-section">
      <div>
        <div className="eyebrow">
          <span className="section-number">02 /</span> {t('DETRÁS DEL CÓDIGO')}
        </div>
        <h2>
          {t('Curioso por naturaleza.')}
          <br />
          {t('Desarrollador por pasión')}
          <span>.</span>
        </h2>
        <p>
          {t(
            'Soy Luis Carlos, desarrollador de software con un enfoque especial en backend y bases de datos, y una mente creativa para el diseño de interfaces.',
          )}
        </p>
        <p>
          {t(
            'Me gusta entender los problemas, aprender nuevas tecnologías y convertir esa curiosidad en soluciones útiles y eficientes.',
          )}
        </p>
        <a
          className="text-link"
          href="https://linkedin.com/in/lcmurillor"
          target="_blank"
          rel="noreferrer"
        >
          {t('Conóceme en LinkedIn')} <Icon name="arrow" size={16} />
        </a>
      </div>
      <div className="about-notes">
        {[
          {
            title: 'Una base sólida',
            text: 'Bachillerato en Ingeniería en Tecnologías de Información · Universidad Técnica Nacional.',
          },
          {
            title: 'De principio a fin',
            text: 'Backend, bases de datos e interfaces. Una visión integral para conectar todas las piezas.',
          },
          {
            title: 'Aprender construyendo',
            text: 'Cada proyecto es una oportunidad para experimentar, resolver y seguir creciendo.',
          },
        ].map((note, i) => (
          <div key={t(note.title)}>
            <span>0{i + 1}</span>
            <div>
              <h3>{t(note.title)}</h3>
              <p>{t(note.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
