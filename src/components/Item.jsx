import React from "react";

const Item = (props) => {

  function verMas(){
    console.log("onClick() -> verMas()")
  }
  
  return (
    <div className="bg-gray-100 border-gray-200 border rounded-lg">
      <div className="md:w-256 sm:w-512">
        <a href="#vermas"> 
          <img
            className="rounded-t-lg "
            src={props.product.pictureUrl}
            alt="foto"
          />
        </a>
      </div>
      <div className="p-2">
        <div className="text-xl text-black mb-2">{props.product.title}</div>
        <div className="text-xs">{props.product.description}</div>

        <div className="grid grid-cols-2 mt-2">
          <div className="flex items-center text-2xl sm:text-xs text-gray-800">
            ${props.product.price}
          </div>
          <div className="flex justify-end text-2xl sm:text-xs">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-1 px-2 rounded inline-flex items-center" onClick={verMas}>
              Ver mas
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
