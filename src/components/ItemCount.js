import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup } from 'react-bootstrap'
import { useCardContext } from "../context/cartContext";

export function ItemCount({ data, stock, onAdd, btnState, cardClass }) {
	const { cant, setCant, updateCant } = useCardContext();
	const [newCant, setNewCant] = useState()
	const addCount = () => {
		if (!onAdd) {
			let newQuantity = data.quantity += 1;
			setNewCant(newQuantity);
			updateCant(data, newCant)
		} else if (cant !== stock) {
			setCant(cant + 1)
		} else {
			alert('Lo sentimos, no contamos con mas stock disponible.')

		}



	}
	const restCount = () => {
		if (!onAdd) {
			let newQuantity = data.quantity -= 1;
			setNewCant(newQuantity);
			updateCant(data, newCant)
		} else if (onAdd && cant !== stock) {
			setCant(cant - 1)
		} else {
			alert('Lo sentimos, no contamos con mas stock disponible.')
		}

	}

	useEffect(() => {
	}, [cant]);

	return (
		<Card className={btnState ? 'cart-trans' : 'card-item'} >
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
			<Card.Footer className={btnState ? 'd-none' : "item-footer"}>
				<Button
					type="button"
					onClick={() => { onAdd(cant) }}
					className={btnState ? 'd-none' : 'w-100'}
					variant="outline-primary">Agregar al carrito</Button>
			</Card.Footer>
		</Card>
	)
}