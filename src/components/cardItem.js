import React, { useState } from 'react';
import { useCardContext } from '../context/cartContext';
import { Container, Row, Col, Card, Badge, Image, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ItemCount } from './ItemCount';

function CardItem({ data }) {
  console.log(data, 'card')
  const { cant } = useCardContext();
  return (
    <Container>
      <Row>
        <Col xs={4} md={4}>
          {/* <Image src={data.pictureUrl} rounded /> */}
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
                <ItemCount stock={data.stock} initial={cant}
                // onAdd={handleAdd} 
                />
                <Button
                  type="button"
                  // className={select ? 'w-100' : 'd-none'}
                  variant="outline-primary"
                  onClick=""
                >
                  <NavLink to='/cart'>Terminar compra</NavLink>
                </Button>
                <Button
                  type="button"
                  // className={select ? 'w-100' : 'd-none'}
                  variant="outline-primary"
                // onClick={handleRemove}
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

export default CardItem;