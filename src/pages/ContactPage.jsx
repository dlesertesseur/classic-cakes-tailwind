import React from "react";
import { Link } from "react-router-dom";
//import { Redirect } from 'react-router'

const ContactPage = () => {
  return (
    <div className="w-full h-full mt-24">
      <Link to="/"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2">Ir a inicio</Link>
    </div>
  );
};

export default ContactPage;
