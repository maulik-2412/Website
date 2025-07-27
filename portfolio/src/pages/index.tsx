import Header from "../components/Header"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import HeroParticleField from "../components/HeroParticleField"

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <HeroParticleField />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
