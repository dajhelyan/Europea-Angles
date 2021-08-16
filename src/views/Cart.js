import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import dataJSON from '../data/products'
import CardItem from "../components/cardItem";
import { useCardContext } from "../context/cartContext";
export function Cart() {
	// traer prductos de cart
	const { cart } = useCardContext()


	const [totalOfProducts, setTotalOfProducts] = useState('')
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
		<>
			<Card>
				<Card.Body>
					<Card style={{ width: '18rem' }}>
						<div className={"header-container"}>
							<span className={"title"}>{`Bolsa de compras (${totalOfProducts})productos`}</span>
						</div>
					</Card>
					<CardItem data={cart} />
					{/* <ItemCount stock={5} initial={1} onAdd={(count) => {alert(count + "Producto(s) agregados" )}}/> */}
					{/* <ItemList items={data}/> */}
				</Card.Body>
			</Card>

			<CardItem />
		</>
	)
}
export default Cart;