import React, { useState } from 'react';
import BookingForm from './BookingForm';
import SeatMap from './SeatMap';
import './Dashboard.css'

function Dashboard() {
  const [refreshSeats, setRefreshSeats] = useState(false);

  const handleBookingComplete = () => {
    setRefreshSeats(!refreshSeats); // Toggle state to force seat map re-render
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <BookingForm onBookingComplete={handleBookingComplete} />
      <SeatMap refreshSeats={refreshSeats} />
    </div>
  );
}

export default Dashboard;
