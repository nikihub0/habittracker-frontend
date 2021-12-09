import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import Container from "react-bootstrap/Container";
//import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
//import Row from "react-bootstrap/Row";

const Welcome = () => {
  let navigate = useNavigate();

  const handleRegisterNowButton = (e) => {
    console.log("You clicked register now.");
    navigate("/registration");
  };
  return (
    <div>
      <Container className="d-flex  align-items-center flex-direction-column p-5 welcome mt-4">
        <h1>Become Your Better Self.</h1>

        <Button
          className="mb-2"
          onClick={handleRegisterNowButton}
          variant="primary"
        >
          Register now
        </Button>
        <Image
          src="https://images.unsplash.com/photo-1543157145-f78c636d023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          thumbnail
          opacity-25
        />
      </Container>
      {/*  <Container>
        <Row>
          <Col xs={8} md={6}>
            <Image
              src="https://images.unsplash.com/photo-1543157145-f78c636d023d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvd2VycyUyMGJhY2tncm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              thumbnail
            />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default Welcome;
