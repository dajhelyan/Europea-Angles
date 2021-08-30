import React, { useState } from 'react';
import { useCardContext } from '../context/cartContext';
import { Row, Col, Card, Badge, Image, Button, Div, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ItemCount } from './ItemCount';

function CardItem({ data }) {
  const { removeItem, cant } = useCardContext();
  // const [cant, setCant] = useState(1)
  let subPrice = (data, cant) => {
    return data.price * cant;
  }
  return (
    <Container>
      <Col >
        <Row>
          <Col xs={2} md={2}>
            <Image src={data.pictureUrl} className={"product-photo-cart"} rounded />
          </Col>
          <Col xs={6} md={10} className={"bg-gray"}>
            <Container border="light" >
              <Row className={"t-start"}>
                <Col xs={6} md={6}>
                  <Col xs={6} md={12}>
                    <h5 >{data.title}</h5>

                  </Col>
                  <Col xs={6} md={12}>
                    {data.description}

                  </Col>
                </Col>
                <Col xs={6} md={6}>
                  <Row>
                    <Col xs={6} lg={3}>
                      <span className={"t-price"}>{`$ ${data.price}`}</span>
                    </Col>
                    <Col xs={6} lg={9}>                    
                    <ItemCount stock={data.stock} data={data} btnState={true} />
                    </Col>
                  </Row>

                </Col>
              </Row>

            </Container>
          </Col>

        </Row>
      </Col>

    </Container>
  )
}

export default CardItem;