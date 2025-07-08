import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Predictions from './pages/Predictions';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen gradient-bg">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 