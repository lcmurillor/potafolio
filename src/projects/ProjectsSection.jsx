import { useState } from 'react'
import Icon from '../components/Icon'
import Toast from '../components/Toast'
import { github } from '../data/profile'
import { projects } from './projects'
import ProjectCard from './ProjectCard'
/** Gestiona el filtro y las acciones de la galería; el catálogo vive en projects.js. */
export default function ProjectsSection({ t }) {
  const [filter, setFilter] = useState('Todos')
  const [shareResult, setShareResult] = useState(null)
  // El resultado guarda datos, no traducciones, para responder a cambios de idioma.
  const shareStatus = !shareResult
    ? ''
    : shareResult.copied
      ? `${t('Enlace copiado:')} ${t(shareResult.project.name)} ${shareResult.project.version || ''}`
      : `${t('Copia este enlace:')} ${shareResult.project.url}`
  // Las categorías se obtienen del catálogo para admitir nuevos proyectos sin duplicar datos.
  const categories = ['Todos', ...new Set(projects.map((project) => project.category))]
  const visibleProjects = projects.filter(
    (project) => filter === 'Todos' || project.category === filter,
  )
  /** Copia la URL del proyecto; si el portapapeles falla, muestra un enlace copiable. */
  async function shareProject(project) {
    try {
      await navigator.clipboard.writeText(project.url)
      setShareResult({ project, copied: true })
    } catch {
      setShareResult({ project, copied: false })
    }
  }
  return (
    <>
      <section id="proyectos" className="section projects-section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="section-number">01 /</span> {t('LO QUE HE CONSTRUIDO')}
            </div>
            <h2>
              {t('Proyectos seleccionados')}
              <span>.</span>
            </h2>
            <p>{t('Un poco de lo que hago. Mucho de lo que me gusta.')}</p>
          </div>
          <a
            className="text-link"
            href={github + '?tab=repositories'}
            target="_blank"
            rel="noreferrer"
          >
            {t('Más en GitHub')} <Icon name="arrow" size={16} />
          </a>
        </div>
        <div className="filter-row" role="group" aria-label={t('Filtrar proyectos')}>
          {categories.map((item) => (
            <button
              key={t(item)}
              className={filter === item ? 'filter active' : 'filter'}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {t(item)}
              {item === 'Todos' && <span>{String(projects.length).padStart(2, '0')}</span>}
            </button>
          ))}
          <span className="project-count" aria-live="polite">
            {visibleProjects.length} {t('proyectos')}
          </span>
        </div>
        <div className="project-grid">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} t={t} shareProject={shareProject} />
          ))}
          <a className="next-project" href="#contacto">
            <span className="next-icon">＋</span>
            <span className="eyebrow">{t('LO MEJOR ESTÁ POR VENIR')}</span>
            <h3>
              {t('El próximo proyecto')}
              <br />
              {t('podría ser el tuyo')}
              <span>.</span>
            </h3>
            <p>
              {t('Las buenas ideas empiezan')}
              <br />
              {t('con una conversación.')}
            </p>
            <span className="text-link">
              {t('Hagámoslo realidad')} <Icon name="arrow" size={17} />
            </span>
          </a>
        </div>
      </section>
      <Toast message={shareStatus} onClose={() => setShareResult(null)} t={t} />
    </>
  )
}
