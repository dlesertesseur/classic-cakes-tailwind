import React, { useState, useEffect } from "react";
import InputField from "./InputField";

export default function OrderDlg(props) {
  const { showModal, setShowModal, onCreateOrder } = props;

  const textErrorFormat = "Error en el formato del campo";
  const textErrorEmail = "Los emails son diferentes";

  const [lastName, setLastName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [phone, setPhone] = useState("");
  const [disabledCreateBt, setDisabledCreateBt] = useState(false);
  const [working, setWorking] = useState(false);

  const [emailCheckFormat, setEmailCheckFormat] = useState(true);
  const [emailFormat, setEmailFormat] = useState(true);
  const [phoneFormat, setPhoneFormat] = useState(true);
  const [textError, setTextError] = useState(textErrorFormat);

  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  const validPhone = new RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/
  );

  useEffect(() => {
    let b =
      lastName.length > 0 &&
      name.length > 0 &&
      email.length > 0 &&
      phone.length > 0;

    setDisabledCreateBt(!b);
  }, [lastName, name, email, phone]);

  function validateDataFromat() {
    if (
      lastName.length > 0 &&
      name.length > 0 &&
      email.length > 0 &&
      emailCheck.length > 0 &&
      phone.length > 0
    ) {
      let vem1 = validEmail.test(email);
      let vem2 = validEmail.test(emailCheck);
      let vp = validPhone.test(phone);

      if (vem1 && vem2 && vp) {
        if (email === emailCheck) {
          setPhoneFormat(true);
          setEmailFormat(true);
          setEmailCheckFormat(true);
          return true;
        } else {
          setTextError(textErrorEmail);
          setEmailCheckFormat(false);
          setEmailFormat(false);
          return false;
        }
      } else {
        setPhoneFormat(vp);
        setEmailFormat(vem1);
        setEmailCheckFormat(vem2);
        setTextError(textErrorFormat);
        return false;
      }
    } else {
      return false;
    }
  }

  function onCancel() {
    setLastName("");
    setName("");
    setEmail("");
    setEmailCheck("");
    setPhone("");
    setPhoneFormat(true);
    setEmailFormat(true);
    setEmailCheckFormat(true);
    setShowModal(false);
    setWorking(false);
    setDisabledCreateBt(true);
  }

  function onCreate() {
    if (validateDataFromat()) {
      setWorking(true);
      setDisabledCreateBt(true);
      onCreateOrder(lastName, name, email, phone);
    }
  }

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}

              <div className="border-0 rounded-t-lg relative items-center flex flex-col w-full bg-white outline-none focus:outline-none border-b-2 border-gray-200">
                <h1 className="mx-16 my-2 font-semibold text-xl text-center uppercase">
                  Orden de compra
                </h1>
              </div>
              <div className="border-0 rounded-b-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*body*/}
                <div className="relative flex-auto">
                  <div className="bg-grey-lighter h-full flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                      <div className="bg-white px-4 py-4 text-black w-full">
                        <InputField
                          name="firstName"
                          placeholder="Nombre"
                          data={lastName}
                          setData={setLastName}
                          disabled={working}
                        />
                        <InputField
                          name="lastName"
                          placeholder="Apellido"
                          data={name}
                          setData={setName}
                          disabled={working}
                        />
                        <InputField
                          name="email"
                          placeholder="Email"
                          data={email}
                          setData={setEmail}
                          error={!emailFormat}
                          textError={textError}
                          disabled={working}
                        />
                        <InputField
                          name="email"
                          placeholder="Validar Email"
                          data={emailCheck}
                          setData={setEmailCheck}
                          error={!emailCheckFormat}
                          textError={textError}
                          disabled={working}
                        />
                        <InputField
                          name="phone"
                          placeholder="Telefono (XXX-XXXX-XXXX)"
                          data={phone}
                          setData={setPhone}
                          error={!phoneFormat}
                          textError={textErrorFormat}
                          disabled={working}
                        />

                        <button
                          onClick={onCreate}
                          disabled={disabledCreateBt}
                          className={
                            disabledCreateBt
                              ? "w-full py-1 text-center rounded bg-gray-300 text-gray-400 text-md uppercase focus:outline-none my-1"
                              : "w-full py-1 text-center rounded bg-pink-500 text-white hover:bg-pink-600 text-md uppercase focus:outline-none my-1"
                          }
                        >
                          <div >
                            {working ? (
                              <div className="flex felx-col justify-center items-center">
                                <div className="w-4 h-4 border-b-4 border-purple-500 rounded-full animate-spin mr-2"></div>
                                <span>Procesando</span>
                              </div>
                            ) : (
                              <div className="flex felx-col justify-center items-center">
                                <span>Crear orden</span>
                              </div>
                            )}
                          </div>
                        </button>
                        <button
                          disabled={working}
                          onClick={onCancel}
                          className={
                            working
                              ? "w-full py-1 text-center rounded bg-gray-300 text-gray-400 text-md uppercase focus:outline-none my-1"
                              : "w-full text-center py-1 rounded bg-purple-500 text-white hover:bg-purple-600 text-md uppercase focus:outline-none my-1"
                          }
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
