import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './SignIn.module.css';

const PrimaryButton = ({ type, text }) => {
  return (
    <Button type={type} variant="primary" className={`w-100 ${styles.primaryButton}`}>
      {text}
    </Button>
  );
};

export default PrimaryButton;
