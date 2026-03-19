import React, { useState, useEffect } from 'react';
import { Card, Table, Badge } from 'react-bootstrap';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [period, setPeriod] = useState('weekly');

  useEffect(() => {
    // TODO: Fetch leaderboard from API based on period
    // Mock data for now
    setLeaderboard([
      { rank: 1, username: 'fitness_champ', points: 450 },
      { rank: 2, username: 'runner_girl', points: 380 },
      { rank: 3, username: 'gym_rat', points: 320 },
      { rank: 4, username: 'yoga_master', points: 290 },
      { rank: 5, username: 'swim_star', points: 275 }
    ]);
  }, [period]);

  const getRankBadge = (rank) => {
    switch(rank) {
      case 1: return <Badge bg="warning">🥇</Badge>;
      case 2: return <Badge bg="secondary">🥈</Badge>;
      case 3: return <Badge bg="danger">🥉</Badge>;
      default: return <Badge bg="light">{rank}</Badge>;
    }
  };

  return (
    <div>
      <h1 className="mb-4">Leaderboard</h1>

      <Card>
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <span>Top Performers</span>
            <div>
              <select
                className="form-select form-select-sm"
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
              >
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="all_time">All Time</option>
              </select>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Table responsive>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Username</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(entry => (
                <tr key={entry.rank}>
                  <td>{getRankBadge(entry.rank)}</td>
                  <td>{entry.username}</td>
                  <td><strong>{entry.points}</strong></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Leaderboard;