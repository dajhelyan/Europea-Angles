import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import dataJSON from '../data/products'
export function Cart() {
	// aca hacer promesa 
	const [data, setData] = useState([])
	const [loading, setLoading] = useState()

	useEffect(() => {
		new Promise((resolve, reject) => {
			setTimeout(resolve(dataJSON), 3000);
		}).then(res => {
			console.log(res, 'gere');
			setData(res)
		}).catch(res => {
			console.log(res)
		})
	}, [])

	return (
		<Card>
			<Card.Body>
				<Card style={{ width: '18rem' }}>
					{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
					<Card.Body>
						<Card.Title>Estamos trabajando</Card.Title>
						<Card.Text>
							
						</Card.Text>
						<Button variant="primary"><NavLink to="/" variant="primary">Ver productos</NavLink></Button>
					</Card.Body>
				</Card>
				{/* <ItemCount stock={5} initial={1} onAdd={(count) => {alert(count + "Producto(s) agregados" )}}/> */}
				{/* <ItemList items={data}/> */}
			</Card.Body>
		</Card>
	)
}
export default Cart;