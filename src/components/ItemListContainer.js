import React from "react";
import { Card } from 'react-bootstrap'

export function ItemListContainer(props) {
	return (
		<Card>
				<Card.Body>{props.greeting}</Card.Body>
		</Card>
    )
}