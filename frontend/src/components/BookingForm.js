import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css'

function BookingForm({ onBookingComplete }) {
  const [seatCount, setSeatCount] = useState(1);
  const [message, setMessage] = useState('');
  const [bookedSeats, setBookedSeats] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/seats/book', { seatCount });
      setMessage(response.data.message);
      setBookedSeats(response.data.bookedSeats);
      onBookingComplete();  // Notify parent component to refresh the seat map
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="booking-form">
      <h2>Book Seats</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="seatCount">Number of Seats (1-7):</label>
        <input
          type="number"
          id="seatCount"
          value={seatCount}
          onChange={(e) => setSeatCount(e.target.value)}
          min="1"
          max="7"
          required
        />
        <button type="submit">Book</button>
      </form>
      {message && (
        <div className="message">
          <p>{message}</p>
          {bookedSeats.length > 0 && <p>Booked Seats: {bookedSeats.join(', ')}</p>}
        </div>
      )}
    </div>
  );
}

export default BookingForm;
