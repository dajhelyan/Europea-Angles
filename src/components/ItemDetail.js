import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Image, Button } from 'react-bootstrap'
import { ItemCount } from "./ItemCount";
import { NavLink } from "react-router-dom";
// llamar componente itemcounter
// crear evento de compra
export function ItemDetail({ data }) {

  const [cant, setCant] = useState(1);
  const [select, setSelect] = useState(false)

  function onAdd(quantityToAdd) {
    setCant(quantityToAdd)
    setSelect(true)
  }
  useEffect(() => {
  }, [select]);

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
                <ItemCount stock={5} initial={cant} onAdd={onAdd} />
                <Button
                  type="button"
                  className={select ? 'w-100' : 'd-none'}
                  variant="outline-primary">
                  <NavLink to='/cart'>Terminar compra</NavLink> </Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}