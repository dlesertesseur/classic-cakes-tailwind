import React, { useContext } from "react";
import { useHistory } from "react-router";
import { CartContext } from "../context/CartContext";
import { getFirestoreDb } from "../lib/firebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import CartItemList from "../components/CartItemList";
import MessageBox from "../components/MessageBox";
import OrderDlg from "../components/OrderDlg";
import Swal from "sweetalert2";

const Cart = () => {
  const history = useHistory();

  const [showModal, setShowModal] = React.useState(false);
  
  //Toma los productos del carrito
  const { totalToPay, products, clear } = useContext(CartContext);

  function createBoughtItemsList() {
    const ret = products.map((product) => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      };
    });
    return ret;
  }

  function onCreateOrder(lastName, name, email, phone) {
    const userInfo = {
      lastName: lastName,
      name: name,
      email: email,
      phone: phone,
    };

    const boughtItems = createBoughtItemsList();

    const toSave = {
      buyer: userInfo,
      items: boughtItems,
      total: totalToPay(),
      oderDate: Timestamp.fromDate(new Date()),
    };

    const save = async () => {
      const db = getFirestoreDb();
      const docRef = await addDoc(collection(db, "orders"), toSave);
      return(docRef);
    };

    save()
      .then((ref) => {
        setShowModal(false);
        Swal.fire({
          title: "Su order fue procesada con exito",
          text: `Codigo: ${ref.id}`,
          icon: "success",
          confirmButtonText: "Cerrar",
        }).then((result) => {
          clear();
          history.push("/");
        });
      })
      .catch((error) => {

        setShowModal(false);

        Swal.fire({
          title: "ERROR",
          text: error,
          icon: "error",
          confirmButtonText: "Cerrar",
        });
      });
  }

  function onClear() {
    clear();
  }

  function onBack() {
    history.goBack();
  }

  return (
    <div className="flex flex-1 h-screen justify-items-center">
      <OrderDlg
        showModal={showModal}
        setShowModal={setShowModal}
        onCreateOrder={onCreateOrder}
      />

      {products.length > 0 ? (
        <div className="flex flex-col w-full mt-20">
          <div className="flex flex-roe items-center justify-center h-12 m-2 font-semibold text-lg text-purple-500 bg-purple-100 rounded-lg">
            <div className="flex items-center h-full text-center">TOTAL</div>
            <div className="flex items-center h-full mx-3">${totalToPay()}</div>
          </div>

          <div className="overflow-y-scroll h-full">
            <CartItemList products={products} />
          </div>

          <div className="flex flex-row items-center h-1/4 m-2">
            <div className="flex flex-col gap-3 items-center justify-center h-full w-full">
              <button
                onClick={() => setShowModal(true)}
                className="bg-pink-300 opacity-75 hover:opacity-100 text-pink-900 hover:text-pink-900 rounded-md sm:w-40 w-full py-2 font-semibold"
              >
                Crear orden
              </button>

              <button
                onClick={onClear}
                className="bg-purple-300 opacity-75 hover:opacity-100 text-purple-900 hover:text-purple-900 rounded-md sm:w-40 w-full py-2 font-semibold"
              >
                Vaciar carrito
              </button>

              <button
                onClick={onBack}
                className="bg-purple-300 opacity-75 hover:opacity-100 text-purple-900 hover:text-purple-900 rounded-md sm:w-40 w-full py-2 font-semibold"
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-items-center w-screen mt-24">
          <MessageBox
            title="Aviso"
            text="No hay productos en el carrito"
            to="/"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
