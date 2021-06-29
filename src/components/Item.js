import React, { useState, useEffect } from "react";
import { Card, Badge, ListGroup } from 'react-bootstrap'

export const Item = ({ name, img, price }) => {
  
	return (
		<Card className={"card-item"} style={{ width: '18rem'}}>
			<Card.Header className={"item-header"}>{name}</Card.Header>
            <Card.Img variant="top" src={img}  className={'cover-img'} />
			<Card.Body className={"item-body"}>
				
			</Card.Body>
			<Card.Footer className={"item-footer"}>
			<h4> <Badge variant="info">{`$ ${price}`}</Badge>
  </h4>
			</Card.Footer>
		</Card>
	)
}
export default Item;