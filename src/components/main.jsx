
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'

const Home = () => {
  return (
    <div className="hero border-1 pb-2 py-1">
        <div className="card bg-dark text-white border-1 mx-2">
      <Carousel>
        <Carousel.Item>
          <img
            // className="d-block w-100"
             className="card-img img-fluid"
            src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
          <Carousel.Caption className='text-light p-7 fw-bold'>
            <h3>Card Payment Available ....</h3>
            <p>Pay through UPI ID or many more..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5622929/pexels-photo-5622929.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
          <Carousel.Caption className='text-light p-6 fw-bold'>
      
            <p>Must buy ,Limited Offer ! ....</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/7289746/pexels-photo-7289746.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Third slide"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
          <Carousel.Caption className='text-dark p-7 fw-bold'>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
};

export default Home;
