

import React, { useState } from 'react';
import { Container, Form, Button, } from 'react-bootstrap';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      setSuccess(true)

    } else {
     setError(true)

    }

  };

  const closeSuccess =()=>{
    setSuccess(false)
  }

  const closeError = () => {
    setError(false)
    window.location.reload();
  }

  return (
    <>
      <Navbar />
      <Container className="mt-5">
        <h2 className="mb-4">Login</h2>
        <Form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <div className="my-3">
              <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
            </div>
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>

        {/*  show popup */}
        {success && (
          <div className='position-fixed top-0 start-0  w-100 h-100 d-flex justify-content-center align-items-center  bg-dark bg-opacity-50'>
            <div className='bg-white p-4 rounded text-center-shadow'>
              <h3 className='fs-4 fw-bold text-success'>Login Successful!</h3>
              <div className='d-flex justify-content-center align-items-center'>
                <FaCheckCircle className='text-success' fontSize={34}/>
              </div>
              <button className='mt-3 btn btn-primary '
                onClick={closeSuccess}>close</button>
            </div>
          </div>
        )}


        {/*error section  */}
        {error && (
          <div className='position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50'>
          <div className='bg-white p-4 rounded text-center shadow'>
         <h3 className='fs-4 fw-bold text-danger'>Login Error </h3>
         <div className='d-flex justify-content-center align-items-center '>
          <FaTimesCircle className='text-danger ' fontSize={34}/>
         </div>
         <button className='mt-3 btn btn-primary 'onClick={closeError}>
         close
         </button>
          </div>
         </div>

        )}

      </Container>
      <Footer />
    </>

  );
};

export default Login;
