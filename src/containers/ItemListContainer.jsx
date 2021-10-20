import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList.jsx";

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

  //Se ejecuta al inicio para cargar los items
  useEffect(() => {
    const productList = [
      {
        id: "1",
        title: "Cheescake Nueva York",
        description: "Torta de queso Philadelphia con frutos rojos",
        price: "2500.00",
        pictureUrl: "/cards/cheescake.png",
      },
      {
        id: "2",
        title: "Brownie",
        description: "Torta de chocolate semiamargo con dulce de leche y merengue italiano",
        price: "1900.00",
        pictureUrl: "/cards/brownie.png",
      },
      {
        id: "3",
        title: "Charlotte",
        description: "Postre de frutilla y frutos rojos",
        price: "2000.00",
        pictureUrl: "/cards/charlotte.png",
      },
      {
        id: "4",
        title: "Lemon Pie",
        description: "Tarta con base de masa frolla, rellena con crema de limón y merengue italiano",
        price: "1700.00",
        pictureUrl: "/cards/lemon_pie.png",
      },
      {
        id: "5",
        title: "Tiramisu",
        description: "Torta de queso mascarpone con café",
        price: "2100.00",
        pictureUrl: "/cards/tiramisu.png",
      },
      {
        id: "9",
        title: "Masas secas",
        description: "Masitas de manteca y vainilla",
        price: "900.00/kg",
        pictureUrl: "/cards/masas_secas.png",
      },
      {
        id: "10",
        title: "Donas",
        description: "Bollo de masa horneado/frito, con o sin relleno",
        price: "110.00/uni.",
        pictureUrl: "/cards/donas.png",
      },
    ];

    const obtenerProductos = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(productList);
      }, 2000);
    });

    obtenerProductos.then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <div style={styles}>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
