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

  // Remover un item del cart por usando su id
  function removeItem(id) {
    let filtered = products.filter(function (reg) {
      return reg.id !== id;
    });

    setProducts(filtered);
  }

  // Remover todos los items
  function clear() {
    setProducts([]);
  }

  // Remover todos los items
  function calculateTotalUnits() {
    
    let total = 0;
    let item;

    for (item of products) {
      total += item.quantity;
    }

    console.log("CartContextProvider() totalUnits() ->", total);
    return(total);
  }

  // verifica si el producto esta en el carrito
  /*
  function isInCart(id) {
    
    let ret = products.some((reg) => reg.id === id)
    console.log("CartContextProvider -> isInCart("+id+") ", ret);
    return (ret);
  }
  */

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        addItem,
        clear,
        removeItem,
        fingById,
        calculateTotalUnits,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContextProvider, CartContext };
