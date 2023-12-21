import React from 'react'
import Header from './Header'
const Contact = () => {
  return (
<>
<div className="row">
  <div className="col-sm-4">
  <Header/>
  </div>
  <div className="col-sm-8">
  <section id="contact" className="contact">
  <div className="container">
    <div className="section-title">
      <h2>Contact</h2>
      <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
    </div>
    <div className="row" data-aos="fade-in">
      <div className="col-lg-5 d-flex align-items-stretch">
        <div className="info">
          <div className="address">
            <i className="bi bi-geo-alt" />
            <h4>Location:</h4>
            <p>Ujjain Madhya Pradesh 456001</p>
          </div>
          <div className="email">
            <i className="bi bi-envelope" />
            <h4>Email:</h4>
            <p>Raghuparmar9575@email.com</p>
          </div>
          <div className="phone">
            <i className="bi bi-phone" />
            <h4>Call:</h4>
            <p>+91 95750-63475</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7336.949742198369!2d75.7688255!3d23.1528623!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678975656897!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen&gt;
        </div>
      </div>
      <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" className="form-control" id="name" required />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Your Email</label>
              <input type="email" className="form-control" name="email" id="email" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="name">Subject</label>
            <input type="text" className="form-control" name="subject" id="subject" required />
          </div>
          <div className="form-group">
            <label htmlFor="name">Message</label>
            <textarea className="form-control" name="message" rows={10} required defaultValue={""} />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form>
      </div>
    </div>
  </div>
</section>
  </div>
  </div>


</>
    )
}

export default Contact