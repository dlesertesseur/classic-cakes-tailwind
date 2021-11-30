import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuIcon } from "@heroicons/react/solid";

const Menu = (props) => {
  const [drop, setDrop] = useState(false);
  const { items } = props;

  const onDrop = () => {
    setDrop(!drop);
  };

  const st = `absolute ${drop ? "" : "hidden"} text-gray-700 mt-2 right-0 mr-2 md:ml-2`;

  function closeMenu() {
    setDrop(false);
  }

  return (
    <div>
      <button
        className="hidden md:block bg-pink-400 text-pink-200 hover:bg-pink-500 font-semibold py-2 px-4 rounded"
        onClick={onDrop}
      >
        <span>Productos</span>
      </button>

      <div className="md:hidden bg-pink-400 text-pink-200 hover:bg-pink-500 font-semibold py-2 px-4 rounded">
          <MenuIcon className=" h-8 w-8 text-pink-200" onClick={onDrop} />
      </div>

      <ul className={st}>
        {items.map((item, idx) => {
          return (
            <li key={idx}>
              <Link
                className="text-sm bg-pink-300 text-white hover:text-pink-400 py-2 px-4 block whitespace-no-wrap"
                to={item.path}
                onClick={closeMenu}
              >
                <b>{item.text}</b>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
