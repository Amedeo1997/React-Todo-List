// LoadingScreen.js
import React from 'react';
import logo from '../pictures/logo.png'; // Make sure the path is correct and the variable name reflects the content
import './LoadingScreen.css'; // Make sure the path is correct

const LoadingScreen = () => (
  <div className="loading-screen">
    <img src={logo} alt="Loading..." />
  </div>
);

export default LoadingScreen;
