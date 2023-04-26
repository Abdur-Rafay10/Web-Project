import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ContactUs() {
  return (
    <>
    <Navbar/>
     <section id="contact">
    <div className="contact container">
      <div>
        <h1 className="section-title">Contact <span>info</span></h1>
      </div>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+1 234 123 1234</h2>
            <h2>+1 234 123 1234</h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2><a  href="mailto: l20326@lhr.nu.edu.pk">farz@gmail.com</a> </h2>
          </div>
        </div>
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div className="contact-info">
            <h1>Address</h1>
            <h2>Shalimar Town , Lahore , Pakistan</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
<Footer/>
    </>
  )
}
