import React, { useState, useEffect } from "react";
import { Card, Badge, ListGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";

export const Item = ({ data }) => {
console.log(data);
	return (
		<Link to={`/product/detail/${data.id}`}>
			<Card className={"card-item"} style={{ }}>
				<Card.Header className={"item-header"}>{data.title}</Card.Header>
				<Card.Img variant="top" src={data.pictureUrl} className={'cover-img'} />
				<Card.Body className={"item-body"}>

				</Card.Body>
				<Card.Footer className={"item-footer"}>
					<h4> <Badge variant="info">{`$ ${data.price}`}</Badge>
					</h4>
				</Card.Footer>
			</Card>
			</Link>
	)
}
export default Item;