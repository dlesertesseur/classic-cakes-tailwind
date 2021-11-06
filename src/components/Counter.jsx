import React from "react";

const Counter = (props) => {

    const {cant, setCant} = props;

    function decrement(){
        if(cant > 1){
            setCant(cant-1);
        }
    }

    function increment(){
        setCant(cant+1);
    }

  return (
    <div className="flex flex-row h-10 w-30">
      <button
        className="
       bg-gray-300 text-gray-600 hover:text-gray-700 
       hover:bg-gray-400 h-full w-6 
       rounded-l-md cursor-pointer"
       onClick={decrement}
      >
        <p className="text-center font-semibold text-md">-</p>
      </button>

      <div
        className="
        grid grid-cols-1 place-content-center h-full
        items-center
        w-10
        bg-gray-300 
        justify-content-center"
      >
        <p
          className="text-center
        font-semibold
        text-md 
        focus:text-black 
        text-gray-700"
        >
          {cant}
        </p>
      </div>

      <button
        className="
      bg-gray-300 text-gray-600 hover:text-gray-700 
      hover:bg-gray-400 h-full w-6 rounded-r-md cursor-pointer"
      onClick={increment}
      >
        <p className="text-center font-semibold text-md">+</p>
      </button>
    </div>
  );
};

export default Counter;
