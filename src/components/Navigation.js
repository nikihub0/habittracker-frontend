import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
//import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
//import Button from "react-bootstrap/Button";
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
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Break Your Habits
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="d-flex justify-content-end"
          id="basic-navbar-nav"
        >
          <Nav>
            {/*<NavDropdown title="Heute" id="basic-nav-dropdown">
              
              <NavDropdown.Item href="/monat">Diesen Monat</NavDropdown.Item>
              <NavDropdown.Item href="/heute">Heute</NavDropdown.Item>
            </NavDropdown>*/}
            {!loggedIn && (
              <>
                <Nav.Link as={Link} to="/signin">
                  Sign In
                </Nav.Link>
                <Nav.Link as={Link} to="/registration">
                  Sign Up
                </Nav.Link>
              </>
            )}
            {loggedIn && (
              <>
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>

                <Nav.Link as={Link} to="/motivation">
                  Motivation
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
