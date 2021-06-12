import React from "react";
import { Navbar, Nav } from 'react-bootstrap'


export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Europea</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#link">Productos</Nav.Link>
          <Nav.Link href="#link">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
