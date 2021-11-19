import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemList from "../components/ItemList.jsx";
import { collection, query, getDocs, orderBy, where } from "firebase/firestore";
import { getFirestoreDb } from "../lib/firebaseConfig";

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
  const { id } = useParams("id");

  //Se ejecuta al inicio para cargar los items

  useEffect(() => {
    const db = getFirestoreDb();

    const getProductsDB = async () =>{
      let queryCollection = null;
      setLoaded(false);
      if (id !== undefined) {
        queryCollection = query(
          collection(db, "products"),
          where("category", "==", id)
        );
      } else {
        /*Agrega el where*/
        queryCollection = query(collection(db, "products"), orderBy("title"));
      }

      const querySnapshot = await getDocs(queryCollection);
      const aux = [];

      querySnapshot.forEach((doc) => {
        aux.push(doc.data());
      });

      setProducts(aux);
      setLoaded(true);
    };

    getProductsDB();
    
  }, [id]);

  return (
    <div style={styles}>
      <ItemList loaded={loaded} products={products} />
    </div>
  );
};

export default ItemListContainer;
