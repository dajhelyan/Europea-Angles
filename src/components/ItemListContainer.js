import React, { useState, useEffect, useContext } from "react";
import { Card } from 'react-bootstrap';
import { ItemCount } from './ItemCount';
import ItemList from './ItemList';
import dataJSON from '../data/products';
import { useParams } from "react-router-dom";

import { getCollection, getItemsCategory } from "../firebase/firestore";

export function ItemListContainer() {
	// aca hacer promesa 
	const [data, setData] = useState([])

	const categoryId = useParams().id;
	console.log(categoryId, 'here')

	useEffect(() => {
		// si no se busca una categoria carga todos items
		if (categoryId) {
			getItemsCategory("items", "categoryId", categoryId)
				.then((querySnapshot) => {
					if (querySnapshot.size === 0) {
						console.log('no result');
					} else {
						setData(querySnapshot.docs.map(doc => {
							if (doc.data().stock > 0) {
								return ({ id: doc.id, ...doc.data() })
							}
						}))
					}
				})
				.catch((error) => {
					console.log("A ocurrido un error", error);
				});
		} else {
			getCollection("items")
				.then((querySnapshot) => {
					if (querySnapshot.size === 0) {
						console.log('no result')
					} else {
						setData(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
					}
				}).catch(error => {
					console.log("A ocurrido un error", error);
				})
		}

	}, [categoryId])

	return (
		<Card>
			<Card.Body>
				{/* <ItemCount stock={5} initial={1} onAdd={(count) => {alert(count + "Producto(s) agregados" )}}/> */}
				<ItemList items={data} />
			</Card.Body>
		</Card>
	)
}