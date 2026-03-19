import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalActivities: 0,
    totalPoints: 0,
    weeklyGoal: 0,
    currentStreak: 0
  });

  useEffect(() => {
    // TODO: Fetch user stats from API
    // For now, using mock data
    setStats({
      totalActivities: 15,
      totalPoints: 1250,
      weeklyGoal: 5,
      currentStreak: 7
    });
  }, []);

  return (
    <div>
      <h1 className="mb-4">Welcome to OctoFit Tracker!</h1>

      <Row className="mb-4">
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>{stats.totalActivities}</Card.Title>
              <Card.Text>Total Activities</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>{stats.totalPoints}</Card.Title>
              <Card.Text>Total Points</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>{stats.weeklyGoal}</Card.Title>
              <Card.Text>Weekly Goal</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>{stats.currentStreak}</Card.Title>
              <Card.Text>Day Streak</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Header>Recent Activities</Card.Header>
            <Card.Body>
              <p>No recent activities yet. <Button variant="primary" href="/activities">Log your first activity!</Button></p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Header>Today's Suggestions</Card.Header>
            <Card.Body>
              <p>Get personalized workout suggestions based on your fitness level!</p>
              <Button variant="success">View Suggestions</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;