import React, { useState, useEffect } from "react";
import { Card, Button, ListGroup } from 'react-bootstrap'

export const Item = ({ name, img, price }) => {
  const stock = 5;

	const [count, setCount] = useState(1)

	const addCount = () => {
		setCount(count + 1)

	}
	const restCount = () => {
		setCount(count - 1)

	}
  const onAdd =(count) => {alert(count + "Producto(s) agregados" )}

	useEffect(() => {
	}, [count]);

	return (
		<Card className={"card-item"} style={{ width: '18rem'}}>
			<Card.Header className={"item-header"}>{name}</Card.Header>
            <Card.Img variant="top" src={img}  className={'cover-img'} />
			<Card.Body className={"item-body"}>
				<div className={"cont-controler-item"}>
					<div className={"control-count-item"}>
						<button type="button" className={count === 1 || stock < 1 ? 'disabled' : ''} onClick={restCount}>-</button>
					</div>
					<div className={"cant-items-added"}>
						{count}
					</div>
					<div className={"control-count-item"}>
						<button type="button" className={count === stock || stock < 1  ? 'disabled' : ''} onClick={addCount}>+</button>
					</div>
				</div>
			</Card.Body>
			<Card.Footer className={"item-footer"}>
				<Button type="button" onClick={() => {onAdd(count)}} className={stock < 1 ? 'disabled w-100' : 'w-100'} variant="outline-primary">Agregar al carrito</Button>
			</Card.Footer>
		</Card>
	)
}
export default Item;