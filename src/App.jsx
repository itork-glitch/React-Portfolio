import React, { createContext, useState } from 'react';
import './App.css';
import { NavBar, Projects, Skills } from './components';
import { FireBot } from './pages/FireBot';
import { Commands } from './pages/commands';
import { Home } from './pages/Home';
import './styles/darkmode.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Switch from 'react-switch';
import styles from './styles/styles';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

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
