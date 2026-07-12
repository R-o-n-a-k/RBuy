import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const useProducts = () => {
  return useContext(ProductContext);s
};

export default useProducts;