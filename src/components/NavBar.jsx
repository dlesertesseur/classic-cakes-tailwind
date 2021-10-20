import React from "react";
import CartWidget from "./CartWidget.jsx";

const NavBar = () => {
  return (
    <div>
      <nav className="w-full flex fixed top-0 bg-pink-400 p-2">
        <div className="flex-none">
          <div className="flex items-center text-pink-200 mr-6">
            <img
              className="fill-current h-16 w-16 mr-2"
              src="/logo_transp.png"
              alt="logo"
            />
            <h1 className="font-semibold text-3xl tracking-tight">
              Classic Cakes
            </h1>
          </div>
        </div>

        <div className="hidden md:block flex-grow justify-items-stretch mr-6">
          <div className="h-full flex justify-end items-center text-2xl">
            <a
              href="#productos"
              className="text-pink-200 hover:text-white mr-4"
            >
              Productos
            </a>
            <a
              href="#historia"
              className="text-pink-200 hover:text-white mr-4"
            >
              Historia
            </a>
            <a
              href="#geleria"
              className="text-pink-200 hover:text-white mr-4"
            >
              Galeria
            </a>
            <a
              href="#contacto"
              className="text-pink-200 hover:text-white mr-4"
            >
              Contanto
            </a>
          </div>
        </div>

        <div className="flex-grow md:flex-none">
          <CartWidget />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
