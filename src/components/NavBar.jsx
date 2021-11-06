import React from "react";
import CartWidget from "./CartWidget.jsx";
import Menu from "./Menu.jsx";
import { getCategoryList } from "../Data.js";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="w-full flex fixed top-0 bg-pink-400 p-2">
        <div className="flex-none">
          <div className="flex items-center text-pink-200 mr-6">
            <Link to="/">
            <img
              className="fill-current h-16 w-16 mr-2"
              src="/logo_transp.png"
              alt="logo"
            />
            </Link>
            <h1 className="font-semibold text-3xl tracking-tight">
              Classic Cakes
            </h1>
          </div>
        </div>

        <div className="block flex-grow justify-items-stretch mr-3">
          <div className="h-full flex justify-end items-center text-2xl">
            <Menu items={getCategoryList()}/>
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
