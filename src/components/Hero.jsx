import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const Hero = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typedElement = typedRef.current
    if (typedElement) {
      const typed = new Typed(typedElement, {
        strings: ['Data Analyst', 'App Developer', 'Graphics Designer', 'Basically a Techie'],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  return (
    <section id="hero" className="hero section dark-background">
      <img src="/assets/img/hero-bg.png" alt="Hero Background" data-aos="fade-in" className="" />
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>Bishal Dahal</h2>
        <p>
          I'm <span ref={typedRef}></span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
        </p>
        <p className="mt-2">The guy who makes things happen</p>
      </div>
    </section>
  )
}

export default Hero

