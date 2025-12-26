import { useEffect, useState } from 'react'

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleScrollTop = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('load', toggleScrollTop)
    window.addEventListener('scroll', toggleScrollTop)

    return () => {
      window.removeEventListener('scroll', toggleScrollTop)
    }
  }, [])

  const scrollToTop = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <a 
      href="#" 
      id="scroll-top" 
      className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? 'active' : ''}`}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  )
}

export default ScrollTop

