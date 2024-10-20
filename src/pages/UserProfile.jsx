import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';

const UserProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const user = useSelector(state => state.user); // Get user state from Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Ref for the file input

  const handleLogout = () => {
    // Clear user data and navigate to login page
    dispatch({ type: 'SET_USER', payload: { isLoggedIn: false, name: '', email: '' } });
    localStorage.removeItem('loggedInUser'); // Clear local storage if needed
    navigate('/login');
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result); // Set the photo URL
      };
      reader.readAsDataURL(file); // Convert file to base64 string
    }
  };

  const handleAddPhotoClick = () => {
    // Trigger the click event of the hidden file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6} className="text-center bg-light p-4 rounded shadow">
          {/* Profile Photo Section */}
          <div className="mb-4">
            {profilePhoto ? (
              <img
                src={profilePhoto}
                alt="Profile"
                style={{ width: '120px', height: '120px', borderRadius: '50%' }}
              />
            ) : (
              <FaUserCircle style={{ fontSize: '5rem', color: '#007bff' }} />
            )}
            <div className="mt-2">
              <Button variant="primary" onClick={handleAddPhotoClick} className="mt-2">
                Add Photo
              </Button>
              <Form.Control 
                type="file" 
                accept="image/*" 
                onChange={handlePhotoChange} 
                className="mt-2" 
                ref={fileInputRef} // Set ref for the file input
                style={{ display: 'none' }} // Hide the input
              />
            </div>
          </div>

          {/* User Details Section */}
          <h2 className="mb-3">{user.name}</h2>
          <p className="mb-1"><strong>Email:</strong> {user.email}</p>
          <p className="mb-3"><strong>Status:</strong> Logged In</p>

          {/* Logout Button */}
          <Button variant="danger" onClick={handleLogout}>
            <FaSignOutAlt className="me-2" /> Logout
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfile;
