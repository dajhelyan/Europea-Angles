import React, { useState } from 'react';
import { useCardContext } from '../context/cartContext';
import { Row, Col, Card, Badge, Image, Button, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ItemCount } from './ItemCount';

function CardItem({ data }) {
  const { removeItem, cant } = useCardContext();

  let subPrice = (data, cant) => {
    return data.price * cant;
  }
  return (
    <Container>
      <Row>
        <Col xs={2} md={4}>
          <Image src={data.pictureUrl} rounded />
        </Col>
        <Col xs={6} md={4}>
          <Container border="light" style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                {data.description}
              </Card.Text>
              <Card.Footer className={"item-footer"}>
                <h4> <Badge variant="info">{`$ ${subPrice(data, cant)}`}</Badge>
                </h4>
                <ItemCount stock={data.stock} initial={cant} btnState={true}
                // onAdd={handleAdd} 
                />

                <Button
                  type="button"
                  // className={select ? 'w-100' : 'd-none'}
                  variant="outline-primary"
                  onClick={() => { removeItem(data.id) }}
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