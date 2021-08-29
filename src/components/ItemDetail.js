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
  const { cant, setCant, onAdd, removeItem } = useCardContext();

  function handleAdd(quantityToAdd) {
    onAdd(data, quantityToAdd)
    setSelect(true)
    console.log(cant);
  }

  function handleRemove(data){
    setCant(1)
    removeItem(data.id)
  }
  useEffect(() => {
  }, [select, cant]);

  return (
    <Container>
      <Row>
        <Col xs={4} md={4}>
          <Image src={data.pictureUrl} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Card border="light" style={{ width: '18rem' }}>

            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.description}
              </Card.Text>
              <Card.Footer className={"item-footer"}>
                <h4> <Badge variant="info">{`$ ${data.price}`}</Badge>
                </h4>
                <ItemCount stock={data.stock} initial={cant} onAdd={handleAdd} />
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
    </Container>
  )
}