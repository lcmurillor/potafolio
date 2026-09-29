/** Muestra la captura del sitio y describe su contenido en el idioma activo. */
export default function ProjectPreview({ project, t }) {
  return (
    <div className="project-art">
      <img
        className="project-screenshot"
        src={`/projects/${project.id}.webp`}
        alt={`${t('Vista previa de')} ${t(project.name)} ${project.version || ''}${project.id === 'finanzas' ? t(' — demostración con datos ficticios') : project.id === 'cloud' ? t(' — pantalla de acceso') : ''}`}
        width="1440"
        height="900"
        loading="lazy"
        decoding="async"
      />
    </div>
  )
}
