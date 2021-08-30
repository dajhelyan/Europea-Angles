import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'
import { ItemCount } from './ItemCount';
import ItemList from './ItemList'
import dataJSON from '../data/products'
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, getCollection } from "../firebase/firestore";
export function ItemDetailContainer() {

  const [products, setProducts] = useState({})

  const id = useParams().id;

  useEffect(() => {
    // hace get de un producto
    getCollection("items")
      .then((querySnapshot) => {
        if (querySnapshot.size !== 0) {
          querySnapshot.forEach((doc) => {
            if (doc.data().id === id) {
              setProducts({ id: doc.id, ...doc.data() })
            }
          });
        } 
      }).catch(error => {
        console.log("A ocurrido un error", error);
      })

  }, [id])

  return (
    <Card>
      <Card.Body>
        <ItemDetail data={products} />
      </Card.Body>
    </Card>
  )
}