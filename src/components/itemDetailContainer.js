import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'
import { ItemCount } from './ItemCount';
import ItemList from './ItemList'
import dataJSON from '../data/products'
import { ItemDetail } from "./ItemDetail";
const product = {

  id: "0001",
  title: "vestido negro basico",
  description: "Vestido negro con manga 3/4",
  price: "120",
  pictureUrl: "https://i.pinimg.com/474x/68/6d/3b/686d3b1fdd69b393a2497f2e162e7d22.jpg"

}

const getItem = (data) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve(data), 2000);
  })
}

export function ItemDetailContainer() {

  const [products, setProducts] = useState({})

  useEffect(() => {
    getItem(product)
      .then(res => {
        console.log(res, 'gere');
        setProducts(res)
      }).catch(res => {
        console.log(res)
      })
  }, [])

  return (
    <Card>
      <Card.Body>
        <ItemDetail name={products.title}
          img={products.pictureUrl}
          price={products.price}
          name={products.description} />
      </Card.Body>
    </Card>
  )
}