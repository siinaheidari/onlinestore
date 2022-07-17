import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import Productitems from "./productitems";
import Slideshow from "../slideshow/slideshow";
import SuggestItems from "./suggestitem";
import {ProductsContext} from "../context/productscontext";
import {BrowserRouter} from "react-router-dom";



const Home = () => {
    const [products, setProducts] = useState([])
    const [items, setItems] = useState([]);


    useEffect(() => {
        return () => {
            axios.get("http://localhost:3000/Product")
                .then(response =>{
                    setProducts(response.data)
                    console.log(response.data);
                }).catch(error =>{
                console.log(error)
            })
        };
    }, []);


    useEffect(() => {
        return () => {
            axios.get("http://localhost:3000/items")
                .then(response =>{
                    setItems(response.data)
                    console.log(response.data)
                }).catch(err => {
                console.log(err)
            })
        };
    }, []);

    return (
        <div>
            <Slideshow/>
            <Productitems products={products}/>
            <SuggestItems Items={items}/>
        </div>
    );
};

export default Home;
