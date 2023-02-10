import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Preloader from './Preloader';
import App from './App';
import './global.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter } from 'react-router-dom';

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>{loading ? <Preloader /> : <App />}</BrowserRouter>
    </React.StrictMode>
  );
};

library.add(fas, fab);

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
