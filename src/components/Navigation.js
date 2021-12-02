import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  let navigate = useNavigate();

  const goBacktoWelcome = (e) => {
    console.log("You clicked back to welcome.");
    navigate("/welcome");
  };

  const goToSigninForm = (e) => {
    console.log("You clicked sign in.");
    navigate("/signin");
  };
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" onClick={goBacktoWelcome}>
          Break Your Habits
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/profil">Profil</Nav.Link>
            <Nav.Link href="/info">Info</Nav.Link>

            {/*<NavDropdown title="Heute" id="basic-nav-dropdown">
              <NavDropdown.Item href="/woche">Diese Woche</NavDropdown.Item>
              <NavDropdown.Item href="/monat">Diesen Monat</NavDropdown.Item>
              <NavDropdown.Item href="/heute">Heute</NavDropdown.Item>
            </NavDropdown>*/}
            <Nav.Link href="/signin" onClick={goToSigninForm}>
              Anmelden
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
