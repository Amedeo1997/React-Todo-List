// LoadingScreen.js
import React from 'react';
import logo from '../pictures/logo.png';
import './LoadingScreen.css';
const LoadingScreen = () => (
  <div className="loading-screen">
    <img src={logo} alt="Loading..." />
  </div>
);

export default LoadingScreen;
