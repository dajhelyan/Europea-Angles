import React, { useState, useEffect } from "react";
import data from '../data/products'
import Item from './Item'
import { Row } from 'react-bootstrap';

export function ItemList({ items }) {
  // deberia pintar inicialmente todos los productos
  console.log('ite', items);
  return (
    <Row xs={1} md={2} xl={4} className="g-4 grid-content">
      {items.length === 0 ? '' : items.map((item) =>
        <Item
          data={item}
        />
      )}
    </Row>
  )

}
export default ItemList