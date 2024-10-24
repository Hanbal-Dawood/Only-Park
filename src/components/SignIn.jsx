// src/components/SignIn.js
import React from 'react';
import { Container, Col, Form } from 'react-bootstrap';
import styles from './SignIn.module.css';
import InputField from './InputField';
import PrimaryButton from './PrimaryButton';
import logo from '../assets/onlypark-logo.png';

const SignIn = ({ goToForgotPassword, onSignIn }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Basic validation
    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    // Simulate a sign-in process (replace with API call)
    const fakeUserName = 'Shahzad Mughal';
    onSignIn(fakeUserName);
  };

  return (
    <div className={`${styles.background} d-flex flex-column flex-root`}>
      <Container className="d-flex flex-column flex-lg-row justify-content-center mx-auto min-vh-100 align-items-center">
        <Col md={8} lg={6} xl={6} xs={10} className={`${styles.authCard} bg-body d-flex flex-column align-items-center rounded-3 shadow`}>
          {/* Logo */}
          <div className={`text-center ${styles.logoContainer}`}>
            <img src={logo} alt="OnlyPark Logo" className={styles.logo} />
            <h1 className="text-dark mb-3">Sign In</h1>
          </div>

          {/* Form */}
          <Form className="w-100" onSubmit={handleSubmit}>
            {/* Email Field */}
            <InputField
              controlId="formEmail"
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              name="email"
            />

            {/* Password Field */}
            <InputField
              controlId="formPassword"
              type="password"
              label="Password"
              placeholder="Enter your password"
              name="password"
            />

            {/* Forgot Password */}
            <div className="d-flex justify-content-end mb-4">
              <button onClick={goToForgotPassword} className={`btn btn-link ${styles.primaryLink}`}>
                Forgot your Password?
              </button>
            </div>

            {/* Submit Button */}
            <PrimaryButton type="submit" text="Sign In" />
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default SignIn;
