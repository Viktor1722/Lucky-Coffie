import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './mainPage';
import ReviewSummary from './reviewForm';
import "./App.css"
import "./reviewForm.css"

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/review-summary" element={<ReviewSummary />} />
    </Routes>
  </Router>
  );
}

export default App;
