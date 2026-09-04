import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Achievements from './sections/Achievements'
import Projects from './sections/Projects'
import Strengths from './sections/Strengths'
import Languages from './sections/Languages'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-navy"
      >
        Skip to main content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Projects />
        <Strengths />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
