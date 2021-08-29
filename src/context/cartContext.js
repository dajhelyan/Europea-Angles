import React, { useState, useContext, createContext } from "react"
import { Card } from "react-bootstrap";
import dataJSON from '../data/products'

const CardContext = React.createContext();
export const useCardContext = () => useContext(CardContext);

function CardProvider({ children }) {
  const [cart, setCart] = useState([])
  const [cant, setCant] = useState(1);

  function onAdd(itemToAdd, quantity = 1) {
    console.log(IsInCart(itemToAdd), 'cuan');
    // const setquantity = quantity = 1;
    console.log(cart, 'uyy');
    if (IsInCart(itemToAdd) === true) {
      console.log("entree", 'aqui');
      const newItem = cart.map((item) => {
        if (item.id === itemToAdd.id) {

          const result = item.quantity + quantity;

          return { ...item, quantity: result };
        }
        return item
      })
      console.log(newItem, 'poppo');
      setCart(newItem)
    } else {
      itemToAdd.quantity = quantity;
      console.log(itemToAdd, 'pop');
      setCart([...cart, itemToAdd]);
    }
  }

  function removeItem(itemId) {
    console.log(itemId, 'id');
    const result = cart.filter(itemtoAdd => itemtoAdd.id !== itemId.id)
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
        onAdd,
        removeItem,
        cant,
        setCant,
        clear
      }}>
      {children}
    </CardContext.Provider>
  )
}
export default CardProvider;