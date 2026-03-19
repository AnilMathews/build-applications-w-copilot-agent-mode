import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col, Badge } from 'react-bootstrap';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // TODO: Fetch teams from API
    // Mock data for now
    setTeams([
      {
        id: 1,
        name: 'Fitness Warriors',
        description: 'A team of dedicated fitness enthusiasts',
        member_count: 8,
        total_points: 2450
      }
    ]);
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Teams</h1>
        <Button variant="primary">Create New Team</Button>
      </div>

      <Row>
        {teams.length === 0 ? (
          <Col>
            <Card>
              <Card.Body className="text-center">
                <p>No teams yet.</p>
                <Button variant="primary">Create Your First Team</Button>
              </Card.Body>
            </Card>
          </Col>
        ) : (
          teams.map(team => (
            <Col md={6} key={team.id}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>{team.name}</Card.Title>
                  <Card.Text>{team.description}</Card.Text>
                  <div className="d-flex justify-content-between align-items-center">
                    <Badge bg="secondary">{team.member_count} members</Badge>
                    <span className="fw-bold">{team.total_points} points</span>
                  </div>
                  <Button variant="outline-primary" className="mt-2">View Team</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Teams;