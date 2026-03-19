import React, { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login API call
    console.log('Login attempt:', credentials);
    setError('Login functionality not yet implemented');
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        <Card>
          <Card.Header>
            <h2 className="text-center mb-0">Login to OctoFit Tracker</h2>
          </Card.Header>
          <Card.Body>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100">
                Login
              </Button>
            </Form>

            <div className="text-center mt-3">
              <p>Don't have an account? <a href="/register">Register here</a></p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Login;