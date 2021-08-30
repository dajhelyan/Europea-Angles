import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Card, Badge, Image, Button } from 'react-bootstrap'
import { ItemCount } from "./ItemCount";
import { useCardContext } from "../context/cartContext";

import { NavLink } from "react-router-dom";
// llamar componente itemcounter
// crear evento de compra
export function ItemDetail({ data }) {
  const [select, setSelect] = useState(false)
  // al dar click en agregar al carrito deberia agregar el item 
  const { cant, setCant, addItem, removeItem } = useCardContext();
  function handleAdd(quantityToAdd) {
    addItem(data, quantityToAdd)
    setSelect(true)
  }

  function handleRemove(data) {
    setCant(1)
    removeItem(data.id)
  }
  let subPrice = (data, cant) => {
    return data.price * cant;
  }
  useEffect(() => {
  }, [select, cant]);

  return (
    <Container className="j-center">
        <Col md={8} >
      <Row>
        <Col xs={4} md={4} className={"aling-center"}>
          <Image className={"product-photo"} src={data.pictureUrl} rounded />
        </Col>
        <Col xs={6} md={8}>
          <Card border="light" >

            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.description}
              </Card.Text>
              <Card.Footer className={"item-footer"}>
                <h4> <Badge variant="info">{`$ ${subPrice(data, cant)}`}</Badge>
                </h4>
                <ItemCount stock={data.stock} onAdd={handleAdd} />
                <Button
                  type="button"
                  className={select ? 'w-100' : 'd-none'}
                  variant="outline-primary"
                  onClick=""
                >
                  <NavLink to='/cart'>Terminar compra</NavLink>
                </Button>
                <Button
                  type="button"
                  className={select ? 'w-100' : 'd-none'}
                  variant="outline-primary"
                  onClick={handleRemove}
                >
                  Eliminar producto
                </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>

      </Row>
      </Col>
    </Container>
  )
}