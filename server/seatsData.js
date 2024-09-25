const TOTAL_SEATS = 80;
const ROW_SIZE = 7;
const LAST_ROW_SIZE = 3;

// Initialize the seats in a 2D array
const initializeSeats = () => {
  let seats = [];
  let rowNum = 1;

  for (let i = 0; i < TOTAL_SEATS; i += ROW_SIZE) {
    if (i + ROW_SIZE > TOTAL_SEATS) {
      seats.push(Array.from({ length: LAST_ROW_SIZE }, (_, idx) => ({ seatNumber: `R${rowNum}-${idx + 1}`, isBooked: false })));
    } else {
      seats.push(Array.from({ length: ROW_SIZE }, (_, idx) => ({ seatNumber: `R${rowNum}-${idx + 1}`, isBooked: false })));
    }
    rowNum++;
  }

  return seats;
};

// Function to book seats
const bookSeats = (seats, seatCount) => {
  let availableSeats = [];
  
  // Check each row for enough contiguous seats
  for (let row of seats) {
    let rowAvailableSeats = row.filter(seat => !seat.isBooked);
    if (rowAvailableSeats.length >= seatCount) {
      let bookedSeats = rowAvailableSeats.slice(0, seatCount);
      bookedSeats.forEach(seat => (seat.isBooked = true));
      return bookedSeats.map(seat => seat.seatNumber);
    }
  }

  // If no row has enough contiguous seats, book nearby seats
  for (let row of seats) {
    let rowAvailableSeats = row.filter(seat => !seat.isBooked);
    availableSeats.push(...rowAvailableSeats);
    if (availableSeats.length >= seatCount) {
      let bookedSeats = availableSeats.slice(0, seatCount);
      bookedSeats.forEach(seat => (seat.isBooked = true));
      return bookedSeats.map(seat => seat.seatNumber);
    }
  }

  // If not enough seats available, return an empty array
  return [];
};

module.exports = { initializeSeats, bookSeats };
