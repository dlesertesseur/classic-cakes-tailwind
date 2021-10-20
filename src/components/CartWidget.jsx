import React from "react";

const CartWidget = () => {
  return (
    <div className="flex items-center justify-end h-full mx-2">
      <a href="cart">
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
      </a>
    </div>
  );
};

export default CartWidget;
