import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ loading: false, success: false, error: false, message: '' })

  // Initialize EmailJS with public key
  useEffect(() => {
    emailjs.init('orgK0A6yWRDljvcFv')
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: false, message: '' })

    // EmailJS configuration
    // You'll need to replace these with your actual EmailJS credentials
    const serviceId = 'service_gnpmcr9'
    const templateId = 'template_sy2zrke'
    const publicKey = 'orgK0A6yWRDljvcFv'

    // Check if EmailJS is configured
    if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'EmailJS is not configured yet. Please contact me directly at bishalxdahal@gmail.com or set up EmailJS credentials in the Contact component.'
      })
      return
    }

    try {
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'bishalxdahal@gmail.com'
        },
        publicKey
      )

      console.log('EmailJS Success:', result)
      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Your message has been sent. Thank you!'
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: false, message: '' })
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error Details:', error)
      console.error('Error Code:', error.code)
      console.error('Error Text:', error.text)
      console.error('Error Status:', error.status)
      
      let errorMessage = 'Failed to send message. Please try again or contact me directly at bishalxdahal@gmail.com'
      
      // Provide more specific error messages
      if (error.text) {
        errorMessage = `Error: ${error.text}. Please check your EmailJS configuration or contact me directly at bishalxdahal@gmail.com`
      } else if (error.message) {
        errorMessage = `Error: ${error.message}. Please contact me directly at bishalxdahal@gmail.com`
      }
      
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: errorMessage
      })
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Interested in collaborating or learning more about my work? Feel free to reach out. I'm open to internships, freelance opportunities, and projects in data analytics, web development, and nonprofit technology solutions.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Location</h3>
                  <p>Nepal</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Me</h3>
                  <p>+977 9819729780</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Me</h3>
                  <p>bishalxdahal@gmail.com</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
                <i className="bi bi-github flex-shrink-0"></i>
                <div>
                  <h3>GitHub</h3>
                  <p><a href="https://github.com/bishaldh" target="_blank" rel="noopener noreferrer">github.com/bishaldh</a></p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="600">
                <i className="bi bi-linkedin flex-shrink-0"></i>
                <div>
                  <h3>LinkedIn</h3>
                  <p><a href="https://www.linkedin.com/in/dahal-bishal/" target="_blank" rel="noopener noreferrer">linkedin.com/in/dahal-bishal</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name-field"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email-field"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject-field"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows="10"
                    id="message-field"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  {status.loading && <div className="loading show">Loading</div>}
                  {status.error && <div className="error-message show">{status.message}</div>}
                  {status.success && <div className="sent-message show">{status.message}</div>}

                  <button type="submit" disabled={status.loading}>
                    {status.loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

