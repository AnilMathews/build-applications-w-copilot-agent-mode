import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirm: '',
    first_name: '',
    last_name: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.password !== userData.password_confirm) {
      setError('Passwords do not match');
      return;
    }

    // TODO: Implement registration API call
    console.log('Registration attempt:', userData);
    setError('');
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Alert variant="success">
            <h4>Registration Successful!</h4>
            <p>Welcome to OctoFit Tracker! You can now <a href="/login">login</a> with your credentials.</p>
          </Alert>
        </div>
      </div>
    );
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <Card>
          <Card.Header>
            <h2 className="text-center mb-0">Join OctoFit Tracker</h2>
          </Card.Header>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={userData.first_name}
                      onChange={(e) => setUserData({...userData, first_name: e.target.value})}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={userData.last_name}
                      onChange={(e) => setUserData({...userData, last_name: e.target.value})}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={userData.username}
                  onChange={(e) => setUserData({...userData, username: e.target.value})}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={userData.password}
                  onChange={(e) => setUserData({...userData, password: e.target.value})}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={userData.password_confirm}
                  onChange={(e) => setUserData({...userData, password_confirm: e.target.value})}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Register
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p>Already have an account? <a href="/login">Login here</a></p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Register;