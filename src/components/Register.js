import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Register.css";
//import { useState } from "react";

const Register = () => {
  let navigate = useNavigate();

  const goToSigninForm = (e) => {
    console.log("You clicked sign in.");
    navigate("/signin");
  };

  return (
    <div className="register">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mit deiner E-Mail-Adresse registrieren</Form.Label>
          <Form.Control
            type="email"
            placeholder="Gib deine Email Adresse ein"
          />
          <Form.Text className="text-muted">
            Wir teilen deine Email mit niemandem.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Passwort erstellen</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registrieren
        </Button>
      </Form>
      <h4>Already have an account?</h4>
      <Button onClick={goToSigninForm} variant="primary">
        Sign in
      </Button>
    </div>
  );
};

export default Register;
