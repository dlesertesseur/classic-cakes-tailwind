import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router";
import ItemDetail from "../components/ItemDetail.jsx";
import { getFirestoreDb } from "../lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  //Parametro
  const { id } = useParams("id");

  //Estado
  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestoreDb();
    const getItemDB = async () => {
      if (id !== undefined) {
        const snap = await getDoc(doc(db, "products", id));

        if (snap.exists()) {
          setItem(snap.data());
        } else {
          setItem(undefined);
        }
      }
    };
    getItemDB();
  }, [id]);

  return (
    <div>
      {item === undefined ? <Redirect to="/404" /> : <ItemDetail item={item} />}
    </div>
  );
};

export default ItemDetailContainer;
