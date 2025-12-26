const Stats = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="3" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Years Experience</strong> <span>volunteer & professional</span></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-folder-check"></i>
              <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Projects Completed</strong> <span>data systems & web development</span></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-people"></i>
              <span data-purecounter-start="0" data-purecounter-end="1" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Organizations Served</strong> <span>nonprofit sector</span></p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item">
              <i className="bi bi-mortarboard"></i>
              <span data-purecounter-start="0" data-purecounter-end="2027" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Graduation Year</strong> <span>BSc Computing expected</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats

