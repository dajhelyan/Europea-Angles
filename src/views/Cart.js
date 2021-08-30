import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import dataJSON from '../data/products'
import CardItem from "../components/cardItem";
import { useCardContext } from "../context/cartContext";

export function Cart() {
	// traer prductos de cart
	const { cart } = useCardContext()
	console.log(cart, 'cart.js');
	const calculateTotalItems = () => cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
	const calculateTotalPrice = () => cart.reduce((accumulator, item) => accumulator + item.price * item.quantity, 0);
	return (
		<>
			<Container className={"t-start fluid"}>
				<Row>
					<Col md={8}>
						<Row>
							<Col >
								<Container className={"header-container t-title mt-2 fluid"}>
									<span className={"title"}>{`Bolsa de compras`}</span>
								</Container>
							</Col>
						</Row>
						<Row>
							<Container className={"mb-2 t-start"}>

								{/* <Row>
							<Col><NavLink
                  to="/cart/order"
                  // className={select ? 'w-100' : 'd-none'}
                  variant="outline-primary"
                  // onClick={() => { removeItem(data.id) }}
                >
                  Comprar
                </NavLink></Col>
						</Row> */}
							</Container>
							{
								cart.map((item) => {
									return (
										<Col>

											<CardItem data={item} />
										</Col>

									)
								})
							}
						</Row>
					</Col>
					<Col md={4}>
						<Container className={"sec-order mt-2 bg-gray"}>
							<Col md={12}>
								<h4>Resumen de compra</h4>
								<Container className="cart-t">
									<span>
										Sub-total productos
									</span>
									<span>
										{`$ ${calculateTotalPrice()}`}
									</span>
								</Container>
							</Col>
						</Container>
					</Col>
				</Row>
			</Container>

		</>
	)
}
export default Cart;