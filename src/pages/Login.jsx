

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const {email , password} = form;
      
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === email && u.password ===  password);

      if(user){
        localStorage.setItem('loggedInUser' , JSON.stringify(user));
        alert("logIn Successsful ! ")
      }else{
        alert("Invalid username or password")
      }
        // Add your login logic here
        console.log('Logged in:', form);
    };

    return (
      <>
      <Navbar/>      
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
        </Container>
        <Footer/>
        </>

    );
};

export default Login;
