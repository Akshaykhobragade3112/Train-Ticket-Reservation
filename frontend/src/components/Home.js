import React from 'react';
import './Home.css'; // Ensure you have the corresponding CSS

function Home() {
  return (
    <div className="home">
      <img src="/train-home.webp" alt="Railway" className="railway-image" />
      <h1>Welcome to Train Reservation System</h1>
      <p>
        Book your seats in a single click! Navigate to the Dashboard to reserve
        seats and view available seating.
      </p>
    </div>
  );
}

export default Home;
