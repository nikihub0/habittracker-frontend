import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <footer class="bg-dark text-center text-lg-start text-white">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/kontakt">Kontaktiere uns</Nav.Link>
              <Nav.Link href="/datenschutz">Datenrichtlinie</Nav.Link>
              <Nav.Link href="/impressum">
                Impressum/Nutzungsbedingungen/NetzDG/UrhDaG
              </Nav.Link>
              <Nav.Link href="/faq">FAQs</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
