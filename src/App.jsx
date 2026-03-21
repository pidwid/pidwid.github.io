import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* About anchor — scrolls to experience */}
        <div id="about" />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
