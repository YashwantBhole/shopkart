import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Footer } from '../components';
import { Navbar } from '../components';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update these placeholders if needed to match your template variables
    const templateParams = {
      from_name: formData.name,     // Ensure these match the EmailJS template
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        'service_0i63oqk',           // Your Service ID
        'template_mx0jfoa',          // Your Template ID
        templateParams,
        'AHccKeeLGQ9-J4TQU'         // Your Public Key
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message.');
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              placeholder="Write your message here..."
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
