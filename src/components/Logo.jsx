// src/components/Logo.js
import React from 'react';
import logo from '../assets/onlypark-logo.png'; // Path to your logo
import styles from './Logo.module.css'; // Create a separate CSS file for the logo styles

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={logo} alt="OnlyPark Logo" className={styles.logo} />
    </div>
  );
};

export default Logo;
