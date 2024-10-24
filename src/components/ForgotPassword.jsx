// src/components/ForgotPassword.js
import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import styles from './SignIn.module.css'; // Reuse the same CSS module for consistent styling
import Logo from './Logo';

const ForgotPassword = ({ goBack }) => {
  return (
    <div className={`${styles.background} d-flex flex-column justify-content-center align-items-center min-vh-100`}>
      <Col md={8} lg={6} xl={4} className={`${styles.authCard} bg-body d-flex flex-column align-items-center rounded-3 shadow`}>
        <div className={`text-center ${styles.logoContainer}`}>
        <Logo />
          <h1 className="text-dark mb-3">Forgot Password ?</h1>
          <p className='mt-3'>Enter your email address, we'll send you a link to reset.</p>
        </div>

        <Form className="w-100">
          {/* Email Field */}
          <Form.Group controlId="formEmail" className="mb-4">
            <Form.Label className="fw-normal">Email Address</Form.Label>
            <Form.Control
              type="email"
              className={`bg-transparent rounded-3 ${styles.formControl}`}
              name="email"
              autoComplete="off"
            />
          </Form.Group>

          {/* Submit Button */}
          <Button type="submit" variant="primary" className={`w-100 ${styles.primaryButton}`}>
            Send Link
          </Button>
        </Form>

        {/* Back to Sign In */}
        <div className="d-flex justify-content-end mt-3">
          <span>Remember your account?<button onClick={goBack} className={`btn btn-link ${styles.primaryLink}`}>
          Login
          </button></span>
        </div>
      </Col>
    </div>
  );
};

export default ForgotPassword;

