import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
export function ItemCount({ stock, initial, onAdd }) {

	const [count, setCount] = useState(initial)
	const [select, setSelect] = useState(false)


	const addCount = () => {
		setCount(count + 1)

	}
	const restCount = () => {
		setCount(count - 1)

	}

	function handleClick() {
		setSelect(true)
	}

	useEffect(() => {
	}, [count, select]);

	return (
		<Card className={"card-item"} style={{ width: '18rem', margin: '1rem auto' }}>
			<Card.Header className={"item-header"}>Polo Polister</Card.Header>
			<Card.Body className={"item-body"}>
				<div className={"cont-controler-item"}>
					<div className={"control-count-item"}>
						<button type="button" className={count === 1 || stock < 1 ? 'disabled' : ''} onClick={restCount}>-</button>
					</div>
					<div className={"cant-items-added"}>
						{count}
					</div>
					<div className={"control-count-item"}>
						<button type="button" className={count === stock || stock < 1 ? 'disabled' : ''} onClick={addCount}>+</button>
					</div>
				</div>
			</Card.Body>
			<Card.Footer className={"item-footer"}>

				<Button
					type="button"
					onClick={handleClick}
					className={stock < 1 ? 'disabled w-100' : 'w-100'}
					variant="outline-primary">Agregar al carrito</Button>
				<Button
					type="button"
					className={select ? 'w-100' : 'd-none'}
					variant="outline-primary">
					<NavLink to={'/cart'}>Terminar compra</NavLink> </Button>
			</Card.Footer>

		</Card>
	)
}