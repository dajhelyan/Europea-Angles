import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'
import { ItemCount } from './ItemCount';
import ItemList from './ItemList'
import dataJSON from '../data/products'
export function ItemListContainer() {
	// aca hacer promesa 
	const [data, setData]= useState([])
	const[loading, setLoading] = useState()

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
				{/* <ItemCount stock={5} initial={1} onAdd={(count) => {alert(count + "Producto(s) agregados" )}}/> */}
				<ItemList items={data}/>
			</Card.Body>
		</Card>
    )
}