import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <>
      {totalItems() > 0 ? (
          <div className="flex items-center justify-end h-full mx-2">
            <Link to={"/cart"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fed7e2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </Link>
            <div>
              <span className="text-xs px-2 font-medium bg-red-500 text-white rounded py-0.5">
                {totalItems()}
              </span>
            </div>
          </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default CartWidget;
