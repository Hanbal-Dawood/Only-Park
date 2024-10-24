import React from 'react';
import { Form } from 'react-bootstrap';
import styles from './SignIn.module.css';

const InputField = ({ controlId, type, label, placeholder, name }) => {
  return (
    <Form.Group controlId={controlId} className="mb-4">
      <Form.Label className="fw-normal">{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        name={name}
        className={`bg-transparent ${styles.formControl}`}
        autoComplete="off"
      />
    </Form.Group>
  );
};

export default InputField;
