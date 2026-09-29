import Icon from '../components/Icon'
import { github } from '../data/profile'

/** Contenido de la sección stack, separado de la composición general. */
export default function StackSection({ t }) {
  return (
    <section id="stack" className="section">
      <div className="section-heading">
        <div>
          <div className="eyebrow">
            <span className="section-number">03 /</span> {t('MI CAJA DE HERRAMIENTAS')}
          </div>
          <h2>
            {t('Tecnologías con las que construyo')}
            <span>.</span>
          </h2>
          <p>{t('Distintas herramientas, un mismo objetivo: resolver bien.')}</p>
        </div>
      </div>
      <div className="stack-grid">
        {[
          {
            title: 'Lenguajes',
            icon: '{ }',
            items: ['Java', 'JavaScript', 'Dart', 'C++', 'SQL'],
          },
          {
            title: 'Frontend',
            icon: '</>',
            items: ['React', 'Angular', 'Flutter', 'HTML & CSS', 'Bootstrap'],
          },
          {
            title: 'Backend & datos',
            icon: '⌘',
            items: [
              '.NET / ASP.NET',
              'Spring Boot',
              'Node.js',
              'MySQL',
              'SQL Server',
              'Firebase',
              'AWS',
            ],
          },
          {
            title: 'Herramientas',
            icon: '⌥',
            items: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Postman', 'Figma'],
          },
        ].map((group) => (
          <div className="stack-card" key={t(group.title)}>
            <span className="stack-icon">{group.icon}</span>
            <h3>{t(group.title)}</h3>
            <div className="stack-tags">
              {group.items.map((item) => (
                <span key={t(item)}>{t(item)}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a
        className="stack-source"
        href={github + '/lcmurillor#readme'}
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="github" size={14} /> {t('Basado en mi perfil de GitHub')}{' '}
        <Icon name="arrow" size={12} />
      </a>
    </section>
  )
}
