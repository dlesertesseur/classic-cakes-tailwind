import React, { useState } from "react";

//Context
const CartContext = React.createContext({});

function CartContextProvider({ children }) {
  //Estado
  const [products, setProducts] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalToPay, setTotalToPay] = useState(0);

  // agregar cierta cantidad de un ítem al carrito
  function addItem(item, quantity) {
    if (item !== null) {
      let reg = fingById(item.id);

      if (reg === undefined) {
        const obj = {
          id: item.id,
          title: item.title,
          description: item.description,
          price: item.price,
          pictureUrl: item.pictureUrl,
          category: item.category,
          quantity: quantity,
        };
        setProducts([...products, obj]);
      } else {
        reg.quantity += quantity;
        setProducts([...products]);
      }

      setTotalItems(totalItems + quantity);
      setTotalToPay(totalToPay + (quantity * item.price))
    }
  }

  //Obtener un item por id
  function fingById(id) {
    let ret = undefined;

    if (products?.length > 0) {
      ret = products.find(function (reg) {
        return reg.id === id;
      });
    }
    return ret;
  }

  // Remover un item del cart por usando su id
  function removeItem(id) {

    let item = fingById(id);

    if(item !== undefined) {

      let filtered = products.filter(function (reg) {
        return reg.id !== id;
      });
      
      setProducts(filtered);

      /*Cantidad de items*/
      setTotalItems(totalItems - item.quantity);

      /*Calcula el total a pagar*/
      let toPay = 0;
      for (item of filtered) {
        toPay += (item.quantity * item.price);
      }

      setTotalToPay(toPay);
    }
  }

  // Remover todos los items
  function clear() {
    setProducts([]);
    setTotalItems(0);
    setTotalToPay(0);
  }

  // Remover todos los items
  function updateItemCant(id, quantity) {
    let reg = fingById(id);

    if (reg !== undefined) {
      let total = 0;
      let toPay = 0;
      let item;

      reg.quantity = quantity;

      for (item of products) {
        total += item.quantity;
        toPay += (item.quantity * item.price);
      }

      setTotalItems(total);
      setTotalToPay(toPay);
    }
  }

  return (
    <CartContext.Provider
      value={{
        products,
        totalItems,
        totalToPay,
        setProducts,
        addItem,
        clear,
        removeItem,
        fingById,
        updateItemCant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
