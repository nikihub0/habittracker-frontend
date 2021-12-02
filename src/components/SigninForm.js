import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const SigninForm = () => {
  const [textinput, settextinput] = useState("");
  const [pwinput, setpwinput] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
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
          navigate("/home");
        } else {
          //navigate back to registration
          console.log("nicht eingelogged");
          navigate("/registration");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {loggedIn ? <p>du bist eingeloggt</p> : <p>nicht eingeloggt</p>}
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Anmelden</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email address"
            onChange={(e) => settextinput(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setpwinput(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => handleClick(e)}>
          Anmelden
        </Button>
      </Form>
    </div>
  );
};

export default SigninForm;
