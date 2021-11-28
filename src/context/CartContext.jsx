import React, { useState } from "react";

//Context
const CartContext = React.createContext({});

function CartContextProvider({ children }) {
  //Estado
  const [products, setProducts] = useState([]);

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

  // Remover un item del cart por su id
  function removeItem(id) {
    let item = fingById(id);

    if (item !== undefined) {
      let filtered = products.filter(function (reg) {
        return reg.id !== id;
      });

      setProducts(filtered);
    }
  }

  // Remover todos los items
  function clear() {
    setProducts([]);
  }

  // Actualiza la cantidad del item
  function updateItemCant(id, quantity) {
    let reg = fingById(id);

    if (reg !== undefined) {
      reg.quantity = quantity;

      /*Actualiza el estado*/
      setProducts([...products])
    }
  }

  function totalToPay() {
    let toPay = 0;
    let item = null;
    for (item of products) {
      toPay += item.quantity * item.price;
    }
    return toPay;
  }

  function totalItems() {
    let item = null;
    let total = 0;

    for (item of products) {
      total += item.quantity;
    }

    return total;
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
