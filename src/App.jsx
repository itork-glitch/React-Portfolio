import React from 'react';
import './App.css';
import { Commands, FireBot, Home } from './pages';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="commands" element={<Commands />} />
        <Route path="fire" element={<FireBot />} />
      </Routes>
    </div>
  );
}

export default App;
