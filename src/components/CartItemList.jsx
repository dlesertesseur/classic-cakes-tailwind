import React from "react";
import CartItem from "./CartItem.jsx";

const CartItemList = (props) => {
  const { products } = props;
  return (
    <div className="">
      {/*Lista de productos*/}
      <div className="flex flex-col w-full">
          {products?.map((product) => (
            <CartItem item={product} key={"cartID-" + product.id} />
          ))}
      </div>
    </div>
  );
};

export default CartItemList;
