import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {FaCheckCircle} from 'react-icons/fa'


const Register = () => {
const navigate = useNavigate();    
const [passError , setPassError] = useState(false)
const [showSuccess , setShowSuccess] = useState(false)


    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const closePopup =() =>{
        setShowSuccess(false)
       navigate('/Login')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword } = form;
        if (password !== confirmPassword) {
          setPassError(true)
            return;


        }else{
           setShowSuccess(true)
        
            console.log('Registered:', form);
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({
                name: form.name,
                email: form.email,
                password: form.password
            });
            localStorage.setItem('users', JSON.stringify(users));
        }

    }
        return (

            <>
                <Navbar />
                <Container className="mt-5">
                    <h2 className="mb-4">Register</h2>
                    <Form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                required
                            />
                        </Form.Group>
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
                                placeholder="Enter password"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formConfirmPassword" className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="confirmPassword"
                                value={form.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm password"
                                required
                            />
                            {passError && (
                                <div className='align-items-center'>
                                    <h6 className='text-danger fw-bold'>password error!</h6>
                                </div>
                            )}
                              <div className="my-3">
              <p>already have account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
              </div>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Register
                        </Button>
                    </Form>


                    {/* set show success popup*/}
                    {showSuccess && (
                        <div className='position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark bg-opacity-50'>
                            <div className='bg-white p-4 rounded text-center shadow'>
                                <h3 className='fs-4 fw-bold text-success'>Registration Successful!</h3>
                               <div className='d-flex justify-content-center align-items-center'>
                                <FaCheckCircle className='text-success 'style ={{fontSize : '34px'}} />
                               </div>
                                <button className='mt-3 btn btn-primary' 
                                onClick={closePopup}>close</button>
                            </div>
                        </div>
                    )}


    
                </Container>
                <Footer />
            </>
        );
    
}
    

    export default Register;
