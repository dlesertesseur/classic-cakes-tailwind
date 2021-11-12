import React from "react";
import { Link } from "react-router-dom";
//import { Redirect } from 'react-router'

const CartPage = () => {
  return (
    <div className="w-full h-full mt-24">
      <div className="flex flex-row items-center justify-center p-4">
        <h1>CART</h1>
      </div>

      <div className="flex flex-row items-center justify-center p-4">
        <Link
          to="/"
          className="bg-pink-300
          opacity-75 
          hover:opacity-100 
          text-pink-900 
          hover:text-pink-900 
          rounded-md px-10 py-2 
          font-semibold"
        >
          Ir a inicio
        </Link>
      </div>
    </div>
  );
};

export default CartPage;
