const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Professional services in data analysis, web development, and system design. Specializing in creating data-driven solutions for nonprofits and organizations.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
            <div className="icon flex-shrink-0"><i className="bi bi-bar-chart"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Data Analysis &amp; Visualization</a></h4>
              <p className="description">Transform raw data into meaningful insights through Excel-based systems, charts, graphs, and visual reports for informed decision-making.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <div className="icon flex-shrink-0"><i className="bi bi-code-slash"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Web Development</a></h4>
              <p className="description">Build responsive websites and web applications using HTML, CSS, JavaScript, React, and modern frontend technologies.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <div className="icon flex-shrink-0"><i className="bi bi-database"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Data Management Systems</a></h4>
              <p className="description">Design and maintain structured data systems for tracking progress, managing records, and ensuring data accuracy and consistency.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <div className="icon flex-shrink-0"><i className="bi bi-clipboard-data"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Monitoring &amp; Evaluation</a></h4>
              <p className="description">Track and analyze progress indicators, create reports, and support organizational planning using data-driven insights.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="500">
            <div className="icon flex-shrink-0"><i className="bi bi-palette"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Graphic Design</a></h4>
              <p className="description">Create visual content using Photoshop, Canva, and Illustrator for branding, marketing materials, and digital media.</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="600">
            <div className="icon flex-shrink-0"><i className="bi bi-file-earmark-text"></i></div>
            <div>
              <h4 className="title"><a href="#services" className="stretched-link">Content Management</a></h4>
              <p className="description">Manage website content, documentation, and reporting systems to ensure clarity, usability, and effective communication.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

