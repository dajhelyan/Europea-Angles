import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Badge, Image } from 'react-bootstrap'
import { ItemCount } from "./ItemCount";
// llamar componente itemcounter
// crear evento de compra
export function ItemDetail({ data }) {

  const [cant, setCant ] = useState(1);
  function onAdd(quantityToAdd) {
    setCant(quantityToAdd)
  }
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
              </Card.Footer>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  )
}