import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { CardWidget } from "./CardWidget";

export function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <CardWidget></CardWidget>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/products">Productos</Nav.Link>
          <Nav.Link href="/sale">Sale</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
