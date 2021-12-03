import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import { FaRegUserCircle } from "react-icons/fa";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const { loggedIn, setLoggedIn, user, setUser } = useContext(AuthContext);

  let navigate = useNavigate();
  const handleLogOut = () => {
    setLoggedIn(false);
    setUser(null);
    navigate("/signin");
  };
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/home">
          Break Your Habits
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/*<NavDropdown title="Heute" id="basic-nav-dropdown">
              
              <NavDropdown.Item href="/monat">Diesen Monat</NavDropdown.Item>
              <NavDropdown.Item href="/heute">Heute</NavDropdown.Item>
            </NavDropdown>*/}
            {!loggedIn && (
              <>
                <Button variant="outline-primary" as={Link} to="/signin">
                  Anmelden
                </Button>
                <Button as={Link} to="/registration">
                  Registrieren
                </Button>
              </>
            )}
            {loggedIn && (
              <>
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>

                <Nav.Link as={Link} to="/info">
                  Info
                </Nav.Link>

                <NavDropdown
                  title={<FaRegUserCircle />}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/profil">
                    Profil
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogOut}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
