import AOS from 'aos'
import 'aos/dist/aos.css'
import GLightbox from 'glightbox'
import 'glightbox/dist/css/glightbox.css'
import Isotope from 'isotope-layout'
import imagesLoaded from 'imagesloaded'

// Initialize AOS
export const initAOS = () => {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
}

// Initialize GLightbox
export const initGLightbox = () => {
  if (typeof window !== 'undefined') {
    GLightbox({
      selector: '.glightbox'
    })
  }
}

// Initialize Isotope
export const initIsotope = () => {
  if (typeof window === 'undefined') return

  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry'
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*'
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order'

    let initIsotope
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      })
    })

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active')?.classList.remove('filter-active')
        this.classList.add('filter-active')
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        })
        initAOS()
      }, false)
    })
  })
}

// Initialize PureCounter (using vanilla JS from vendor)
export const initPureCounter = () => {
  if (typeof window !== 'undefined' && window.PureCounter) {
    new window.PureCounter()
  }
}

// Initialize all libraries
export const initLibraries = () => {
  if (typeof window === 'undefined') return

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initAOS()
      initGLightbox()
      initIsotope()
      initPureCounter()
    })
  } else {
    initAOS()
    initGLightbox()
    initIsotope()
    initPureCounter()
  }
}

