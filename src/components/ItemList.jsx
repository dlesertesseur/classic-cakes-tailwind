import React from "react";
import Item from "./Item.jsx";

const ItemList = (props) => {
  return (
    <div className="flex justify-around mt-28 lg:mr-24 lg:ml-24">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 m-6">
        {props.products.map((product) => (
          <Item product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
