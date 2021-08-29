import React, { useState } from 'react';
import { useCardContext } from '../context/cartContext';
import { Row, Col, Card, Badge, Image, Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ItemCount } from './ItemCount';

function CardItem() {
  const { cant, cart, removeItem } = useCardContext();
  return (
    <Container>
      <Row>
        <Col xs={2} md={4}>
          <Image src={cart.pictureUrl} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Container border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{cart.title}</Card.Title>
              <Card.Text>
                {cart.description}
              </Card.Text>
              <Card.Footer className={"item-footer"}>
                <h4> <Badge variant="info">{`$ ${cart.price}`}</Badge>
                </h4>
                <ItemCount stock={cart.stock} initial={cant}
                // onAdd={handleAdd} 
                />

                <Button
                  type="button"
                  // className={select ? 'w-100' : 'd-none'}
                  variant="outline-primary"
                  onClick={() => { removeItem(cart) }}
                >
                  Eliminar producto
                </Button>
              </Card.Footer>
            </Card.Body>
          </Container>
        </Col>

      </Row>
    </Container>
  )
}

export default CardItem;