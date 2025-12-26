const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title" data-aos="fade-up">
        <h2>About</h2>
        <p>I am a motivated BSc (Hons) Computing student with strong practical experience in data analysis, nonprofit operations, and technology-driven solutions. My background combines academic learning in computing with hands-on work in volunteer management and data systems.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-4">
            <img src="/assets/img/my-profile-img.png" className="img-fluid" alt="Bishal Dahal" />
          </div>
          <div className="col-lg-8 content">
            <h2>Computing Student &amp; Data Analyst</h2>
            <p className="fst-italic py-3">
              A BSc (Hons) Computing student from Nepal with strong hands-on experience in data analysis, nonprofit operations, and technology-enabled solutions. Passionate about bridging technology and social impact through data and systems.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>April 7, 2005</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span><a href="https://newlifenepal.org.np" target="_blank" rel="noopener noreferrer">newlifenepal.org.np</a></span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+977 9819729780</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Nepal</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>20</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BSc (Hons) Computing</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>bishalxdahal@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              I am Bishal Dahal, a BSc (Hons) Computing student from Nepal with strong hands-on experience in data analysis, nonprofit operations, and technology-enabled solutions. Alongside my academic journey, I have been actively involved with New Life Nepal, a neurodevelopmental nonprofit organization, where I work closely with child development data, volunteer coordination, and system organization.
            </p>
            <p className="py-3">
              My work focuses heavily on designing structured Excel-based data systems, tracking monthly and long-term progress of children with autism and Down syndrome, analyzing weight and developmental changes, and transforming raw data into charts, visual reports, and actionable insights. This experience has given me a strong foundation in data accuracy, consistency, and ethical handling of sensitive information.
            </p>
            <p className="py-3">
              In parallel, I am involved in website development and content management for my organization, applying my knowledge of web applications, system planning, and frontend development in real-world scenarios. I also actively use prompt engineering and AI tools to improve workflows, documentation, reporting, and content creation.
            </p>
            <p className="py-3">
              I am deeply interested in roles that combine data, systems, and social impact, and I am continuously developing my skills to pursue opportunities in data analytics, MIS, monitoring & evaluation, and web technologies at an entry or internship level.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

