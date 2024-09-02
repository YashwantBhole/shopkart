
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center text-lg-start py-2">
      <div className="container">
        <div className="row">
          {/* Social Media Links */}
          <div className="col-lg-3 col-md-6 mb-3">
            <h5 className="mb-3">Follow Us</h5>
            <a href="https://github.com/YashwantBhole" className="btn btn-outline-dark btn-sm me-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" style={{ color: '#3b5998', fontSize: '2rem', margin: '0 10px' }}></i>
            </a>
            <a href="https://twitter.com" className="btn btn-outline-dark btn-sm me-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" style={{ color: '#1da1f2', fontSize: '2rem', margin: '0 10px' }}></i> 
            </a>
            <a href="https://www.instagram.com/yashwant_bhole_07" className="btn btn-outline-dark btn-sm me-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"  style={{ color: '#e4405f', fontSize: '2rem', margin: '0 10px' }}></i> 
            </a>
            <a href="https://wa.me/919359142599" className="btn btn-outline-dark btn-sm me-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" style={{ color: 'green', fontSize: '2.1rem', margin: '0 10px' }}></i> 
            </a>
          </div>

          {/* Extra Info */}
          <div className="col-lg-4 col-md-6 mb-3">
            <h5 className="mb-3">Contact Us</h5>
            <p>
              <i className="fas fa-envelope" style={{ color: '#d93025', fontSize: '1.4rem', margin: '0 10px' }}></i> yashwantbhole2004@gmail.com
            </p>
            <p>
              
              <i className="fas fa-phone" style={{ color: '#0d6efd', fontSize: '1.4rem', margin: '0 10px' }}></i> 
              <a href="tel:+919359142599" className="text-light">+919359142599</a>              </p>
            <a href='https://maps.app.goo.gl/mV4d84e2szaQXrZH8' className='text-none'>
              <i className="fas fa-map-marker-alt" style={{ color: '#dc3545', fontSize: '1.4rem', margin: '0 10px' }}></i> RSML, Latur, India
            </a>
          </div>

          {/* Additional Info */}
          <div className="col-lg-4 col-md-12 mb-3">
            <h5 className="mb-3">About Us</h5>
            <p>
          BCA 3<sup>rd</sup> Year Students at Rajarshi Shahu Mahavidyalay (Autonomous) , Latur
            </p>
          </div>
        </div>
      </div>

      <div className="bg-dark text-white py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; 2024 <i className='fa fa-store'></i>ShopKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
