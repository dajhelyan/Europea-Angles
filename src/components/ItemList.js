import React, { useState, useEffect } from "react";
import data from '../data/products'
import Item from './Item'
import { CardColumns } from 'react-bootstrap';

export function ItemList({ items} ){
    // recibe la data para pintar la data
    console.log('ite', items);
    return (
			<CardColumns>
          {items === '' ? '':items.map((item) =>
            <Item
						name={item.title}
						img={item.pictureUrl}
						price={item.price}
						/>
          )}
        </CardColumns>
    )

}
export default ItemList