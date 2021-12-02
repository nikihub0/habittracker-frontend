import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SigninForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Anmelden</Form.Label>
          <Form.Control type="email" placeholder="Email address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Anmelden
        </Button>
      </Form>
    </div>
  );
};

export default SigninForm;
