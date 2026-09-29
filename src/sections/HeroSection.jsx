import Icon from '../components/Icon'
import { github } from '../data/profile'

/** Contenido de la sección inicio, separado de la composición general. */
export default function HeroSection({ t }) {
  return (
    <section id="inicio" className="hero">
      <div className="hero-copy">
        <div className="eyebrow">
          <span className="status-dot" /> {t('CÓDIGO CON PROPÓSITO')}
        </div>
        <p className="hello">
          {t('Hola, soy Luis Carlos')} <span className="wave">✳</span>
        </p>
        <h1>
          {t('Ideas que se')}
          <br />
          {t('convierten en')}{' '}
          <span>
            software<span className="cursor">_</span>
          </span>
        </h1>
        <p className="hero-description">
          {t(
            'Desarrollador Full Stack. Conecto la lógica del backend con interfaces que se sienten bien. Desde Costa Rica, construyendo para la web.',
          )}
        </p>
        <div className="hero-buttons">
          <a className="button primary" href="#proyectos">
            {t('Explorar proyectos')} <Icon name="arrow" size={18} />
          </a>
          <a className="button secondary" href={github} target="_blank" rel="noreferrer">
            <Icon name="github" size={18} /> GitHub <Icon name="arrow" size={14} />
          </a>
        </div>
        <div className="hero-footnote">
          <span>
            <Icon name="pin" size={14} /> Costa Rica
          </span>
          <i /> {t('Siempre aprendiendo, siempre creando')}
        </div>
      </div>
      <div className="hero-visual">
        <div className="floating-label">{t('<de la idea al deploy />')}</div>
        <div className="terminal">
          <div className="terminal-bar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>lcmurillor — portfolio</span>
            <Icon name="code" size={14} />
          </div>
          <div className="terminal-body">
            <p>
              <span className="terminal-green">➜</span> <span className="terminal-blue">~</span>{' '}
              whoami
            </p>
            <div className="terminal-profile">
              <img src="https://avatars.githubusercontent.com/u/85363955?v=4" alt="Luis Carlos" />
              <div>
                <strong>Luis Carlos</strong>
                <span>@lcmurillor</span>
              </div>
              <span className="profile-code">&lt;/&gt;</span>
            </div>
            <p>
              <span className="terminal-purple">const</span> developer = {'{'}
            </p>
            <div className="code-indent">
              <p>
                role: <span className="terminal-green">"Full Stack Developer"</span>,
              </p>
              <p>
                focus: [<span className="terminal-green">"Backend"</span>,{' '}
                <span className="terminal-green">"UI"</span>],
              </p>
              <p>
                location: <span className="terminal-green">"Costa Rica 🇨🇷"</span>,
              </p>
              <p>
                mindset: <span className="terminal-green">"Never stop building"</span>
              </p>
            </div>
            <p>{'}'};</p>
            <p className="terminal-command">
              <span className="terminal-green">➜</span> <span className="terminal-blue">~</span> npm
              run create-something-great
            </p>
            <p className="terminal-success">{t('✓ Ideas listas para cobrar vida.')}</p>
            <p>
              <span className="terminal-green">➜</span> <span className="terminal-blue">~</span>{' '}
              <span className="block-cursor" />
            </p>
          </div>
          <div className="terminal-footer">
            <span>
              <span className="status-dot" /> developer mode
            </span>
            <span>UTF-8 ◈ main</span>
          </div>
        </div>
        <div className="floating-note">
          <span>✦</span> {t('Hecho con curiosidad y café.')}
        </div>
      </div>
    </section>
  )
}
