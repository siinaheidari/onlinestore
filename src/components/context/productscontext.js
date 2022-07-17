import {createContext, useState} from "react";

export const ProductsContext = createContext();
export const ProductsProvider =(props)=>{
    const [items, setItems] = useState([]);
    const [products, setProducts] = useState([]);
    return (
        <ProductsContext.Provider value={[items, setItems,products,setProducts]}>
            {props.children}
        </ProductsContext.Provider>
    )
}
