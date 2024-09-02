import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector(state => state.handleCart)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top"> 
      <div className="container">
        {/* Logo */}
       <NavLink className="navbar-brand d-flex align-items-center fw-bold fs-4 px-2" to="/about">
          {/* Icon */}
          <i className="fa fa-store me-2" 
             style={{ 
               fontSize: '1.5rem', 
               color: '#007bff', 
               border: '2px solid #007bff', 
               borderRadius: '50%', 
               padding: '4px' 
             }}>
          </i>
          {/* Text */}
          <span>
            <span style={{ color: '#000' }}>Shop</span>
            <span style={{ color: '#ffcc00' }}>Kart</span>
          </span>
        </NavLink>
        <button className="navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-1 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/"><i className='fa fa-home'></i>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product"><i className='fa fa-box'></i>Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about"><i className='fa fa-user'></i>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact"><i className='fa fa-phone'></i>Contact</NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            <NavLink to="/login" className="btn btn-outline-dark m-2">
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark m-2">
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
