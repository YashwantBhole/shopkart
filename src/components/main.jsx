
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
          <Carousel.Caption className='text-dark p-7 fw-bold'>
            <h3 className='bg-warning'>Card Payment Available ....</h3>
            <p >Pay through UPI ID or many more..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/5622929/pexels-photo-5622929.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
          <Carousel.Caption className='text-dark p-6 fw-bold'>
            <h3 className='bg-warning'> Branded Ladies T-Shirts..</h3>
            <p>Must buy ,Limited Offer ! ....</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/sale-discount-promotion-special-offer-graphic-concept_53876-120872.jpg?ga=GA1.1.1052083188.1715228083&semt=ais_hybrid"
            alt="Third slide"
            style={{ maxHeight: '400px', width: '100%', objectFit: 'cover' }}
          />
          <Carousel.Caption className='text-dark p-7 fw-bold'>
            <h3 className='bg-warning'>Buy To create New World....!</h3>
            <p className='text-light'>Trusted Services</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
  );
};

export default Home;
