import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';   // Assuming you have a Home component
import Dashboard from './components/Dashboard';  // Assuming you have a Dashboard component
import Navbar from './components/Navbar';  // The updated Navbar

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
