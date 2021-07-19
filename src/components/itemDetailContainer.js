import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'
import { ItemCount } from './ItemCount';
import ItemList from './ItemList'
import dataJSON from '../data/products'
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";

export function ItemDetailContainer() {

  const [products, setProducts] = useState({})

  const id = useParams().id;

  const getItem = (data) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve(data), 2000);
    }).then(res => {
      let result = res[0].products.all.find((elemento) => {
        return elemento.id === id
      })
      console.log(result, 'gere');
      setProducts(result)
    }).catch(res => {
      console.log(res)
    })

  }


  useEffect(() => {
    getItem(dataJSON)
  }, [])

  return (
    <Card>
      <Card.Body>
        <ItemDetail data={products} />
      </Card.Body>
    </Card>
  )
}