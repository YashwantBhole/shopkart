

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

const Register = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword } = form;
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
            // }else{
            //     alert('Registration Successful !')
            // }
            // Add your registration logic here

        }else{
            alert('Registration Successful')
            window.location.reload();
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
                              <div className="my-3">
              <p>already have account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
              </div>
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">
                            Register
                        </Button>
                    </Form>
                </Container>
                <Footer />
            </>
        );
    
}
    

    export default Register;
