import React, { useState, useEffect } from "react";
import data from '../data/products'
import Item from './Item'
import { CardColumns } from 'react-bootstrap';

export function ItemList({ items} ){
    // deberia pintar inicialmente todos los productos
    console.log('ite', items);
    return (
			<CardColumns>
          {items.length === 0 ? '':items[0].products.all.map((item) =>
            <Item
						data={item}
						/>
          )}
        </CardColumns>
    )

}
export default ItemList