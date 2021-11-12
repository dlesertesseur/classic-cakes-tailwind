import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { item } = props;

  return (
    <div className="bg-gray-100 border-gray-200 border rounded-lg mb-6">
      <div className="md:w-256 sm:w-512">
        {item?.length === 0 ? (
          <div className="rounded-t-lg w-full h-64 bg-gray-400"/>
        ) : (
          <img className="rounded-t-lg " src={item.pictureUrl} alt="foto" />
        )}
      </div>
      <div className="flex flex-col p-2">
        <div className="text-xl text-black mb-2">{item.title}</div>
        <div className="text-xs h-8" >{item.description}</div>

        <div className="grid grid-cols-2 mt-2">
          <div className="flex items-center text-xl text-gray-800">
            ${item.price}
          </div>
          <div className="flex justify-end text-2xl sm:text-xs">
            <Link to={`/item/${item.id}`}>
              <button className="bg-purple-600 hover:bg-purple-700 text-white py-1 px-2 rounded inline-flex items-center">
                Ver mas
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
