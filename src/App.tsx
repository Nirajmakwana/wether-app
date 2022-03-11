import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FristPage from './components/FristPage';
import SceondLogin from './components/SceondLogin';
import SecondPage from './components/SecondPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< FristPage />} />
        <Route path="/second" element={< SceondLogin />} />
        <Route path="/login" element={<SecondPage />} />
      </Routes>
    </Router>
  )
}

export default App