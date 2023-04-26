import React from 'react'
import {IoLogoFacebook,IoLogoGithub,IoLogoInstagram,IoLogoTwitter,IoLogoPinterest,IoLogoYoutube} from 'react-icons/io'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
   
<footer className="text-center text-lg-start bg-dark text-muted" >
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
   
    <div className="me-5 d-none d-lg-block">
      <span className='sp1'>Get connected with us on social networks:</span>
    </div>
   
    <div className='div2'>
      <a href="" className="me-4 text-reset">
      <IoLogoFacebook/>
      </a>
      <Link to="https://github.com/Abdullahahmad666/Web-Engineering" className="me-4 text-reset">
      <IoLogoGithub/>
      </Link>
      <a href="" className="me-4 text-reset">
      <IoLogoInstagram/>
      </a>
      <a href="" className="me-4 text-reset">
      <IoLogoTwitter/>
      </a>
      <a href="" className="me-4 text-reset">
      <IoLogoPinterest/>
      </a>
      <Link to="https://www.youtube.com/@abglimpse8397" className="me-4 text-reset">
      <IoLogoYoutube/>
      </Link>
    </div>
   
  </section>


 
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
        
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
           <span className='sp1'><b>FARZ</b> </span> 
          </h6>
          <p className='p1'>
            This Platform provide you Ease by Buying Products at one Click.
          </p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
           <span className='sp1'>Products</span> 
          </h6>
          <p className='p1'>
            <Link to="/Electronics" className="text-reset">Electronics</Link>
          </p>
          <p className='p1'>
            <Link to="/Makeup" className="text-reset">MakeUp</Link>
          </p>
          <p className='p1'>
            <Link to="/Clothes" className="text-reset">Clothes</Link>
          </p>
          <p className='p1'>
            <Link to="/Grocery" className="text-reset">Grocery</Link>
          </p>
          <p className='p1'>
            <Link to="/Furniture" className="text-reset">Furniture</Link>
          </p>
        </div>
        
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
           <span className='sp1'>Useful links</span> 
          </h6>
          <p className='p1'>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p className='p1'>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p className='p1'>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p className='p1'>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4"><span className='sp1'>Contact</span> </h6>
          <p className='p1'><i className="fas fa-home me-3"></i> Pakistan</p>
          <p className='p1'>
            <i className="fas fa-envelope me-3"></i>
            info@
          </p>
          <p className='p1'><i className="fas fa-phone me-3"></i> + 01 234 </p>
          <p className='p1'><i className="fas fa-print me-3"></i> + 01 234 </p>
        </div>
       
      </div>
     
    </div>
  </section>
 
  <div className="text-center p-4" >
   <span className='sp1'>© 2023 Copyright: </span> 
    <a className="text-reset fw-bold" href="https://FARZ.com/"><span className='sp1'>FARZ.com</span> </a>
  </div>
  
</footer>

    </>
  )
}
