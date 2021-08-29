import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup } from 'react-bootstrap'
import { useCardContext } from "../context/cartContext";

export function ItemCount({ stock, initial, onAdd, btnState }) {
	const { cant, setCant } = useCardContext();

  // const [cant, setCount] = useState(cant)
	const addCount = () => {
		if(cant === stock){
			alert('Lo sentimos, no contamos con mas stock disponible.')
		}
		setCant(cant + 1)
	}
	const restCount = () => {
		if(cant === stock){
			alert('Lo sentimos, no contamos con mas stock disponible.')
		}
		setCant(cant - 1)
	}

	useEffect(() => {
	}, [cant]);

	return (
		<Card className={"card-item"} style={{ width: '18rem', margin: '1rem auto' }}>
			<Card.Header className={"item-header"}>Polo Polister</Card.Header>
			<Card.Body className={"item-body"}>
				<div className={"cont-controler-item"}>
					<div className={"control-count-item"}>
						<button type="button" className={cant === 1 || stock < 1 ? 'disabled' : ''} onClick={restCount}>-</button>
					</div>
					<p className={"cant-items-added"}>
						{cant}
					</p>
					<div className={"control-count-item"}>
						<button type="button" className={cant === stock || stock < 1 ? 'disabled' : ''} onClick={addCount}>+</button>
					</div>
				</div>
			</Card.Body>
			<Card.Footer className={"item-footer"}>
				<Button
					type="button"
					onClick={() => { onAdd(cant) }}
					className={btnState ? 'd-none' : 'w-100'}
					variant="outline-primary">Agregar al carrito</Button>
			</Card.Footer>
		</Card>
	)
}