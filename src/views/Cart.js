import React, { useState, useEffect } from "react";
import { Card, Button } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import dataJSON from '../data/products'
import CardItem from "../components/cardItem";
import { useCardContext } from "../context/cartContext";

export function Cart() {
	// traer prductos de cart
	const { cart } = useCardContext()
	console.log(cart, 'cart.js');

	return (
		<>
			<Card>
				<Card.Body>
					<Card style={{ width: '18rem' }}>
						<div className={"header-container"}>
							<span className={"title"}>{`Bolsa de compras`}</span>
						</div>
					</Card>
					{
						cart.map((item) => {
							return (
								<CardItem data={item} />
							)
						})
					}
				</Card.Body>
			</Card>
		</>
	)
}
export default Cart;