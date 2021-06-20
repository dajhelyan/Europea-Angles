import React from "react";
import { Card } from 'react-bootstrap'
import { ItemCount } from './ItemCount';

export function ItemListContainer(props) {
	return (
		<Card>
			<Card.Body>
				<ItemCount initial={1}/>
			</Card.Body>
		</Card>
    )
}