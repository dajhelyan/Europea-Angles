import React, { useState, useContext, createContext } from "react"
import { Card } from "react-bootstrap";
import dataJSON from '../data/products'

const CardContext = React.createContext();
export const useCardContext = () => useContext(CardContext);

function CardProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cant, setCant] = useState(1);

  function addItem(itemToAdd, quantity = 1) {
    console.log(itemToAdd);
    if (IsInCart(itemToAdd) === true) {
      console.log("entree", 'aqui');
      const newItem = cart.map((item) => {
        if (item.id === itemToAdd.id) {
          const result = item.quantity + quantity;
          // let subTotal = item.price * result;
          // console.log(quantity);
          let stock = item.stock - result
          return { ...item, quantity: result, stock: stock };
        }
        return item
      })
      setCart(newItem)
    } else {
      itemToAdd.quantity = quantity;
      itemToAdd.stock = itemToAdd.stock - quantity;
      console.log(itemToAdd, 'pop');
      setCart([...cart, itemToAdd]);
    }
  }

  function updateCant(itemToAdd, cantidad = 1) {
    if (IsInCart(itemToAdd) === true && cantidad >=1) {
      const newCant = cart.map((item) => {
        if (item.id === itemToAdd.id) {
          console.log(cantidad, "entree");
          const result = item.quantity++;
          // let stock = item.stock - result
          return { ...item, quantity: result};
        }
        return item
      })
      setCart(newCant);
    } else {
      removeItem(itemToAdd.id);
    }
  }

  function removeItem(itemId) {
    console.log(itemId, 'id');
    const result = cart.filter(itemtoAdd => itemtoAdd.id !== itemId)
    setCart(result)
  }
  function clear() {
    setCart([])
  }
  function IsInCart(itemToAdd) {
    return cart.some(item => item.id === itemToAdd.id)
  }
  return (
    <CardContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        updateCant,
        removeItem,
        cant,
        setCant,
        clear,
      }}>
      {children}
    </CardContext.Provider>
  )
}
export default CardProvider;