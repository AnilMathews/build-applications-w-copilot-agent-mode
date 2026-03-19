import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 py-4">
      <Container>
        <div className="text-center">
          <p>&copy; 2024 OctoFit Tracker. Built for Mergington High School.</p>
          <small>Helping students stay fit and competitive!</small>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;