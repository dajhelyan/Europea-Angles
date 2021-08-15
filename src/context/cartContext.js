import React, { useState } from "react"
import dataJSON from '../data/products'

export const CardContext = React.createContext();

function CardProvider({children}){
  const [cart, setCart] = useState([])
 
  function addItem(item, quantity){
  // busqueda por id
  // cantidad
    return new Promise((resolve, reject) => {
      setTimeout(resolve(dataJSON), 2000);
    }).then(res => {
      let result = res[0].products.all.find((elemento) => {
        return elemento.id === item
      })
      let response = [...result, quantity]
      console.log(response, 'response');
      setCart(response)
    }).catch(res => {
      console.log(res)
    })

  }

  function removeItem(itemId){

  }
  function clear() {
    
  }
  function IsInCart(id) {
    
  }
  return (
    <CardContext.Provider value={{cart, setCart, addItem}}>
      {children}
    </CardContext.Provider>
  )
}
export default CardProvider;