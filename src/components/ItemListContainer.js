import React, { useState } from "react";
import { Card } from 'react-bootstrap'
import { ItemCount } from './ItemCount';

export function ItemListContainer() {
	
	return (
		<Card>
			<Card.Body>
				<ItemCount stock={5} initial={1} onAdd={() => {alert("Producto(s) agregados")}}/>
			</Card.Body>
		</Card>
    )
}