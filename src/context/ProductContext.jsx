import { createContext, useEffect,useState } from "react";
import { getProducts } from "../services/productServices";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchProducts = async () =>{
            try{
               const data = await getProducts();
               setProducts(data); 
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    },[])

    return (
        <ProductContext.Provider value={{ products, loading, error }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider;
