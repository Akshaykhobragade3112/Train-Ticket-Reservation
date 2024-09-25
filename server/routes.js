const express = require('express');
const router = express.Router();
const { initializeSeats, bookSeats } = require('./seatsData');

// Initialize seats
let seats = initializeSeats();

// Get the current seat map
router.get('/', (req, res) => {
  res.status(200).json({
    seats: seats,
    message: 'Here is the current seat map',
  });
});

// Book seats
router.post('/book', (req, res) => {
  const { seatCount } = req.body;

  if (!seatCount || seatCount < 1 || seatCount > 7) {
    return res.status(400).json({ message: 'You can book between 1 to 7 seats at a time.' });
  }

  const bookedSeats = bookSeats(seats, seatCount);

  if (bookedSeats.length === 0) {
    return res.status(400).json({ message: 'Not enough seats available.' });
  }

  return res.status(200).json({
    bookedSeats: bookedSeats,
    message: 'Seats successfully booked',
  });
});

module.exports = router;
