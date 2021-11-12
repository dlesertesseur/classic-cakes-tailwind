import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export function useProducts() {
  const { products, setProducts } = useContext(CartContext);
  return [products, setProducts];
}
