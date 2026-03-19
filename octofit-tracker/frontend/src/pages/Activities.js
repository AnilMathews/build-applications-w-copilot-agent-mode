import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Row, Col, Modal } from 'react-bootstrap';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newActivity, setNewActivity] = useState({
    activity_type: 'running',
    duration: '',
    distance: '',
    notes: ''
  });

  const activityTypes = [
    { value: 'running', label: 'Running' },
    { value: 'walking', label: 'Walking' },
    { value: 'cycling', label: 'Cycling' },
    { value: 'swimming', label: 'Swimming' },
    { value: 'weightlifting', label: 'Weightlifting' },
    { value: 'yoga', label: 'Yoga' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit to API
    console.log('New activity:', newActivity);
    setShowModal(false);
    setNewActivity({
      activity_type: 'running',
      duration: '',
      distance: '',
      notes: ''
    });
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Activities</h1>
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Log New Activity
        </Button>
      </div>

      <Row>
        {activities.length === 0 ? (
          <Col>
            <Card>
              <Card.Body className="text-center">
                <p>No activities logged yet.</p>
                <Button variant="primary" onClick={() => setShowModal(true)}>
                  Log Your First Activity
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          activities.map(activity => (
            <Col md={6} key={activity.id}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{activity.activity_type}</Card.Title>
                  <Card.Text>
                    Duration: {activity.duration} minutes<br/>
                    {activity.distance && `Distance: ${activity.distance} km<br/>`}
                    Points: {activity.points_earned}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Log New Activity</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Activity Type</Form.Label>
              <Form.Select
                value={newActivity.activity_type}
                onChange={(e) => setNewActivity({...newActivity, activity_type: e.target.value})}
              >
                {activityTypes.map(type => (
                  <option key={type.value} value={type.value}>{type.label}</option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration (minutes)</Form.Label>
              <Form.Control
                type="number"
                value={newActivity.duration}
                onChange={(e) => setNewActivity({...newActivity, duration: e.target.value})}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Distance (km) - Optional</Form.Label>
              <Form.Control
                type="number"
                step="0.1"
                value={newActivity.distance}
                onChange={(e) => setNewActivity({...newActivity, distance: e.target.value})}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Notes</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newActivity.notes}
                onChange={(e) => setNewActivity({...newActivity, notes: e.target.value})}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Log Activity
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default Activities;