import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  let navigate = useNavigate();
  const [textinput, settextinput] = useState("");
  const [pwinput, setpwinput] = useState("");
  const { setLoggedIn, loggedIn, user, setUser } = useContext(AuthContext);

  const handleClick = (e) => {
    console.log("click");
    //check ob pw input und email input befüllt sind
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: textinput, password: pwinput }),
    };
    fetch("http://localhost:8080/users/registration", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.email) {
          setLoggedIn(true);

          setUser({ id: data.id, email: data.email });
          navigate("/home");
        } else {
          //navigate back to registration

          navigate("/registration");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className="d-flex flex-column justify-content-center border rounded shadow signinform align-items-center register mt-4">
      <Form>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Mit deiner E-Mail-Adresse registrieren</Form.Label>
          <Form.Control
            className="registerformcontrol"
            type="email"
            placeholder="Gib deine Email Adresse ein"
            onChange={(e) => settextinput(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Passwort erstellen</Form.Label>
          <Form.Control
            className="registerformcontrol mb-4"
            type="password"
            placeholder="Password"
            onChange={(e) => setpwinput(e.target.value)}
          />
          <Button
            variant="primary"
            type="submit"
            onClick={(e) => handleClick(e)}
          >
            Registrieren
          </Button>
        </Form.Group>

        {/* <p>Already have an account?</p> */}
        <Form.Label>
          <Form.Text className="d-flex flex-column mb-4">
            Already have an account?
          </Form.Text>
          <Button variant="outline-primary" as={Link} to="/signin">
            Sign in
          </Button>
        </Form.Label>
      </Form>
    </Container>
  );
};

export default Register;
