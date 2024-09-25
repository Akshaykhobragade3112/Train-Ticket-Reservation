const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import cors
const seatRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Use cors
app.use(bodyParser.json());

// Routes
app.use('/api/seats', seatRoutes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
