import React, {useEffect, useState} from 'react';
import axios from "axios";
import DetailList from "./detaillist";
import {useParams} from "react-router-dom";


const Detail = () => {
        const {id} = useParams()
        const [products, setProducts] = useState([])
    useEffect(() => {
        return () => {
            axios.get("http://localhost:3000/Product")
                .then(response => {
                    setProducts(response.data)
                })
                .catch(error => {
                    console.log(error)
                })
        };
    }, []);



    const detail = products.filter((products,index)=>
    products.id===id)

    return (
        <div className={"detail"}>
            {
                detail.map((product) =>
                    <DetailList key={product.id} products={product}/>)
            }
        </div>
    );
}
;

export default Detail;
