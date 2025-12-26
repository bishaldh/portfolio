import { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Feedback from colleagues, supervisors, and collaborators on my work in data analysis, web development, and nonprofit operations</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={1}
          slidesPerView="auto"
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
          }}
          className="init-swiper"
        >
          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>Bishal has been instrumental in transforming our data management system at New Life Nepal. His Excel-based tracking system has made it so much easier to monitor children's progress and generate meaningful reports. His attention to detail and commitment to accuracy is exceptional.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
              <h3>Sarita Shrestha</h3>
              <h4>Program Director, New Life Nepal</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>The website development work Bishal did for our organization exceeded our expectations. He understood our needs, created a user-friendly interface, and continues to provide excellent support. His technical skills combined with his understanding of nonprofit operations make him a valuable team member.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
              <h3>David Thompson</h3>
              <h4>Executive Director, New Life Nepal</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>Working with Bishal on data visualization projects has been a great experience. He has a natural ability to identify trends and present complex data in an accessible way. His reports have helped us make better-informed decisions about our programs and resource allocation.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
              <h3>Priya Adhikari</h3>
              <h4>Data Coordinator, New Life Nepal</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>Bishal's volunteer coordination skills are outstanding. He manages communication workflows efficiently and ensures everyone stays informed. His organizational abilities and technical expertise have significantly improved our operational efficiency.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
              <h3>Rajesh Kumar</h3>
              <h4>Volunteer Coordinator, New Life Nepal</h4>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonial-item">
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                <span>I've been impressed by Bishal's ability to balance academic studies with hands-on professional work. His data analysis skills are strong, and he brings fresh perspectives to problem-solving. He's definitely someone who will excel in data analytics and MIS roles.</span>
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <img src="/assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
              <h3>Sarah Mitchell</h3>
              <h4>Academic Advisor, NAMI College</h4>
            </div>
          </SwiperSlide>

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials

