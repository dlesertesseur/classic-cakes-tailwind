import React from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Counter from "./Counter";

const ItemDetail = (props) => {
  const { item } = props;

  const [cant, setCant] = useState(1);
  const history = useHistory();

  const goToPreviousPath = () => {
    history.goBack();
  };

  const addToCart = () => {
    console.log("cant:" + cant);
  };
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-pink-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
        <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div className="relative">
                {item.length === 0 ? (
                  <div className="animate-pulse w-full h-96 bg-gray-200 rounded-md" />
                ) : (
                  <img
                    src={item.pictureUrl}
                    className="w-full relative z-10 rounded-md"
                    alt=""
                  />
                )}
                <div className="absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                {item.length === 0 ? (
                  <div className="animate-pulse">
                    <div className=" w-full h-10 bg-gray-200 mb-5 rounded-md"></div>
                    <div className=" w-full h-10 bg-gray-200 rounded-md"></div>
                  </div>
                ) : (
                  <>
                    <h1 className="font-bold uppercase text-2xl mb-5">
                      {item.title}
                    </h1>
                    <p className="text-sm">{item.description}</p>
                  </>
                )}
              </div>
              <div>
                <div className="inline-block align-bottom mr-5">
                  {item.length === 0 ? (
                    <div className="animate-pulse w-48 h-10 bg-gray-200 rounded-md"></div>
                  ) : (
                    <>
                      <span className="text-2xl leading-none align-baseline">
                        $
                      </span>
                      <span className="font-bold text-5xl leading-none align-baseline">
                        {item.price}
                      </span>
                    </>
                  )}
                </div>

                <div className="w-64 flex flex-col">
                  <div className="mt-2">
                    <Counter cant={cant} setCant={setCant} />
                  </div>

                  <button
                    className="bg-pink-300 opacity-75 
                  hover:opacity-100 
                  text-pink-900 
                  hover:text-pink-900 
                  rounded-md px-10 py-2 
                  font-semibold mt-4"
                  >
                    COMPRAR AHORA
                  </button>

                  <button
                    onClick={addToCart}
                    className="bg-pink-300 opacity-75 hover:opacity-100 text-pink-900 hover:text-pink-900 rounded-md px-10 py-2 font-semibold mt-2"
                  >
                    AGREGAR AL CARRITO
                  </button>

                  <button
                    onClick={goToPreviousPath}
                    className="bg-purple-300 opacity-75 hover:opacity-100 text-purple-900 hover:text-purple-900 rounded-md px-10 py-2 font-semibold mt-4"
                  >
                    VOLVER A CATEGORIA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
