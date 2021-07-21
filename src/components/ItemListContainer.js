import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'
import { ItemCount } from './ItemCount';
import ItemList from './ItemList'
import dataJSON from '../data/products'
import { useParams } from "react-router-dom";

export function ItemListContainer() {
	// aca hacer promesa 
	const [data, setData] = useState([])

	const categoryId = useParams().id;
	console.log(categoryId, 'here')

	useEffect(() => {

		new Promise((resolve, reject) => {
			setTimeout(resolve(dataJSON), 3000);
		})
			.then(res => {
				// resvisar error en estuctura de data categories
				if (categoryId) {
					let initial;
					let respon = Object.entries(res[0].categories).map((ele) => {
						if (ele[0] === categoryId) {
							return initial = ele[1];
						}
					})
					
				console.log(respon, 'ele')
					let result = initial;
					console.log(result, 'result');
					setData(result)
				} else {
					let result2 = res[0].products.all;
					setData(result2)
				}

			}).catch(res => {
				console.log(res)
			})
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