import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ItemCounter from "./ItemCounter";

const CartItem = (props) => {
  const { item } = props;
  const { removeItem, updateItemCant } = useContext(CartContext);

  const [cant, setCant] = useState(item.quantity);

  function eliminarItenDeCart() {
    removeItem(item.id);
  }

  function asignarCantidad(cantidad) {
    item.quantity = cantidad;
    setCant(item.quantity);
    updateItemCant(item.id, item.quantity);
  }

  function data() {
    return (
      <div className="flex flex-col sm:flex-row justify-center items-center w-full">
        <div className="flex flex-row m-3">
          <div className="h-48 w-48 rounded-lg bg-gray-200">
            {item?.length === 0 ? (
              <div />
            ) : (
              <img
                className="rounded-l-lg w-full h-full"
                src={item.pictureUrl}
                alt="foto"
              />
            )}
          </div>
          <div className="h-48 w-40 sm:w-64 p-4 rounded-r-lg bg-gray-100 border-gray-200 border-2">
            <div className="flex items-center text-xl te text-gray-800">
              {item.title}
            </div>

            <div className="flex items-center text-xl text-gray-800">
              ${item.price}
            </div>

            <div className="mt-2">
              <ItemCounter cant={cant} setCant={asignarCantidad} />
            </div>

            <div className="flex items-end h-14 text-xs mt-2">
              <button
                className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded inline-flex items-center"
                onClick={eliminarItenDeCart}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return data();
};

export default CartItem;
