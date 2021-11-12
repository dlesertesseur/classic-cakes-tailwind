import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router";
import ItemDetail from "../components/ItemDetail.jsx";
import { getProductList } from "../Data.js";

const ItemDetailContainer = () => {
  //Parametro
  const { id } = useParams("id");

  //Estado
  const [item, setItem] = useState([]);

  //Se ejecuta al inicio para cargar los items
  useEffect(() => {
    const obtenerItem = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(getProductList());
      }, 2000);
    });

    obtenerItem.then((result) => {
      const it = result.find((item) => {
        return item.id === id;
      });

      setItem(it);
    });
  }, [id]);

  return (
    <div>
      {item===undefined ? (
        <Redirect to="/404"/>
      ):(
        <ItemDetail item={item} />
      )}

    </div>
  );
};

export default ItemDetailContainer;
