import React from 'react'
import Header from './Header'

const About = () => {
  return (
   <>
 <section id="about" className="about">
  <div className="row">
  <div className="col-sm-4">
  <Header/>
  </div>
  <div className="col-sm-8">
  <div className="container">
    <div className="section-title">
      <h2>About</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className="row">
      <div className="col-lg-4" data-aos="fade-right">
        <img src="assets/img/r-bg.jpeg" className="img-fluid" alt />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
        <h3>Web Designer &amp; Web Developer.</h3>
        <p className="fst-italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>6 Jan 2000</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Website:</strong> <span>www.example.com</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+91 95750-63475</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Ujjain Madhya Pradesh</span></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li><i className="bi bi-chevron-right" /> <strong>Age:</strong> <span>22</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>BA</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>Raghuparmar9575@email.com</span></li>
              <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
            </ul>
          </div>
        </div>
        <p>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
          Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p>
      </div>
    </div>
  </div>
  </div>
  </div>
</section>

   </>
  )
}

export default About