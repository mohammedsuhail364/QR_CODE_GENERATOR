import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Car.css';

export const Car = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`main ${isActive ? 'active' : ''}`}>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    </div>
  );
};
