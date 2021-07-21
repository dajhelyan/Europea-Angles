import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { CardWidget } from "./CardWidget";
import dataJSON from '../data/products'

export function NavBar() {
  const [category, setCategory] = useState([])
  // llamado a la data
  const getItem = async (data) => {

    try {
      let result = await new Promise((resolve, reject) => {
        setTimeout(resolve(data), 2000);
      })
       setCategory(Object.keys(result[0].categories))
    } catch {
      console.log('error')
    }

  }
  console.log(category, 'va');
  useEffect(() => {
    getItem(dataJSON)
  }, [])

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <CardWidget></CardWidget>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <NavDropdown title="Productos" id="navbarScrollingDropdown">
            {
              category.map((ele) => {
                return <NavDropdown.Item href={`/category/${ele}`}>{ele}</NavDropdown.Item>
              })
            }

            {/* probar context con la data para no estar haciendo un useeefect en cada vista */}
          </NavDropdown>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
