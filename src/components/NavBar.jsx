import React, { useState, useEffect } from "react";
import CartWidget from "./CartWidget.jsx";
import Menu from "./Menu.jsx";
import { Link } from "react-router-dom";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { getFirestoreDb } from "../lib/firebaseConfig";

const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestoreDb();
    const getCategoriesDB = async () => {
      
      const queryCollection = query(collection(db, "categories"), orderBy("text"));
      const querySnapshot = await getDocs(queryCollection);
      const aux = [];
      
      querySnapshot.forEach((doc) => {
        aux.push(doc.data());
      });

      setCategories(aux);
    };
    getCategoriesDB();
  }, []);

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
            <h1 className="hidden sm:block font-semibold text-3xl tracking-tight">
              Classic Cakes
            </h1>
          </div>
        </div>

        <div className="block flex-grow justify-items-stretch mr-3">
          <div className="h-full flex justify-end items-center text-2xl">
            <Menu items={categories} />
            <CartWidget />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
