import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SeatMap.css'

function SeatMap({ refreshSeats }) {
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    // Fetch seat data when the component mounts or refreshSeats changes
    const fetchSeats = async () => {
      try {
        const response = await axios.get('https://train-ticket-reservation-backend.onrender.com/api/seats');
        setSeats(response.data.seats);
      } catch (error) {
        console.error('Error fetching seat data', error);
      }
    };

    fetchSeats();
  }, [refreshSeats]);

  return (
    <div className="seat-map">
      <h2>Train Seat Map</h2>
      {seats.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((seat) => (
            <div
              key={seat.seatNumber}
              className={`seat ${seat.isBooked ? 'booked' : ''}`}
            >
              {seat.seatNumber}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SeatMap;
