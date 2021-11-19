import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCounter from "./ItemCounter";

const ItemDetail = (props) => {
  const { item } = props;

  const [cant, setCant] = useState(1);
  const [itemAdded, setItemAdded] = useState(false);

  const { addItem } = useContext(CartContext);

  const history = useHistory();

  const goToPreviousPath = () => {
    history.goBack();
  };

  const addToCart = () => {
    addItem(item, cant);
    setItemAdded(true);
  };

  function loadingData() {
    return (
      <div className="flex flex-col sm:flex-row justify-center items-center w-screen mt-24">
        <div className="animate-pulse flex m-5 max-w-sm">
          <div className="rounded-md w-64 h-64 bg-gray-200" />
        </div>
        
        <div className="felx flex-col max-w-sm">
          <div className="animate-pulse w-64 h-10 bg-gray-200 mb-2 rounded-md" />
          <div className="animate-pulse w-64 h-10 bg-gray-200 mb-2 rounded-md" />
          <div className="animate-pulse w-64 h-10 bg-gray-200 mb-2 rounded-md" />
          <div className="animate-pulse w-64 h-10 bg-gray-200 mb-2 rounded-md" />
        </div>
      </div>
    );
  }

  function itemData() {
    return (
      <div className="flex flex-col sm:flex-row justify-center items-center w-screen mt-24">
        <div className="flex m-5 max-w-sm">
          <img src={item.pictureUrl} className="rounded-md" alt="" />
        </div>
        <div className="px-10">
          <div className="mb-10">
            <>
              <h1 className="font-bold uppercase text-2xl mb-5">
                {item.title}
              </h1>
              <p className="text-sm">{item.description}</p>
            </>
          </div>
          <div>
            <div className="inline-block align-bottom mr-5">
              <>
                <span className="text-2xl leading-none align-baseline">$</span>
                <span className="font-bold text-5xl leading-none align-baseline">
                  {item.price}
                </span>
              </>
            </div>

            <div className="flex flex-col">
              {!itemAdded ? (
                <div>
                  <div className="mt-2">
                    <ItemCounter cant={cant} setCant={setCant} />
                  </div>

                  <button
                    onClick={addToCart}
                    className="w-full sm:w-64 bg-pink-300 opacity-75 hover:opacity-100 text-pink-900 hover:text-pink-900 rounded-md px-10 py-2 font-semibold mt-2"
                  >
                    AGREGAR AL CARRITO
                  </button>
                </div>
              ) : (
                <Link
                  to={"/cart"}
                  className="w-full sm:w-64 bg-pink-300 opacity-75 hover:opacity-100 text-center text-pink-900 hover:text-pink-900 rounded-md px-10 py-2 font-semibold mt-4"
                >
                  TERMINAR COMPAR
                </Link>
              )}

              <button
                onClick={goToPreviousPath}
                className="w-full sm:w-64 bg-purple-300 hover:opacity-100 text-purple-900 hover:text-purple-900 rounded-md px-10 py-2 font-semibold mt-4 mb-3"
              >
                VOLVER A CATEGORIA
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-w-screen">
      <div>{item.length === 0 ? loadingData() : itemData()}</div>
    </div>
  );
};

export default ItemDetail;
