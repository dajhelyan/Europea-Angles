import React, { useState, useContext, createContext } from "react"
import { Card } from "react-bootstrap";
import dataJSON from '../data/products'

const CardContext = React.createContext();
export const useCardContext = () => useContext(CardContext);

function CardProvider({ children }) {
  const [cart, setCart] = useState([])

  function onAdd(itemToAdd, quantity) {
    console.log(quantity);
    const setquantity = quantity = 1;

    if (IsInCart(itemToAdd)) {
      const newItem = cart.map(item => {
        console.log(item, 'aqui');
        if (item.id === itemToAdd) {
          const result = item.quantity + setquantity;
          return { ...item, quantity: result };
        }
        return item;
      })
      setCart(newItem)
    } else {
      itemToAdd.quantity = setquantity;
      setCart([...cart, itemToAdd]);
    }
  }

  function removeItem(itemId) {

  }
  function clear() {

  }
  function IsInCart(id) {
    cart.find(item => item.id === id)
  }
  return (
    <CardContext.Provider value={{ cart, setCart, onAdd }}>
      {children}
    </CardContext.Provider>
  )
}
export default CardProvider;