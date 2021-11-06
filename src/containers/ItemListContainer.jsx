import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../components/ItemList.jsx";

import { getProductList } from "../Data.js";

const ItemListContainer = () => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontSize: "2rem",
    fontFamily: "Helvetica",
    alignItems: "center",
    height: "100%",
  };

  //Estado
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  //Parametro
  const {id} = useParams('id');

  //Se ejecuta al inicio para cargar los items
  useEffect(() => {
    const obtenerProductos = new Promise((resolve, reject) => {
      setLoaded(false);
      setTimeout(function () {
        resolve(getProductList());
      }, 2000);
    });

    obtenerProductos.then((result) => {
      if(id != null){
        const filtered = result?.filter(item => {
          return(item.category === id)
        });
        setProducts(filtered);
      }
      else{
        setProducts(result);
      }
      setLoaded(true);
    });
  }, [id]);

  return (
    <div style={styles}>
      <ItemList loaded = {loaded} products={products} />
    </div>
  );
};

export default ItemListContainer;
