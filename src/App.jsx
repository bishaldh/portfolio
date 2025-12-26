import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import Preloader from './components/Preloader'
import { initLibraries } from './utils/initLibraries'

function App() {
  useEffect(() => {
    // Initialize all third-party libraries
    initLibraries()
  }, [])

  return (
    <>
      <Preloader />
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}

export default App

