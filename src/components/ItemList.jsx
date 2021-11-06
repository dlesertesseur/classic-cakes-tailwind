import React from "react";
import Item from "./Item.jsx";

const ItemList = (props) => {
  const { loaded, products } = props;
  return (
    <>
      {loaded ? (
        <>
          {/*Lista de productos*/}
          {products?.length > 0 ? (
            <div className="flex justify-around mt-28 lg:mr-24 lg:ml-24">
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-6">
                {products?.map((product) => (
                  <Item item={product} key={product.id} />
                ))}
              </div>
            </div>
          ) : (
            <>
              {/*No existen productos*/}
              <div className="w-screen h-screen flex flex-row place-items-center justify-center text-sm">
                <div role="alert">
                  <div class="bg-pink-500 text-white font-bold rounded-t px-4 py-2">
                    Aviso
                  </div>
                  <div class="border border-t-0 border-pink-400 rounded-b bg-pink-100 px-4 py-3 text-pink-700">
                    <p>No existen productos para esta categoria</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {/*Loading*/}
          <div className="w-screen h-screen flex flex-row place-items-center justify-center">
            <div className="w-16 h-16 border-b-4 border-purple-500 rounded-full animate-spin"></div>
          </div>
        </>
      )}
    </>
  );
};

export default ItemList;
