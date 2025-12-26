import { useEffect, useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Handle navigation scrollspy
    const navmenulinks = document.querySelectorAll('.navmenu a')

    const navmenuScrollspy = () => {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return
        const section = document.querySelector(navmenulink.hash)
        if (!section) return
        const position = window.scrollY + 200
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'))
          navmenulink.classList.add('active')
        } else {
          navmenulink.classList.remove('active')
        }
      })
    }

    window.addEventListener('load', navmenuScrollspy)
    window.addEventListener('scroll', navmenuScrollspy)

    // Handle hash links on load
    if (window.location.hash) {
      setTimeout(() => {
        const section = document.querySelector(window.location.hash)
        if (section) {
          const scrollMarginTop = getComputedStyle(section).scrollMarginTop
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          })
        }
      }, 100)
    }

    return () => {
      window.removeEventListener('scroll', navmenuScrollspy)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    const header = document.querySelector('#header')
    if (header) {
      header.classList.toggle('header-show')
    }
  }

  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
      const header = document.querySelector('#header')
      if (header) {
        header.classList.remove('header-show')
      }
    }
  }

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i 
        className={`header-toggle d-xl-none bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}
        onClick={toggleMenu}
      ></i>

      <div className="profile-img">
        <img src="/assets/img/my-profile-img.png" alt="Bishal Dahal" className="img-fluid rounded-circle" />
      </div>

      <a href="#hero" className="logo d-flex align-items-center justify-content-center" onClick={handleNavClick}>
        <h1 className="sitename">Bishal Dahal</h1>
      </a>

      <div className="social-links text-center">
        <a href="https://github.com/bishaldh" target="_blank" rel="noopener noreferrer" className="github">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/dahal-bishal/" target="_blank" rel="noopener noreferrer" className="linkedin">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://newlifenepal.org.np" target="_blank" rel="noopener noreferrer" className="website">
          <i className="bi bi-globe"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#hero" className="active" onClick={handleNavClick}>
              <i className="bi bi-house navicon"></i>Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleNavClick}>
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a href="#resume" onClick={handleNavClick}>
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={handleNavClick}>
              <i className="bi bi-images navicon"></i> Portfolio
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleNavClick}>
              <i className="bi bi-hdd-stack navicon"></i> Services
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick}>
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

