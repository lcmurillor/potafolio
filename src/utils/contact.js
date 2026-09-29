/** Prepara el correo sin enviarlo; el visitante lo revisa en su cliente habitual. */
export function createContactHref(language) {
  // El visitante revisa y envía el mensaje desde su cliente de correo; la web no lo envía.
  const emailSubject =
    language === 'en'
      ? 'Project inquiry — Luis Carlos portfolio'
      : 'Interés en un proyecto — Portafolio de Luis Carlos'
  const emailBody =
    language === 'en'
      ? 'Hi Luis Carlos,\r\n\r\nI visited your portfolio and I’m interested in discussing a project with you. I’d like to share my idea and learn how we could work together.\r\n\r\nProject idea: \r\nGoals: \r\nPreferred timeline: \r\n\r\nThank you for your time. I look forward to hearing from you.\r\n\r\nBest regards,\r\n[Your name]'
      : 'Hola Luis Carlos,\r\n\r\nVisité tu portafolio y estoy interesado/a en conversar contigo sobre un proyecto. Me gustaría compartirte mi idea y conocer cómo podríamos trabajar juntos.\r\n\r\nIdea del proyecto: \r\nObjetivos: \r\nPlazo estimado: \r\n\r\nGracias por tu tiempo. Quedo atento/a a tu respuesta.\r\n\r\nSaludos,\r\n[Tu nombre]'
  // Codificar asunto y cuerpo conserva tildes, caracteres especiales y saltos de línea.
  const contactHref = `mailto:lcmurillor.dev@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`
  return contactHref
}
