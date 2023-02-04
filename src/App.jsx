import React from 'react';
import './App.css';
import { NavBar } from './components';
import { FireBot } from './pages/FireBot';
import { Commands } from './pages/commands';
import { Home } from './pages/home';
import './styles/darkmode.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="commands" element={<Commands />} />
        <Route path="fire" element={<FireBot />} />
      </Routes>
    </div>
  );
}

export default App;
