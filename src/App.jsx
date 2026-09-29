import './App.css'
import { useLanguage } from './hooks/useLanguage'
import Header from './layout/Header'
import Footer from './layout/Footer'
import HeroSection from './sections/HeroSection'
import IntroStrip from './sections/IntroStrip'
import ProjectsSection from './projects/ProjectsSection'
import AboutSection from './sections/AboutSection'
import StackSection from './sections/StackSection'
import ContactSection from './sections/ContactSection'

/** Compone la página y comparte el idioma con sus secciones. */
export default function App() {
  const { language, setLanguage, t } = useLanguage()
  return (
    <>
      <a className="skip-link" href="#contenido">
        {t('Saltar al contenido')}
      </a>
      <Header t={t} language={language} onLanguageChange={setLanguage} />
      <main id="contenido" className="container">
        <HeroSection t={t} />
        <IntroStrip t={t} />
        <ProjectsSection t={t} />
        <AboutSection t={t} />
        <StackSection t={t} />
        <ContactSection t={t} language={language} />
      </main>
      <Footer t={t} />
    </>
  )
}
