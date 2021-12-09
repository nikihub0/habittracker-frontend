import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Container from "react-bootstrap/esm/Container";

const SigninForm = () => {
  const [textinput, settextinput] = useState("");
  const [pwinput, setpwinput] = useState("");
  const { setLoggedIn, loggedIn, user, setUser } = useContext(AuthContext);

  let navigate = useNavigate();

  const handleClick = (e) => {
    console.log("click");
    //check ob pw input und email input befüllt sind
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: textinput, password: pwinput }),
    };
    fetch("http://localhost:8080/users/login", requestOptions)
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
      {/*  {loggedIn ? <p>du bist eingeloggt</p> : <p>nicht eingeloggt</p>} */}
      <Form>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label>Melde dich mit deiner Email-Adresse an.</Form.Label>
          <Form.Control
            className="registerformcontrol"
            type="email"
            placeholder="Email"
            onChange={(e) => settextinput(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Label>Passwort</Form.Label>
          <Form.Control
            className="registerformcontrol"
            type="password"
            placeholder="Password"
            onChange={(e) => setpwinput(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button
          variant="outline-primary"
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          Anmelden
        </Button>
      </Form>
    </Container>
  );
};

export default SigninForm;
