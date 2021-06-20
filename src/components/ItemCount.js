import React from "react";
import { Card, Button, ListGroup } from 'react-bootstrap'

export function ItemCount({ stock, initial, onAdd }) {
	return (
		<Card className={"card-item"} style={{ width: '18rem', margin: '1rem auto' }}>
			<Card.Header className={"item-header"}>Polo Polister</Card.Header>
			<Card.Body className={"item-body"}>				
				<div className={"cont-controler-item"}>
					<div className={"control-count-item"}>
					<button>-</button>
					</div>
					<div className={"cant-items-added"}>
						{initial}
					</div>
					<div className={"control-count-item"}>
						<button>+</button>
					</div>
				</div>
			</Card.Body>
			<Card.Footer className={"item-footer"}>	
				<Button className="w-100" variant="outline-primary">Agregar al carrito</Button>
			</Card.Footer>	
		</Card>
    )
}