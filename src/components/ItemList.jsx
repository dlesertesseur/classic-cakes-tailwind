import React from "react";
import Item from "./Item.jsx";
import MessageBox from "./MessageBox.jsx";

const ItemList = (props) => {
  const { loaded, products } = props;
  return (
    <>
      {loaded ? (
        <>
          {products?.length > 0 ? (
            <div className="flex justify-around mt-28 lg:mr-24 lg:ml-24">
              <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-6">
                {products?.map((product) => (
                  <Item item={product} key={product.id} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex mt-24 flex-col items-center justify-items-center w-screen">
              <div className="w-1/3">
                <MessageBox
                  title="Aviso"
                  text="No existen productos para esta categoria"
                />
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="w-screen h-screen flex flex-row place-items-center justify-center">
          <div className="w-16 h-16 border-b-4 border-purple-500 rounded-full animate-spin"></div>
        </div>
      )}
    </>
  );
};

export default ItemList;
