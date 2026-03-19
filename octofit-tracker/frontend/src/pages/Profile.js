import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const Profile = () => {
  const [profile, setProfile] = useState({
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    age: '',
    height: '',
    weight: '',
    fitness_level: 'beginner'
  });

  useEffect(() => {
    // TODO: Fetch user profile from API
    // Mock data for now
    setProfile({
      username: 'student_user',
      email: 'student@mergington.edu',
      first_name: 'John',
      last_name: 'Doe',
      age: '16',
      height: '170',
      weight: '65',
      fitness_level: 'intermediate'
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Update profile via API
    console.log('Updated profile:', profile);
  };

  return (
    <div>
      <h1 className="mb-4">My Profile</h1>

      <Row>
        <Col md={8}>
          <Card>
            <Card.Header>Personal Information</Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.username}
                        onChange={(e) => setProfile({...profile, username: e.target.value})}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.first_name}
                        onChange={(e) => setProfile({...profile, first_name: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={profile.last_name}
                        onChange={(e) => setProfile({...profile, last_name: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        type="number"
                        value={profile.age}
                        onChange={(e) => setProfile({...profile, age: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Height (cm)</Form.Label>
                      <Form.Control
                        type="number"
                        value={profile.height}
                        onChange={(e) => setProfile({...profile, height: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Weight (kg)</Form.Label>
                      <Form.Control
                        type="number"
                        value={profile.weight}
                        onChange={(e) => setProfile({...profile, weight: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Fitness Level</Form.Label>
                  <Form.Select
                    value={profile.fitness_level}
                    onChange={(e) => setProfile({...profile, fitness_level: e.target.value})}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="primary" type="submit">
                  Update Profile
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Header>Statistics</Card.Header>
            <Card.Body>
              <p><strong>Total Points:</strong> 1,250</p>
              <p><strong>Activities Logged:</strong> 15</p>
              <p><strong>Current Streak:</strong> 7 days</p>
              <p><strong>Teams Joined:</strong> 1</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;