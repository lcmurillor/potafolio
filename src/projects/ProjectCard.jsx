import Icon from '../components/Icon'
import ProjectPreview from './ProjectPreview'
/** Tarjeta reutilizable con captura, descripción y acciones de un proyecto. */
export default function ProjectCard({ project, t, shareProject }) {
  return (
    <article className="project-card">
      <a
        className="art-link"
        href={project.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`${t('Visitar')} ${t(project.name)} ${project.version || ''}`}
      >
        <ProjectPreview project={project} t={t} />
        <span className="art-open">
          <Icon name="arrow" size={19} />
        </span>
      </a>
      <div className="project-content">
        <div className="project-type">{t(project.type)}</div>
        <h3>
          <a href={project.url} target="_blank" rel="noreferrer">
            {t(project.name)}{' '}
            {project.version && <span className="version">{project.version}</span>}
          </a>
        </h3>
        <p>{t(project.description)}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span key={t(tag)}>{t(tag)}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={project.url} target="_blank" rel="noreferrer">
            {t('Explorar proyecto')} <Icon name="arrow" size={15} />
          </a>
          <button
            aria-label={`${t('Compartir')} ${t(project.name)} ${project.version || ''}`}
            onClick={() => shareProject(project)}
          >
            <Icon name="share" size={16} />
          </button>
        </div>
      </div>
    </article>
  )
}
