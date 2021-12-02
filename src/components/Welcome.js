import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  let navigate = useNavigate();

  const handleRegisterNowButton = (e) => {
    console.log("You clicked register now.");
    navigate("/registration");
  };
  return (
    <div className="welcome">
      <h1>Be Your Better Self.</h1>

      <Button onClick={handleRegisterNowButton} variant="primary">
        Register now
      </Button>
    </div>
  );
};

export default Welcome;
