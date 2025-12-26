const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>Projects showcasing data analysis, web development, and system design work. From Excel-based data management systems to website development for nonprofit organizations.</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-data">Data Analytics</li>
            <li data-filter=".filter-web">Web Development</li>
            <li data-filter=".filter-design">Design</li>
          </ul>

          <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-data">
              <div className="portfolio-content h-100">
                <img src="/assets/img/portfolio/app-1.jpg" className="img-fluid" alt="Data Management System" />
                <div className="portfolio-info">
                  <h4>Data Management System</h4>
                  <p>Excel-based data recording system for child development tracking</p>
                  <a href="/assets/img/portfolio/app-1.jpg" title="Data Management System" data-gallery="portfolio-gallery-data" className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a href="https://github.com/bishaldh" target="_blank" rel="noopener noreferrer" title="View on GitHub" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img src="/assets/img/portfolio/product-1.jpg" className="img-fluid" alt="New Life Nepal Website" />
                <div className="portfolio-info">
                  <h4>New Life Nepal Website</h4>
                  <p>Website development and content management for nonprofit organization</p>
                  <a href="/assets/img/portfolio/product-1.jpg" title="New Life Nepal Website" data-gallery="portfolio-gallery-web" className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a href="https://newlifenepal.org.np" target="_blank" rel="noopener noreferrer" title="Visit Website" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-data">
              <div className="portfolio-content h-100">
                <img src="/assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="Data Visualization Reports" />
                <div className="portfolio-info">
                  <h4>Data Visualization Reports</h4>
                  <p>Charts, graphs, and visual reports for progress tracking and analysis</p>
                  <a href="/assets/img/portfolio/branding-1.jpg" title="Data Visualization Reports" data-gallery="portfolio-gallery-data" className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a href="#portfolio" title="More Details" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-web">
              <div className="portfolio-content h-100">
                <img src="/assets/img/portfolio/books-1.jpg" className="img-fluid" alt="Web Application Development" />
                <div className="portfolio-info">
                  <h4>Web Application Development</h4>
                  <p>Frontend development using React, HTML, CSS, and JavaScript</p>
                  <a href="/assets/img/portfolio/books-1.jpg" title="Web Application Development" data-gallery="portfolio-gallery-web" className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a href="https://github.com/bishaldh" target="_blank" rel="noopener noreferrer" title="View on GitHub" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-data">
              <div className="portfolio-content h-100">
                <img src="/assets/img/portfolio/app-2.jpg" className="img-fluid" alt="Progress Tracking System" />
                <div className="portfolio-info">
                  <h4>Progress Tracking System</h4>
                  <p>Monthly and long-term progress indicators for child development</p>
                  <a href="/assets/img/portfolio/app-2.jpg" title="Progress Tracking System" data-gallery="portfolio-gallery-data" className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a href="#portfolio" title="More Details" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-design">
              <div className="portfolio-content h-100">
                <img src="/assets/img/portfolio/product-2.jpg" className="img-fluid" alt="Graphic Design Projects" />
                <div className="portfolio-info">
                  <h4>Graphic Design Projects</h4>
                  <p>Creative design work using Photoshop, Canva, and Illustrator</p>
                  <a href="/assets/img/portfolio/product-2.jpg" title="Graphic Design Projects" data-gallery="portfolio-gallery-design" className="glightbox preview-link">
                    <i className="bi bi-zoom-in"></i>
                  </a>
                  <a href="#portfolio" title="More Details" className="details-link">
                    <i className="bi bi-link-45deg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio

